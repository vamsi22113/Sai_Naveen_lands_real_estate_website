import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const dir = './src/assets';

async function compressImages() {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (file.endsWith('.jpg') || file.endsWith('.png') || file.endsWith('.jpeg')) {
      const filePath = path.join(dir, file);
      const parsed = path.parse(filePath);
      const outputPath = path.join(dir, parsed.name + '.webp');
      
      console.log(`Compressing ${file}...`);
      try {
        await sharp(filePath)
          .webp({ quality: 75 })
          .toFile(outputPath);
        
        console.log(`Success: ${outputPath}`);
      } catch (err) {
        console.error(`Error on ${file}:`, err);
      }
    }
  }
}

compressImages();
