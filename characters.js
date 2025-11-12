document.addEventListener('DOMContentLoaded', () => {
    const roster = Object.values(window.playerData || {});
    const container = document.getElementById('cardContainer');
  
    roster.forEach(item => {
      const card = document.createElement('div');
      card.classList.add('playerCard'); // matches characters.css

      card.innerHTML = `<div class="playerIMG"><img src="${item.image}" onerror="this.onerror=null; this.src='imgs/playerDefault.jpg'"></div>
        <div class="playerName">${item.name}</div>
        <p class="playerCity"> Home : ${item.home || ''}</p>
        <p class="playerJob"> Job: ${item.job || ''}</p>
        <p class="playerFamily"> Family: ${item.family || ''}</p>
        <div class="playerBio">${item.bio || ''}</div>
      `;
  
      container.appendChild(card);
    });
  });
  
