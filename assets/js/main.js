/* ══════════════════════════════════════════════════════════════
   ADONAI TOURISM PROMOTION — interactions
   No dependencies. Everything degrades to a readable page.
   ══════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var $  = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };
  var clamp = function (v, a, b) { return Math.min(b, Math.max(a, v)); };

  /* ── preloader ─────────────────────────────────────────────── */
  var loader = $('[data-loader]');
  function killLoader() {
    if (!loader || loader.classList.contains('is-gone')) return;
    loader.classList.add('is-gone');
    document.body.style.overflow = '';
    setTimeout(function () { if (loader && loader.parentNode) loader.parentNode.removeChild(loader); }, 900);
  }
  if (loader) {
    document.body.style.overflow = 'hidden';
    setTimeout(killLoader, reduce ? 100 : 1050);
    window.addEventListener('load', function () { setTimeout(killLoader, 450); });
  }

  /* ── scroll progress, nav state, floating button, parallax ─── */
  var progress = $('[data-progress]');
  var nav      = $('[data-nav]');
  var pulse    = $('.pulse');
  var ticking  = false;

  var par = $$('[data-parallax]').map(function (el) {
    return { el: el, speed: parseFloat(el.getAttribute('data-parallax')) || 0.15 };
  });
  function parallax(y) {
    if (reduce) return;
    par.forEach(function (p) {
      if (y > window.innerHeight * 1.4) return;
      p.el.style.transform = 'translate3d(0,' + (y * p.speed).toFixed(2) + 'px,0)';
    });
  }
  function onScroll() {
    var y = window.scrollY || 0;
    var h = document.documentElement.scrollHeight - window.innerHeight;
    if (progress) progress.style.width = (h > 0 ? clamp((y / h) * 100, 0, 100) : 0) + '%';
    if (nav) nav.classList.toggle('is-solid', y > 40);
    if (pulse) pulse.classList.toggle('is-on', y > window.innerHeight * 0.7);
    parallax(y);
    ticking = false;
  }
  window.addEventListener('scroll', function () {
    if (!ticking) { ticking = true; window.requestAnimationFrame(onScroll); }
  }, { passive: true });

  /* ── reveal on enter ───────────────────────────────────────── */
  var revealables = $$('.reveal');
  if ('IntersectionObserver' in window && !reduce) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        var el = e.target;
        var group = el.parentElement ? $$('.reveal', el.parentElement) : [];
        var i = group.indexOf(el);
        el.style.transitionDelay = (i > 0 ? Math.min(i, 6) * 70 : 0) + 'ms';
        el.classList.add('is-in');
        io.unobserve(el);
      });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.1 });
    revealables.forEach(function (el) { io.observe(el); });
  } else {
    revealables.forEach(function (el) { el.classList.add('is-in'); });
  }

  /* ── destination rail: drag, wheel, arrows ─────────────────── */
  var rail = $('[data-rail]');
  if (rail) {
    var down = false, startX = 0, startLeft = 0, moved = 0;

    rail.addEventListener('pointerdown', function (e) {
      if (e.pointerType === 'mouse' && e.button !== 0) return;
      down = true; moved = 0; startX = e.clientX; startLeft = rail.scrollLeft;
      rail.classList.add('is-drag');
    });
    window.addEventListener('pointermove', function (e) {
      if (!down) return;
      var dx = e.clientX - startX;
      moved = Math.abs(dx);
      if (moved > 3) rail.scrollLeft = startLeft - dx;
    });
    window.addEventListener('pointerup', function () {
      down = false; rail.classList.remove('is-drag');
    });
    rail.addEventListener('click', function (e) {
      if (moved > 8) { e.preventDefault(); e.stopPropagation(); moved = 0; }
    }, true);

    rail.addEventListener('wheel', function (e) {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;
      var max = rail.scrollWidth - rail.clientWidth;
      var atStart = rail.scrollLeft <= 1 && e.deltaY < 0;
      var atEnd = rail.scrollLeft >= max - 1 && e.deltaY > 0;
      if (atStart || atEnd) return;
      e.preventDefault();
      rail.scrollLeft += e.deltaY * 1.15;
    }, { passive: false });

    var step = function () {
      var card = $('.card', rail);
      return card ? card.getBoundingClientRect().width + 22 : 360;
    };
    var prev = $('[data-rail-prev]'), next = $('[data-rail-next]');
    if (prev) prev.addEventListener('click', function () {
      rail.scrollBy({ left: -step() * 1.5, behavior: reduce ? 'auto' : 'smooth' });
    });
    if (next) next.addEventListener('click', function () {
      rail.scrollBy({ left: step() * 1.5, behavior: reduce ? 'auto' : 'smooth' });
    });
  }

  /* ── process: active step swaps the photograph ─────────────── */
  var steps = $$('.step');
  var frames = $$('[data-frame]');
  var caption = $('[data-caption]');
  var captions = ['01 — Tell us your plans', '02 — Review your options', '03 — Confirm the details'];
  if (steps.length && frames.length) {
    if ('IntersectionObserver' in window) {
      var stepIO = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (!e.isIntersecting) return;
          var i = parseInt(e.target.getAttribute('data-step'), 10) || 0;
          steps.forEach(function (s) { s.classList.remove('is-active'); });
          e.target.classList.add('is-active');
          frames.forEach(function (f) {
            f.classList.toggle('is-active', parseInt(f.getAttribute('data-frame'), 10) === i);
          });
          if (caption) caption.textContent = captions[i] || '';
        });
      }, { rootMargin: '-40% 0px -45% 0px' });
      steps.forEach(function (s) { stepIO.observe(s); });
    }
    steps[0].classList.add('is-active');
  }

  /* ── mobile menu ───────────────────────────────────────────── */
  var menu = $('[data-menu]');
  var openBtn = $('[data-menu-open]');
  var closeBtn = $('[data-menu-close]');
  function setMenu(open) {
    if (!menu) return;
    menu.classList.toggle('is-open', open);
    menu.setAttribute('aria-hidden', open ? 'false' : 'true');
    if (openBtn) openBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    document.body.style.overflow = open ? 'hidden' : '';
  }
  if (openBtn) openBtn.addEventListener('click', function () { setMenu(true); });
  if (closeBtn) closeBtn.addEventListener('click', function () { setMenu(false); });
  $$('.menu__links a').forEach(function (a) { a.addEventListener('click', function () { setMenu(false); }); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(false); });

  /* ── prefill: service cards and destination cards ──────────── */
  var serviceSel = $('#f-service');
  var destSel = $('#f-dest');

  function selectByText(sel, value) {
    if (!sel || !value) return false;
    var found = false;
    $$('option', sel).forEach(function (o) {
      var t = o.textContent.trim().replace(/\s+/g, ' ');
      var v = (o.value || '').replace(/\s+/g, ' ');
      if (t === value || v === value) { o.selected = true; found = true; }
    });
    return found;
  }

  $$('[data-service]').forEach(function (el) {
    el.addEventListener('click', function () { selectByText(serviceSel, el.getAttribute('data-service')); });
  });
  $$('[data-dest]').forEach(function (el) {
    el.addEventListener('click', function () { selectByText(destSel, el.getAttribute('data-dest')); });
  });

  /* ── enquiry form → prepared WhatsApp message ──────────────── */
  var form = $('[data-form]');
  var errBox = $('[data-error]');
  var sent = $('[data-sent]');
  var sentLink = $('[data-sent-link]');
  var WA_NUMBER = '97431040295';                    /* +974 3104 0295 */
  var EMAIL = 'info@adonai-travel.com';

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var name    = ($('#f-name') || {}).value || '';
      var phone   = ($('#f-phone') || {}).value || '';
      var email   = ($('#f-email') || {}).value || '';
      var service = ($('#f-service') || {}).value || '';
      var dest    = ($('#f-dest') || {}).value || '';
      var when    = ($('#f-when') || {}).value || '';
      var who     = ($('#f-who') || {}).value || '';
      var notes   = ($('#f-notes') || {}).value || '';

      name = name.trim(); phone = phone.trim(); email = email.trim(); notes = notes.trim();

      var bad = [];
      if (!name) bad.push('#f-name');
      if (!service) bad.push('#f-service');
      if (!dest) bad.push('#f-dest');

      $$('.field', form).forEach(function (f) { f.classList.remove('has-error'); });
      bad.forEach(function (sel) {
        var input = $(sel);
        var field = input && input.closest('.field');
        if (field) field.classList.add('has-error');
      });

      if (bad.length) {
        if (errBox) errBox.hidden = false;
        var first = $(bad[0]);
        if (first) first.focus();
        return;
      }
      if (errBox) errBox.hidden = true;

      /* readable date, if one was picked */
      var whenLabel = when;
      if (when) {
        var d = new Date(when + 'T12:00:00');
        if (!isNaN(d)) {
          whenLabel = d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
        }
      }

      var msg =
        'Hello Adonai Tourism Promotion — I would like to make a travel enquiry.' +
        '\n\nFull name: ' + name +
        (phone ? '\nWhatsApp / phone: ' + phone : '') +
        (email ? '\nEmail: ' + email : '') +
        '\nService needed: ' + service +
        '\nDestination: ' + dest +
        (whenLabel ? '\nPreferred date: ' + whenLabel : '') +
        '\nTravellers: ' + who +
        (notes ? '\nTrip details: ' + notes : '');

      var url = 'https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(msg);

      if (sentLink) sentLink.href = url;
      if (sent) sent.hidden = false;

      /* open WhatsApp in a new tab; cut the opener link by hand so the
         call still returns a handle we can test against popup blockers */
      var tab = window.open(url, '_blank');
      if (tab) {
        try { tab.opener = null; } catch (err) {}
      } else {
        window.location.href = url;
      }
    });

    /* clear an error as soon as the field is answered */
    $$('.field input, .field select', form).forEach(function (input) {
      input.addEventListener('input', function () {
        var field = input.closest('.field');
        if (field) field.classList.remove('has-error');
      });
      input.addEventListener('change', function () {
        var field = input.closest('.field');
        if (field) field.classList.remove('has-error');
      });
    });
  }

  onScroll();
})();
