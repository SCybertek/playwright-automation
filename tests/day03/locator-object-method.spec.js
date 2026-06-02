import { test, expect } from "@playwright/test";

test.describe("Test group", () => {
  test.beforeEach("", async ({ page }) => {
    let url = "https://practicesoftwaretesting.com/";
    await page.goto(url);
    console.log("before each");
  });

  test.afterEach("", async ({ page }) => {
    await page.waitForTimeout(3000);
  });

  test("Check", async ({ page }) => {
    let checkBox = page.locator(
      "//label[normalize-space()='Hammer']//input[@type='checkbox']",
    ); // as there are multiple matching
    page.on("pageerror", (error) => {
      console.log("Page error:", error.message);
    });

    page.on("console", (msg) => {
      console.log("Browser console:", msg.text());
    });
    await checkBox.check();

    // let checkBox = page.locator("text='Hammer'");
    //label[normalize-space()='Hammer']//input[@type='checkbox']
    //label[normalize-space()='Hand Saw']//input[@type='checkbox']
  });

  test("Uncheck", async ({ page }) => {
    // let checkNewBox = page.locator(
    //   "input[name='category_id'][data-test='category-01KS5DCQ0RMFJVGZ6243FT7BG1']",
    // );
    let checkNewBox = page.locator(
      "//label[normalize-space()='Hand Saw']//input[@type='checkbox']",
    );
    let checked = await checkNewBox.check();
    await page.waitForTimeout(3000);
    await expect(checkNewBox).toBeChecked();
    await checkNewBox.uncheck();
    await expect(checkNewBox).toBeVisible();
    expect(await checkNewBox.isChecked()).toBeFalsy();
  });

  test("SelectOption", async ({ page }) => {
    let selectDropDown = page.locator("select[data-test='sort']");
    // await selectDropDown.selectOption("Name (A - Z)");
    //await selectDropDown.selectOption({ label: 'Name (A - Z)' });
    await selectDropDown.selectOption({ index: 3 });
    //<select _ngcontent-ng-c670033506="" aria-label="sort" data-test="sort" class="form-select"><option _ngcontent-ng-c670033506="" value=""></option><option _ngcontent-ng-c670033506="" value="name,asc">Name (A - Z)</option><option _ngcontent-ng-c670033506="" value="name,desc">Name (Z - A)</option><option _ngcontent-ng-c670033506="" value="price,desc">Price (High - Low)</option><option _ngcontent-ng-c670033506="" value="price,asc">Price (Low - High)</option><option _ngcontent-ng-c670033506="" value="co2_rating,asc">CO₂ Rating (A - E)</option><option _ngcontent-ng-c670033506="" value="co2_rating,desc">CO₂ Rating (E - A)</option><!----></select>
  });
});
