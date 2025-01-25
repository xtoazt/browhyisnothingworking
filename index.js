const { chromium } = require('@playwright/test');

(async () => {
  const browser = await chromium.launch({
    headless: true, // Run in headless mode
    channel: 'chrome', // Use Chrome browser
  });

  const page = await browser.newPage();
  await page.goto('https://example.com');
  console.log('Page Title:', await page.title());

  await browser.close();
})();
