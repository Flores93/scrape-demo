import puppeteer from "puppeteer";

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto("https://www.homedepot.com/p/313112375");
  // await page.goto("https://www.homedepot.com/s/2554-20");
  await page.waitForSelector(".fulfillment__header_zipcode");
  // await page.waitForSelector(".store__success");

  // const productAvailability = await page.$$eval("span.store__success", (ss) => {
  //   return ss.map((av) => av.textContent);
  // });

  const zipCode = await page.$eval(
    "span.fulfillment__header_zipcode",
    (element) => element.innerHTML
  );

  console.log({ zipCode });
  // console.log({ productAvailability });

  await browser.close();
})();
