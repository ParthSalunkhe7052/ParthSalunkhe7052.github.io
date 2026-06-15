import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const directoryPath = path.join(process.cwd(), 'src/assets');

async function optimizeImages() {
  try {
    const files = fs.readdirSync(directoryPath);

    for (const file of files) {
      const ext = path.extname(file).toLowerCase();
      if (ext === '.png' || ext === '.jpg' || ext === '.jpeg') {
        const filePath = path.join(directoryPath, file);
        const fileNameWithoutExt = path.basename(file, ext);
        const newFilePath = path.join(directoryPath, `${fileNameWithoutExt}.webp`);

        console.log(`Optimizing ${file}...`);

        await sharp(filePath)
          .webp({ quality: 80 }) // 80 is a good balance between quality and size
          .toFile(newFilePath);

        // Remove the old file
        fs.unlinkSync(filePath);
        console.log(`Converted and removed ${file}`);
      }
    }
    console.log('All images optimized!');
  } catch (err) {
    console.error('Error optimizing images:', err);
  }
}

optimizeImages();
