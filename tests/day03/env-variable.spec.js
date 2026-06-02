import { test } from "@playwright/test";

test("@env-test Testing", async ({ page }) => {
  console.log(process.env.PRACTICE_USERNAME);
  console.log(process.env.PRACTICE_PASSWORD);

  //user settings JSON file
});

test("Bypass creds by base 64 encoding ", async ({ page }) => {
  let encodedCreds = Buffer.from(
    `${process.env.PRACTICE_USERNAME}:${process.env.PRACTICE_PASSWORD}`,
  ).toString("base64");
  //add this to the header
  await page.setExtraHTTPHeaders({ Authorization: `Basic ${encodedCreds}` });
  await page.goto("https://the-internet-5chk.onrender.com/basic_auth");
  await page.waitForTimeout(500);
});
