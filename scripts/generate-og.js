const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function createOgImage() {
  const logoPath = path.join(process.cwd(), 'public', 'images', 'school-logo.jpg');
  const logoBuffer = await sharp(logoPath)
    .resize(240, 240, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
    .png()
    .toBuffer();
  const logoBase64 = 'data:image/png;base64,' + logoBuffer.toString('base64');

  const svg = `
  <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0b2d4d"/>
        <stop offset="100%" stop-color="#061b30"/>
      </linearGradient>
      <linearGradient id="gold" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#f0d28d"/>
        <stop offset="100%" stop-color="#d6a84f"/>
      </linearGradient>
    </defs>
    <!-- Background -->
    <rect width="1200" height="630" fill="url(#bg)"/>
    
    <!-- Decorative border -->
    <rect x="30" y="30" width="1140" height="570" rx="16" fill="none" stroke="url(#gold)" stroke-width="2" stroke-opacity="0.4"/>
    <rect x="42" y="42" width="1116" height="546" rx="12" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
    
    <!-- Logo -->
    <image href="${logoBase64}" x="100" y="195" width="240" height="240"/>
    
    <!-- Text Elements -->
    <text x="380" y="225" font-family="serif" font-size="20" font-weight="700" letter-spacing="4" fill="#d6a84f">ESTABLISHED 1999 · DINAJPUR</text>
    <text x="380" y="290" font-family="serif" font-size="52" font-weight="700" fill="#ffffff">Raniganj National</text>
    <text x="380" y="350" font-family="serif" font-size="52" font-weight="700" fill="#ffffff">Bidyapith</text>
    <text x="380" y="410" font-family="sans-serif" font-size="22" font-style="italic" fill="#d2e2ed">Nurturing Intellect, Character, and Purpose Since 1999</text>
    
    <!-- Badge Pill -->
    <rect x="380" y="445" width="370" height="42" rx="21" fill="rgba(214,168,79,0.15)" stroke="#d6a84f" stroke-width="1"/>
    <text x="565" y="472" font-family="sans-serif" font-size="15" font-weight="600" fill="#f0d28d" text-anchor="middle">Raniganj Bazar, Ghoraghat, Dinajpur</text>
  </svg>
  `;

  const ogBuffer = await sharp(Buffer.from(svg)).png().toBuffer();
  fs.writeFileSync(path.join(process.cwd(), 'public', 'og-image.png'), ogBuffer);
  fs.writeFileSync(path.join(process.cwd(), 'app', 'opengraph-image.png'), ogBuffer);
  console.log('Successfully created og-image.png and app/opengraph-image.png!');
}

createOgImage().catch(console.error);
