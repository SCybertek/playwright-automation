import { test } from "@playwright/test";

// page fixture is used to interact with the browser page
test("should navigate to google.com", async ({ page }) => {
  await page.goto("https://www.google.com");
  await page.waitForTimeout(3000);
});

// import { test } from '@playwright/test';

test("", async ({ page }) => {});
