
/* IMPORT */

import * as puppeteer from 'puppeteer';

/* TEST URL */

async function testURL ( url: string ): Promise<void> {

  const browser = await puppeteer.launch ({ headless: false }),
        page = await browser.newPage ();

  await page.goto ( url );

  return new Promise ( resolve => {

    browser.on ( 'targetdestroyed', () => resolve () );

  });

}

/* EXPORT */

export default testURL;
