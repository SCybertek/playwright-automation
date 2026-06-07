import { test, expect } from "@playwright/test";
import { CommonUI } from "./CommonUI";

test.describe("", () => {
  test.beforeEach(async ({ page }) => {
    await CommonUI.login(page);
    await CommonUI.completeStartApplicationStep(
      page,
      "John",
      "Doe",
      "john.doe@example.com",
      "1234567890",
      "Facebook",
    );
  });

  test("1", async ({ page }) => {});

  test("2", async ({ page }) => {});

  test("3", async ({ page }) => {});

  test("4", async ({ page }) => {});
});
