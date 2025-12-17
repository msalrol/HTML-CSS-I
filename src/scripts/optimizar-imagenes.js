import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const inputDir = path.join(process.cwd(), 'src/assets/images');
const outputDir = path.join(process.cwd(), 'src/assets/images/optimizadas');

const sizes = [480, 1200]; // low y high
const supportedExtensions = ['.jpg', '.jpeg', '.png'];

if (!fs.existsSync(outputDir)) {fs.mkdirSync(outputDir, { recursive: true });}

for (const file of fs.readdirSync(inputDir)) {
  const ext = path.extname(file).toLowerCase();
  if (!supportedExtensions.includes(ext)) {
    console.log(`Saltando archivo no soportado: ${file}`);
    continue;
  }

  const base = path.parse(file).name;

  for (const w of sizes) {
    try {
      await sharp(path.join(inputDir, file))
        .resize(w)
        .jpeg({ quality: 80 })
        .toFile(`${outputDir}/${base}-${w}.jpg`);

      await sharp(path.join(inputDir, file))
        .resize(w)
        .avif({ quality: 50 })
        .toFile(`${outputDir}/${base}-${w}.avif`);

      console.log(`Procesado: ${file} → ${w}px`);
    } catch (err) {
      console.error(`Error procesando ${file}:`, err.message);
    }
  }
}
