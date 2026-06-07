import { test, expect, firefox } from "@playwright/test";

test("Context fixture example @context", async ({ context }) => {
  let page1 = await context.newPage();
  let page2 = await context.newPage();
  let page3 = await context.newPage();

  await page3.waitForTimeout(5000);

  await page1.bringToFront();
  await page1.goto("https://cydeo.com/");
  await page1.waitForTimeout(3000);

  await page2.bringToFront();
  await page2.goto("https://www.youtube.com/");
  await page2.waitForTimeout(3000);

  await page3.bringToFront();
  await page3.goto("https://www.facebook.com/");
  await page3.waitForTimeout(3000);

  expect(await page1.title()).toContain("CYDEO");
  expect(await page2.title()).toContain("YouTube");
  expect(await page3.title()).toContain("Facebook");
});

test("Browser Fixture example @browser", async ({ browser }) => {
  let context1 = await browser.newContext();
  let page1 = await context1.newPage();
  let page2 = await context1.newPage();

  let context2 = await browser.newContext();
  let page3 = await context2.newPage();
  let page4 = await context2.newPage();

  await page4.waitForTimeout(5000);

  await page1.bringToFront();
  await page1.goto("https://cydeo.com/");
  await page1.waitForTimeout(3000);

  await page2.bringToFront();
  await page2.goto("https://www.youtube.com/");
  await page2.waitForTimeout(3000);

  await page3.bringToFront();
  await page3.goto("https://www.facebook.com/");
  await page3.waitForTimeout(3000);

  await page4.bringToFront();
  await page4.goto("https://www.linkedin.com/");
  await page4.waitForTimeout(3000);
});

test.skip("Custom fixtures example @customFixture", async () => {
  let browser = await firefox.launch();
  let context = await browser.newContext();
  let page = await context.newPage();

  await page.goto("https://www.google.com/");

  await page.waitForTimeout(3000);
});

test("GET method example @getMethod", async ({ request }) => {
  let baseUrl = "https://spartan-app-new-nonsecure.onrender.com";

  let response = await request.get(`${baseUrl}/api/v2/spartans`);

  expect(response.status()).toBe(200);

  // verify content type is json
  expect(response.headers()["content-type"]).toContain("application/json");

  // verify that response message is "Successfully retrieved all the Spartans."
  let responseBody = await response.json();
  expect(responseBody.message).toBe("Successfully retrieved all the Spartans.");
});
