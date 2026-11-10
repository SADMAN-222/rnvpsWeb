const fs = require('fs');
const sharp = require('sharp');

async function generateAllIcons() {
  const inputLogo = 'public/images/school-logo.jpg';

  // 1. Generate multi-resolution ICO with strictly RGBA (color type 6) PNG frames
  const icoSizes = [16, 32, 48];
  const pngBuffers = [];

  for (const s of icoSizes) {
    const buf = await sharp(inputLogo)
      .resize(s, s, { fit: 'contain', background: { r: 11, g: 45, b: 77, alpha: 1 } })
      .ensureAlpha(1)
      .png({ compressionLevel: 9 })
      .toBuffer();
    
    if (buf[25] !== 6) {
      throw new Error(`Color type is not RGBA for size ${s}: ${buf[25]}`);
    }
    pngBuffers.push({ size: s, buf });
  }

  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(pngBuffers.length, 4);

  let offset = 6 + (16 * pngBuffers.length);
  const direntries = [];

  for (const item of pngBuffers) {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(item.size === 256 ? 0 : item.size, 0);
    entry.writeUInt8(item.size === 256 ? 0 : item.size, 1);
    entry.writeUInt8(0, 2);
    entry.writeUInt8(0, 3);
    entry.writeUInt16LE(1, 4);
    entry.writeUInt16LE(32, 6); // 32-bit RGBA
    entry.writeUInt32LE(item.buf.length, 8);
    entry.writeUInt32LE(offset, 12);
    direntries.push(entry);
    offset += item.buf.length;
  }

  const icoBuffer = Buffer.concat([header, ...direntries, ...pngBuffers.map(p => p.buf)]);
  fs.writeFileSync('app/favicon.ico', icoBuffer);
  fs.writeFileSync('public/favicon.ico', icoBuffer);
  console.log('✓ app/favicon.ico and public/favicon.ico updated (RGBA ICO)');

  // 2. Generate explicit RGBA PNG icons
  const pngOutputs = [
    { path: 'app/icon.png', size: 32 },
    { path: 'public/favicon.png', size: 32 },
    { path: 'app/apple-icon.png', size: 180 },
    { path: 'public/apple-touch-icon.png', size: 180 },
    { path: 'public/icon-192.png', size: 192 },
    { path: 'public/icon-512.png', size: 512 }
  ];

  for (const item of pngOutputs) {
    const buf = await sharp(inputLogo)
      .resize(item.size, item.size, { fit: 'contain', background: { r: 11, g: 45, b: 77, alpha: 1 } })
      .ensureAlpha(1)
      .png({ compressionLevel: 9 })
      .toBuffer();
    
    fs.writeFileSync(item.path, buf);
    console.log(`✓ ${item.path} written (${item.size}x${item.size}, RGBA color type: ${buf[25]})`);
  }
}

generateAllIcons().catch(err => {
  console.error(err);
  process.exit(1);
});
