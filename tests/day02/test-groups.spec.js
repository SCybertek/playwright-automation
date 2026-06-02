import { test } from "@playwright/test";

test.describe("Practice ", () => {
  test.beforeEach(async ({ page }) => {
    let url = "https://practicesoftwaretesting.com/";
    await page.goto(url);
    console.log("before each");
  });
  test.afterEach(async ({ page }) => {
    console.log("after each");
    await page.waitForTimeout(3000);
  });
  test("test title", async ({ page }) => {
    console.log(await page.title());
  });
  test("test url", async ({ page }) => {
    console.log(page.url());
  });

  test("test 3", async ({ page }) => {});
});
