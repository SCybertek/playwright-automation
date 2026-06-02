import { expect, test } from "@playwright/test";
import { assert } from "node:console";

test.describe("Test Group", () => {
  test.beforeEach(async ({ page }) => {
    let url = "https://practicesoftwaretesting.com/";
    await page.goto(url);
    await expect(page).toHaveTitle(
      "Practice Software Testing - Toolshop - v5.0",
    );

    console.log("before each");

    expect(await page.title()).toBe(
      "Practice Software Testing - Toolshop - v5.0",
    );
  });
  test("innerText() retrieved visible text", async ({ page }) => {
    let header = page.locator("//h4[normalize-space()='Price Range']");
    console.log(await header.innerText());
    await expect(header).toHaveText("Price Range");

    let actualTxt = await header.innerText(); //returns promise
    expect(actualTxt).toBe(" Price Range"); // strict equal
    expect(actualTxt).toEqual(" Price Range");
  });
});
