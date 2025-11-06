document.addEventListener('DOMContentLoaded', () => {
  // ONLY do right panel setup with .panelCloseRight
  function setupPanel(panelSelector, openBtnSelector, closeBtnSelector) {
    const panel = document.querySelector(panelSelector);
    const openBtn = document.querySelector(openBtnSelector);
    const closeBtn = document.querySelector(closeBtnSelector);

    if (!panel || !openBtn || !closeBtn) {
      // Only log error for right, so left still works via drawerTab!
      if (panelSelector === '.sidebarRight') {
        console.error(`Selector not found for ${panelSelector}. Check class/id names.`);
      }
      return;
    }

    function openPanel() {
      panel.classList.remove('is-closed');
      panel.setAttribute('aria-hidden', 'false');
      openBtn.setAttribute('aria-expanded', 'true');
    }

    function closePanel() {
      panel.classList.add('is-closed');
      panel.setAttribute('aria-hidden', 'true');
      openBtn.setAttribute('aria-expanded', 'false');
      openBtn.focus();
    }

    openBtn.addEventListener('click', openPanel);
    closeBtn.addEventListener('click', closePanel);
  }

  // ONLY call setupPanel for the right panel
  setupPanel('.sidebarRight', '#openPanelRight', '.panelCloseRight');

  // For the left panel, use the drawerTab for toggle
  const leftPanel = document.querySelector('.sidebarLeft');
  const leftBtn   = document.querySelector('#openPanelLeft');
  if (leftPanel && leftBtn) {
    leftBtn.addEventListener('click', () => {
      const willOpen = leftPanel.classList.contains('is-closed');
      leftPanel.classList.toggle('is-closed');
      leftPanel.setAttribute('aria-hidden', String(!willOpen));
      leftBtn.setAttribute('aria-expanded', String(willOpen));
    });
  }
});
