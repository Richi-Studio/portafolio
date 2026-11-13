// Genera las imágenes del proyecto NÜRIA para Behance (JPG de 2400 px de ancho).
// Uso: NODE_PATH=<carpeta con sharp> node behance/build-nuria.js
const sharp = require('sharp'), fs = require('fs');
const N = 'E:/Richi/Richi/Instagram/Studio By Richi/';
const OUT = 'E:/Richi/Portafolio SBR/behance/nuria/';
fs.mkdirSync(OUT, { recursive: true });
const W = 2400;

const src = {
  collage: N + 'Post 5 (Nüria)/Imagenes/Collage de marca NÜRIA en tonos pastel.png',
  logo: N + 'NÜRIA/Logo/Logo 001-03.jpg',
  icono: N + 'NÜRIA/Logo/Logo 001-02.jpg',
  cartas: N + 'NÜRIA/Boceto/Tarjetass.jpg',
  libro: N + 'NÜRIA/Boceto/Book Stackk.jpg',
  frasco: N + 'Post 5 (Nüria)/Imagenes/Gemini_Generated_Image_f2y82mf2y82mf2y8.jpg',
  caja1: N + 'Post 5 (Nüria)/Imagenes/Gemini_Generated_Image_mdkbqjmdkbqjmdkb.jpg',
  caja2: N + 'Post 5 (Nüria)/Imagenes/Gemini_Generated_Image_vqn48qvqn48qvqn4.jpg',
  paleta: N + 'Post 5 (Nüria)/Post/Nueva carpeta/Post NÜRIA 01-03.jpg',
  c1: N + 'NÜRIA/Post/Carrusel 005-01.jpg', c2: N + 'NÜRIA/Post/Carrusel 005-02.jpg', c3: N + 'NÜRIA/Post/Carrusel 005-03.jpg',
  c4: N + 'NÜRIA/Post/Carrusel 005-04.jpg', c5: N + 'NÜRIA/Post/Carrusel 005-05.jpg'
};

// Coloca imágenes en fila sobre un lienzo de 2400 px de ancho, con alto automático.
async function row(files, name, { bg = '#ffffff', pad = 120, gap = 60, h = 1100 } = {}) {
  const bufs = [];
  for (const f of files) {
    const b = await sharp(f, { limitInputPixels: false }).flatten({ background: bg }).resize({ height: h }).jpeg({ quality: 92 }).toBuffer();
    const m = await sharp(b).metadata();
    bufs.push({ b, w: m.width });
  }
  let total = bufs.reduce((a, x) => a + x.w, 0) + gap * (bufs.length - 1);
  let scale = 1;
  const avail = W - pad * 2;
  if (total > avail) scale = avail / total;
  const rh = Math.round(h * scale);
  const comps = [];
  let x = Math.round((W - Math.round(total * scale)) / 2);
  for (const o of bufs) {
    const iw = Math.round(o.w * scale);
    comps.push({ input: await sharp(o.b).resize({ width: iw, height: rh }).toBuffer(), left: x, top: pad });
    x += iw + Math.round(gap * scale);
  }
  await sharp({ create: { width: W, height: rh + pad * 2, channels: 3, background: bg } }).composite(comps).jpeg({ quality: 90 }).toFile(OUT + name);
}
async function single(f, name, { bg = '#ffffff', maxH = null, trim = false } = {}) {
  let img = sharp(f, { limitInputPixels: false }).flatten({ background: bg });
  if (trim) img = sharp(await img.trim({ threshold: 12 }).toBuffer());
  let b = await img.resize({ width: W, withoutEnlargement: false }).jpeg({ quality: 92 }).toBuffer();
  await sharp(b).jpeg({ quality: 90 }).toFile(OUT + name);
}
async function logoBoard(name) {
  const logo = await sharp(src.logo).flatten({ background: '#fff' }).trim({ threshold: 12 }).resize({ height: 900 }).toBuffer();
  const m = await sharp(logo).metadata();
  await sharp({ create: { width: W, height: 1500, channels: 3, background: '#ffffff' } })
    .composite([{ input: logo, left: Math.round((W - m.width) / 2), top: Math.round((1500 - m.height) / 2) }]).jpeg({ quality: 92 }).toFile(OUT + name);
}

(async () => {
  await single(src.collage, '01-portada-marca.jpg');
  await logoBoard('02-logotipo.jpg');
  await row([src.paleta], '03-paleta.jpg', { h: 1500, pad: 100 });
  await row([src.cartas, src.libro], '04-papeleria.jpg', { bg: '#e9e9e9', h: 1000, pad: 120 });
  await single(src.caja1, '05-kit-papeleria-1.jpg');
  await single(src.caja2, '06-kit-papeleria-2.jpg');
  await row([src.c1, src.c2], '07-redes-carrusel-1.jpg', { bg: '#f3f1fb', h: 1500, pad: 120, gap: 80 });
  await row([src.c3, src.c4], '08-redes-carrusel-2.jpg', { bg: '#f3f1fb', h: 1500, pad: 120, gap: 80 });
  for (const f of fs.readdirSync(OUT).sort()) {
    if (!f.endsWith('.jpg')) continue;
    const m = await sharp(OUT + f).metadata();
    console.log(f, m.width + 'x' + m.height, Math.round(fs.statSync(OUT + f).size / 1024) + 'KB');
  }
})().catch(e => { console.error('ERROR', e.message); process.exit(1); });
