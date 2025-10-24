// Mobile anchors for section 2 dynamic positioning
const setAnchors = () => {
  if (window.innerWidth > 768) return;
  
  const root = document.querySelector('#section-2');
  const cr = document.querySelector('#creative-review');
  const afH2 = document.querySelector('#any-format .heading');
  
  if (root && cr) {
    const r = cr.getBoundingClientRect();
    const bottomPos = r.bottom + window.scrollY;
    root.style.setProperty('--cr-bottom', `${bottomPos}px`);
    console.log('Set --cr-bottom to:', bottomPos);
  }
  
  if (root && afH2) {
    const r = afH2.getBoundingClientRect();
    const topPos = r.top + window.scrollY;
    root.style.setProperty('--af-h2-top', `${topPos}px`);
    console.log('Set --af-h2-top to:', topPos);
  }
};

// Initialize on DOM load and resize
window.addEventListener('DOMContentLoaded', setAnchors);
window.addEventListener('resize', setAnchors);

export default setAnchors;
