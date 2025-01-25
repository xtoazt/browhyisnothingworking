const { chromium } = require('@playwright/test');

export default async function handler(req, res) {
  const browser = await chromium.launch({
    headless: true,
    channel: 'chrome',
  });

  const page = await browser.newPage();
  await page.goto('https://example.com');
  const title = await page.title();

  await browser.close();
  res.status(200).json({ title });
}
