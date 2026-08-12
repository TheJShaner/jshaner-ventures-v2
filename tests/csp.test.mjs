import assert from "node:assert/strict";
import test from "node:test";

import nextConfig from "../next.config.ts";

test("CSP permits every external analytics script loaded by the root layout", async () => {
  const rules = await nextConfig.headers();
  const csp = rules[0].headers.find((header) => header.key === "Content-Security-Policy")?.value || "";

  assert.match(csp, /script-src[^;]*https:\/\/analytics\.ahrefs\.com/);
  assert.match(csp, /script-src[^;]*https:\/\/www\.googletagmanager\.com/);
  assert.match(csp, /connect-src[^;]*https:\/\/analytics\.ahrefs\.com/);
});
