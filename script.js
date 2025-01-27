window.addEventListener('load', () => {
  const calculateBtn = document.getElementById('calculate-btn');
  const resultEl = document.getElementById('result');

  calculateBtn.addEventListener('click', () => {
    // 无论勾选什么，都直接显示
    resultEl.textContent = '请让徐任杰多吃';
    
    // 为了触发动画，每次点击都重新设置一下动画class（可选）
    resultEl.classList.remove('fade-in');
    // 触发重绘（可选）：让浏览器先移除动画，再添加，才能反复播放
    void resultEl.offsetWidth;
    resultEl.classList.add('fade-in');
  });
});

