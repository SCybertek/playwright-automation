import { request } from "node:http";
import { test, expect } from "@playwright/test";

test.skip("Post request example @post", async ({ request }) => {
  const spartan = {
    name: "Sofi Test",
    gender: "Female",
    phone: "12345678999",
  };

  const response = await request.post(`/api/v2/spartans`, { data: spartan });
  let statusCode = response.status();
  let headers = response.headers();
  let body = await response.json();
  console.log("response body" + body);
});

test("update the spartant ", async ({ request }) => {
  let id = 859;
  let updateBody = {
    name: "Sofi Test Updated",
    gender: "Female",
    phone: "23456789098",
  };
  const response = await request.put(`/api/v2/spartans/${id}`, {
    data: updateBody,
  });
  let statusCode = response.status();
  let headers = response.headers();
  let body = await response.json();
  expect(body.data.name).toBe("Sofi Test Updated");
});
