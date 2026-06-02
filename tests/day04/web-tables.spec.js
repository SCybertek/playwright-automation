import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  let url = "https://the-internet-5chk.onrender.com/web-tables";
  await page.goto(url);
  console.log("before each");
});

test("Verify that there are 9 rows, 13 columns, and 104 cells ", async ({
  page,
}) => {
  let tableLocator = page.locator("//table[@id='ctl00_MainContent_orderGrid']");

  let allRows = await tableLocator.locator("//tr").all();
  expect(allRows.length).toBe(9);

  let allColumns = await tableLocator.locator("//th").all();
  expect(allColumns.length).toBe(13);

  let allCells = await tableLocator.locator("//td").all();
  expect(allCells.length).toBe(104);

  for (let each of allCells) {
    console.log(await each.textContent());
  }
});

test("Getting value of each cell", async ({ page }) => {
  let tableLocator = page.locator("//table[@id='ctl00_MainContent_orderGrid']");

  let allRows = await tableLocator.locator("//tr").all();

  for (let each of allRows) {
    let cells = await each.locator("//td").all(); // get each cell in that raw
    if (cells.length > 2) {
      for (let i = 1; i < cells.length - 1; i++) {
        console.log(await cells[i].textContent());
      }
      console.log("--------------");
    }
  }
});

test("Checking the checkbox", async ({ page }) => {
  let tableLocator = page.locator("//table[@id='ctl00_MainContent_orderGrid']");
  let allCheckboxes = await tableLocator
    .locator("//input[@type='checkbox']")
    .all();

  for (let each of allCheckboxes) {
    await each.check();
    await expect(each).toBeChecked();
  }
});
