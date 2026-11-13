// Genera las imágenes del proyecto Luca para Behance (cada una de 2400 px de ancho, JPG).
// Uso: NODE_PATH=<carpeta con sharp> node behance/build-luca.js
const sharp = require('sharp'), fs = require('fs');
const W = 'E:/Richi/Richi/Instagram/Studio By Richi/Wallet';
const PAG = W + '/Manual de marca/SVG editable/Paginas/';
const SHOTS = W + '/Tienda Google Play/Imagenes/Capturas de celular/';
const OUT = 'E:/Richi/Portafolio SBR/behance/luca/';
fs.mkdirSync(OUT, { recursive: true });
const pag = n => PAG + fs.readdirSync(PAG).find(f => f.startsWith('Pagina-' + n + '-'));
const AN = '#27306B', CREMA = '#FBF7F0';

async function page(n, name) {
  await sharp(pag(n), { density: 250 }).resize({ width: 2400 }).flatten({ background: CREMA }).jpeg({ quality: 90 }).toFile(OUT + name);
}
async function phones(files, name, bg) {
  const pw = 480, ph = 853, gap = 70, pad = 150, r = 52;
  const w = 2400, h = ph + pad * 2;
  const total = files.length * pw + (files.length - 1) * gap;
  const left0 = Math.round((w - total) / 2);
  const mask = Buffer.from(`<svg width="${pw}" height="${ph}"><rect width="${pw}" height="${ph}" rx="${r}" ry="${r}"/></svg>`);
  const comps = [];
  for (let i = 0; i < files.length; i++) {
    const img = await sharp(SHOTS + files[i]).resize(pw, ph).composite([{ input: mask, blend: 'dest-in' }]).png().toBuffer();
    comps.push({ input: img, left: left0 + i * (pw + gap), top: pad });
  }
  await sharp({ create: { width: w, height: h, channels: 3, background: bg } }).composite(comps).jpeg({ quality: 90 }).toFile(OUT + name);
}
(async () => {
  await sharp('E:/Richi/Uni 2026-2/Diseño Web/Portafolio/img/luca-mockup.jpg').resize({ width: 2400 }).jpeg({ quality: 90 }).toFile(OUT + '01-portada-mockup.jpg');
  await page('01', '02-manual-portada.jpg');
  await page('04', '03-la-marca.jpg');
  await page('05', '04-idea-visual.jpg');
  await page('08', '05-logo-partes.jpg');
  await page('09', '06-simbolo-construccion.jpg');
  await page('11', '07-versiones-del-logo.jpg');
  await page('15', '08-color.jpg');
  await page('25', '09-tipografia.jpg');
  await page('35', '10-estilo-redondo.jpg');
  await page('38', '11-iconos.jpg');
  await phones(['01-inicio.png', '02-registro.png', '03-presupuestos.png', '04-metas.png'], '12-app-1.jpg', AN);
  await phones(['05-informes.png', '06-deudas.png', '07-movimientos.png', '08-cuentas.png'], '13-app-2.jpg', AN);
  await page('42', '14-icono-de-la-app.jpg');
  for (const f of fs.readdirSync(OUT).sort()) { const m = await sharp(OUT + f).metadata(); console.log(f, m.width + 'x' + m.height, Math.round(fs.statSync(OUT + f).size / 1024) + 'KB'); }
})();
