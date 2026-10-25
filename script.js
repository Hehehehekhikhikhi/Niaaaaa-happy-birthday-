// floating background emojis
const floaties = document.getElementById('floaties');
const floatSet = ['🩷', '🤍', '🌸', '🌷', '💗', '🪷', '✨'];
for (let i = 0; i < 16; i++) {
  const s = document.createElement('span');
  s.textContent = floatSet[Math.floor(Math.random() * floatSet.length)];
  s.style.left = Math.random() * 100 + 'vw';
  s.style.fontSize = (1 + Math.random() * 1.2) + 'rem';
  const d = 9 + Math.random() * 10;
  s.style.animationDuration = d + 's';
  s.style.animationDelay = (Math.random() * d) + 's';
  floaties.appendChild(s);
}

// falling petals / hearts burst
const petals = document.getElementById('petals');
function burst(set, count) {
  for (let i = 0; i < count; i++) {
    const s = document.createElement('span');
    s.textContent = set[Math.floor(Math.random() * set.length)];
    s.style.left = Math.random() * 100 + 'vw';
    s.style.fontSize = (1.1 + Math.random() * 1.2) + 'rem';
    const d = 3 + Math.random() * 3;
    s.style.animationDuration = d + 's';
    s.style.animationDelay = (Math.random() * 1.2) + 's';
    petals.appendChild(s);
    setTimeout(() => s.remove(), (d + 1.5) * 1000);
  }
}

// candle
const wrap = document.getElementById('cakeWrap');
const blowBtn = document.getElementById('blowBtn');
const wishMsg = document.getElementById('wishMsg');
let blown = false;

blowBtn.addEventListener('click', () => {
  blown = !blown;
  wrap.classList.toggle('out', blown);
  if (blown) {
    wishMsg.textContent = 'wish made! 🌸 may every single one of them come true 🤍🩷';
    blowBtn.textContent = 'Light it again 🕯️';
    burst(['🌸', '🌷', '🪷', '🤍', '🩷', '💗'], 26);
  } else {
    wishMsg.textContent = 'light is on — close your eyes, think of your wish, then blow it out 🤍';
    blowBtn.textContent = 'Blow the candle 🌬️';
  }
});

// gift
const gift = document.getElementById('gift');
const note = document.getElementById('giftNote');
const giftHint = document.getElementById('giftHint');

gift.addEventListener('click', () => {
  const open = note.classList.toggle('open');
  gift.setAttribute('aria-expanded', String(open));
  giftHint.textContent = open ? 'a little push, just for you 🩷' : 'tap the gift to open it 🤍';
  if (open) burst(['🩷', '🤍', '💗', '💞', '🌷'], 18);
});
