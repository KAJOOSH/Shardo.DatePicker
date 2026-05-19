import { expect, test } from "@playwright/test";

const path = "/tests/fixtures/user-settings.html";
const visiblePopup = "body > .shardo-datepicker-panel:not(.shardo-datepicker-inline):not([hidden])";

async function openByLabel(page, label) {
  const input = page.getByLabel(label, { exact: true });
  await expect(input).toHaveCount(1);
  await input.click();
  const panel = page.locator(visiblePopup);
  await expect(panel).toBeVisible();
  return panel;
}

function day(page, year, month, date, scope = visiblePopup) {
  return page.locator(`${scope} .shardo-datepicker-day[data-year="${year}"][data-month="${month}"][data-day="${date}"]`);
}

async function recordedEvents(page, target, type) {
  return page.evaluate(({ target, type }) => window.recordedEvents.filter((event) => event.target === target && (!type || event.type === type)), { target, type });
}

test.beforeEach(async ({ page }) => {
  await page.goto(path);
  await page.waitForFunction(() => window.ready === true);
});

test("parses every configured option from attributes and JS options", async ({ page }) => {
  const snapshot = await page.evaluate(() => {
    const allSettings = document.querySelector("#allSettings").shardoDatePicker.options;
    const jsOnly = window.jsPicker.options;
    return {
      allSettings: {
        format: allSettings.format,
        gregorianFormat: allSettings.gregorianFormat,
        showTime: allSettings.showTime,
        timeStep: allSettings.timeStep,
        min: allSettings.min,
        max: allSettings.max,
        disabledDates: allSettings.disabledDates,
        disablePast: allSettings.disablePast,
        disableFuture: allSettings.disableFuture,
        showFridayHolidays: allSettings.showFridayHolidays,
        holidays: allSettings.holidays,
        bootstrapTheme: allSettings.bootstrapTheme,
        theme: allSettings.theme,
        autoClose: allSettings.autoClose,
        usePersianDigits: allSettings.usePersianDigits,
        inputReadonly: allSettings.inputReadonly,
        range: allSettings.range,
        rangeSeparator: allSettings.rangeSeparator,
        hiddenInput: allSettings.hiddenInput,
        hiddenInputName: allSettings.hiddenInputName,
        hiddenInputId: allSettings.hiddenInputId,
        gregorianRangeSeparator: allSettings.gregorianRangeSeparator,
        inline: allSettings.inline,
        weekStart: allSettings.weekStart,
        autoInit: allSettings.autoInit,
        showSelectedText: allSettings.showSelectedText,
        selectedTextFormat: allSettings.selectedTextFormat,
        selectedTextRangeSeparator: allSettings.selectedTextRangeSeparator,
        months: allSettings.months,
        weekdays: allSettings.weekdays,
        weekdayNames: allSettings.weekdayNames,
        yearRange: allSettings.yearRange
      },
      jsOnly: {
        appendTo: jsOnly.appendTo?.id || "",
        value: document.querySelector("#jsOnly").value,
        gregorian: document.querySelector('[name="js_only"]').value,
        callbacks: ["onOpen", "onClose", "onSelect", "onChange"].map((name) => typeof jsOnly[name])
      }
    };
  });

  expect(snapshot.allSettings).toMatchObject({
    format: "yyyy/MM/dd",
    gregorianFormat: "yyyy-MM-dd",
    showTime: false,
    timeStep: 10,
    min: "1405/02/01",
    max: "1405/02/29",
    disabledDates: ["1405/02/10"],
    disablePast: false,
    disableFuture: false,
    showFridayHolidays: true,
    holidays: ["1405/02/15"],
    bootstrapTheme: true,
    theme: "auto",
    autoClose: true,
    usePersianDigits: false,
    inputReadonly: false,
    range: false,
    rangeSeparator: "__",
    hiddenInput: true,
    hiddenInputName: "all_settings",
    hiddenInputId: "all_settings_gregorian",
    gregorianRangeSeparator: "..",
    inline: false,
    weekStart: 6,
    autoInit: true,
    showSelectedText: true,
    selectedTextFormat: "dddd d MMMM yyyy",
    selectedTextRangeSeparator: "__",
    yearRange: 90
  });
  expect(snapshot.allSettings.months).toEqual(["Farvardin", "Ordibehesht", "Khordad", "Tir", "Mordad", "Shahrivar", "Mehr", "Aban", "Azar", "Dey", "Bahman", "Esfand"]);
  expect(snapshot.allSettings.weekdays).toEqual(["SA", "SU", "MO", "TU", "WE", "TH", "FR"]);
  expect(snapshot.allSettings.weekdayNames).toEqual(["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]);
  expect(snapshot.jsOnly).toEqual({
    appendTo: "portal",
    value: "1405/02/12",
    gregorian: "2026-05-02",
    callbacks: ["function", "function", "function", "function"]
  });
});

test("initializes from attributes and applies visible date-only settings", async ({ page }) => {
  const input = page.getByLabel("all settings", { exact: true });
  await expect(input).toHaveValue("1405/02/01");
  await expect(input).not.toHaveAttribute("readonly", "");
  await expect(page.locator("#all_settings_gregorian")).toHaveValue("2026-04-21");
  await expect(input).toHaveClass(/shardo-datepicker-theme-bootstrap5/);

  const panel = await openByLabel(page, "all settings");
  await expect(panel.locator(".shardo-datepicker-view-button")).toHaveText("Ordibehesht 1405");
  await expect(panel.locator(".shardo-datepicker-weekday")).toHaveText(["SA", "SU", "MO", "TU", "WE", "TH", "FR"]);
  await expect(day(page, 1405, 1, 31)).toBeDisabled();
  await expect(day(page, 1405, 2, 10)).toBeDisabled();
  await expect(day(page, 1405, 2, 30)).toBeDisabled();
  await expect(day(page, 1405, 2, 15)).toHaveClass(/shardo-datepicker-is-holiday/);
  await expect(day(page, 1405, 2, 4)).toHaveClass(/shardo-datepicker-is-holiday/);
  await expect(panel.locator(".shardo-datepicker-is-primary")).toBeHidden();

  await day(page, 1405, 2, 13).click();
  await expect(panel).toBeHidden();
  await expect(input).toHaveValue("1405/02/13");
  await expect(page.locator("#all_settings_gregorian")).toHaveValue("2026-05-03");

  const events = await recordedEvents(page, "allSettings", "shardo-datepicker:change");
  expect(events.at(-1).detail).toMatchObject({
    value: "1405/02/13",
    gregorianValue: "2026-05-03",
    selectedText: "Sunday 13 Ordibehesht 1405",
    isRange: false,
    jalali: { jy: 1405, jm: 2, jd: 13, hour: 0, minute: 0 }
  });
});

test("shows selected text in the panel and keeps time picker open until confirm", async ({ page }) => {
  const panel = await openByLabel(page, "time picker");
  await expect(panel.locator(".shardo-datepicker-is-primary")).toBeVisible();
  await panel.locator(".shardo-datepicker-time-input").nth(0).fill("14");
  await panel.locator(".shardo-datepicker-time-input").nth(1).fill("37");
  await day(page, 1405, 2, 13).click();
  await expect(panel).toBeVisible();
  await expect(panel.locator(".shardo-datepicker-selected-text")).toHaveText("Sunday 13 Ordibehesht 1405");
  await panel.locator(".shardo-datepicker-is-primary").click();

  await expect(page.getByLabel("time picker", { exact: true })).toHaveValue("1405/02/13 14:35");
  await expect(page.locator('[name="time_picker"]')).toHaveValue("2026-05-03 14:35");

  const events = await recordedEvents(page, "timePicker", "shardo-datepicker:change");
  expect(events.at(-1).detail).toMatchObject({
    value: "1405/02/13 14:35",
    gregorianValue: "2026-05-03 14:35",
    selectedText: "Sunday 13 Ordibehesht 1405"
  });
});

test("shows range preview while hovering and commits a range with custom separators", async ({ page }) => {
  const panel = await openByLabel(page, "range picker");
  await day(page, 1405, 2, 2).click();
  await expect(panel).toBeVisible();
  await day(page, 1405, 2, 7).hover();
  await expect(panel.locator(".shardo-datepicker-is-preview")).not.toHaveCount(0);
  await expect(day(page, 1405, 2, 7)).toHaveClass(/shardo-datepicker-is-range-preview-end/);
  await day(page, 1405, 2, 7).click();

  await expect(panel).toBeHidden();
  await expect(page.getByLabel("range picker", { exact: true })).toHaveValue("1405/02/02__1405/02/07");
  await expect(page.locator('[name="range_picker"]')).toHaveValue("2026-04-22..2026-04-27");

  const events = await recordedEvents(page, "rangePicker", "shardo-datepicker:change");
  expect(events.at(-1).detail).toMatchObject({
    value: "1405/02/02__1405/02/07",
    gregorianValue: "2026-04-22..2026-04-27",
    isRange: true
  });
});

test("allows manual clearing and clears the hidden Gregorian value", async ({ page }) => {
  const panel = await openByLabel(page, "manual picker");
  await day(page, 1405, 2, 13).click();
  await expect(page.getByLabel("manual picker", { exact: true })).toHaveValue("1405/02/13");
  await expect(page.locator('[name="manual_picker"]')).toHaveValue("2026-05-03");

  await page.getByLabel("manual picker", { exact: true }).fill("");
  await expect(page.locator('[name="manual_picker"]')).toHaveValue("");

  const events = await recordedEvents(page, "manualPicker", "shardo-datepicker:clear");
  expect(events.length).toBeGreaterThan(0);
});

test("supports JSON attribute configuration", async ({ page }) => {
  const panel = await openByLabel(page, "json picker");
  await expect(panel.locator(".shardo-datepicker-is-primary")).toBeHidden();
  await day(page, 1405, 2, 13).click();

  await expect(page.getByLabel("json picker", { exact: true })).toHaveValue("1405/02/13");
  await expect(page.locator('[name="json_picker"]')).toHaveValue("2026-05-03");
});

test("supports readonly, hiddenInput=false, Persian digits, disablePast, and disableFuture", async ({ page }) => {
  await expect(page.getByLabel("readonly picker", { exact: true })).toHaveAttribute("readonly", "");
  await expect(page.locator("#hiddenOffPicker + input[type='hidden']")).toHaveCount(0);

  let panel = await openByLabel(page, "persian digits picker");
  await day(page, 1405, 2, 13).click();
  await expect(page.getByLabel("persian digits picker", { exact: true })).toHaveValue("۱۴۰۵/۰۲/۱۳");

  panel = await openByLabel(page, "disable past picker");
  await expect(day(page, 1405, 2, 28)).toBeDisabled();
  await expect(day(page, 1405, 2, 29)).toBeEnabled();
  await page.keyboard.press("Escape");

  panel = await openByLabel(page, "disable future picker");
  await expect(day(page, 1405, 2, 29)).toBeEnabled();
  await expect(day(page, 1405, 2, 30)).toBeDisabled();
});

test("supports JS-only settings, callbacks, initial value, and appendTo", async ({ page }) => {
  await expect(page.getByLabel("js only picker", { exact: true })).toHaveValue("1405/02/12");
  await expect(page.locator('[name="js_only"]')).toHaveValue("2026-05-02");
  await expect(page.locator("#portal > .shardo-datepicker-panel")).toHaveCount(1);

  await page.getByLabel("js only picker", { exact: true }).click();
  const panel = page.locator("#portal > .shardo-datepicker-panel:not([hidden])");
  await expect(panel).toBeVisible();
  await day(page, 1405, 2, 13, "#portal > .shardo-datepicker-panel:not([hidden])").click();
  await expect(panel).toBeHidden();

  const callbacks = await page.evaluate(() => window.callbackEvents);
  expect(callbacks).toEqual(expect.arrayContaining([
    "open",
    "select:1405/02/13",
    "change:1405/02/13:2026-05-03",
    "close"
  ]));
});

test("supports inline mode without a hidden input", async ({ page }) => {
  const inline = page.locator("#inlinePicker");
  const panel = inline.locator(".shardo-datepicker-panel");
  await expect(panel).toBeVisible();
  await expect(inline.locator('input[type="hidden"]')).toHaveCount(0);

  await page.locator('#inlinePicker .shardo-datepicker-day[data-year="1405"][data-month="2"][data-day="13"]').click();
  await expect(panel.locator(".shardo-datepicker-is-primary")).toBeVisible();
  await panel.locator(".shardo-datepicker-is-primary").click();

  const events = await recordedEvents(page, "inlinePicker", "shardo-datepicker:change");
  expect(events.at(-1).detail.value).toContain("1405/02/13");
});

test("uses Bootstrap variables, data-bs-theme dark mode, and explicit theme=dark", async ({ page }) => {
  const input = page.getByLabel("all settings", { exact: true });
  const inlinePanel = page.locator("#inlinePicker .shardo-datepicker-panel");
  await expect(input).toHaveCSS("background-color", "rgb(255, 255, 255)");
  await expect(inlinePanel).toHaveCSS("background-color", "rgb(255, 255, 255)");

  await page.evaluate(() => {
    document.documentElement.dataset.bsTheme = "dark";
    document.body.dataset.bsTheme = "dark";
  });

  await expect(input).toHaveCSS("background-color", "rgb(33, 37, 41)");
  await expect(inlinePanel).toHaveCSS("background-color", "rgb(33, 37, 41)");

  const bootstrapPopup = await openByLabel(page, "all settings");
  await expect(bootstrapPopup).toHaveCSS("background-color", "rgb(33, 37, 41)");
  await page.keyboard.press("Escape");

  await page.evaluate(() => {
    document.documentElement.dataset.bsTheme = "light";
    document.body.dataset.bsTheme = "light";
  });

  await expect(input).toHaveCSS("background-color", "rgb(255, 255, 255)");
  await expect(inlinePanel).toHaveCSS("background-color", "rgb(255, 255, 255)");

  const lightPopup = await openByLabel(page, "all settings");
  await expect(lightPopup).not.toHaveClass(/shardo-datepicker-theme-dark-resolved/);
  await expect(lightPopup).toHaveCSS("background-color", "rgb(255, 255, 255)");
  await page.keyboard.press("Escape");

  await page.evaluate(() => {
    document.documentElement.dataset.bsTheme = "dark";
    document.body.dataset.bsTheme = "dark";
  });

  const darkPanel = await openByLabel(page, "dark option picker");
  await expect(darkPanel).toHaveCSS("background-color", "rgb(21, 24, 31)");
  await page.keyboard.press("Escape");

  const parentPanel = await openByLabel(page, "dark parent picker");
  await expect(page.getByLabel("dark parent picker", { exact: true })).toHaveClass(/shardo-datepicker-theme-dark/);
  await expect(parentPanel).toHaveClass(/shardo-datepicker-theme-dark/);
  await expect(parentPanel).toHaveCSS("background-color", "rgb(21, 24, 31)");
  await page.keyboard.press("Escape");

  const bootstrapParentPanel = await openByLabel(page, "bootstrap dark parent picker");
  await expect(page.getByLabel("bootstrap dark parent picker", { exact: true })).toHaveClass(/shardo-datepicker-theme-bootstrap5/);
  await expect(bootstrapParentPanel).toHaveClass(/shardo-datepicker-theme-dark/);
  await expect(bootstrapParentPanel).toHaveCSS("background-color", "rgb(33, 37, 41)");
  await page.keyboard.press("Escape");

  await page.evaluate(() => {
    document.documentElement.dataset.bsTheme = "light";
    document.body.dataset.bsTheme = "light";
    document.documentElement.style.backgroundColor = "rgb(17, 24, 39)";
    document.body.style.backgroundColor = "rgb(17, 24, 39)";
  });

  const fallbackPanel = await openByLabel(page, "all settings");
  await expect(fallbackPanel).toHaveClass(/shardo-datepicker-theme-dark-resolved/);
  await expect(fallbackPanel).toHaveCSS("background-color", "rgb(21, 24, 31)");
});

test("autoInit does not duplicate existing controls", async ({ page }) => {
  const before = await page.locator(".shardo-datepicker-panel").count();
  const after = await page.evaluate(() => {
    window.ShardoDatePicker.autoInit();
    return document.querySelectorAll(".shardo-datepicker-panel").length;
  });
  expect(after).toBe(before);
});

test("keeps the popup inside the mobile viewport", async ({ page }) => {
  const panel = await openByLabel(page, "manual picker");
  const box = await panel.boundingBox();
  const viewport = page.viewportSize();
  expect(box.width).toBeLessThanOrEqual(viewport.width);
  expect(box.x).toBeGreaterThanOrEqual(0);
  expect(box.x + box.width).toBeLessThanOrEqual(viewport.width);
});
