document.addEventListener('DOMContentLoaded', () => {
  // Generic function to handle sidebar panel behavior
  function setupPanel(panelSelector, openBtnSelector, closeBtnSelector) {
    const panel = document.querySelector(panelSelector);
    const openBtn = document.querySelector(openBtnSelector);
    const closeBtn = document.querySelector(closeBtnSelector);

    console.log('[boot]', { panel, openBtn, closeBtn });

    if (!panel || !openBtn || !closeBtn) {
      console.error(`Selector not found for ${panelSelector}. Check class/id names.`);
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

  // Setup right panel
  setupPanel('.sidebarRight', '#openPanelRight', '.panelCloseRight');

  // Setup left panel (assuming similar selectors with 'Left' suffix)
  setupPanel('.sidebarLeft', '#openPanelLeft', '.panelCloseLeft');
});

// Add alongside your existing right-panel setup
document.addEventListener('DOMContentLoaded', () => {
  const leftPanel = document.querySelector('.sidebarLeft');
  const leftBtn   = document.querySelector('#openPanelLeft');

  if (leftPanel && leftBtn) {
    const toggleLeft = () => {
      const willOpen = leftPanel.classList.contains('is-closed');
      leftPanel.classList.toggle('is-closed');
      leftPanel.setAttribute('aria-hidden', String(!willOpen));
      leftBtn.setAttribute('aria-expanded', String(willOpen));
    };

    leftBtn.addEventListener('click', toggleLeft);
  }
});