let sharp;
try {
  sharp = require("sharp");
} catch {
  console.error("Sharp is required to create thumbnails. Run npm install first.");
  process.exit(1);
}

async function main() {
  let input = "";
  for await (const chunk of process.stdin) input += chunk;
  const jobs = JSON.parse(input);
  for (const { source, thumbnail } of jobs) {
    await sharp(source)
      .rotate()
      .resize({ width: 1200, withoutEnlargement: true })
      .webp({ quality: 82 })
      .toFile(thumbnail);
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
