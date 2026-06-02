import { test } from "@playwright/test";
import { beforeEach } from "node:test";

test.describe("", () => {
  test.beforeEach(async ({ page }) => {
    let url = "https://the-internet-5chk.onrender.com/";
    await page.goto(url);
    console.log("before each");
  });
  test.afterEach(async ({ page }) => {
    await page.waitForTimeout(5000);
    console.log("after each");
  });
  test("left click", async ({ page }) => {
    await page.click("text='A/B Testing'");
  });

  test("right click", async ({ page }) => {
    await page.click("text='A/B Testing'", { button: "right" });
  });

  test("Hover", async ({ page }) => {
    await page.click("text='Hovers'");
    // await page.hover(
    //   "//img[@src='/img/avatar-blank.jpg' and @alt='User Avatar']",
    // );
    let elements = await page
      .locator("//img[@src='/img/avatar-blank.jpg' and @alt='User Avatar']")
      .all();
    for (let e of elements) {
      await page.waitForTimeout(5000);
      await e.hover();
    }
  });
  test("Mouse wheel scroll ", async ({ page }) => {
    page.mouse.wheel(0, 4000);
  });
  test("Scrolling for specific element ", async ({ page }) => {
    let inputLink = page.getByText("Inputs");
    await page.waitForTimeout(5000);
    await inputLink.scrollIntoViewIfNeeded();
    inputLink.click();
    page.mouse.wheel(0, 4000);
  });
  test("Drag and drop  ", async ({ page }) => {
    await page.click("text='Drag and Drop'");
    await page.dragAndDrop("//div[@id='column-a']", "//div[@id='column-b']");
    //dragTo() is another method to use
  });
});
