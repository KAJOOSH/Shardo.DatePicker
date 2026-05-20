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
        value: allSettings.value,
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
        placement: allSettings.placement,
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
    value: "1405/02/01",
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
    placement: "auto",
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
  await expect(panel.getByLabel("ماه قبل").locator("path").first()).toHaveAttribute("d", "m9 18 6-6-6-6");
  await expect(panel.getByLabel("ماه بعد").locator("path").first()).toHaveAttribute("d", "m15 18-6-6 6-6");
  const monthNavigation = await panel.locator(".shardo-datepicker-header > .shardo-datepicker-button").evaluateAll((buttons) => buttons.map((button) => button.getBoundingClientRect().x));
  expect(monthNavigation[0]).toBeGreaterThan(monthNavigation[1]);
  await expect(day(page, 1405, 1, 31)).toBeDisabled();
  await expect(day(page, 1405, 2, 10)).toBeDisabled();
  await expect(day(page, 1405, 2, 30)).toBeDisabled();
  await expect(day(page, 1405, 2, 15)).toHaveClass(/shardo-datepicker-is-holiday/);
  await expect(day(page, 1405, 2, 4)).toHaveClass(/shardo-datepicker-is-holiday/);
  await expect(panel.locator(".shardo-datepicker-is-primary")).toBeHidden();
  await expect(panel.getByText("امروز", { exact: true })).toBeVisible();
  await expect(panel.getByLabel("پاک کردن").locator("path").first()).toHaveAttribute("d", "M3 6h18");
  const footerLayout = await panel.locator(".shardo-datepicker-footer").evaluate((footer) => {
    const today = footer.querySelector(":scope > .shardo-datepicker-button");
    const actions = footer.querySelector(".shardo-datepicker-footer-actions");
    return {
      todayX: today.getBoundingClientRect().x,
      actionsX: actions.getBoundingClientRect().x,
      visibleActions: [...actions.querySelectorAll("button")].filter((button) => getComputedStyle(button).display !== "none").length
    };
  });
  expect(footerLayout.todayX).toBeGreaterThan(footerLayout.actionsX);
  expect(footerLayout.visibleActions).toBe(2);

  await panel.locator(".shardo-datepicker-view-button").click();
  await expect(panel.locator(".shardo-datepicker-month-grid")).toHaveClass(/shardo-datepicker-is-visible/);
  await expect(panel.locator(".shardo-datepicker-year-grid")).not.toHaveClass(/shardo-datepicker-is-visible/);
  await panel.locator(".shardo-datepicker-switcher-tab").nth(1).click();
  await expect(panel.locator(".shardo-datepicker-year-grid")).toHaveClass(/shardo-datepicker-is-visible/);
  await expect(panel.locator(".shardo-datepicker-month-grid")).not.toHaveClass(/shardo-datepicker-is-visible/);
  await expect(panel.getByLabel("سال قبل").locator("path").first()).toHaveAttribute("d", "m9 18 6-6-6-6");
  await expect(panel.getByLabel("سال بعد").locator("path").first()).toHaveAttribute("d", "m15 18-6-6 6-6");
  const yearNavigation = await panel.locator(".shardo-datepicker-year-bar > .shardo-datepicker-button").evaluateAll((buttons) => buttons.map((button) => button.getBoundingClientRect().x));
  expect(yearNavigation[0]).toBeGreaterThan(yearNavigation[1]);
  await panel.locator(".shardo-datepicker-view-button").click();

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
  await day(page, 1405, 2, 14).hover();
  await expect(panel.locator(".shardo-datepicker-selected-text")).toHaveText("Monday 14 Ordibehesht 1405");
  const daysBox = await panel.locator(".shardo-datepicker-days").boundingBox();
  await page.mouse.move(daysBox.x - 10, daysBox.y - 10);
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
  await expect(panel.locator(".shardo-datepicker-selected-text")).toHaveText("چهارشنبه 2 اردیبهشت__دوشنبه 7 اردیبهشت");
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

test("accepts Gregorian and Jalali date values in date attributes", async ({ page }) => {
  const input = page.getByLabel("gregorian attribute picker", { exact: true });
  await expect(input).toHaveValue("1405/02/13");
  await expect(page.locator('[name="gregorian_attribute_picker"]')).toHaveValue("2026-05-03");

  const panel = await openByLabel(page, "gregorian attribute picker");
  await expect(day(page, 1405, 2, 10)).toBeDisabled();
  await expect(day(page, 1405, 2, 12)).toBeDisabled();
  await expect(day(page, 1405, 2, 16)).toBeDisabled();
  await expect(day(page, 1405, 2, 14)).toHaveClass(/shardo-datepicker-is-holiday/);
  await page.keyboard.press("Escape");

  await expect(page.getByLabel("mixed range value picker", { exact: true })).toHaveValue("1405/02/11__1405/02/15");
  await expect(page.locator('[name="mixed_range_value_picker"]')).toHaveValue("2026-05-01..2026-05-05");
});

test("uses window global defaults during attribute auto-init", async ({ page }) => {
  const snapshot = await page.evaluate(() => {
    const input = document.querySelector("#globalAttributePicker");
    const picker = input.shardoDatePicker;
    return {
      value: input.value,
      gregorian: document.querySelector('[name="global_attribute_picker_display_gregorian"]').value,
      format: picker.options.format,
      gregorianFormat: picker.options.gregorianFormat,
      showTime: picker.options.showTime,
      autoClose: picker.options.autoClose,
      showFridayHolidays: picker.options.showFridayHolidays,
      holidaysType: typeof picker.options.holidays,
      showSelectedText: picker.options.showSelectedText,
      placement: picker.options.placement
    };
  });

  expect(snapshot).toMatchObject({
    value: "1405/02/13",
    gregorian: "2026-05-03",
    format: "yyyy/MM/dd",
    gregorianFormat: "yyyy-MM-dd",
    showTime: false,
    autoClose: true,
    showFridayHolidays: false,
    holidaysType: "function",
    showSelectedText: true,
    placement: "left"
  });

  const panel = await openByLabel(page, "global attribute picker");
  await expect(panel).toHaveAttribute("data-placement", page.viewportSize().width <= 640 ? "sheet" : "left");
  await expect(day(page, 1405, 2, 4)).not.toHaveClass(/shardo-datepicker-is-holiday/);
  await expect(day(page, 1405, 2, 14)).toHaveClass(/shardo-datepicker-is-holiday/);
  await page.mouse.move(1, 1);
  await expect(panel.locator(".shardo-datepicker-selected-text")).toHaveText("یکشنبه 13 اردیبهشت");
});

test("applies global defaults to newly created controls", async ({ page }) => {
  const snapshot = await page.evaluate(() => {
    window.ShardoDatePicker.setDefaults(() => ({
      value: "2026-05-03",
      format: "yyyy/MM/dd",
      gregorianFormat: "yyyy-MM-dd",
      showTime: false,
      autoClose: true,
      hiddenInputName: "global_configured_picker",
      min: "2026-05-01",
      max: "2026-05-05",
      disabledDates: () => ["2026-05-02"],
      holidays: () => ["2026-05-04"],
      showFridayHolidays: false,
      showSelectedText: true,
      placement: "top"
    }));
    const wrapper = document.createElement("div");
    const label = document.createElement("label");
    const input = document.createElement("input");
    wrapper.className = "field";
    label.htmlFor = "globalConfiguredPicker";
    label.textContent = "global configured picker";
    input.id = "globalConfiguredPicker";
    input.name = "global_configured_picker_display";
    input.setAttribute("data-shardo-datepicker", "");
    wrapper.append(label, input);
    document.body.append(wrapper);
    const picker = new window.ShardoDatePicker(input);
    return {
      value: input.value,
      gregorian: document.querySelector('[name="global_configured_picker"]').value,
      format: picker.options.format,
      placement: picker.options.placement,
      showSelectedText: picker.options.showSelectedText
    };
  });

  expect(snapshot).toEqual({
    value: "1405/02/13",
    gregorian: "2026-05-03",
    format: "yyyy/MM/dd",
    placement: "top",
    showSelectedText: true
  });

  const panel = await openByLabel(page, "global configured picker");
  await expect(panel).toHaveAttribute("data-placement", page.viewportSize().width <= 640 ? "sheet" : "top");
  await expect(day(page, 1405, 2, 10)).toBeDisabled();
  await expect(day(page, 1405, 2, 12)).toBeDisabled();
  await expect(day(page, 1405, 2, 16)).toBeDisabled();
  await expect(day(page, 1405, 2, 14)).toHaveClass(/shardo-datepicker-is-holiday/);
  await expect(panel.locator(".shardo-datepicker-selected-text")).toHaveText("یکشنبه 13 اردیبهشت");
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
  await expect(panel.getByLabel("بستن")).toBeHidden();
  await expect(panel.getByLabel("پاک کردن")).toBeVisible();
  await expect(panel.getByText("امروز", { exact: true })).toBeVisible();

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

test("supports auto and configured desktop placement with mobile sheet fallback", async ({ page }) => {
  const viewport = page.viewportSize();

  if (viewport.width <= 640) {
    const panel = await openByLabel(page, "placement auto picker");
    await expect(panel).toHaveAttribute("data-placement", "sheet");
    await expect(panel).toHaveCSS("position", "fixed");
    return;
  }

  await page.evaluate(() => {
    const input = document.querySelector("#placementAutoPicker");
    input.style.position = "fixed";
    input.style.left = "48px";
    input.style.bottom = "24px";
    input.style.width = "220px";
    input.style.zIndex = "2";
  });

  let panel = await openByLabel(page, "placement auto picker");
  await expect(panel).toHaveAttribute("data-placement", "top");
  const autoLayout = await page.evaluate(() => {
    const input = document.querySelector("#placementAutoPicker").getBoundingClientRect();
    const panel = document.querySelector('body > .shardo-datepicker-panel:not(.shardo-datepicker-inline):not([hidden])').getBoundingClientRect();
    return {
      inputTop: input.top,
      panelBottom: panel.bottom
    };
  });
  expect(autoLayout.panelBottom).toBeLessThanOrEqual(autoLayout.inputTop);
  await page.keyboard.press("Escape");

  await page.evaluate(() => {
    const input = document.querySelector("#placementRightPicker");
    input.style.position = "fixed";
    input.style.left = "24px";
    input.style.top = "120px";
    input.style.width = "220px";
    input.style.zIndex = "2";
  });

  panel = await openByLabel(page, "placement right picker");
  await expect(panel).toHaveAttribute("data-placement", "right");
  const rightLayout = await page.evaluate(() => {
    const input = document.querySelector("#placementRightPicker").getBoundingClientRect();
    const panel = document.querySelector('body > .shardo-datepicker-panel:not(.shardo-datepicker-inline):not([hidden])').getBoundingClientRect();
    return {
      inputRight: input.right,
      panelLeft: panel.left
    };
  });
  expect(rightLayout.panelLeft).toBeGreaterThanOrEqual(rightLayout.inputRight);
});

test("keeps the popup inside desktop viewport and uses a bottom sheet on mobile", async ({ page }) => {
  const panel = await openByLabel(page, "manual picker");
  const box = await panel.boundingBox();
  const viewport = page.viewportSize();
  const position = await panel.evaluate((element) => getComputedStyle(element).position);
  expect(box.width).toBeLessThanOrEqual(viewport.width);
  expect(box.x).toBeGreaterThanOrEqual(0);
  expect(box.x + box.width).toBeLessThanOrEqual(viewport.width);

  if (viewport.width <= 640) {
    expect(position).toBe("fixed");
    expect(Math.abs(viewport.height - box.y - box.height)).toBeLessThanOrEqual(12);
    expect(box.width).toBeGreaterThanOrEqual(viewport.width - 24);
  } else {
    expect(position).toBe("absolute");
  }
});
