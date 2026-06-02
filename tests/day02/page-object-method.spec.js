import { test } from "@playwright/test";

let url = "https://practicesoftwaretesting.com/";
test("Getting the title of the page", async ({ page }) => {
  await page.goto(url);
  let actualTitle = await page.title();
  console.log(actualTitle);
});

test("Getting current url ", async ({ page }) => {
  await page.goto(url);
  let actualUrl = await page.url();
  console.log(actualUrl);
  await page.waitForTimeout(3000);
  let searchBox = page.locator();
});

test("Google locator", async ({ page }) => {
  await page.goto("https://www.google.com");
  let actualUrl = await page.url();
  console.log(actualUrl);
  await page.waitForTimeout(3000);
  let searchBox = page.locator("//textarea[@class = 'gLFyf']");
  await page.waitForTimeout(3000);
  await searchBox.type("hello");
  await page.waitForTimeout(3000);
  await searchBox.press("Enter");
}, 50000);
//relative xpass
//textarea[@class = "gLFyf"]
