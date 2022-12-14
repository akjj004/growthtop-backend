import * as puppeteer from 'puppeteer';

export const createBrowser = async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-accelerated-2d-canvas',
      '--no-first-run',
      '--no-zygote',
      '--single-process',
      '--disable-gpu',
    ],
  });

  const page = await browser.newPage();

  return { browser, page };
};

export const connectToURL = async (page: puppeteer.Page, url: string) => {
  await page.goto(url);

  return { page };
};