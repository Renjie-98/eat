// 设定一个热量阈值，超过就提示“食物超标”
const CALORIE_THRESHOLD = 800;  // 你可以根据需要调整

window.addEventListener('load', () => {
  const calculateBtn = document.getElementById('calculate-btn');
  const resultEl = document.getElementById('result');

  calculateBtn.addEventListener('click', () => {
    // 获取所有勾选的食物
    const checkedFoods = document.querySelectorAll('.food-checkbox:checked');

    let totalCalories = 0;
    checkedFoods.forEach((food) => {
      // 解析该食物的热量
      const cal = parseInt(food.getAttribute('data-cal'), 10);
      totalCalories += cal;
    });

    // 计算后显示结果
    if (totalCalories > CALORIE_THRESHOLD) {
      resultEl.textContent = `食物总热量为 ${totalCalories} 卡，食物超标，请让徐任杰多吃！`;
      resultEl.style.color = 'red';
    } else {
      resultEl.textContent = `食物总热量为 ${totalCalories} 卡，尚未超标，可以放心吃。`;
      resultEl.style.color = 'green';
    }
  });
});
