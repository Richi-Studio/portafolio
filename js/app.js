/* Renderiza el portafolio desde data/proyectos.js + data/imagenes.js */
(function () {
  'use strict';
  const $ = (s, r = document) => r.querySelector(s);
  const el = (tag, attrs = {}, kids = []) => {
    const n = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) {
      if (k === 'class') n.className = v; else if (k === 'text') n.textContent = v; else n.setAttribute(k, v);
    }
    [].concat(kids).forEach(c => c && n.appendChild(c));
    return n;
  };

  /* Visor */
  const lb = $('#lb'), lbImg = $('#lb-img'), lbCap = $('#lb-cap');
  let lbList = [], lbI = 0;
  const show = i => {
    lbI = (i + lbList.length) % lbList.length;
    const it = lbList[lbI];
    lbImg.src = it.src; lbImg.alt = it.alt; lbCap.textContent = it.alt;
  };
  const openLb = (list, i) => {
    lbList = list; show(i);
    if (typeof lb.showModal === 'function') lb.showModal(); else lb.setAttribute('open', '');
  };
  $('.lb-x').onclick = () => lb.close();
  $('.lb-prev').onclick = () => show(lbI - 1);
  $('.lb-next').onclick = () => show(lbI + 1);
  lb.addEventListener('click', e => { if (e.target === lb) lb.close(); });
  lb.addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft') show(lbI - 1);
    if (e.key === 'ArrowRight') show(lbI + 1);
  });

  /* Reproductor de reels */
  const vb = $('#vb'), vv = $('#vb-video'), vcap = $('#vb-cap');
  let vList = [], vI = 0;
  const vshow = i => {
    vI = (i + vList.length) % vList.length;
    const r = vList[vI];
    vv.pause(); vv.src = r.src; vv.poster = r.poster; vcap.textContent = r.alt; vv.load(); vv.play().catch(() => {});
  };
  const openVb = (list, i) => { vList = list; vshow(i); if (typeof vb.showModal === 'function') vb.showModal(); else vb.setAttribute('open', ''); };
  vb.querySelector('.lb-x').onclick = () => vb.close();
  vb.querySelector('.vb-prev').onclick = () => vshow(vI - 1);
  vb.querySelector('.vb-next').onclick = () => vshow(vI + 1);
  vb.addEventListener('click', e => { if (e.target === vb) vb.close(); });
  vb.addEventListener('close', () => { vv.pause(); vv.removeAttribute('src'); vv.load(); });

  /* Menú */
  const menu = $('#menu');
  const items = SECCIONES.map(s => [s.id, s.titulo]).concat([['sobre-mi', 'Sobre mí']]);
  items.forEach(([id, t]) => menu.appendChild(el('li', {}, el('a', { href: '#' + id, text: t.replace('Agencia · OneLine', 'Agencia') }))));
  const burger = $('.burger'), nav = $('nav');
  burger.onclick = () => { const o = nav.classList.toggle('open'); burger.setAttribute('aria-expanded', o); };
  menu.addEventListener('click', e => { if (e.target.tagName === 'A') { nav.classList.remove('open'); burger.setAttribute('aria-expanded', 'false'); } });

  /* Marquee y cifras (calculadas desde los datos, no inventadas) */
  const words = SECCIONES.map(s => s.titulo.split(' · ')[0]);
  const mq = $('#marquee');
  for (let r = 0; r < 2; r++) words.forEach(w => { mq.appendChild(el('span', { text: w })); mq.appendChild(el('i', { text: '✦' })); });
  const nImgs = SECCIONES.reduce((a, s) => a + s.grupos.reduce((b, g) => b + (g.imgs ? g.imgs.length : 0), 0), 0);
  const nProy = SECCIONES.reduce((a, s) => a + s.grupos.length, 0);
  [[SECCIONES.length, 'áreas de trabajo'], [nProy, 'proyectos y series'], [nImgs, 'piezas en este portafolio']].forEach(([n, t]) => {
    const li = el('li', {}, [el('b', { text: String(n) }), document.createTextNode(t)]);
    $('#stats').appendChild(li);
  });

  /* Secciones */
  const host = $('#secciones');
  SECCIONES.forEach(sec => {
    const band = el('section', { class: 'band ' + sec.tema, id: sec.id });
    const wrap = el('div', { class: 'wrap' });
    wrap.appendChild(el('header', { class: 'band-head rv' }, [
      el('span', { class: 'num', 'aria-hidden': 'true', text: sec.num }),
      el('div', {}, [el('p', { class: 'eyebrow', text: 'Trabajo' }), el('h2', { text: sec.titulo })])
    ]));
    wrap.appendChild(el('p', { class: 'bajada rv', text: sec.bajada }));
    wrap.appendChild(el('p', { class: 'servicio rv', text: sec.servicio }));

    sec.grupos.forEach(g => {
      const grp = el('article', { class: 'grupo rv' });
      const head = el('div', { class: 'g-head' });
      const left = el('div', {}, [el('h3', { text: g.nombre })]);
      if (g.texto) left.appendChild(el('p', { text: g.texto }));
      if (g.tags) left.appendChild(el('ul', { class: 'tags' }, g.tags.map(t => el('li', { text: t }))));
      head.appendChild(left);
      if (g.behance) head.appendChild(el('a', { class: 'pill pill-k-sm g-link', href: g.behance, target: '_blank', rel: 'noopener', text: 'Caso en Behance ↗' }));
      grp.appendChild(head);

      if (g.tipo === 'video') {
        const v = el('video', { controls: '', preload: 'metadata', playsinline: '', 'aria-label': g.nombre });
        if (g.poster) v.setAttribute('poster', g.poster);
        v.appendChild(el('source', { src: g.video, type: 'video/mp4' }));
        grp.appendChild(el('div', { class: 'video-wrap' }, v));
      } else if (g.tipo === 'reels') {
        const list = g.dias.map(n => { const k = String(n).padStart(2, '0'); return { src: g.carpeta + 'dia-' + k + '.mp4', poster: g.carpeta + 'dia-' + k + '.webp', alt: g.nombre + ' · día ' + n, n }; });
        const box = el('div', { class: 'reels' });
        list.forEach((it, i) => {
          const b = el('button', { type: 'button', 'aria-label': 'Ver reel del día ' + it.n });
          b.appendChild(el('img', { src: it.poster, alt: 'Portada del reel, día ' + it.n, width: 540, height: 960, loading: 'lazy', decoding: 'async' }));
          b.appendChild(el('span', { class: 'dia', text: 'Día ' + it.n }));
          b.appendChild(el('span', { class: 'play', 'aria-hidden': 'true', text: '▶' }));
          b.onclick = () => openVb(list, i);
          box.appendChild(b);
        });
        grp.appendChild(box);
      } else if (g.tipo === 'enlace') {
        grp.appendChild(el('div', { class: 'link-card' }, [
          el('p', { text: 'Contenido en video publicado en Instagram.' }),
          el('a', { class: 'pill pill-y', href: g.enlace, target: '_blank', rel: 'noopener', text: g.enlaceTexto + ' ↗' })
        ]));
      } else {
        const list = g.imgs.map(([id, alt]) => ({ src: IMG[id].f, alt, w: IMG[id].w, h: IMG[id].h }));
        const portrait = list.filter(x => x.h > x.w * 1.2).length > list.length * 0.6;
        const box = el('div', { class: g.tipo === 'logos' ? 'logos' : 'masonry' + (portrait ? ' stories' : '') });
        list.forEach((it, i) => {
          const dark = false;
          const b = el('button', { type: 'button', 'aria-label': 'Ampliar: ' + it.alt, class: dark ? 'dk' : '' });
          b.appendChild(el('img', { src: it.src, alt: it.alt, width: it.w, height: it.h, loading: 'lazy', decoding: 'async' }));
          b.onclick = () => openLb(list, i);
          box.appendChild(b);
        });
        grp.appendChild(box);
      }
      wrap.appendChild(grp);
    });
    band.appendChild(wrap);
    host.appendChild(band);
  });

  /* Sobre mí y contacto */
  $('#sm-titulo').textContent = SOBRE_MI.titulo;
  SOBRE_MI.texto.forEach(t => $('#sm-texto').appendChild(el('p', { text: t })));
  SOBRE_MI.herramientas.forEach(t => $('#sm-tools').appendChild(el('li', { text: t })));
  SOBRE_MI.proceso.forEach(([n, t, d]) => $('#sm-proceso').appendChild(el('li', {}, [el('b', { text: n }), el('div', {}, [el('strong', { text: t }), el('span', { text: d })])])));
  $('#mail').setAttribute('href', 'mailto:' + CONTACTO.correo);
  /* El botón abre Gmail en una pestaña nueva: mailto: no hace nada si el equipo no tiene app de correo */
  $('#mail2').setAttribute('href', 'https://mail.google.com/mail/?view=cm&fs=1&to=' + encodeURIComponent(CONTACTO.correo) + '&su=' + encodeURIComponent('Hola Studio By Richi, quiero cotizar un proyecto'));
  $('#mail2').setAttribute('target', '_blank'); $('#mail2').setAttribute('rel', 'noopener');
  $('#mail').textContent = CONTACTO.correo;
  $('#ig').href = CONTACTO.instagram; $('#be').href = CONTACTO.behance; $('#ciudad').textContent = CONTACTO.ciudad;

  /* Aparición y barra de progreso */
  const rv = document.querySelectorAll('.rv');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(es => es.forEach(x => { if (x.isIntersecting) { x.target.classList.add('in'); io.unobserve(x.target); } }), { threshold: .08 });
    rv.forEach(n => io.observe(n));
  } else rv.forEach(n => n.classList.add('in'));
  const bar = $('#progress');
  const onScroll = () => { const h = document.documentElement; bar.style.width = (h.scrollTop / (h.scrollHeight - h.clientHeight) * 100) + '%'; };
  addEventListener('scroll', onScroll, { passive: true }); onScroll();

  /* Resaltar sección activa */
  const links = [...menu.querySelectorAll('a')];
  if ('IntersectionObserver' in window) {
    const so = new IntersectionObserver(es => es.forEach(x => {
      if (x.isIntersecting) links.forEach(a => a.classList.toggle('on', a.getAttribute('href') === '#' + x.target.id));
    }), { rootMargin: '-45% 0px -50% 0px' });
    document.querySelectorAll('section.band').forEach(s => so.observe(s));
  }
})();
