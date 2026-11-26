/* Shared components + interactions. You normally don't need to edit this file —
   update content in assets/js/content.js instead. */
{
const S = window.SITE || {}, D = document, root = D.documentElement;
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const $ = (s, el = D) => el.querySelector(s), $$ = (s, el = D) => [...el.querySelectorAll(s)];
root.classList.add('js');

/* ---------- icons ---------- */
const P = {
  feather:'<path d="M20 4c-7 0-12 5-13 12l-3 4"/><path d="M7 16h6c4 0 7-5 7-12"/><path d="M9 12h6"/>',
  mask:'<path d="M3 6c3 2 6 2 9 0 3 2 6 2 9 0v5c0 5-4 9-9 9s-9-4-9-9z"/><path d="M8 11h2M14 11h2M9 16c2 1 4 1 6 0"/>',
  book:'<path d="M4 4h10a4 4 0 0 1 4 4v12H8a4 4 0 0 1-4-4z"/><path d="M4 16a4 4 0 0 1 4-4h10"/>',
  books:'<rect x="3" y="4" width="5" height="16" rx="1"/><rect x="9" y="6" width="5" height="14" rx="1"/><path d="m15.5 6.5 4-1 2.5 14-4 1z"/>',
  spark:'<path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6"/>',
  pen:'<path d="m14 4 6 6L9 21H3v-6z"/><path d="m12 6 6 6"/>',
  globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/>',
  compass:'<circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2 5-5 2 2-5z"/>',
  layers:'<path d="m12 3 9 5-9 5-9-5z"/><path d="m3 13 9 5 9-5"/>',
  mark:'<path d="M4 20c2-6 5-9 8-9s3 3 0 4-4-6 1-10"/><path d="M15 20h5"/>',
  search:'<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
  eye:'<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
  check:'<path d="M4 6h10M4 12h7M4 18h6"/><path d="m14 16 3 3 5-6"/>',
  device:'<rect x="5" y="2" width="14" height="20" rx="2"/><path d="M9 6h6M9 10h6M9 14h4"/>',
  print:'<path d="M6 9V3h12v6"/><rect x="3" y="9" width="18" height="8" rx="2"/><path d="M6 14h12v7H6z"/>',
  kdp:'<path d="M3 6h18l-2 13H5z"/><path d="M8 10c1 2 7 2 8 0"/>',
  file:'<path d="M6 2h8l5 5v15H6z"/><path d="M14 2v5h5M9 13h7M9 17h7"/>',
  pdf:'<path d="M6 2h8l5 5v15H6z"/><path d="M14 2v5h5"/><path d="M9 17v-5h2a1.5 1.5 0 0 1 0 3H9"/>',
  tag:'<path d="M3 3h8l10 10-8 8L3 11z"/><circle cx="7.5" cy="7.5" r="1.5"/>',
  user:'<circle cx="12" cy="8" r="4"/><path d="M4 21c1-4 4-6 8-6s7 2 8 6"/>',
  map:'<path d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3z"/><path d="M9 3v15M15 6v15"/>',
  chat:'<path d="M4 5h16v11H9l-5 4z"/><path d="M8 10h8"/>',
  mail:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
  briefcase:'<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V4h6v3M3 13h18"/>',
  arrow:'<path d="M5 12h14M13 6l6 6-6 6"/>',
  arrowUp:'<path d="M7 17 17 7M8 7h9v9"/>',
  close:'<path d="M6 6l12 12M18 6 6 18"/>',
  shield:'<path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6z"/><path d="m9 12 2 2 4-4"/>',
  clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  heart:'<path d="M12 20s-8-5-8-11a4.5 4.5 0 0 1 8-3 4.5 4.5 0 0 1 8 3c0 6-8 11-8 11z"/>',
  target:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
  lock:'<rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>',
  star:'<path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z" fill="currentColor"/>',
  x:'<path d="M6 6l12 12M18 6 6 18"/>',
  tick:'<path d="m4 12 5 5L20 6"/>'
};
const icon = (n, cls = '') => `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${P[n] || P.spark}</svg>`;
window.icon = icon;
$$('[data-icon]').forEach(el => el.insertAdjacentHTML('afterbegin', icon(el.dataset.icon)));

/* ---------- header + footer components ---------- */
const PAGES = [
  ['index.html','Home','home'],['about.html','About','about'],['services.html','Services','services'],
  ['portfolio.html','My Work','portfolio'],['process.html','Process','process'],['why-work-with-me.html','Why Me','why'],
  ['testimonials.html','Testimonials','testimonials'],['faq.html','FAQ','faq']
];
const current = D.body.dataset.page;
const initials = S.monogram || (S.brand || 'W').trim().charAt(0);
const brandHTML = `<span class="brand-mark" aria-hidden="true">${esc(initials)}</span><span class="brand-name">${esc(S.brand)}<small>${esc(S.role)}</small></span>`;
const navItems = PAGES.map(([h,l,k]) => `<li><a href="${h}"${k===current?' aria-current="page"':''}>${l}</a></li>`).join('');

const header = $('#site-header');
if (header) {
  header.className = 'site-header';
  header.innerHTML = `<div class="wrap nav">
    <a class="brand" href="index.html" aria-label="${esc(S.brand)} home">${brandHTML}</a>
    <nav aria-label="Main"><ul class="nav-links">${navItems}</ul></nav>
    <a class="btn btn--coral nav-cta" href="contact.html"${current==='contact'?' aria-current="page"':''}>Hire me</a>
    <button class="menu-btn" aria-expanded="false" aria-controls="mobile-menu"><span></span><span class="sr">Menu</span></button>
  </div>
  <div class="mobile-menu" id="mobile-menu" hidden>
    <ul>${navItems}<li><a href="contact.html"${current==='contact'?' aria-current="page"':''}>Contact</a></li></ul>
    <a class="btn btn--coral" href="contact.html">Let's work together ${icon('arrow')}</a>
  </div>`;
  const btn = $('.menu-btn', header), menu = $('#mobile-menu');
  const setMenu = open => {
    btn.setAttribute('aria-expanded', open); D.body.classList.toggle('menu-open', open);
    if (open) { menu.hidden = false; requestAnimationFrame(() => menu.classList.add('open')); $('a', menu).focus(); }
    else { menu.classList.remove('open'); setTimeout(() => { if (!menu.classList.contains('open')) menu.hidden = true; }, 300); }
  };
  btn.addEventListener('click', () => setMenu(btn.getAttribute('aria-expanded') !== 'true'));
  D.addEventListener('keydown', e => { if (e.key === 'Escape' && btn.getAttribute('aria-expanded') === 'true') { setMenu(false); btn.focus(); } });
  matchMedia('(min-width:1121px)').addEventListener('change', e => e.matches && setMenu(false));
  const onScroll = () => header.classList.toggle('scrolled', scrollY > 8);
  addEventListener('scroll', onScroll, { passive: true }); onScroll();
}

const footer = $('#site-footer');
if (footer) {
  const cats = window.SERVICE_CATEGORIES || {};
  const svcLinks = Object.keys(cats).map(k => `<li><a href="services.html#${k}">${esc(cats[k].title)}</a></li>`).join('');
  const pfLinks = (window.PORTFOLIO_FILTERS || []).slice(0, 6).map(f => `<li><a href="portfolio.html#${slug(f)}">${esc(f)}</a></li>`).join('');
  const socials = (S.socials || []).map(s => `<a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)}</a>`).join('');
  footer.className = 'site-footer';
  footer.innerHTML = `<div class="wrap">
    <p class="foot-big"><a href="contact.html">Let's make your book.</a></p>
    <div class="foot-top">
      <div class="foot-brand"><a class="brand" href="index.html">${brandHTML}</a><p>${esc(S.shortBio)}</p>${socials ? `<div class="socials">${socials}</div>` : ''}</div>
      <div><h4>Explore</h4><ul>${PAGES.map(([h,l]) => `<li><a href="${h}">${l}</a></li>`).join('')}<li><a href="contact.html">Contact</a></li></ul></div>
      <div><h4>Services</h4><ul>${svcLinks}<li><a href="services.html">All services</a></li></ul></div>
      <div><h4>Portfolio</h4><ul>${pfLinks}<li><a href="portfolio.html">View all work</a></li></ul>
        <h4 style="margin-top:28px">Contact</h4><ul><li><a href="mailto:${esc(S.email)}">${esc(S.email)}</a></li></ul></div>
    </div>
    <div class="foot-bottom"><span>© ${new Date().getFullYear()} ${esc(S.brand)}. All rights reserved.</span><span>Manuscripts shared here are treated as strictly confidential.</span></div>
  </div>`;
}
function slug(s){ return String(s).toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,''); }

/* ---------- loader + page transitions ---------- */
const fade = D.createElement('div'); fade.className = 'page-fade'; D.body.appendChild(fade);
let seen = false; try { seen = sessionStorage.getItem('seenLoader') === '1'; sessionStorage.setItem('seenLoader','1'); } catch (e) {}
const ready = () => requestAnimationFrame(() => root.classList.add('ready'));
if (!seen && !reduce && current === 'home') {
  const l = D.createElement('div'); l.className = 'loader'; l.innerHTML = `<span>${esc(S.brand)}</span>`;
  D.body.appendChild(l);
  setTimeout(() => { l.classList.add('done'); setTimeout(ready, 250); setTimeout(() => l.remove(), 1100); }, 900);
} else ready();

D.addEventListener('click', e => {
  const a = e.target.closest('a'); if (!a || reduce) return;
  const href = a.getAttribute('href') || '';
  if (e.metaKey || e.ctrlKey || e.shiftKey || a.target === '_blank' || !/^[\w-]+\.html(#[\w-]+)?$/.test(href)) return;
  if (href.split('#')[0] === location.pathname.split('/').pop() && href.includes('#')) return;
  e.preventDefault(); root.classList.add('leaving'); setTimeout(() => { location.href = href; }, 320);
});
addEventListener('pageshow', e => { if (e.persisted) root.classList.remove('leaving'); });

/* ---------- reveal on scroll ---------- */
const revealObs = 'IntersectionObserver' in window ? new IntersectionObserver(es => es.forEach(en => {
  if (en.isIntersecting) { en.target.classList.add('in'); revealObs.unobserve(en.target); }
}), { rootMargin: '0px 0px -8% 0px', threshold: .08 }) : null;
const watchReveal = (scope = D) => $$('.reveal:not(.in)', scope).forEach(el => revealObs ? revealObs.observe(el) : el.classList.add('in'));

/* ---------- parallax ---------- */
const para = $$('[data-parallax]');
if (para.length && !reduce) {
  let ticking = false;
  const run = () => { para.forEach(el => { const r = el.getBoundingClientRect(); const c = r.top + r.height / 2 - innerHeight / 2; el.style.transform = `translate3d(0,${(-c * (+el.dataset.parallax || .08)).toFixed(1)}px,0)`; }); ticking = false; };
  addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(run); } }, { passive: true }); run();
}

/* ---------- rotating words ---------- */
$$('[data-rotate]').forEach(el => {
  const words = el.dataset.rotate.split('|');
  el.innerHTML = words.map((w, i) => `<span${i ? ' aria-hidden="true"' : ' class="on"'}>${esc(w)}</span>`).join('');
  if (reduce) return;
  let i = 0; const spans = $$('span', el);
  setInterval(() => { spans[i].classList.remove('on'); spans[i].setAttribute('aria-hidden','true'); i = (i + 1) % spans.length; spans[i].classList.add('on'); spans[i].removeAttribute('aria-hidden'); }, 2400);
});

/* ---------- proof-mark path lengths ---------- */
$$('.proof path').forEach(p => { try { p.style.setProperty('--len', Math.ceil(p.getTotalLength())); } catch (e) {} });

/* ---------- services ---------- */
const svcCard = s => `<article class="svc cat-${s.category} reveal" id="svc-${s.id}">
  <div class="svc-ico">${icon(s.icon)}</div><h3>${esc(s.title)}</h3>
  <dl><div><dt>The problem</dt><dd>${esc(s.problem)}</dd></div><div><dt>How I help</dt><dd>${esc(s.help)}</dd></div><div><dt>You receive</dt><dd>${esc(s.deliverable)}</dd></div></dl>
  <a class="link" href="contact.html#${esc(s.id)}">Enquire about ${esc(s.title.toLowerCase())}</a></article>`;
$$('[data-services]').forEach(host => {
  const cats = window.SERVICE_CATEGORIES || {}, list = window.SERVICES || [];
  host.innerHTML = Object.keys(cats).map(k => `<section class="svc-cat" id="${k}" aria-labelledby="h-${k}">
    <div class="svc-cat-head"><h2 id="h-${k}">${esc(cats[k].title)}</h2><p>${esc(cats[k].intro)}</p></div>
    <div class="svc-grid">${list.filter(s => s.category === k).map(svcCard).join('')}</div></section>`).join('');
});

/* ---------- portfolio ---------- */
const PF = window.PORTFOLIO || [];
const bookMock = p => `<div class="book-wrap"><div class="book"><div class="book-front"><div><strong>${esc(p.title)}</strong><i></i><em>${esc(p.cover?.byline || '')}</em></div><em>${esc(S.brand)}</em></div><div class="book-pages"></div></div></div>`;
const coverHTML = p => p.cover?.image ? `<img src="${esc(p.cover.image)}" alt="Cover of ${esc(p.title)}" loading="lazy" decoding="async">` : bookMock(p);
const pfCard = (p, i) => `<button class="pf c-${esc(p.cover?.colour || 'cobalt')} reveal" data-i="${i}" data-cats="${(p.categories || []).map(slug).join(' ')}" aria-haspopup="dialog">
  <span class="pf-cover">${coverHTML(p)}${p.placeholder ? '<span class="pf-tag">Sample</span>' : ''}</span>
  <span class="pf-meta"><span class="pf-title">${esc(p.title)}</span><span class="pf-sub">${esc(p.format)}</span></span></button>`;

$$('[data-portfolio]').forEach(host => {
  const limit = +host.dataset.limit || PF.length;
  host.innerHTML = PF.length ? PF.slice(0, limit).map(pfCard).join('') : '<p class="pf-empty">No projects yet. Add your first project in assets/js/content.js.</p>';
});

const filterHost = $('[data-portfolio-filters]');
if (filterHost) {
  const grid = $('[data-portfolio]');
  const used = (window.PORTFOLIO_FILTERS || []);
  filterHost.innerHTML = `<button class="chip" aria-pressed="true" data-f="all">All work</button>` + used.map(f => `<button class="chip" aria-pressed="false" data-f="${slug(f)}">${esc(f)}</button>`).join('');
  const count = $('[data-pf-count]');
  const apply = f => {
    $$('.chip', filterHost).forEach(c => c.setAttribute('aria-pressed', c.dataset.f === f));
    let n = 0;
    $$('.pf', grid).forEach(card => { const show = f === 'all' || card.dataset.cats.split(' ').includes(f); card.classList.toggle('hide', !show); if (show) { n++; card.classList.add('in'); } });
    let empty = $('.pf-empty', grid);
    if (!n) { if (!empty) grid.insertAdjacentHTML('beforeend', '<p class="pf-empty">No projects in this category yet.</p>'); } else empty?.remove();
    if (count) count.textContent = `${n} project${n === 1 ? '' : 's'}`;
  };
  filterHost.addEventListener('click', e => { const b = e.target.closest('.chip'); if (!b) return; apply(b.dataset.f); try { history.replaceState(null, '', b.dataset.f === 'all' ? location.pathname : '#' + b.dataset.f); } catch (er) {} });
  const h = location.hash.slice(1); apply(h && $(`[data-f="${h}"]`, filterHost) ? h : 'all');
}

let modal;
const sampleHTML = s => {
  if (!s) return '';
  if (s.kind === 'before-after') return `<div class="ba"><div class="before"><h4>Before</h4>${esc(s.before)}</div><div class="after"><h4>After</h4>${esc(s.after)}</div></div>`;
  if (s.kind === 'edits') return `<ol class="edits">${(s.items || []).map(e => `<li><div class="ed-b"><span>Before</span><p>${esc(e.before)}</p></div><div class="ed-a"><span>After</span><p>${esc(e.after)}</p></div>${e.note ? `<p class="ed-n"><strong>Editor’s note:</strong> ${esc(e.note)}</p>` : ''}</li>`).join('')}</ol>`;
  if (s.kind === 'images') return `<div class="sample-imgs">${(s.images || []).map((src, k) => `<img src="${esc(src)}" alt="Formatted page ${k + 1}" loading="lazy">`).join('')}</div>`;
  if (s.kind === 'link') return `<p><a class="btn btn--ghost" href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label || 'Open the full sample')} ${icon('arrowUp')}</a></p>`;
  return `<div class="sample-excerpt">${esc(s.text)}</div>`;
};
const openProject = i => {
  const p = PF[i]; if (!p) return;
  if (!modal) { modal = D.createElement('dialog'); modal.className = 'pf-modal'; modal.setAttribute('aria-labelledby','pm-title'); D.body.appendChild(modal);
    modal.addEventListener('click', e => { if (e.target === modal || e.target.closest('.pm-close')) modal.close(); }); }
  const list = a => `<ul>${(a || []).map(x => `<li>${esc(x)}</li>`).join('')}</ul>`;
  modal.className = `pf-modal c-${p.cover?.colour || 'cobalt'}`;
  modal.innerHTML = `<button class="pm-close" aria-label="Close project">${icon('close')}</button><div class="pm">
    <div class="pm-visual">${coverHTML(p)}</div>
    <div class="pm-body">${p.placeholder ? `<span class="ph-note">Illustrative sample, created to demonstrate this service</span>` : ''}
      <h2 id="pm-title">${esc(p.title)}</h2><p class="muted">${esc(p.format)}</p>
      <div class="tags">${(p.categories || []).map(c => `<span>${esc(c)}</span>`).join('')}</div>
      <p style="margin-top:20px">${esc(p.summary)}</p>
      <div class="pm-facts"><div><h4>My role</h4><p>${esc(p.role)}</p></div><div><h4>Tools and skills</h4>${list(p.tools)}</div><div style="grid-column:1/-1"><h4>Work completed</h4>${list(p.work)}</div></div>
      <h4>${esc(p.sample?.label || (p.sample?.kind === 'edits' ? 'Sample edits from the manuscript' : 'Sample'))}</h4><div class="sample">${sampleHTML(p.sample)}</div>
      ${(() => { const r = p.review && (window.TESTIMONIALS || []).find(x => x.project === p.review); return r ? `<div class="pm-review">${stars(r.rating)}<blockquote>${esc(r.quote)}</blockquote><p>Client review, verified on ${esc(r.source || 'Upwork')}</p></div>` : ''; })()}
      <div class="btn-row" style="margin-top:28px"><a class="btn btn--coral" href="contact.html">Start a similar project ${icon('arrow')}</a></div>
    </div></div>`;
  modal.showModal(); $('.pm-close', modal).focus();
};
D.addEventListener('click', e => { const c = e.target.closest('.pf'); if (c) openProject(+c.dataset.i); });

/* ---------- testimonials ---------- */
const stars = n => n ? `<div class="stars" role="img" aria-label="Rated ${n} out of 5">${icon('star').repeat(n)}<b>${Number(n).toFixed(1)}</b></div>` : '';
const tCard = t => `<figure class="t-card reveal${t.placeholder ? ' ph' : ''}">
    <div class="t-top">${stars(t.rating)}${t.source ? `<span class="t-src">${icon('shield')}Verified ${esc(t.source)} review</span>` : ''}</div>
    ${t.project ? `<p class="t-proj">${esc(t.project)}</p>` : ''}
    <blockquote>${esc(t.quote)}</blockquote>
    ${(t.tags || []).length ? `<div class="t-tags">${t.tags.map(x => `<span>${esc(x)}</span>`).join('')}</div>` : ''}
    <figcaption class="t-who">${t.photo ? `<img src="${esc(t.photo)}" alt="" loading="lazy">` : `<span class="av" aria-hidden="true">${icon('user')}</span>`}
      <span><strong>${esc(t.name)}</strong><span>${esc(t.detail)}${t.date ? `, ${esc(t.date)}` : ''}</span></span></figcaption></figure>`;
$$('[data-testimonials]').forEach(host => {
  const T = (window.TESTIMONIALS || []).filter(t => !(host.hasAttribute('data-skip-featured') && t.featured)), limit = +host.dataset.limit || T.length;
  host.innerHTML = T.slice(0, limit).map(tCard).join('');
});
$$('[data-featured-review]').forEach(host => {
  const t = (window.TESTIMONIALS || []).find(x => x.featured) || (window.TESTIMONIALS || [])[0];
  if (!t) { host.closest('section')?.remove(); return; }
  host.innerHTML = `<blockquote>${esc(t.quote)}</blockquote><p class="fr-meta">${stars(t.rating)}<span>${esc(t.project || t.detail)}${t.source ? `, verified ${esc(t.source)} review` : ''}</span></p>`;
});

/* ---------- stats (only when real figures exist) ---------- */
$$('[data-stats]').forEach(host => {
  const st = window.STATS || [], section = host.closest('[data-stats-section]');
  if (!st.length) { if (section) section.hidden = true; return; }
  host.innerHTML = st.map(s => `<div class="stat reveal"><b data-to="${+s.value}" data-suf="${esc(s.suffix || '')}">0</b><span>${esc(s.label)}</span></div>`).join('');
  const o = new IntersectionObserver(es => es.forEach(en => { if (!en.isIntersecting) return; o.unobserve(en.target);
    const b = en.target, to = +b.dataset.to, suf = b.dataset.suf, t0 = performance.now(), dur = reduce ? 0 : 1400;
    const tick = t => { const k = dur ? Math.min(1, (t - t0) / dur) : 1; b.textContent = Math.round(to * (1 - Math.pow(1 - k, 3))) + suf; if (k < 1) requestAnimationFrame(tick); };
    requestAnimationFrame(tick); }), { threshold: .4 });
  $$('b', host).forEach(b => o.observe(b));
});

/* ---------- FAQ accordion ---------- */
$$('.faq').forEach((f, i) => {
  const b = $('button', f), p = $('.faq-panel', f), id = 'faq-p-' + i;
  p.id = id; b.setAttribute('aria-controls', id); b.setAttribute('aria-expanded', 'false');
  b.insertAdjacentHTML('beforeend', '<span class="faq-ico" aria-hidden="true"></span>');
  b.addEventListener('click', () => { const open = b.getAttribute('aria-expanded') !== 'true'; b.setAttribute('aria-expanded', open); p.classList.toggle('open', open); });
});

/* ---------- contact channels ---------- */
$$('[data-channels]').forEach(host => {
  host.innerHTML = (S.channels || []).map(c => `<a class="channel" href="${esc(c.url)}"${/^https?:/.test(c.url) ? ' target="_blank" rel="noopener"' : ''}>
    <span class="ci">${icon(c.icon)}</span><span><strong>${esc(c.label)}</strong><span>${esc(c.note || '')}</span></span>${icon('arrowUp')}</a>`).join('');
});
$$('[data-email]').forEach(el => { el.textContent = S.email; if (el.tagName === 'A') el.href = 'mailto:' + S.email; });
$$('[data-response]').forEach(el => el.textContent = S.responseTime || '');
$$('[data-brand]').forEach(el => el.textContent = S.brand);
$$('[data-person]').forEach(el => el.textContent = S.person);

/* ---------- contact form ---------- */
const form = $('#contact-form');
if (form) {
  const sel = $('#f-service', form);
  const cats = window.SERVICE_CATEGORIES || {};
  sel.innerHTML = '<option value="">Choose a service</option>' + Object.keys(cats).map(k => `<optgroup label="${esc(cats[k].title)}">${(window.SERVICES || []).filter(s => s.category === k).map(s => `<option value="${esc(s.title)}" data-id="${esc(s.id)}">${esc(s.title)}</option>`).join('')}</optgroup>`).join('') + '<option value="Not sure yet">Not sure yet</option>';
  const pre = location.hash.slice(1); const opt = pre && $(`option[data-id="${pre}"]`, sel); if (opt) opt.selected = true;
  const status = $('.form-status', form);
  const show = (cls, msg) => { status.className = 'form-status show ' + cls; status.innerHTML = msg; };
  const check = f => { const el = $('input,select,textarea', f); const ok = el.checkValidity(); f.classList.toggle('invalid', !ok); el.setAttribute('aria-invalid', !ok); return ok; };
  $$('.field', form).forEach(f => { const el = $('input,select,textarea', f); el.addEventListener('blur', () => f.classList.contains('invalid') && check(f)); el.addEventListener('input', () => f.classList.contains('invalid') && check(f)); });
  form.addEventListener('submit', async e => {
    e.preventDefault();
    const bad = $$('.field', form).filter(f => !check(f));
    if (bad.length) { $('input,select,textarea', bad[0]).focus(); show('bad', 'Please fill in the highlighted fields.'); return; }
    if ($('[name=_gotcha]', form).value) return;
    const data = Object.fromEntries(new FormData(form)); delete data._gotcha;
    const btn = $('button[type=submit]', form); btn.disabled = true;
    if (S.formEndpoint) {
      try {
        const r = await fetch(S.formEndpoint, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify({ ...data, _subject: `New enquiry: ${data.service} (${data.name})`, _template: 'table', _captcha: 'false' }) });
        const j = await r.json().catch(() => ({}));
        if (!r.ok || String(j.success) === 'false') throw new Error(r.status);
        form.reset(); show('ok', `<strong>Message sent.</strong> Thank you, ${esc(data.name)}. ${esc(S.responseTime || '')}`);
      } catch (err) {
        openMail(data);
      }
    } else openMail(data);
    btn.disabled = false;
  });
  function openMail(data) {
      const body = `Name: ${data.name}\nEmail: ${data.email}\nService: ${data.service}\nBudget: ${data.budget || '—'}\nDeadline: ${data.deadline || '—'}\n\n${data.message}`;
      const href = `mailto:${S.email}?subject=${encodeURIComponent('Project enquiry: ' + data.service)}&body=${encodeURIComponent(body)}`;
      const gm = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(S.email)}&su=${encodeURIComponent('Project enquiry: ' + data.service)}&body=${encodeURIComponent(body)}`;
      try { location.href = href; } catch (e) {}
      show('info', `Your message is ready to send from your email app. If nothing opened, <a class="link" href="${gm}" target="_blank" rel="noopener">send it from Gmail</a> or email <strong>${esc(S.email)}</strong> directly.`);
  }
}

/* ---------- process timeline progress ---------- */
const tl = $('[data-timeline]');
if (tl) {
  const bar = $('.progress', tl), steps = $$('.step', tl);
  const upd = () => { const r = tl.getBoundingClientRect(), mid = innerHeight * .55;
    const h = Math.max(0, Math.min(r.height - 24, mid - r.top)); bar.style.height = h + 'px';
    steps.forEach(st => st.classList.toggle('lit', st.getBoundingClientRect().top + 40 < mid)); };
  addEventListener('scroll', () => requestAnimationFrame(upd), { passive: true }); addEventListener('resize', upd); upd();
}

watchReveal();
}
