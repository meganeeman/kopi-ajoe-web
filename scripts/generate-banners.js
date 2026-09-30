const fs = require('fs');
const path = require('path');
const sharp = require('../node_modules/sharp');

const PUBLIC_IMAGES_DIR = path.join(__dirname, '..', 'public', 'images');
const LOGO_PATH = path.join(PUBLIC_IMAGES_DIR, 'logo.png');
const STRONG_PATH = path.join(PUBLIC_IMAGES_DIR, 'STRONG.png');
const SOFT_PATH = path.join(PUBLIC_IMAGES_DIR, 'SOFT.png');
const BUTTER_PATH = path.join(PUBLIC_IMAGES_DIR, 'BUTTER.png');
const MATCHA_PATH = path.join(PUBLIC_IMAGES_DIR, 'MATCHA.png');
const CHOCOLATE_PATH = path.join(PUBLIC_IMAGES_DIR, 'CHOCOLATE.png');
const APP_SCREEN_PATH = path.join(PUBLIC_IMAGES_DIR, 'app-screen.png');

async function createBanner1() {
  const width = 1200;
  const height = 600;

  const logoBuf = await sharp(LOGO_PATH)
    .resize(52, 52, { fit: 'contain' })
    .toBuffer();

  const phoneW = 236;
  const phoneH = 512;
  const phoneX = 670;
  const phoneY = 44;

  const screenW = 228;
  const screenH = 504;
  const screenX = phoneX + 4;
  const screenY = phoneY + 4;

  const screenRaw = await sharp(APP_SCREEN_PATH)
    .resize(screenW, screenH, { fit: 'cover' })
    .toBuffer();

  const screenMask = Buffer.from(`
    <svg width="${screenW}" height="${screenH}" viewBox="0 0 ${screenW} ${screenH}" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="${screenW}" height="${screenH}" rx="32" ry="32" fill="#ffffff" />
    </svg>
  `);

  const screenClipped = await sharp(screenRaw)
    .composite([{ input: screenMask, blend: 'dest-in' }])
    .png()
    .toBuffer();

  const cupTargetH = 345;
  const strongTrimmed = await sharp(STRONG_PATH)
    .trim()
    .resize(270, cupTargetH, {
      fit: 'inside',
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    })
    .toBuffer();

  const strongMeta = await sharp(strongTrimmed).metadata();
  const cupLeft = 885;
  const cupTop = 550 - strongMeta.height;

  const svgBackgroundAndContent = `
  <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="monoBgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#070709" />
        <stop offset="45%" stop-color="#121215" />
        <stop offset="100%" stop-color="#050507" />
      </linearGradient>

      <radialGradient id="monoWarmSpotlight" cx="72%" cy="50%" r="58%">
        <stop offset="0%" stop-color="#ffffff" stop-opacity="0.10" />
        <stop offset="50%" stop-color="#ffffff" stop-opacity="0.03" />
        <stop offset="100%" stop-color="#050507" stop-opacity="0" />
      </radialGradient>

      <radialGradient id="leftAmbientGlow" cx="20%" cy="30%" r="50%">
        <stop offset="0%" stop-color="#ffffff" stop-opacity="0.06" />
        <stop offset="100%" stop-color="#070709" stop-opacity="0" />
      </radialGradient>

      <pattern id="monoGrid" width="34" height="34" patternUnits="userSpaceOnUse">
        <circle cx="17" cy="17" r="1" fill="#ffffff" fill-opacity="0.035" />
      </pattern>

      <linearGradient id="phoneBorder" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#71717a" />
        <stop offset="50%" stop-color="#27272a" />
        <stop offset="100%" stop-color="#52525b" />
      </linearGradient>

      <filter id="monoShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="16" stdDeviation="20" flood-color="#000000" flood-opacity="0.85" />
      </filter>

      <filter id="softContactShadow" x="-30%" y="-30%" width="160%" height="160%">
        <feGaussianBlur stdDeviation="9" />
      </filter>

      <filter id="textShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="3" stdDeviation="5" flood-color="#000000" flood-opacity="0.9" />
      </filter>
    </defs>

    <rect width="${width}" height="${height}" fill="url(#monoBgGrad)" />
    <rect width="${width}" height="${height}" fill="url(#monoWarmSpotlight)" />
    <rect width="${width}" height="${height}" fill="url(#leftAmbientGlow)" />
    <rect width="${width}" height="${height}" fill="url(#monoGrid)" />

    <g transform="translate(64, 48)">
      <circle cx="26" cy="26" r="25" fill="#141418" stroke="#3f3f46" stroke-width="1.5" />
      <text x="68" y="25" fill="#ffffff" font-family="-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif" font-size="20" font-weight="900" letter-spacing="2">KOPI AJOE</text>
      <text x="68" y="42" fill="#a1a1aa" font-family="-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif" font-size="12" font-weight="600" letter-spacing="1">LIVE RADAR &amp; TRACKING</text>
    </g>

    <g transform="translate(64, 132)">
      <rect x="0" y="0" width="220" height="32" rx="16" fill="#18181b" stroke="#3f3f46" stroke-width="1" />
      <circle cx="16" cy="16" r="4" fill="#ffffff" />
      <text x="30" y="20" fill="#f4f4f5" font-family="-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif" font-size="11" font-weight="700" letter-spacing="1.2">REAL-TIME TRACKING</text>
    </g>

    <g transform="translate(64, 222)" filter="url(#textShadow)">
      <text x="0" y="0" fill="#ffffff" font-family="-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif" font-size="44" font-weight="900" letter-spacing="-0.5">Pantau Gerobak Kopi</text>
      <text x="0" y="52" fill="#e4e4e7" font-family="-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif" font-size="44" font-weight="900" letter-spacing="-0.5">Keliling Terdekat</text>
    </g>

    <g transform="translate(64, 316)">
      <text x="0" y="0" fill="#d4d4d8" font-family="-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif" font-size="17" font-weight="400">Temukan posisi barista gerobak Kopi Ajoe secara langsung di sekitarmu.</text>
      <text x="0" y="26" fill="#a1a1aa" font-family="-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif" font-size="15" font-weight="400">Nikmati racikan kopi hangat favorit tanpa perlu menebak rute keliling.</text>
    </g>

    <g transform="translate(64, 388)">
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="246" height="58" rx="14" fill="#141418" stroke="#27272a" stroke-width="1" />
        <circle cx="28" cy="29" r="14" fill="#27272a" />
        <circle cx="28" cy="29" r="5" fill="#ffffff" />
        <text x="54" y="25" fill="#ffffff" font-family="-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif" font-size="13" font-weight="700">Radar Lokasi Akurat</text>
        <text x="54" y="43" fill="#a1a1aa" font-family="-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif" font-size="11">Pantau posisi gerobak real-time</text>
      </g>

      <g transform="translate(262, 0)">
        <rect x="0" y="0" width="246" height="58" rx="14" fill="#141418" stroke="#27272a" stroke-width="1" />
        <circle cx="28" cy="29" r="14" fill="#27272a" />
        <circle cx="28" cy="29" r="5" fill="#ffffff" />
        <text x="54" y="25" fill="#ffffff" font-family="-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif" font-size="13" font-weight="700">Kopi Segar Kapan Saja</text>
        <text x="54" y="43" fill="#a1a1aa" font-family="-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif" font-size="11">Seduh langsung di titik terdekat</text>
      </g>
    </g>

    <g transform="translate(64, 480)">
      <rect x="0" y="0" width="180" height="34" rx="17" fill="#ffffff" />
      <text x="90" y="22" text-anchor="middle" fill="#09090b" font-family="-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif" font-size="12" font-weight="800" letter-spacing="0.5">CEK RADAR SEKARANG</text>
    </g>

    <g filter="url(#monoShadow)">
      <rect x="${phoneX}" y="${phoneY}" width="${phoneW}" height="${phoneH}" rx="36" ry="36" fill="#09090b" stroke="url(#phoneBorder)" stroke-width="3" />
    </g>

    <ellipse cx="${cupLeft + Math.round(strongMeta.width / 2)}" cy="552" rx="90" ry="14" fill="#000000" filter="url(#softContactShadow)" opacity="0.8" />
  </svg>
  `;

  const svgBuf = Buffer.from(svgBackgroundAndContent);

  const finalImage = await sharp(svgBuf)
    .composite([
      { input: logoBuf, top: 48, left: 64 },
      { input: screenClipped, top: screenY, left: screenX },
      { input: strongTrimmed, top: cupTop, left: cupLeft }
    ])
    .png({ quality: 100, compressionLevel: 9 })
    .toBuffer();

  return finalImage;
}

async function createBanner2() {
  const width = 1200;
  const height = 600;

  const logoBuf = await sharp(LOGO_PATH)
    .resize(48, 48, { fit: 'contain' })
    .toBuffer();

  const strongHeroTrimmed = await sharp(STRONG_PATH)
    .trim()
    .resize(270, 350, {
      fit: 'inside',
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    })
    .toBuffer();
  const strongHeroMeta = await sharp(strongHeroTrimmed).metadata();

  const butterTrimmed = await sharp(BUTTER_PATH)
    .trim()
    .resize(212, 275, {
      fit: 'inside',
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    })
    .toBuffer();
  const butterMeta = await sharp(butterTrimmed).metadata();

  const softTrimmed = await sharp(SOFT_PATH)
    .trim()
    .resize(240, 310, {
      fit: 'inside',
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    })
    .toBuffer();
  const softMeta = await sharp(softTrimmed).metadata();

  const matchaTrimmed = await sharp(MATCHA_PATH)
    .trim()
    .resize(240, 310, {
      fit: 'inside',
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    })
    .toBuffer();
  const matchaMeta = await sharp(matchaTrimmed).metadata();

  const chocoTrimmed = await sharp(CHOCOLATE_PATH)
    .trim()
    .resize(212, 275, {
      fit: 'inside',
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    })
    .toBuffer();
  const chocoMeta = await sharp(chocoTrimmed).metadata();

  const strongHeroLeft = 600 - Math.round(strongHeroMeta.width / 2);
  const strongHeroTop = 550 - strongHeroMeta.height;

  const butterLeft = 225 - Math.round(butterMeta.width / 2);
  const butterTop = 492 - butterMeta.height;

  const softLeft = 405 - Math.round(softMeta.width / 2);
  const softTop = 522 - softMeta.height;

  const matchaLeft = 795 - Math.round(matchaMeta.width / 2);
  const matchaTop = 522 - matchaMeta.height;

  const chocoLeft = 975 - Math.round(chocoMeta.width / 2);
  const chocoTop = 492 - chocoMeta.height;

  const svgBackgroundAndContent = `
  <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="luxDarkBg" cx="50%" cy="30%" r="75%">
        <stop offset="0%" stop-color="#1c1c22" />
        <stop offset="45%" stop-color="#121216" />
        <stop offset="100%" stop-color="#08080a" />
      </radialGradient>

      <radialGradient id="centerWarmSpotlight" cx="50%" cy="65%" r="48%">
        <stop offset="0%" stop-color="#ffffff" stop-opacity="0.14" />
        <stop offset="35%" stop-color="#f59e0b" stop-opacity="0.08" />
        <stop offset="70%" stop-color="#dc2626" stop-opacity="0.04" />
        <stop offset="100%" stop-color="#08080a" stop-opacity="0" />
      </radialGradient>

      <radialGradient id="redAccentGlow" cx="50%" cy="80%" r="50%">
        <stop offset="0%" stop-color="#dc2626" stop-opacity="0.22" />
        <stop offset="60%" stop-color="#991b1b" stop-opacity="0.06" />
        <stop offset="100%" stop-color="#08080a" stop-opacity="0" />
      </radialGradient>

      <pattern id="luxGrid" width="32" height="32" patternUnits="userSpaceOnUse">
        <circle cx="16" cy="16" r="1" fill="#ffffff" fill-opacity="0.035" />
      </pattern>

      <filter id="textGlow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="3" stdDeviation="5" flood-color="#000000" flood-opacity="0.9" />
      </filter>

      <filter id="cupContactShadow" x="-30%" y="-30%" width="160%" height="160%">
        <feGaussianBlur stdDeviation="8" />
      </filter>

      <filter id="badgeShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#000000" flood-opacity="0.6" />
      </filter>
    </defs>

    <rect width="${width}" height="${height}" fill="url(#luxDarkBg)" />
    <rect width="${width}" height="${height}" fill="url(#centerWarmSpotlight)" />
    <rect width="${width}" height="${height}" fill="url(#redAccentGlow)" />
    <rect width="${width}" height="${height}" fill="url(#luxGrid)" />

    <g transform="translate(64, 38)">
      <circle cx="24" cy="24" r="23" fill="#141418" stroke="#3f3f46" stroke-width="1.5" />
      <text x="60" y="24" fill="#ffffff" font-family="-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif" font-size="18" font-weight="900" letter-spacing="2">KOPI AJOE</text>
      <text x="60" y="40" fill="#a1a1aa" font-family="-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif" font-size="11" font-weight="600" letter-spacing="1">SIGNATURE COLLECTION</text>
    </g>

    <g transform="translate(890, 42)" filter="url(#badgeShadow)">
      <rect x="0" y="0" width="246" height="32" rx="16" fill="#141418" stroke="#3f3f46" stroke-width="1" />
      <circle cx="16" cy="16" r="4" fill="#ef4444" />
      <text x="30" y="20" fill="#e4e4e7" font-family="-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif" font-size="11" font-weight="700" letter-spacing="1">PILIHAN FAVORIT KOPI AJOE</text>
    </g>

    <g transform="translate(600, 126)" text-anchor="middle" filter="url(#textGlow)">
      <text x="0" y="0" fill="#ffffff" font-family="-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif" font-size="42" font-weight="900" letter-spacing="-0.5">1 Tegukan Penyemangat Hari Mu!</text>
      <text x="0" y="32" fill="#d4d4d8" font-family="-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif" font-size="16" font-weight="500" letter-spacing="0.2">Kenikmatan Otentik 5 Varian Rasa Legendaris Kopi Ajoe</text>
    </g>

    <g opacity="0.8">
      <ellipse cx="225" cy="492" rx="72" ry="12" fill="#000000" filter="url(#cupContactShadow)" />
      <ellipse cx="975" cy="492" rx="72" ry="12" fill="#000000" filter="url(#cupContactShadow)" />
      <ellipse cx="405" cy="522" rx="84" ry="14" fill="#000000" filter="url(#cupContactShadow)" />
      <ellipse cx="795" cy="522" rx="84" ry="14" fill="#000000" filter="url(#cupContactShadow)" />
      <ellipse cx="600" cy="552" rx="98" ry="16" fill="#000000" filter="url(#cupContactShadow)" />
    </g>
  </svg>
  `;

  const svgOverlay = `
  <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <filter id="badgeShadowOverlay" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#000000" flood-opacity="0.7" />
      </filter>
    </defs>

    <g transform="translate(225, 516)" text-anchor="middle" filter="url(#badgeShadowOverlay)">
      <rect x="-56" y="0" width="112" height="24" rx="12" fill="#18181b" stroke="#3f3f46" stroke-width="0.8" />
      <text x="0" y="15" fill="#e4e4e7" font-family="-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif" font-size="10" font-weight="700">BUTTER AJOE</text>
    </g>

    <g transform="translate(405, 542)" text-anchor="middle" filter="url(#badgeShadowOverlay)">
      <rect x="-50" y="0" width="100" height="24" rx="12" fill="#18181b" stroke="#3f3f46" stroke-width="0.8" />
      <text x="0" y="15" fill="#e4e4e7" font-family="-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif" font-size="10" font-weight="700">AJOE SOFT</text>
    </g>

    <g transform="translate(600, 560)" text-anchor="middle" filter="url(#badgeShadowOverlay)">
      <rect x="-70" y="0" width="140" height="26" rx="13" fill="#dc2626" />
      <text x="0" y="17" fill="#ffffff" font-family="-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif" font-size="11" font-weight="900" letter-spacing="0.5">AJOE STRONG</text>
    </g>

    <g transform="translate(795, 542)" text-anchor="middle" filter="url(#badgeShadowOverlay)">
      <rect x="-50" y="0" width="100" height="24" rx="12" fill="#18181b" stroke="#3f3f46" stroke-width="0.8" />
      <text x="0" y="15" fill="#e4e4e7" font-family="-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif" font-size="10" font-weight="700">GREENTEA</text>
    </g>

    <g transform="translate(975, 516)" text-anchor="middle" filter="url(#badgeShadowOverlay)">
      <rect x="-56" y="0" width="112" height="24" rx="12" fill="#18181b" stroke="#3f3f46" stroke-width="0.8" />
      <text x="0" y="15" fill="#e4e4e7" font-family="-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif" font-size="10" font-weight="700">CHOCOLATE</text>
    </g>
  </svg>
  `;

  const svgBuf = Buffer.from(svgBackgroundAndContent);
  const overlayBuf = Buffer.from(svgOverlay);

  const finalImage = await sharp(svgBuf)
    .composite([
      { input: logoBuf, top: 38, left: 64 },
      { input: butterTrimmed, top: butterTop, left: butterLeft },
      { input: chocoTrimmed, top: chocoTop, left: chocoLeft },
      { input: softTrimmed, top: softTop, left: softLeft },
      { input: matchaTrimmed, top: matchaTop, left: matchaLeft },
      { input: strongHeroTrimmed, top: strongHeroTop, left: strongHeroLeft },
      { input: overlayBuf, top: 0, left: 0 }
    ])
    .png({ quality: 100, compressionLevel: 9 })
    .toBuffer();

  return finalImage;
}

async function main() {
  const banner1Buf = await createBanner1();
  const banner2Buf = await createBanner2();

  const out1 = path.join(PUBLIC_IMAGES_DIR, 'banner-launch-app.png');
  const out2 = path.join(PUBLIC_IMAGES_DIR, 'banner-promo-combo.png');

  fs.writeFileSync(out1, banner1Buf);
  fs.writeFileSync(out2, banner2Buf);

  const custAssetsDir = path.join(__dirname, '..', '..', '..', 'kopi-ajoe-cust', 'assets');
  if (fs.existsSync(custAssetsDir)) {
    fs.writeFileSync(path.join(custAssetsDir, 'banner-launch-app.png'), banner1Buf);
    fs.writeFileSync(path.join(custAssetsDir, 'banner-promo-combo.png'), banner2Buf);
  }

  const meta1 = await sharp(out1).metadata();
  const meta2 = await sharp(out2).metadata();

  console.log(JSON.stringify({
    banner1: { path: out1, width: meta1.width, height: meta1.height, size: banner1Buf.length },
    banner2: { path: out2, width: meta2.width, height: meta2.height, size: banner2Buf.length }
  }));
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
