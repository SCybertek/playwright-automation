import { expect, test } from "@playwright/test";
test("Patch the spartant ", async ({ request }) => {
  let id = 859;
  let updateBody = {
    name: "Sofi Test Patched",
  };
  const response = await request.patch(`/api/v2/spartans/${id}`, {
    data: updateBody,
  });
  let statusCode = response.status();
  let headers = response.headers();
  let body = await response.json();
  expect(body.data.name).toBe("Sofi Test Patched");
  expect(statusCode).toBe(200);
});
