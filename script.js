const burst = (opts = {}) => {
  const defaults = {
    particleCount: 90,
    spread: 70,
    startVelocity: 55,
    ticks: 200,
    origin: { y: 0.6 },
    colors: ['#f472b6', '#8b5cf6', '#06b6d4', '#f59e0b', '#22c55e']
  };
  window.confetti({ ...defaults, ...opts });
};

const sequence = async () => {
  burst({ angle: 60, origin: { x: 0 } });
  burst({ angle: 120, origin: { x: 1 } });
  await new Promise(r => setTimeout(r, 500));
  for (let i = 0; i < 3; i++) {
    burst({ spread: 90, scalar: 0.9 });
    // eslint-disable-next-line no-await-in-loop
    await new Promise(r => setTimeout(r, 350));
  }
};

const wish = async () => {
  const btn = document.getElementById('wishBtn');
  btn.disabled = true;
  btn.textContent = 'Chut? fais un v?u !';
  for (let i = 0; i < 12; i++) {
    burst({ particleCount: 22, spread: 360, startVelocity: 35, scalar: 0.8, origin: { x: Math.random(), y: Math.random() * 0.4 + 0.1 } });
    // eslint-disable-next-line no-await-in-loop
    await new Promise(r => setTimeout(r, 180));
  }
  btn.textContent = 'V?u exauc? ?';
  setTimeout(() => {
    btn.textContent = 'Faire un v?u ?';
    btn.disabled = false;
  }, 3000);
};

window.addEventListener('DOMContentLoaded', () => {
  sequence();
  document.getElementById('confettiBtn').addEventListener('click', sequence);
  document.getElementById('wishBtn').addEventListener('click', wish);
});
