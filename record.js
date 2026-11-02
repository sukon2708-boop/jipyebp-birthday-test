
const { chromium } = require("playwright");
const path = require("path");
const { pathToFileURL } = require("url");

async function main() {
  const browser = await chromium.launch({
    headless: false,
    args: [
      "--autoplay-policy=no-user-gesture-required"
    ]
  });

  const page = await browser.newPage({
viewport: {
  width: 1080,
  height: 1920
},
    deviceScaleFactor: 1
  });

  const filePath = path.join(__dirname, "day.html");

  await page.goto(pathToFileURL(filePath).href, {
    waitUntil: "load"
  });

  await page.waitForTimeout(3000);

  console.log("เปิดเว็บไซต์เรียบร้อยแล้ว");
  console.log("ตรวจสอบเพลงและ Animation ได้เลย");
  console.log("ความละเอียด: 1080 x 1920");

  await new Promise(resolve => {
    browser.on("disconnected", resolve);
  });
}

main().catch(console.error);
