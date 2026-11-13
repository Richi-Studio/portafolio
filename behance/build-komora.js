// Genera las imágenes del proyecto KOMORA para Behance (JPG de 2400 px de ancho como máximo).
// Uso: NODE_PATH=<carpeta con sharp> node behance/build-komora.js
const sharp = require('sharp'), fs = require('fs');
const K = 'E:/Richi/Richi/Instagram/Studio By Richi/Sister/KOMORA/';
const OUT = 'E:/Richi/Portafolio SBR/behance/komora/';
fs.mkdirSync(OUT, { recursive: true });
const W = 2400;
const L = n => K + 'Logo/Logo-' + n + '.png';
const M = n => K + 'Mockups/Mockup ' + n + '.jpg';
const save = (img, name) => img.jpeg({ quality: 90 }).toFile(OUT + name);

async function trimmed(file, h, bg = '#ffffff') {
  const b = await sharp(file).trim({ threshold: 6 }).resize({ height: h, fit: 'inside', width: h * 3 }).flatten({ background: bg }).png().toBuffer();
  const m = await sharp(b).metadata();
  return { b, w: m.width, h: m.height };
}
// Mosaico de losetas (cada una con su fondo) con el logo centrado
async function tiles(items, name, { cols, tw = 1000, th = 1000, gap = 40, pad = 100, bgCanvas = '#ffffff', inner = 0.62 }) {
  const rows = Math.ceil(items.length / cols);
  const width = pad * 2 + cols * tw + (cols - 1) * gap;
  const height = pad * 2 + rows * th + (rows - 1) * gap;
  const comps = [];
  for (let i = 0; i < items.length; i++) {
    const { file, bg, border } = items[i];
    const x = pad + (i % cols) * (tw + gap), y = pad + Math.floor(i / cols) * (th + gap);
    const svg = `<svg width="${tw}" height="${th}"><rect width="${tw}" height="${th}" rx="36" fill="${bg}"${border ? ` stroke="${border}" stroke-width="3"` : ''}/></svg>`;
    comps.push({ input: Buffer.from(svg), left: x, top: y });
    const lg = await sharp(file).trim({ threshold: 6 }).resize({ width: Math.round(tw * inner), height: Math.round(th * inner), fit: 'inside' }).png().toBuffer();
    const m = await sharp(lg).metadata();
    comps.push({ input: lg, left: x + Math.round((tw - m.width) / 2), top: y + Math.round((th - m.height) / 2) });
  }
  const img = sharp({ create: { width, height, channels: 3, background: bgCanvas } }).composite(comps).resize({ width: W });
  await save(img, name);
}
async function paleta(name) {
  const cols = [['Vinotinto', '#6E1633', '#fff'], ['Mandarina', '#F2703A', '#fff'], ['Lavanda', '#BFB2F0', '#2B1020'], ['Tiza', '#FAF6F5', '#2B1020'], ['Ciruela noche', '#2B1020', '#fff']];
  const sw = 400, gap = 30, pad = 100, h = 760;
  const width = pad * 2 + cols.length * sw + (cols.length - 1) * gap;
  const parts = cols.map(([n, hex, fg], i) => {
    const x = pad + i * (sw + gap);
    return `<rect x="${x}" y="${pad}" width="${sw}" height="${h}" rx="32" fill="${hex}" stroke="#e6dede" stroke-width="2"/>` +
      `<text x="${x + 36}" y="${pad + h - 90}" font-family="Arial, Helvetica, sans-serif" font-size="46" font-weight="700" fill="${fg}">${n}</text>` +
      `<text x="${x + 36}" y="${pad + h - 36}" font-family="Arial, Helvetica, sans-serif" font-size="34" fill="${fg}" opacity="0.85">${hex}</text>`;
  }).join('');
  const svg = `<svg width="${width}" height="${h + pad * 2}" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#ffffff"/>${parts}</svg>`;
  await save(sharp(Buffer.from(svg)).resize({ width: W }), name);
}
async function logoBoard(file, name, bg = '#ffffff', hh = 1500) {
  const lg = await sharp(file).trim({ threshold: 6 }).resize({ height: 900 }).png().toBuffer();
  const m = await sharp(lg).metadata();
  await save(sharp({ create: { width: W, height: hh, channels: 3, background: bg } }).composite([{ input: lg, left: Math.round((W - m.width) / 2), top: Math.round((hh - m.height) / 2) }]), name);
}
async function photo(file, name) {
  await save(sharp(file).resize({ width: W, withoutEnlargement: true }), name);
}
async function pair(a, b, name, bg = '#f3eeee') {
  const h = 1100, pad = 100, gap = 60;
  const A = await sharp(a).resize({ height: h }).toBuffer(), B = await sharp(b).resize({ height: h }).toBuffer();
  const ma = await sharp(A).metadata(), mb = await sharp(B).metadata();
  const total = ma.width + mb.width + gap;
  const left = Math.round((W - total) / 2);
  await save(sharp({ create: { width: W, height: h + pad * 2, channels: 3, background: bg } }).composite([{ input: A, left, top: pad }, { input: B, left: left + ma.width + gap, top: pad }]), name);
}

(async () => {
  await photo(M('11'), '01-portada-caja-vinotinto.jpg');
  await logoBoard(L('02'), '02-logotipo.jpg');
  await tiles([{ file: L('01'), bg: '#ffffff', border: '#e6dede' }, { file: L('02'), bg: '#ffffff', border: '#e6dede' }, { file: L('03'), bg: '#ffffff', border: '#e6dede' }, { file: L('04'), bg: '#ffffff', border: '#e6dede' }], '03-versiones-del-logo.jpg', { cols: 2, tw: 1100, th: 760, inner: 0.7, bgCanvas: '#faf6f5' });
  await tiles([{ file: L('09'), bg: '#ffffff', border: '#e6dede' }, { file: L('05'), bg: '#ffffff', border: '#e6dede' }, { file: L('06'), bg: '#000000' }, { file: L('07'), bg: '#6E1633' }, { file: L('08'), bg: '#BFB2F0' }], '04-simbolo-en-fondos.jpg', { cols: 5, tw: 420, th: 420, gap: 24, pad: 80, bgCanvas: '#faf6f5', inner: 0.62 });
  await paleta('05-paleta.jpg');
  await photo(M('01'), '06-caja-blanca-cinta.jpg');
  await photo(M('02'), '07-sticker-de-cierre.jpg');
  await photo(M('03'), '08-bolsa-de-papel.jpg');
  await photo(M('08'), '09-caja-con-banda.jpg');
  await photo(M('07'), '10-papel-de-seda.jpg');
  await photo(M('10'), '11-etiqueta-colgante.jpg');
  await photo(M('06'), '12-tarjeta-de-agradecimiento.jpg');
  await photo(M('09'), '13-papeleria.jpg');
  await pair(M('04'), M('05'), '14-instagram-y-whatsapp.jpg');
  for (const f of fs.readdirSync(OUT).sort()) {
    if (!f.endsWith('.jpg')) continue;
    const m = await sharp(OUT + f).metadata();
    console.log(f, m.width + 'x' + m.height, Math.round(fs.statSync(OUT + f).size / 1024) + 'KB');
  }
})().catch(e => { console.error('ERROR', e.message); process.exit(1); });
