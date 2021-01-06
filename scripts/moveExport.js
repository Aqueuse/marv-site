const fs = require("fs-extra");
const path = require("path");

const src = path.resolve(__dirname, "../__sapper__/export");
const dest = path.resolve(__dirname, "../docs/export");

try {
  console.log("Moving export directory...");
  fs.moveSync(src, dest, { overwrite: true });
} catch (error) {
  console.error("ERROR >>>", error.message);
}
