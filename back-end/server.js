const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const app = express();
const port = 3000;

// 数据库配置
const dbConfig = {
    host: 'localhost',
    user: 'root', // 替换为数据库用户名
    password: '123456', // 替换为数据库密码
    database: 'classification' // 替换为数据库名
};

// 创建数据库连接
const connection = mysql.createConnection(dbConfig);

// 允许所有来源的请求
app.use(cors());

// 使Express能够解析JSON格式的请求体
app.use(express.json());


//测试
app.get('/', (req, res) => {
    res.send('Hello, Node!');
    // 写个查询语句来测试
    connection.query('SELECT * FROM dishes', (error, results, fields) => {
        if (error) {
            console.error('数据库连接失败: ' + error.stack);
            return;
        }
        console.log('数据库连接成功',results);
    });
});

// 处理POST请求
app.post('/search', (req, res) => {
    console.log('收到的搜索条件:', req.body);

    // 构建查询条件
    const criteria = req.body;
    let query = 'SELECT * FROM dishes WHERE ';
    const conditions = [];
    const params = [];

    if (criteria.categories && criteria.categories.length) {
        conditions.push(`category IN (?)`);
        params.push(criteria.categories);
    }
    if (criteria.tastes && criteria.tastes.length) {
        conditions.push(`taste IN (?)`);
        params.push(criteria.tastes);
    }
    if (criteria.ingredients && criteria.ingredients.length) {
        conditions.push(`ingredient IN (?)`);
        params.push(criteria.ingredients);
    }
    if (criteria.cookingMethods && criteria.cookingMethods.length) {
        conditions.push(`cooking_method IN (?)`);
        params.push(criteria.cookingMethods);
    }
    if (criteria.healthyOptions && criteria.healthyOptions.length) {
        conditions.push(`is_healthy IN (?)`);
        params.push(criteria.healthyOptions.map(option => option === '是' ? 1 : 0));
    }
    if (criteria.priceRange) {
        const [minPrice, maxPrice] = criteria.priceRange.split('-').map(Number);
        conditions.push(`price BETWEEN ? AND ?`);
        params.push(minPrice, maxPrice);
    }
    if (criteria.merchantInfo) {
        conditions.push(`merchant_name = ?`);
        params.push(criteria.merchantInfo);
    }

    if (conditions.length) {
        query += conditions.join(' AND ');
    } else {
        query = 'SELECT * FROM dishes';
    }

    // 执行查询
    connection.query(query, params, (error, results, fields) => {
        if (error) {
            return res.status(500).json({ error: error.message });
        }
        res.json({ results });
    });
});

app.listen(port, () => {
    console.log(`服务器运行在 http://localhost:${port}`);
});



