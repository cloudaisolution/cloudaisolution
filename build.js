const vite = require("vite");

vite.build({
  build: {
    outDir: "dist",
  }
}).catch((err) => {
  console.error(err);
  process.exit(1);
});
