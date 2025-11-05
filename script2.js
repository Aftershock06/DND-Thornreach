document.addEventListener('DOMContentLoaded', () => {
    const panel = document.querySelector('.sidebarRight');
    const openBtn = document.querySelector('#openPanel');
    const closeBtn = document.querySelector('.panelClose');
  
    console.log('[boot]', { panel, openBtn, closeBtn });
  
    if (!panel || !openBtn || !closeBtn) {
      alert('Selector not found. Check class/id names. See console for details.');
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
  
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !panel.classList.contains('is-closed')) {
        closePanel();
      }
    });
  });