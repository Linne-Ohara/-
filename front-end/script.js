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

    console.log(criteria);
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
        displayResults(data); // 显示从后端返回的数据
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}

function getCheckedValues(name) {
    let checkboxes = document.querySelectorAll(`input[name="${name}"]:checked`);
    return Array.from(checkboxes).map(cb => cb.value);
}

function displayResults(results) {
    // 更新页面以显示结果
    document.getElementById('results').innerText = JSON.stringify(results, null, 2);
}
