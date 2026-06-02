import { expect, test } from "@playwright/test";
import { assert } from "node:console";

test.describe("Test Group", () => {
  test.beforeEach(async ({ page }) => {
    let url = "https://practicesoftwaretesting.com/";
    await page.goto(url);
    console.log("before each");
  });
  test("innerText() retrieved visible text", async ({ page }) => {
    let header = page.locator("//h4[normalize-space()='Price Range']");
    console.log(await header.innerText());
  });

  test("inputValue() only works with <input>, <textarea>, <select>", async ({
    page,
  }) => {
    let searchField = page.locator("//input[@id='search-query']");
    await page.waitForTimeout(3000);
    await searchField.fill("hello");
    await page.waitForTimeout(3000);
    let value = await searchField.inputValue();
    await expect(value).toBe("hello");
  });
  //href

  test("getAttribute retrieved attribute value", async ({ page }) => {
    const pliers = page.locator(
      "//a[data-test='product-01KS5M8CFH6PNSPD5HWCZ36T64']", //update locator
    );
    await pliers.waitFor({ state: "visible" });
    console.log(await pliers.getAttribute("data-test"));
  });
});
