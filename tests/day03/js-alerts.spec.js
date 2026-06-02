import { test } from "@playwright/test";

test.describe("Test group ", () => {
  test.beforeEach(async ({ page }) => {
    let url = "https://the-internet-5chk.onrender.com/";
    await page.goto(url);
    console.log("before each");
    let locator = page.locator("//a[@href='/javascript_alerts']");
    await locator.click();
    await page.waitForTimeout(500);
  });

  test("Regular Alert ", async ({ page }) => {
    //regular alert ( like OK ) are handled in playwright, but this is how to manually handle it
    page.on("dialog", async (alert) => {
      console.log(`alert message ${alert.message()}`);
      await page.waitForTimeout(3000);
      await alert.accept();
    });
    let clickButton = page.locator("button[onclick='jsAlert()']");
    await clickButton.click();
    await page.waitForTimeout(3000);
  });

  test("Confimration Alert", async ({ page }) => {
    //confirmation alerts needs to be handled manually
    page.on("dialog", async (alert) => {
      console.log(`alert message ${alert.message()}`);
      await page.waitForTimeout(3000);
      await alert.dismiss();
    });
    let clickButton = page.locator("button[onclick='jsConfirm()']");
    await clickButton.click();
    await page.waitForTimeout(3000);
  });

  test("Text Alert", async ({ page }) => {
    page.on("dialog", async (alert) => {
      console.log(`alert message ${alert.message()}`);
      await page.waitForTimeout(3000);
      await alert.accept("Hello");
    });
    let clickButton = page.locator("button[onclick='jsPrompt()']");
    await clickButton.click();
    await page.waitForTimeout(3000);
  });
});
