import test from "node:test";
import assert from "node:assert/strict";
import { ShardoDatePickerUtils } from "../src/ShardoDatePicker.js";

test("converts Gregorian dates to Jalali dates", () => {
  assert.deepEqual(ShardoDatePickerUtils.gregorianToJalali(2026, 5, 18), { jy: 1405, jm: 2, jd: 28 });
  assert.deepEqual(ShardoDatePickerUtils.gregorianToJalali(2025, 3, 21), { jy: 1404, jm: 1, jd: 1 });
  assert.deepEqual(ShardoDatePickerUtils.gregorianToJalali(2024, 3, 19), { jy: 1402, jm: 12, jd: 29 });
});

test("converts Jalali dates to Gregorian dates", () => {
  assert.deepEqual(ShardoDatePickerUtils.jalaliToGregorian(1405, 2, 28), { gy: 2026, gm: 5, gd: 18 });
  assert.deepEqual(ShardoDatePickerUtils.jalaliToGregorian(1404, 1, 1), { gy: 2025, gm: 3, gd: 21 });
  assert.deepEqual(ShardoDatePickerUtils.jalaliToGregorian(1402, 12, 29), { gy: 2024, gm: 3, gd: 19 });
});

test("validates Jalali leap years and Esfand day 30", () => {
  assert.equal(ShardoDatePickerUtils.isJalaliLeap(1403), true);
  assert.equal(ShardoDatePickerUtils.isValidJalaliDate(1403, 12, 30), true);
  assert.equal(ShardoDatePickerUtils.isJalaliLeap(1404), false);
  assert.equal(ShardoDatePickerUtils.isValidJalaliDate(1404, 12, 30), false);
  assert.equal(ShardoDatePickerUtils.isValidJalaliDate(0, 1, 1), false);
  assert.equal(ShardoDatePickerUtils.isValidJalaliDate(10000, 1, 1), false);
  assert.equal(ShardoDatePickerUtils.isValidJalaliDate(1405, 13, 1), false);
});

test("returns correct month lengths", () => {
  assert.equal(ShardoDatePickerUtils.jalaliMonthLength(1405, 1), 31);
  assert.equal(ShardoDatePickerUtils.jalaliMonthLength(1405, 7), 30);
  assert.equal(ShardoDatePickerUtils.jalaliMonthLength(1403, 12), 30);
  assert.equal(ShardoDatePickerUtils.jalaliMonthLength(1404, 12), 29);
});

test("parses English, Persian, and Arabic digits", () => {
  assert.deepEqual(ShardoDatePickerUtils.parse("1405/02/28 09:05"), { jy: 1405, jm: 2, jd: 28, hour: 9, minute: 5 });
  assert.deepEqual(ShardoDatePickerUtils.parse("۱۴۰۵/۰۲/۲۸"), { jy: 1405, jm: 2, jd: 28, hour: 0, minute: 0 });
  assert.deepEqual(ShardoDatePickerUtils.parse("١٤٠٥/٠٢/٢٨"), { jy: 1405, jm: 2, jd: 28, hour: 0, minute: 0 });
  assert.equal(ShardoDatePickerUtils.parse("1404/12/30"), null);
});

test("parses Gregorian date input without confusing it with Jalali input", () => {
  assert.deepEqual(ShardoDatePickerUtils.parse("2026-05-18 09:05"), { jy: 1405, jm: 2, jd: 28, hour: 9, minute: 5 });
  assert.deepEqual(ShardoDatePickerUtils.parse("gregorian:2026/05/18"), { jy: 1405, jm: 2, jd: 28, hour: 0, minute: 0 });
  assert.deepEqual(ShardoDatePickerUtils.parse({ gy: 2026, gm: 5, gd: 18, hour: 9, minute: 5 }), { jy: 1405, jm: 2, jd: 28, hour: 9, minute: 5 });
  assert.deepEqual(ShardoDatePickerUtils.parse("jalali:1700/01/01"), { jy: 1700, jm: 1, jd: 1, hour: 0, minute: 0 });
  assert.equal(ShardoDatePickerUtils.parse("gregorian:2026/02/29"), null);
});

test("rejects invalid hour and minute values while parsing dates", () => {
  assert.equal(ShardoDatePickerUtils.parse("0000/01/01"), null);
  assert.equal(ShardoDatePickerUtils.parse("jalali:10000/01/01"), null);
  assert.equal(ShardoDatePickerUtils.parse("1405/02/28 24:00"), null);
  assert.equal(ShardoDatePickerUtils.parse("1405/02/28 23:60"), null);
  assert.equal(ShardoDatePickerUtils.parse("2026-05-18 25:90"), null);
  assert.equal(ShardoDatePickerUtils.parse({ jy: 1405, jm: 2, jd: 28, hour: 25, minute: 0 }), null);
  assert.equal(ShardoDatePickerUtils.parse({ gy: 2026, gm: 5, gd: 18, hour: 9, minute: 80 }), null);
});

test("formats Jalali and Gregorian values", () => {
  const parts = { jy: 1405, jm: 2, jd: 28, hour: 9, minute: 5 };
  const date = ShardoDatePickerUtils.toDate(parts);
  assert.equal(ShardoDatePickerUtils.format(parts, "yyyy/MM/dd HH:mm", false), "1405/02/28 09:05");
  assert.equal(ShardoDatePickerUtils.format(parts, "yyyy/MM/dd HH:mm", true), "۱۴۰۵/۰۲/۲۸ ۰۹:۰۵");
  assert.equal(ShardoDatePickerUtils.formatGregorian(date, "yyyy-MM-dd HH:mm"), "2026-05-18 09:05");
});

test("formats selected weekday text with English digits", () => {
  const parts = { jy: 1405, jm: 2, jd: 28, hour: 9, minute: 5 };
  const options = {
    selectedTextFormat: "dddd d MMMM yyyy",
    months: ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"],
    weekdayNames: ["شنبه", "یکشنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه", "پنجشنبه", "جمعه"],
    usePersianDigits: false
  };
  assert.equal(ShardoDatePickerUtils.formatSelectedText(parts, options), "دوشنبه 28 اردیبهشت 1405");
});

test("round trips dates through Date objects", () => {
  const source = { jy: 1410, jm: 12, jd: 29, hour: 23, minute: 45 };
  const date = ShardoDatePickerUtils.toDate(source);
  assert.deepEqual(ShardoDatePickerUtils.fromDate(date), source);
});


