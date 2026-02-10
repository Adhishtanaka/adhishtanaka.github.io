const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

async function prerender() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Set viewport
  await page.setViewport({ width: 1200, height: 800 });

  // Navigate to the built site
  await page.goto('file://' + path.join(__dirname, 'dist/index.html'), {
    waitUntil: 'networkidle0'
  });

  // Wait for the render event
  await page.waitForFunction(() => {
    return window.renderComplete;
  }, { timeout: 30000 });

  // Get the rendered HTML
  const html = await page.content();

  // Write to index.html
  fs.writeFileSync(path.join(__dirname, 'dist/index.html'), html);

  await browser.close();
  console.log('Prerendering complete');
}

prerender().catch(console.error);