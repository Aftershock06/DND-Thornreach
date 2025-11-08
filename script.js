document.addEventListener('DOMContentLoaded', ()=>{
    function setupPanel(panelSelector, openBtnSelector, closeBtnSelector){
      const panel   = document.querySelector(panelSelector);
      const openBtn = document.querySelector(openBtnSelector);
      const closeBtn= document.querySelector(closeBtnSelector);
  
      if (!panel || !closeBtn){
        if (panelSelector === '.sidebarRight'){
          console.error(`Selector not found for ${panelSelector}. Check class/id names.`);
        }
        return;
      }
  
      function openPanel() {
        panel.classList.remove('is-closed');
        panel.setAttribute('aria-hidden', 'false');
        if (openBtn) openBtn.setAttribute('aria-expanded', 'true');
      }
  
      function closePanel() {
        panel.classList.add('is-closed');
        panel.setAttribute('aria-hidden', 'true');
        if (openBtn) { openBtn.setAttribute('aria-expanded', 'false'); openBtn.focus(); }
      }
  
      if (openBtn) openBtn.addEventListener('click', openPanel);
      closeBtn.addEventListener('click', closePanel);
  
      // --- expose a tiny API so other clicks can open it
      return { panel, openPanel };
    }
  
    // Right panel setup
    const right = setupPanel('.sidebarRight', '#openPanelRight', '.panelCloseRight');
  
    if (right) {
      document.querySelectorAll('.area-button').forEach(a => {
        a.addEventListener('click', (e) => {
          e.preventDefault();               // don’t jump to the hash
          right.openPanel();                // slide it in
          // (optional) set the title from id or href
          const id = a.id?.replace('btn-','') || a.getAttribute('href')?.slice(1);
          const h2 = right.panel.querySelector('#infoTitle');
          if (h2 && id) h2.textContent = id.replace(/([A-Z])/g, ' $1').trim();
          // (optional) focus the panel for a11y
          right.panel.focus?.();
        });
      });
    }
  })
  