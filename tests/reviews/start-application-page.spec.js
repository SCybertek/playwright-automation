import { test, expect } from "@playwright/test";
import { CommonUI } from "./CommonUI";
import { faker } from "@faker-js/faker";

test.describe("Start Application Step @sep1", () => {
  test.beforeEach(async ({ page }) => {
    await CommonUI.login(page);
  });

  test("Verify that clicking the Terms & Conditions link opens a new Terms & Conditions tab", async ({
    page,
  }) => {
    let windowPopupEventListener = page.waitForEvent("popup");

    let termsConditionLink = page.getByRole("link", {
      name: "Terms and conditions",
    });
    //a[text()='Terms and conditions']
    await expect(termsConditionLink).toBeVisible();
    await expect(termsConditionLink).toBeEnabled();

    await termsConditionLink.click(); // triggers pop up window
    let page2 = await windowPopupEventListener;

    let termsConditionsHeading = page2.getByRole("heading", {
      name: "Terms and Conditions",
    });

    await expect(termsConditionsHeading).toBeVisible();
  });

  test("Verify that the first stepper is blue initially and changes to green once Step 1 is completed", async ({
    page,
  }) => {
    let firstName = faker.person.firstName();
    let lastName = faker.person.lastName();
    let email = faker.internet.email();
    let phoneNumber = faker.string.numeric(10); // ##########
    let howDidYouHearOption = faker.helpers.arrayElement([
      "Facebook",
      "Instagram",
      "Google",
      "LinkedIN",
    ]);

    await CommonUI.enterPersonalDetails(
      page,
      firstName,
      lastName,
      email,
      phoneNumber,
      howDidYouHearOption,
    );

    let startApplciationStepperCircle = page.locator(
      "(//div[@class='step-circle'])[1]",
    );
    await expect(startApplciationStepperCircle).toHaveCSS(
      "background-color",
      "rgb(1, 201, 255)",
    ); // blue color

    await page.waitForTimeout(3000);

    let nextButtonOnStartApplication = page.locator(
      "//button[@type='submit' and normalize-space()='Next']",
    );
    await nextButtonOnStartApplication.click();

    await expect(startApplciationStepperCircle).toHaveCSS(
      "background-color",
      "rgb(172, 245, 138)",
    ); // green color
  });

  test("Verify that personal input fields are enabled and accept user input", async ({
    page,
  }) => {
    let firstNameField = page.locator("//input[@formcontrolname='firstName']");
    let lastNameField = page.locator("//input[@formcontrolname='lastName']");
    let phoneNumberField = page.locator(
      "//input[@formcontrolname='phoneNumber']",
    );
    let emailField = page.locator("//input[@id='mat-input-2']");

    await expect(firstNameField).toBeEnabled();
    await expect(lastNameField).toBeEnabled();
    await expect(phoneNumberField).toBeEnabled();
    await expect(emailField).toBeEnabled();

    let firstName = faker.person.firstName();
    let lastName = faker.person.lastName();
    let email = faker.internet.email();
    let phoneNumber = faker.string.numeric(10);

    await firstNameField.fill(firstName);
    await expect(firstNameField).toHaveValue(firstName);

    await lastNameField.fill(lastName);
    await expect(lastNameField).toHaveValue(lastName);

    await phoneNumberField.fill(phoneNumber);
    await expect(phoneNumberField).toHaveValue(phoneNumber);

    await emailField.fill(email);
    await expect(emailField).toHaveValue(email);
  });
});

/*
<a _ngcontent-ng-c3758746842="" href="https://cydeo.com/terms-conditions/" target="_blank">Terms and conditions</a>
*/

//tageName[@attributeName='attributeValue']

//a[@href='https://cydeo.com/terms-conditions/']
