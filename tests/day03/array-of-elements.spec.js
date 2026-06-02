import { expect, test } from "@playwright/test";
import { assert } from "node:console";

test.describe("", () => {
  test.beforeEach(async ({ page }) => {
    let url = "https://the-internet-5chk.onrender.com/";
    await page.goto(url);
    console.log("before each");
  });

  test("Verify that there are 50 elements ", async ({ page }) => {
    let locators = await page
      .locator("//ul[@class='list-group']//a[@href]")
      .all();
    expect(locators.length).toBe(50);
    expect(locators.length).toBeGreaterThan(25);
  });
  test("Verify that each element is clickable ", async ({ page }) => {
    let locators = await page
      .locator("//ul[@class='list-group']//a[@href]")
      .all();
    for (let e of locators) {
      await expect(e).toBeVisible();
      // expect(await e.isVisible()).tobeTruthy();
      await expect(e).toBeEnabled();
      // expect(await e.isEnabled()).tobeTruthy();
    }
  });

  test("Verify that each has ref attribute ", async ({ page }) => {
    let locators = await page
      .locator("//ul[@class='list-group']//a[@href]")
      .all();

    for (let e of locators) {
      await expect(e).toHaveAttribute("href");
      console.log(e.getAttribute("href"));
    }
  });
});
