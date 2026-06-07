import { expect, test } from "@playwright/test";
test("Patch the spartant ", async ({ request }) => {
  let id = 859;
  let updateBody = {
    name: "Sofi Test Patched",
  };
  const response = await request.delete(`/api/v2/spartans/${id}`);
  let statusCode = response.status();
  let headers = response.headers();
  let body = await response.json();
  expect(body.message).toBe("Successfully deleted the Spartan.");
  expect(statusCode).toBe(200);
});
