import { test, expect } from "@playwright/test";
import { request } from "http";
test("Get request example", async ({ request }) => {
  //const BASE_URL = "https://spartan-app-new-nonsecure.onrender.com";

  let response = await request.get(`/api/v2/spartans`);

  expect(response.status()).toBe(200);

  const headers = response.headers();
  //   console.log("headers " + headers);

  expect(headers["content-type"]).toContain("application/json");

  const body = await response.json();
  console.log(body);

  expect(body.message).toBe("Successfully retrieved all the Spartans.");
});

test("Get request example 2", async ({ request }) => {
  let id = 681;

  const response = await request.get(`/api/v2/spartans/${id}`);
  const body = await response.json();
  const message = body.message;
  const data = body.data;

  expect(message).toBe("Successfully retrieved the Spartan.");
  expect(data.name).toBe("NameOfSpartanPatch");
  expect(data.gender).toBe("Female");
});

/*
List of API testing libraries for different programming languages:
Java : Rest Assured
JavaScript : Axios, Fetch API 
C#: RestSharp
Python : Request 
*/
