import { test } from "@playwright/test";

// test.describe('', () => {
test("Bypass creds by empedding in URL ", async ({ page }) => {
  await page.goto(
    //username:password@
    "https://admin:admin@the-internet-5chk.onrender.com/basic_auth",
  );
  await page.waitForTimeout(500);
});

test("Bypass creds by base 64 encoding ", async ({ page }) => {
  let encodedCreds = Buffer.from("admin:admin").toString("base64");
  //add this to the header
  await page.setExtraHTTPHeaders({ Authorization: `Basic ${encodedCreds}` });
  await page.goto("https://the-internet-5chk.onrender.com/basic_auth");
  await page.waitForTimeout(500);
});

// });
