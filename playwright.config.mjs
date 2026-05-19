import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests/e2e",
  timeout: 30000,
  expect: {
    timeout: 5000
  },
  webServer: {
    command: "node scripts/serve.mjs 5174",
    url: "http://127.0.0.1:5174/tests/fixtures/user-settings.html",
    reuseExistingServer: !process.env.CI,
    timeout: 15000
  },
  use: {
    baseURL: "http://127.0.0.1:5174",
    trace: "on-first-retry"
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] }
    },
    {
      name: "mobile-chrome",
      use: { ...devices["Pixel 5"] }
    }
  ]
});
