document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('button').addEventListener('click', search);
});

function search() {
    // 收集数据
    let criteria = {
        categories: getCheckedValues('category'),
        tastes: getCheckedValues('taste'),
        ingredients: getCheckedValues('ingredient'),
        cookingMethods: getCheckedValues('cookingMethod'),
        healthyOptions: getCheckedValues('healthyOption'),
        mealCombos: getCheckedValues('mealCombo'),
        priceRange: document.getElementById('priceRange').value,
        merchantInfo: document.getElementById('merchantInfo').value.trim()
    };

    // 发送数据到后端
    fetch('http://localhost:3000/search', { // 替换为你的后端端点
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(criteria)
    })
    .then(response => response.json())
    .then(data => {
        displayResults(data.results); // 显示从后端返回的数据
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}

function getCheckedValues(name) {
    let checkboxes = document.querySelectorAll(`input[name="${name}"]:checked`);
    return Array.from(checkboxes).map(cb => cb.value);
}

function displayResults(data) {
    const resultsTable = document.getElementById('resultsTable');
    resultsTable.innerHTML = ''; // 清空旧的搜索结果

    // 字段名到中文的映射
    const fieldToChinese = {
        'name': '名称',
        'category': '类目',
        'taste': '口味',
        'ingredient': '食材',
        'cooking_method': '做法',
        'is_healthy': '是否健康',
        'price': '价格',
        'merchant_name': '商家'
    };

    // 检查是否有结果
    if (!data || !data.length) {
        resultsTable.innerHTML = '<tr><td colspan="100%">未找到结果</td></tr>';
        return;
    }

    // 创建表头
    let thead = '<tr>';
    for (let key in data[0]) {
        if (key !== 'id') {
            thead += `<th>${fieldToChinese[key] || key}</th>`;
        }
    }
    thead += '</tr>';
    resultsTable.innerHTML = thead;

    // 填充数据
    data.forEach(row => {
        let tr = '<tr>';
        for (let key in row) {
            if (key !== 'id') {
                let value = row[key];
                // 转换 'is_healthy' 字段
                if (key === 'is_healthy') {
                    value = value === 1 ? '是' : '否';
                }
                tr += `<td>${value}</td>`;
            }
        }
        tr += '</tr>';
        resultsTable.innerHTML += tr;
    });
}