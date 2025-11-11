document.addEventListener('DOMContentLoaded', ()=>{
    const POI_DATA = window.POI_DATA || {};

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
          
          const key = a.dataset.poi;
          const poi = POI_DATA[key];
          console.log('Clicked POI', key, poi)

          right.openPanel();  

          const h2 = right.panel.querySelector('#infoTitle');
          const body = right.panel.querySelector('.panelBody')
          if (!body) {
          console.warn("No .panelBody element found inside .sidebarRight");
          return;
          }

          if (poi) {
            if (h2) h2.textContent = poi.title;
            body.innerHTML = poi.html;
          } else {
            if (h2) h2.textContent = "Location Info";
            body.innerHTML = '<p> No details available yet.</p>';
          }
        });
      });
    }
  });
  
