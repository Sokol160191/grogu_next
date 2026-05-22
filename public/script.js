/* ============================================================
   GROGU WORLD — script.js
   ============================================================ */


/* ── Desktop scale: max 1440px, proportionally shrinks below ── */
(function () {
  const wrap = document.getElementById('scaleWrap');
  if (!wrap) return;

  const DESIGN_W  = 1440;
  const MOBILE_BP = 768;

  function applyScale() {
    const vw = window.innerWidth;

    if (vw <= MOBILE_BP) {
      wrap.style.transform = '';
      wrap.style.width = '';
      wrap.style.setProperty('--inv-scale', 1);
      document.body.style.height = '';
      return;
    }

    if (vw >= DESIGN_W) {
      wrap.style.transform = '';
      wrap.style.width = DESIGN_W + 'px';
      wrap.style.marginLeft = 'auto';
      wrap.style.marginRight = 'auto';
      wrap.style.setProperty('--inv-scale', 1);
      document.body.style.height = '';
      return;
    }

    const scale = vw / DESIGN_W;
    wrap.style.width = DESIGN_W + 'px';
    wrap.style.transform = `scale(${scale})`;
    wrap.style.marginLeft = '0';
    wrap.style.marginRight = '0';
    wrap.style.setProperty('--inv-scale', 1 / scale);

    const realH = wrap.getBoundingClientRect().height;
    document.body.style.height = realH + 'px';
  }

  let raf;
  function schedule() {
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(applyScale);
  }

  window.addEventListener('resize', schedule);
  window.addEventListener('load', applyScale);
  applyScale();

  if (window.ResizeObserver) {
    const ro = new ResizeObserver(schedule);
    ro.observe(wrap);
  }
})();


/* ── Holographic reveal ── */
(function () {
  const HEAD_SEL = [
    '.revolution__title-main', '.revolution__title-sub',
    '.mission__title', '.partners__title',
    '.tokenomics__title', '.staking__title', '.staking__sub',
    '.groai__title', '.roadmap__title', '.roadmap__sub',
    '.community__title', '.done__title',
    '.hero__tagline',
  ].join(',');

  const BLOCK_SEL = [
    '.staking__card', '.staking__welcome',
    '.roadmap__card',
    '.done__stat',
    '.mission__block',
    '.hero__thumb',
    '.tokenomics__chart-area', '.tokenomics__params',
    '.groai__text', '.groai__img',
    '.community__card',
    '.presale',
  ].join(',');

  document.querySelectorAll(HEAD_SEL).forEach(el => el.classList.add('holo-head'));

  const blockEls = [...document.querySelectorAll(BLOCK_SEL)];
  const seen = new Map();
  blockEls.forEach(el => {
    const p = el.parentElement;
    const idx = (seen.get(p) || 0);
    seen.set(p, idx + 1);
    el.style.setProperty('--hd', `${idx * 90}ms`);
    el.classList.add('holo-block');
  });

  const targets = document.querySelectorAll('.holo-head, .holo-block');

  const isMobile = () => window.innerWidth <= 768;

  function makeObserver() {
    return new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, {
      threshold: 0.05,
      rootMargin: isMobile() ? '0px 0px 0px 0px' : '0px 0px -5% 0px'
    });
  }

  let io = makeObserver();
  targets.forEach(el => io.observe(el));

  function initialCheck() {
    const vh = window.innerHeight || document.documentElement.clientHeight;
    targets.forEach(el => {
      if (el.classList.contains('in')) return;
      const r = el.getBoundingClientRect();
      if (r.height === 0) return;
      if (r.top < vh && r.bottom > 0) {
        el.classList.add('in');
        io.unobserve(el);
      }
    });
  }

  requestAnimationFrame(() => requestAnimationFrame(initialCheck));
  window.addEventListener('load', initialCheck);

  if (window.innerWidth <= 768) {
    let scrollRaf;
    window.addEventListener('scroll', function onScroll() {
      cancelAnimationFrame(scrollRaf);
      scrollRaf = requestAnimationFrame(initialCheck);
    }, { passive: true });
  }
})();


/* ── Language switcher ── */
(function () {
  const wrap     = document.getElementById('langWrap');
  const toggle   = document.getElementById('langToggle');
  const dropdown = document.getElementById('langDropdown');
  const flag     = document.getElementById('langFlag');
  const label    = document.getElementById('langLabel');
  if (!wrap) return;

  function open()  { wrap.classList.add('nav__lang-wrap--open'); toggle.setAttribute('aria-expanded', 'true'); }
  function close() { wrap.classList.remove('nav__lang-wrap--open'); toggle.setAttribute('aria-expanded', 'false'); }
  function toggle_() { wrap.classList.contains('nav__lang-wrap--open') ? close() : open(); }

  toggle.addEventListener('click', e => { e.stopPropagation(); toggle_(); });

  dropdown.querySelectorAll('.nav__lang-opt').forEach(opt => {
    opt.addEventListener('click', () => {
      dropdown.querySelectorAll('.nav__lang-opt').forEach(o => o.classList.remove('nav__lang-opt--active'));
      opt.classList.add('nav__lang-opt--active');
      flag.textContent  = opt.dataset.emoji;
      label.textContent = opt.dataset.lang;
      if (window.applyLang) window.applyLang(opt.dataset.lang);
      close();
    });
  });

  document.addEventListener('click', e => { if (!wrap.contains(e.target)) close(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
})();


/* ── Presale: курс + двусторонний пересчёт USDT ↔ $GROAI ── */
(function () {
  const PRICE = 0.00008;

  const inputs = document.querySelectorAll('.presale__input-box input');
  if (inputs.length < 2) return;

  const usdtInput  = inputs[0];
  const groaiInput = inputs[1];

  function fmt(num) {
    if (!isFinite(num) || num <= 0) return '';
    let s = num.toFixed(8);
    s = s.replace(/\.?0+$/, '');
    return s;
  }

  let isUpdating = false;

  function fromUSDT() {
    if (isUpdating) return;
    isUpdating = true;
    const v = parseFloat(usdtInput.value);
    groaiInput.value = (!isFinite(v) || v <= 0) ? '' : fmt(v / PRICE);
    isUpdating = false;
  }

  function fromGROAI() {
    if (isUpdating) return;
    isUpdating = true;
    const v = parseFloat(groaiInput.value);
    usdtInput.value = (!isFinite(v) || v <= 0) ? '' : fmt(v * PRICE);
    isUpdating = false;
  }

  usdtInput.addEventListener('input', fromUSDT);
  groaiInput.addEventListener('input', fromGROAI);
})();


/* ── Presale inputs: positive numbers only ── */
(function () {
  document.querySelectorAll('.presale__input-box input').forEach(input => {
    input.addEventListener('keydown', e => {
      const allowed = ['Backspace','Delete','ArrowLeft','ArrowRight','Tab','Enter','Home','End'];
      if (allowed.includes(e.key)) return;
      if (e.key === '.' && !input.value.includes('.')) return;
      if (!/^\d$/.test(e.key)) e.preventDefault();
    });
    input.addEventListener('paste', e => {
      e.preventDefault();
      const text = (e.clipboardData || window.clipboardData).getData('text');
      const num = parseFloat(text.replace(/[^0-9.]/g, ''));
      if (!isNaN(num) && num >= 0) {
        input.value = num;
        input.dispatchEvent(new Event('input', { bubbles: true }));
      }
    });
  });
})();


/* ── Presale tab toggle ── */
(function () {
  const tabs  = document.querySelectorAll('.presale__tab');
  const icon  = document.getElementById('presaleInputIcon');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('presale__tab--active'));
      tab.classList.add('presale__tab--active');
      const cur = tab.dataset.cur;
      const label = document.querySelector('.presale__input-label');
      if (label) label.textContent = `Pay with ${cur}`;
      if (icon && tab.dataset.icon) { icon.src = tab.dataset.icon; icon.alt = cur; }
    });
  });
})();


/* ── Navbar: darken on scroll ── */
(function () {
  const nav = document.querySelector('.nav');
  if (!nav) return;
  window.addEventListener('scroll', () => {
    nav.style.background = window.scrollY > 60
      ? 'rgba(17,17,17,0.97)'
      : 'rgba(28,28,28,0.92)';
  }, { passive: true });
})();


/* ── Mobile nav burger ── */
(function () {
  const burger = document.getElementById('navBurger');
  const links  = document.querySelector('.nav__links');
  const cta    = document.querySelector('.nav__mobile-cta');
  if (!burger || !links) return;

  function openMenu()  {
    links.classList.add('is-open');
    burger.classList.add('nav__burger--open');
    burger.setAttribute('aria-expanded', 'true');
    if (cta) cta.style.display = 'block';
  }
  function closeMenu() {
    links.classList.remove('is-open');
    burger.classList.remove('nav__burger--open');
    burger.setAttribute('aria-expanded', 'false');
    if (cta) cta.style.display = 'none';
  }

  burger.addEventListener('click', e => { e.stopPropagation(); links.classList.contains('is-open') ? closeMenu() : openMenu(); });
  links.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
  document.addEventListener('click', e => { if (!burger.contains(e.target) && !links.contains(e.target) && !(cta && cta.contains(e.target))) closeMenu(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
})();



/* ── Mobile nav: GROGU WORLD title appears when hero title scrolls off screen ── */
(function () {
  const nav   = document.querySelector('.nav');
  const title = document.querySelector('.hero__title');
  if (!nav || !title) return;

  const io = new IntersectionObserver(entries => {
    nav.classList.toggle('nav--title-visible', !entries[0].isIntersecting);
  }, {
    rootMargin: '-56px 0px 0px 0px',
    threshold: 0
  });

  io.observe(title);
})();


/* ── YouTube modal ── */
(function () {
  const modal  = document.getElementById('ytModal');
  const frame  = document.getElementById('ytFrame');
  const src    = 'https://www.youtube.com/embed/BQ4yd2W50No?autoplay=1';

  function open()  { frame.src = src; modal.classList.add('is-open'); }
  function close() { frame.src = '';  modal.classList.remove('is-open'); }

  ['openVideo', 'openVideo2', 'openVideo3'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('click', open);
  });

  document.getElementById('closeVideo')?.addEventListener('click', close);
  document.getElementById('closeVideo2')?.addEventListener('click', close);

  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
})();


/* ── Mobile sliders: staking & roadmap arrow navigation ── */
(function () {
  function initSlider(gridId, prevId, nextId) {
    const grid = document.getElementById(gridId);
    const prev = document.getElementById(prevId);
    const next = document.getElementById(nextId);
    if (!grid || !prev || !next) return;

    function getCardWidth() {
      const card = grid.querySelector('.staking__card, .staking__welcome, .roadmap__card');
      if (!card) return 0;
      const style = getComputedStyle(grid);
      const gap = parseFloat(style.gap) || parseFloat(style.columnGap) || 0;
      return card.getBoundingClientRect().width + gap;
    }

    prev.addEventListener('click', () => {
      grid.scrollBy({ left: -getCardWidth(), behavior: 'smooth' });
    });
    next.addEventListener('click', () => {
      grid.scrollBy({ left: getCardWidth(), behavior: 'smooth' });
    });
  }

  function maybeInit() {
    if (window.innerWidth <= 768) {
      initSlider('stakingGrid', 'stakingPrev', 'stakingNext');
      initSlider('roadmapGrid', 'roadmapPrev', 'roadmapNext');
    }
  }

  window.addEventListener('load', maybeInit);
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(maybeInit, 200);
  });
})();
