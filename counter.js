/* Contador de tiempo juntos (aniversario 7 de febrero) */
const sinceMs = new Date("2026-02-07T00:00:00").getTime();
const tEls = {
  d: document.getElementById("t-days"),
  h: document.getElementById("t-hours"),
  m: document.getElementById("t-mins"),
  s: document.getElementById("t-secs")
};

function tickCounter() {
  let diff = Date.now() - sinceMs;
  if (diff < 0) diff = 0;
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor(diff % 86400000 / 3600000);
  const mins = Math.floor(diff % 3600000 / 60000);
  const secs = Math.floor(diff % 60000 / 1000);
  const set = (el, v) => { if (el && el.textContent !== String(v)) el.textContent = String(v); };
  set(tEls.d, days); set(tEls.h, hours); set(tEls.m, mins); set(tEls.s, secs);
}

tickCounter();
setInterval(tickCounter, 1000);