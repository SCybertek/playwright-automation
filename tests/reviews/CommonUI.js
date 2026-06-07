export class CommonUI {
  static async login(page) {
    let encodedCredentials = Buffer.from(
      `${process.env.SEP_USERNAME}:${process.env.SEP_PASSWORD}`,
    ).toString("base64"); // token ....

    await page.setExtraHTTPHeaders({
      Authorization: `Basic ${encodedCredentials}`,
    });

    await page.goto(process.env.SEP_QA_URL);
  }

  static async enterPersonalDetails(
    page,
    firstName,
    lastName,
    email,
    phoneNumber,
    howDidYouHearOption,
  ) {
    let firstNameField = page.locator("//input[@formcontrolname='firstName']");
    let lastNameField = page.locator("//input[@formcontrolname='lastName']");
    let phoneNumberField = page.locator(
      "//input[@formcontrolname='phoneNumber']",
    );
    let emailField = page.locator("//input[@id='mat-input-2']");
    let howDidYouHearDropDown = page.locator(
      "//mat-label[normalize-space()='How did you hear about us?']",
    );

    await firstNameField.fill(firstName);
    await lastNameField.fill(lastName);
    await phoneNumberField.fill(phoneNumber);
    await emailField.fill(email);

    await howDidYouHearDropDown.click();
    await page.click(`//span[text()='${howDidYouHearOption}']`);
  }

  static async completeStartApplicationStep(
    page,
    firstName,
    lastName,
    email,
    phoneNumber,
    howDidYouHearOption,
  ) {
    await this.enterPersonalDetails(
      page,
      firstName,
      lastName,
      email,
      phoneNumber,
      howDidYouHearOption,
    );
    let nextButtonOnStartApplication = page.locator(
      "//button[@type='submit' and normalize-space()='Next']",
    );
    await nextButtonOnStartApplication.click();
  }

  static async completePaymentPlanStep(page, paymentPlan) {}
}
