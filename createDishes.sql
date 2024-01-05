CREATE TABLE dishes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    category VARCHAR(50),
    taste VARCHAR(50),
    ingredient VARCHAR(50),
    cooking_method VARCHAR(50),
    is_healthy TINYINT,
    price DECIMAL(10, 2),
    merchant_name VARCHAR(100)
);

INSERT INTO dishes (name, category, taste, ingredient, cooking_method, is_healthy, price, merchant_name)
VALUES 
('四川辣炒鸡丁', 'hotDish', 'spicy', 'meat', 'fried', 0, 88, '川味轩'),
('清蒸桂花鱼', 'hotDish', 'sweetSour', 'seafood', 'boiled', 0, 68, '海鲜世家'),
('素炒春笋', 'hotDish', '无', 'vegetable', 'fried', 1, 32, '绿叶居'),
('水煮牛肉', 'hotDish', 'spicy', 'meat', 'boiled', 0, 98, '川味轩'),
('低脂牛奶沙拉', 'snack', '无', 'vegetable', '无', 1, 45, '健康轻食'),
('海鲜意面', 'mainCourse', '无', 'seafood', 'boiled', 0, 56, '意式餐厅'),
('素食套餐', 'combo1', '无', 'vegetarian', '无', 1, 50, '绿叶居'),
('辣味炒年糕', 'snack', 'spicy', 'vegetable', 'fried', 0, 30, '韩式小吃');

INSERT INTO dishes (name, category, taste, ingredient, cooking_method, is_healthy, price, merchant_name) VALUES 
('香辣蟹', 'hotDish', 'spicy', 'seafood', '炒', 0, 128, '海鲜大咖'),
('麻辣火锅', 'hotDish', 'spicy', 'meat', '煮', 0, 88, '重庆老火锅'),
('清蒸鲈鱼', 'hotDish', 'sweetSour', 'seafood', '蒸', 0, 68, '鲜味轩'),
('素炒西兰花', 'hotDish', '无', 'vegetable', '炒', 1, 32, '绿野仙踪'),
('番茄炒蛋', 'hotDish', 'sweetSour', '蛋', '炒', 0, 22, '家常小厨'),
('木须肉', 'hotDish', '酸甜味', 'meat', '炒', 0, 45, '东北风味'),
('宫保鸡丁', 'hotDish', '辣味', '鸡肉', '炒', 0, 50, '川菜馆'),
('清炒时蔬', 'hotDish', '无', 'vegetable', '炒', 1, 28, '绿野仙踪'),
('北京烤鸭', 'hotDish', '无', '鸭肉', '烤', 0, 188, '全聚德'),
('铁板牛肉', 'hotDish', '辣味', '牛肉', '烤', 0, 98, '铁板烧'),
('酸辣土豆丝', 'snack', '酸辣味', '土豆', '炒', 1, 18, '家常小厨'),
('凉拌黄瓜', 'snack', '酸甜味', '黄瓜', '凉拌', 1, 15, '健康小吃'),
('手撕包菜', 'snack', '无', '包菜', '炒', 1, 20, '绿野仙踪'),
('韩式炒年糕', 'snack', '辣味', '年糕', '炒', 0, 35, '韩国料理'),
('红烧肉', 'mainCourse', '甜味', '猪肉', '红烧', 0, 68, '东北风味'),
('糖醋里脊', 'mainCourse', '酸甜味', '猪肉', '炒', 0, 58, '家常小厨'),
('蒜泥白肉', 'mainCourse', '辣味', '猪肉', '凉拌', 0, 48, '四川风味'),
('牛肉炒面', 'mainCourse', '无', '牛肉', '炒', 0, 32, '快餐店'),
('蔬菜沙拉', 'mainCourse', '无', '蔬菜', '凉拌', 1, 30, '健康小吃'),
('水煮鱼', 'mainCourse', '辣味', '鱼肉', '煮', 0, 88, '川菜馆');
