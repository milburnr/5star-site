import { defineConfig, devices } from "@playwright/test";

/**
 * Self-healing regression test config for the 5star site.
 *
 * Targets a running dev server at BASE_URL (default http://localhost:4250 —
 * port 3000 is held by Graphiti MCP per project memory).
 *
 * Runs each test against two viewports (mobile + desktop) so a bug that only
 * appears at one breakpoint can't slip through. Screenshots and traces are
 * captured on failure so the self-heal loop driver can pass them to a fixer
 * agent as evidence.
 */
const BASE_URL = process.env.BASE_URL || "http://localhost:4250";

export default defineConfig({
  testDir: "./tests",
  testMatch: /.*\.spec\.ts$/,
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: 0,
  workers: process.env.CI ? 2 : 4,
  reporter: [
    ["list"],
    ["json", { outputFile: "tests/.results/results.json" }],
    ["html", { outputFolder: "tests/.results/html", open: "never" }],
  ],
  outputDir: "tests/.results/artifacts",
  use: {
    baseURL: BASE_URL,
    screenshot: "only-on-failure",
    video: "retain-on-failure",
    trace: "retain-on-failure",
    actionTimeout: 10_000,
    navigationTimeout: 30_000,
  },
  projects: [
    {
      name: "desktop",
      use: { ...devices["Desktop Chrome"], viewport: { width: 1440, height: 900 } },
    },
    {
      // Use Chromium with an iPhone-13-shaped viewport. Cross-browser webkit
      // testing isn't the goal here; catching mobile-vs-desktop layout bugs is.
      // Skipping webkit keeps the test install lean (just Chromium).
      name: "mobile",
      use: {
        ...devices["Desktop Chrome"],
        viewport: { width: 390, height: 844 },
        isMobile: true,
        hasTouch: true,
        userAgent:
          "Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/15E148 Safari/604.1",
      },
    },
  ],
});
