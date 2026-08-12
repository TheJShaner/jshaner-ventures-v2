import assert from "node:assert/strict";
import test from "node:test";

import { submitFormspree } from "../src/lib/formspree.ts";

test("submits form data with Formspree's JSON response header", async () => {
  const formData = new FormData();
  formData.set("email", "buyer@example.com");
  let captured;
  const ok = await submitFormspree("https://formspree.io/f/test", formData, async (url, init) => {
    captured = { url, init };
    return new Response(null, { status: 200 });
  });

  assert.equal(ok, true);
  assert.equal(captured.url, "https://formspree.io/f/test");
  assert.equal(captured.init.method, "POST");
  assert.equal(captured.init.body, formData);
  assert.deepEqual(captured.init.headers, { Accept: "application/json" });
});

test("reports non-2xx and network failures without throwing", async () => {
  const formData = new FormData();
  assert.equal(
    await submitFormspree("https://formspree.io/f/test", formData, async () => new Response(null, { status: 422 })),
    false,
  );
  assert.equal(
    await submitFormspree("https://formspree.io/f/test", formData, async () => {
      throw new Error("offline");
    }),
    false,
  );
});
