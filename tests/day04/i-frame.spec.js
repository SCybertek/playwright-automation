//integrating 3rd party app in your app
// in celenium you need to switch manually
// but in playwright the switch to iphrame happens automatically

import { test } from "@playwright/test";
import { clear } from "node:console";

test.skip("Locate elements within iframe", async ({ page }) => {
  let iframe = page.frameLocator("locator for iframe");
  let elementWithin = iframe.locator(
    "locator of a dif element inside the frame",
  );
  //above is not using page as new locator is part of the iframe not page
  await elementWithin.clear();
  await elementWithin.press("Control+A", "delete");
  // select all and delete
});
