import { expect, test } from "@playwright/test";

const visiblePopup = "body > .shardo-datepicker-panel:not(.shardo-datepicker-inline):not([hidden])";

function day(page, year, month, date, scope = visiblePopup) {
  return page.locator(`${scope} .shardo-datepicker-day[data-year="${year}"][data-month="${month}"][data-day="${date}"]`);
}

test("respects global autoInit=false while allowing manual autoInit", async ({ page }) => {
  await page.goto("/tests/fixtures/auto-init-off.html");
  await page.waitForFunction(() => window.ready === true);

  await expect(page.locator(".shardo-datepicker-panel")).toHaveCount(0);
  await expect(page.locator("#autoOffPicker")).not.toHaveClass(/shardo-datepicker-input/);

  const count = await page.evaluate(() => window.ShardoDatePicker.autoInit().length);
  expect(count).toBe(1);
  await expect(page.locator("#autoOffPicker")).toHaveClass(/shardo-datepicker-input/);
  await expect(page.locator('[name="autoOffPicker_gregorian"]')).toHaveValue("2026-05-03");
});

test("falls back to defaults for malformed JSON attributes without blocking other controls", async ({ page }) => {
  await page.goto("/tests/fixtures/malformed-json.html");
  await page.waitForFunction(() => window.ready === true);

  await expect(page.locator("#badPicker")).toHaveClass(/shardo-datepicker-input/);
  await expect(page.locator('#badPicker + input[type="hidden"]')).toHaveCount(1);
  await expect(page.locator("#goodPicker")).toHaveClass(/shardo-datepicker-input/);
  await expect(page.locator("#goodPicker")).toHaveValue("1405/02/13");
});

test("does not dispatch native input/change events for initial values", async ({ page }) => {
  await page.goto("/tests/fixtures/lifecycle.html");
  await page.waitForFunction(() => window.ready === true);

  const events = await page.evaluate(() => window.nativeEvents);
  expect(events).toEqual([]);
  await expect(page.locator("#initialPicker")).toHaveValue("1405/02/13");
});

test("closes on the first outside click after programmatic focus", async ({ page }) => {
  await page.goto("/tests/fixtures/lifecycle.html");
  await page.waitForFunction(() => window.ready === true);

  await page.evaluate(() => document.querySelector("#focusPicker").focus());
  const panel = page.locator(visiblePopup);
  await expect(panel).toBeVisible();
  await page.mouse.click(1, 1);
  await expect(panel).toBeHidden();
});

test("does not commit an incomplete range when Today starts a range", async ({ page }) => {
  await page.goto("/tests/fixtures/lifecycle.html");
  await page.waitForFunction(() => window.ready === true);

  await page.getByLabel("range today picker", { exact: true }).click();
  const panel = page.locator(visiblePopup);
  await expect(panel).toBeVisible();
  await panel.getByText("امروز", { exact: true }).click();
  await expect(panel).toBeVisible();
  await expect(page.getByLabel("range today picker", { exact: true })).toHaveValue("");
  await expect(page.locator('[name="rangeTodayPicker_gregorian"]')).toHaveValue("");
});

test("orders weekday labels with weekStart", async ({ page }) => {
  await page.goto("/tests/fixtures/lifecycle.html");
  await page.waitForFunction(() => window.ready === true);

  await page.getByLabel("week start picker", { exact: true }).click();
  const panel = page.locator(visiblePopup);
  await expect(panel.locator(".shardo-datepicker-weekday")).toHaveText(["SU", "MO", "TU", "WE", "TH", "FR", "SA"]);
});

test("supports selector appendTo and positions inside a relative container", async ({ page }) => {
  await page.goto("/tests/fixtures/lifecycle.html");
  await page.waitForFunction(() => window.ready === true);

  await page.getByLabel("append string picker", { exact: true }).click();
  const panel = page.locator("#relativePortal > .shardo-datepicker-panel:not([hidden])");
  await expect(panel).toBeVisible();
  await expect(panel).toHaveAttribute("data-placement", page.viewportSize().width <= 640 ? "sheet" : "right");

  if (page.viewportSize().width > 640) {
    const layout = await page.evaluate(() => {
      const input = document.querySelector("#appendStringPicker").getBoundingClientRect();
      const panel = document.querySelector("#relativePortal > .shardo-datepicker-panel:not([hidden])").getBoundingClientRect();
      return {
        inputRight: input.right,
        panelLeft: panel.left
      };
    });
    expect(panel).toBeTruthy();
    expect(layout.panelLeft).toBeGreaterThanOrEqual(layout.inputRight);
  }
});

test("destroy removes stale instance references and allows re-init", async ({ page }) => {
  await page.goto("/tests/fixtures/lifecycle.html");
  await page.waitForFunction(() => window.ready === true);

  const result = await page.evaluate(() => {
    const input = document.querySelector("#focusPicker");
    const first = input.shardoDatePicker;
    first.destroy();
    const afterDestroy = Boolean(input.shardoDatePicker);
    const second = window.ShardoDatePicker.autoInit().find((picker) => picker.input === input);
    return {
      afterDestroy,
      recreated: Boolean(second && second !== first)
    };
  });

  expect(result).toEqual({
    afterDestroy: false,
    recreated: true
  });
});
