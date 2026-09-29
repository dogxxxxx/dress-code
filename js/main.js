// 男賓客 / 女賓客 分頁籤切換邏輯
(function () {
  const buttons = document.querySelectorAll('.switch-btn');
  const panels = document.querySelectorAll('.dress-panel');

  function activate(target) {
    buttons.forEach((btn) => {
      const isMatch = btn.dataset.target === target;
      btn.classList.toggle('active', isMatch);
      btn.setAttribute('aria-selected', String(isMatch));
    });

    panels.forEach((panel) => {
      const isMatch = panel.id === `panel-${target}`;
      panel.classList.toggle('active', isMatch);
      panel.hidden = !isMatch;
    });
  }

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => activate(btn.dataset.target));
  });
})();
