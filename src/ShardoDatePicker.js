const defaults = {
  value: null,
  format: "yyyy/MM/dd HH:mm",
  showTime: true,
  timeStep: 1,
  min: null,
  max: null,
  disabledDates: [],
  disablePast: false,
  disableFuture: false,
  showFridayHolidays: true,
  holidays: [],
  bootstrapTheme: false,
  theme: "auto",
  autoClose: false,
  usePersianDigits: false,
  inputReadonly: false,
  range: false,
  rangeSeparator: " - ",
  hiddenInput: true,
  hiddenInputName: null,
  hiddenInputId: null,
  gregorianFormat: "yyyy-MM-dd HH:mm",
  gregorianRangeSeparator: " - ",
  inline: false,
  appendTo: null,
  placement: "auto",
  weekStart: 6,
  autoInit: true,
  showSelectedText: false,
  selectedTextFormat: "dddd d MMMM",
  selectedTextRangeSeparator: " تا ",
  months: [
    "فروردین",
    "اردیبهشت",
    "خرداد",
    "تیر",
    "مرداد",
    "شهریور",
    "مهر",
    "آبان",
    "آذر",
    "دی",
    "بهمن",
    "اسفند"
  ],
  weekdays: ["ش", "ی", "د", "س", "چ", "پ", "ج"],
  weekdayNames: ["شنبه", "یکشنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه", "پنجشنبه", "جمعه"],
  yearRange: 80,
  onChange: null,
  onOpen: null,
  onClose: null,
  onSelect: null
};

let globalDefaults = {};

const classNames = {
  icon: "shardo-datepicker-is-icon",
  primary: "shardo-datepicker-is-primary",
  danger: "shardo-datepicker-is-danger",
  active: "shardo-datepicker-is-active",
  visible: "shardo-datepicker-is-visible",
  open: "shardo-datepicker-is-open",
  outside: "shardo-datepicker-is-outside",
  today: "shardo-datepicker-is-today",
  selected: "shardo-datepicker-is-selected",
  rangeStart: "shardo-datepicker-is-range-start",
  rangeEnd: "shardo-datepicker-is-range-end",
  inRange: "shardo-datepicker-is-in-range",
  preview: "shardo-datepicker-is-preview",
  rangePreviewEnd: "shardo-datepicker-is-range-preview-end",
  disabled: "shardo-datepicker-is-disabled",
  holiday: "shardo-datepicker-is-holiday",
  hasConfirm: "shardo-datepicker-has-confirm",
  themeAuto: "shardo-datepicker-theme-auto",
  themeDark: "shardo-datepicker-theme-dark",
  themeDarkResolved: "shardo-datepicker-theme-dark-resolved",
  themeBootstrap5: "shardo-datepicker-theme-bootstrap5"
};

const persianDigits = "۰۱۲۳۴۵۶۷۸۹";
const arabicDigits = "٠١٢٣٤٥٦٧٨٩";
const darkThemeSelector = '[data-bs-theme="dark"], [data-theme="dark"], .dark, .theme-dark, .is-dark';
const bootstrapVariableNames = [
  "--bs-body-bg",
  "--bs-body-color",
  "--bs-secondary-color",
  "--bs-tertiary-color",
  "--bs-border-color",
  "--bs-border-color-translucent",
  "--bs-secondary-bg",
  "--bs-tertiary-bg",
  "--bs-primary",
  "--bs-primary-rgb",
  "--bs-primary-text-emphasis",
  "--bs-primary-bg-subtle",
  "--bs-primary-border-subtle",
  "--bs-danger",
  "--bs-danger-bg-subtle",
  "--bs-danger-border-subtle",
  "--bs-white",
  "--bs-box-shadow-lg",
  "--bs-border-radius",
  "--bs-body-font-family"
];
const darkFallbackVariables = {
  "--shardo-datepicker-bg": "#15181f",
  "--shardo-datepicker-fg": "#f1f5f9",
  "--shardo-datepicker-muted": "#aab4c2",
  "--shardo-datepicker-muted-soft": "#748094",
  "--shardo-datepicker-border": "#303744",
  "--shardo-datepicker-border-strong": "#465266",
  "--shardo-datepicker-soft": "#1f2530",
  "--shardo-datepicker-soft-strong": "#2a3240",
  "--shardo-datepicker-control-bg": "#1b2029",
  "--shardo-datepicker-input-bg": "linear-gradient(180deg, #1d2430, #181d26)",
  "--shardo-datepicker-control-hover-bg": "#242b37",
  "--shardo-datepicker-primary-soft": "rgba(45, 212, 191, 0.16)",
  "--shardo-datepicker-primary-range": "rgba(45, 212, 191, 0.14)",
  "--shardo-datepicker-primary-range-border": "rgba(45, 212, 191, 0.24)",
  "--shardo-datepicker-primary-preview": "rgba(45, 212, 191, 0.1)",
  "--shardo-datepicker-primary-preview-border": "rgba(45, 212, 191, 0.18)",
  "--shardo-datepicker-primary-preview-end": "rgba(45, 212, 191, 0.2)",
  "--shardo-datepicker-danger-soft": "rgba(220, 53, 69, 0.12)",
  "--shardo-datepicker-danger-border": "rgba(220, 53, 69, 0.28)",
  "--shardo-datepicker-shadow": "0 24px 70px rgba(0, 0, 0, 0.48)"
};
const persianCalendar = new Intl.DateTimeFormat("en-US-u-ca-persian-nu-latn", {
  year: "numeric",
  month: "numeric",
  day: "numeric",
  timeZone: "UTC"
});
const farvardinCache = new Map();

const pad = (value, size = 2) => String(value).padStart(size, "0");
const isFunction = (value) => typeof value === "function";
const normalizeNumber = (value) => String(value).replace(/[۰-۹]/g, (digit) => persianDigits.indexOf(digit)).replace(/[٠-٩]/g, (digit) => arabicDigits.indexOf(digit));
const toPersianDigits = (value) => String(value).replace(/\d/g, (digit) => persianDigits[Number(digit)]);
const div = (a, b) => Math.floor(a / b);
const isValidTime = (hour, minute) => Number.isInteger(hour) && Number.isInteger(minute) && hour >= 0 && hour <= 23 && minute >= 0 && minute <= 59;
const maxSupportedJalaliYear = 9999;
const isSupportedJalaliYear = (year) => Number.isInteger(year) && year >= 1 && year <= maxSupportedJalaliYear;
const isResolvableJalaliYear = (year) => Number.isInteger(year) && year >= 1 && year <= maxSupportedJalaliYear + 1;

function resolveOptionSource(source) {
  const resolved = isFunction(source) ? source() : source;
  return resolved && typeof resolved === "object" ? resolved : {};
}

function browserDefaultOptions() {
  if (typeof window === "undefined") {
    return {};
  }

  return resolveOptionSource(window.ShardoDatePickerDefaults || window.shardoDatePickerDefaults);
}

function defaultOptions() {
  return { ...defaults, ...browserDefaultOptions(), ...globalDefaults };
}
const cloneDateParts = (value) => value ? { ...value } : null;

function persianParts(date) {
  const parts = persianCalendar.formatToParts(date);
  return {
    jy: Number(parts.find((part) => part.type === "year").value),
    jm: Number(parts.find((part) => part.type === "month").value),
    jd: Number(parts.find((part) => part.type === "day").value)
  };
}

function findFarvardinOne(year) {
  if (!isResolvableJalaliYear(year)) {
    throw new RangeError("Jalali year is out of supported range.");
  }

  if (farvardinCache.has(year)) {
    return new Date(farvardinCache.get(year));
  }

  const start = Date.UTC(year + 621, 2, 15);

  for (let offset = 0; offset < 35; offset += 1) {
    const date = new Date(start + offset * 86400000);
    const parts = persianParts(date);

    if (parts.jy === year && parts.jm === 1 && parts.jd === 1) {
      farvardinCache.set(year, date.getTime());
      return date;
    }
  }

  throw new Error("Jalali year could not be resolved.");
}

function jalaliYearDays(year) {
  const current = findFarvardinOne(year);
  const next = findFarvardinOne(year + 1);
  return Math.round((next.getTime() - current.getTime()) / 86400000);
}

function gregorianToJalali(gy, gm, gd) {
  return persianParts(new Date(Date.UTC(gy, gm - 1, gd)));
}

function jalaliToGregorian(jy, jm, jd) {
  const start = findFarvardinOne(jy);
  const offset = (jm <= 7 ? (jm - 1) * 31 : 186 + (jm - 7) * 30) + jd - 1;
  const date = new Date(start.getTime() + offset * 86400000);
  return {
    gy: date.getUTCFullYear(),
    gm: date.getUTCMonth() + 1,
    gd: date.getUTCDate()
  };
}

function isJalaliLeap(year) {
  return isSupportedJalaliYear(year) && jalaliYearDays(year) === 366;
}

function isValidJalaliDate(jy, jm, jd) {
  return isSupportedJalaliYear(jy) && Number.isInteger(jm) && Number.isInteger(jd) && jm >= 1 && jm <= 12 && jd >= 1 && jd <= jalaliMonthLength(jy, jm);
}

function jalaliMonthLength(year, month) {
  if (month <= 6) {
    return 31;
  }

  if (month <= 11) {
    return 30;
  }

  return isJalaliLeap(year) ? 30 : 29;
}

function toDate(parts) {
  const gregorian = jalaliToGregorian(parts.jy, parts.jm, parts.jd);
  return new Date(gregorian.gy, gregorian.gm - 1, gregorian.gd, parts.hour || 0, parts.minute || 0, 0, 0);
}

function fromDate(date) {
  const jalali = gregorianToJalali(date.getFullYear(), date.getMonth() + 1, date.getDate());
  return {
    ...jalali,
    hour: date.getHours(),
    minute: date.getMinutes()
  };
}

function parseCalendarMarker(value) {
  const match = normalizeNumber(value).trim().match(/^(jalali|j|shamsi|persian|شمسی|جلالی|gregorian|g|miladi|میلادی)\s*[:|]\s*(.+)$/i);

  if (!match) {
    return {
      calendar: null,
      value
    };
  }

  const key = match[1].toLowerCase();
  return {
    calendar: ["gregorian", "g", "miladi", "میلادی"].includes(key) ? "gregorian" : "jalali",
    value: match[2]
  };
}

function parseGregorianParts(gy, gm, gd, hour = 0, minute = 0) {
  if (!isValidTime(hour, minute)) {
    return null;
  }

  const date = new Date(gy, gm - 1, gd, hour, minute, 0, 0);

  if (date.getFullYear() !== gy || date.getMonth() + 1 !== gm || date.getDate() !== gd) {
    return null;
  }

  return fromDate(date);
}

function parseNumericDate(value, calendar) {
  const numbers = normalizeNumber(value).match(/\d+/g);

  if (!numbers || numbers.length < 3) {
    return null;
  }

  const year = Number(numbers[0]);
  const month = Number(numbers[1]);
  const day = Number(numbers[2]);
  const hour = Number(numbers[3] || 0);
  const minute = Number(numbers[4] || 0);
  const detectedCalendar = calendar || (year >= 1700 ? "gregorian" : "jalali");

  if (!isValidTime(hour, minute)) {
    return null;
  }

  if (detectedCalendar === "gregorian") {
    return parseGregorianParts(year, month, day, hour, minute);
  }

  const parts = {
    jy: year,
    jm: month,
    jd: day,
    hour,
    minute
  };

  return isValidJalaliDate(parts.jy, parts.jm, parts.jd) ? parts : null;
}

function startOfDay(parts) {
  return toDate({ ...parts, hour: 0, minute: 0 }).getTime();
}

function parseValue(value) {
  if (!value) {
    return null;
  }

  if (value instanceof Date && !Number.isNaN(value.getTime())) {
    return fromDate(value);
  }

  if (typeof value === "object" && value.gy && value.gm && value.gd) {
    return parseGregorianParts(Number(value.gy), Number(value.gm), Number(value.gd), Number(value.hour || 0), Number(value.minute || 0));
  }

  if (typeof value === "object" && value.calendar && value.value) {
    return parseNumericDate(value.value, String(value.calendar).toLowerCase() === "gregorian" ? "gregorian" : "jalali");
  }

  if (typeof value === "object" && value.jy && value.jm && value.jd) {
    const parts = {
      jy: Number(value.jy),
      jm: Number(value.jm),
      jd: Number(value.jd),
      hour: Number(value.hour || 0),
      minute: Number(value.minute || 0)
    };

    return isValidJalaliDate(parts.jy, parts.jm, parts.jd) && isValidTime(parts.hour, parts.minute) ? parts : null;
  }

  const marked = parseCalendarMarker(value);
  return parseNumericDate(marked.value, marked.calendar);
}

function formatValue(parts, format, usePersianDigits) {
  if (!parts) {
    return "";
  }

  const tokens = {
    yyyy: pad(parts.jy, 4),
    yy: pad(parts.jy % 100),
    MM: pad(parts.jm),
    M: parts.jm,
    dd: pad(parts.jd),
    d: parts.jd,
    HH: pad(parts.hour || 0),
    H: parts.hour || 0,
    mm: pad(parts.minute || 0),
    m: parts.minute || 0
  };

  const value = format.replace(/yyyy|yy|MM|M|dd|d|HH|H|mm|m/g, (token) => tokens[token]);
  return usePersianDigits ? toPersianDigits(value) : value;
}

function weekdayIndex(parts) {
  return (toDate(parts).getDay() + 1) % 7;
}

function formatSelectedTextValue(parts, options) {
  if (!parts) {
    return "";
  }

  const tokens = {
    dddd: options.weekdayNames[weekdayIndex(parts)],
    MMMM: options.months[parts.jm - 1],
    yyyy: pad(parts.jy, 4),
    yy: pad(parts.jy % 100),
    MM: pad(parts.jm),
    M: parts.jm,
    dd: pad(parts.jd),
    d: parts.jd
  };
  const value = options.selectedTextFormat.replace(/dddd|MMMM|yyyy|yy|MM|M|dd|d/g, (token) => tokens[token]);
  return options.usePersianDigits ? toPersianDigits(value) : value;
}

function formatGregorianDate(date, format) {
  if (!date) {
    return "";
  }

  const tokens = {
    yyyy: pad(date.getFullYear(), 4),
    yy: pad(date.getFullYear() % 100),
    MM: pad(date.getMonth() + 1),
    M: date.getMonth() + 1,
    dd: pad(date.getDate()),
    d: date.getDate(),
    HH: pad(date.getHours()),
    H: date.getHours(),
    mm: pad(date.getMinutes()),
    m: date.getMinutes()
  };

  return format.replace(/yyyy|yy|MM|M|dd|d|HH|H|mm|m/g, (token) => tokens[token]);
}

function sameDay(a, b) {
  return Boolean(a && b && a.jy === b.jy && a.jm === b.jm && a.jd === b.jd);
}

function compareDay(a, b) {
  return startOfDay(a) - startOfDay(b);
}

function isBetweenDays(value, start, end) {
  if (!value || !start || !end) {
    return false;
  }

  const time = startOfDay(value);
  return time > startOfDay(start) && time < startOfDay(end);
}

function hasCompleteRange(start, end) {
  return Boolean(start && end);
}

function clampDay(parts) {
  return {
    ...parts,
    jd: Math.min(parts.jd, jalaliMonthLength(parts.jy, parts.jm))
  };
}

function monthOffset(parts, offset) {
  const base = parts.jy * 12 + (parts.jm - 1) + offset;
  const jy = div(base, 12);
  const jm = (base % 12) + 1;
  return clampDay({ ...parts, jy, jm });
}

function makeElement(tag, className, text) {
  const element = document.createElement(tag);

  if (className) {
    element.className = className;
  }

  if (text !== undefined) {
    element.textContent = text;
  }

  return element;
}

function resolveAppendTarget(target) {
  if (typeof target === "string") {
    return document.querySelector(target) || document.body;
  }

  return target || document.body;
}

function normalizeDisabledDates(values) {
  const list = normalizeList(values);
  return new Set(list.map((value) => {
    const parts = parseValue(value);
    return parts ? `${parts.jy}/${parts.jm}/${parts.jd}` : "";
  }).filter(Boolean));
}

function normalizeList(values) {
  const resolved = isFunction(values) ? values() : values;

  if (!resolved) {
    return [];
  }

  if (Array.isArray(resolved)) {
    return resolved;
  }

  if (typeof resolved === "string") {
    return resolved.split(",").map((item) => item.trim()).filter(Boolean);
  }

  return [resolved];
}

function parseRangeValue(value, separator) {
  if (Array.isArray(value)) {
    return {
      start: parseValue(value[0]),
      end: parseValue(value[1])
    };
  }

  if (value && typeof value === "object" && (value.start || value.end)) {
    return {
      start: parseValue(value.start),
      end: parseValue(value.end)
    };
  }

  if (typeof value === "string" && value.includes(separator)) {
    const [start, end] = value.split(separator);
    return {
      start: parseValue(start),
      end: parseValue(end)
    };
  }

  return {
    start: parseValue(value),
    end: null
  };
}

function camelToKebab(value) {
  return value.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);
}

function parseOptionValue(value, fallback) {
  if (typeof fallback === "boolean") {
    return value === "" || value === "true" || value === "1";
  }

  if (typeof fallback === "number") {
    return Number(value);
  }

  if (Array.isArray(fallback)) {
    return value.split(",").map((item) => item.trim()).filter(Boolean);
  }

  if (value === "null") {
    return null;
  }

  return value;
}

function optionsFromAttributes(element) {
  let options = {};
  const raw = element.getAttribute("data-shardo-datepicker");
  const baseOptions = defaultOptions();

  if (raw && raw.trim().startsWith("{")) {
    try {
      options = JSON.parse(raw);
    } catch {
      options = {};
    }
  }

  Object.keys(baseOptions).forEach((key) => {
    const attr = `data-shardo-datepicker-${camelToKebab(key)}`;

    if (element.hasAttribute(attr)) {
      const fallback = Object.prototype.hasOwnProperty.call(defaults, key) ? defaults[key] : baseOptions[key];
      options[key] = parseOptionValue(element.getAttribute(attr), fallback);
    }
  });

  return options;
}

const icons = {
  check: [["path", { d: "M20 6 9 17l-5-5" }]],
  "chevron-left": [["path", { d: "m15 18-6-6 6-6" }]],
  "chevron-right": [["path", { d: "m9 18 6-6-6-6" }]],
  trash: [
    ["path", { d: "M3 6h18" }],
    ["path", { d: "M8 6V4h8v2" }],
    ["path", { d: "m19 6-1 14H6L5 6" }],
    ["path", { d: "M10 11v6" }],
    ["path", { d: "M14 11v6" }]
  ],
  x: [
    ["path", { d: "M18 6 6 18" }],
    ["path", { d: "m6 6 12 12" }]
  ]
};

function makeIcon(name) {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("fill", "none");
  svg.setAttribute("stroke", "currentColor");
  svg.setAttribute("stroke-width", "2");
  svg.setAttribute("stroke-linecap", "round");
  svg.setAttribute("stroke-linejoin", "round");
  svg.setAttribute("aria-hidden", "true");
  svg.classList.add("shardo-datepicker-icon");

  icons[name].forEach(([tag, attrs]) => {
    const element = document.createElementNS("http://www.w3.org/2000/svg", tag);
    Object.entries(attrs).forEach(([key, value]) => element.setAttribute(key, value));
    svg.appendChild(element);
  });

  return svg;
}

function setButtonIcon(button, icon, label) {
  button.replaceChildren(makeIcon(icon));
  button.title = label;
  button.setAttribute("aria-label", label);
  button.classList.add(classNames.icon);
}

function parseRgbColor(value) {
  const normalized = String(value || "").trim();
  const hex = normalized.match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);

  if (hex) {
    const digits = hex[1].length === 3 ? hex[1].split("").map((digit) => `${digit}${digit}`).join("") : hex[1];

    return {
      r: Number.parseInt(digits.slice(0, 2), 16),
      g: Number.parseInt(digits.slice(2, 4), 16),
      b: Number.parseInt(digits.slice(4, 6), 16),
      a: 1
    };
  }

  const match = String(value || "").match(/rgba?\(([^)]+)\)/);

  if (!match) {
    return null;
  }

  const parts = match[1].split(/[\s,\/]+/).filter(Boolean).map(Number);

  if (parts.length < 3 || parts.slice(0, 3).some(Number.isNaN)) {
    return null;
  }

  return {
    r: parts[0],
    g: parts[1],
    b: parts[2],
    a: Number.isNaN(parts[3]) ? 1 : parts[3]
  };
}

function isDarkColor(value) {
  const color = parseRgbColor(value);

  if (!color || color.a === 0) {
    return false;
  }

  const channels = [color.r, color.g, color.b].map((channel) => {
    const normalized = channel / 255;
    return normalized <= 0.03928 ? normalized / 12.92 : ((normalized + 0.055) / 1.055) ** 2.4;
  });

  return 0.2126 * channels[0] + 0.7152 * channels[1] + 0.0722 * channels[2] < 0.36;
}

function themeContextTargets(source) {
  const targets = [];
  let current = source?.parentElement || null;

  while (current) {
    targets.push(current);

    if (current === document.body) {
      break;
    }

    current = current.parentElement;
  }

  targets.push(document.body, document.documentElement);
  return [...new Set(targets.filter(Boolean))];
}

function clampNumber(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function positionOverflow(position, panelWidth, panelHeight, margin) {
  const right = position.x + panelWidth;
  const bottom = position.y + panelHeight;
  return Math.max(0, margin - position.x) + Math.max(0, right - window.innerWidth + margin) + Math.max(0, margin - position.y) + Math.max(0, bottom - window.innerHeight + margin);
}

export class ShardoDatePicker {
  constructor(input, options = {}) {
    this.input = typeof input === "string" ? document.querySelector(input) : input;

    if (!this.input && !options.inline) {
      throw new Error("ShardoDatePicker input was not found.");
    }

    this.options = { ...defaultOptions(), ...options };
    this.disabledDates = normalizeDisabledDates(this.options.disabledDates);
    this.holidays = normalizeDisabledDates(this.options.holidays);
    this.isRange = Boolean(this.options.range);
    this.rangeStart = null;
    this.rangeEnd = null;
    this.hoveredRangeEnd = null;
    this.hoveredDay = null;
    this.selected = null;
    this.syncingInput = false;
    this.syncingHidden = false;
    this.switcherMode = "month";

    if (this.isRange) {
      const rangeValue = parseRangeValue(this.options.value || this.input?.value, this.options.rangeSeparator);
      this.rangeStart = rangeValue.start;
      this.rangeEnd = rangeValue.end;
      this.selected = this.rangeEnd || this.rangeStart;
    } else {
      this.selected = parseValue(this.options.value) || parseValue(this.input?.value);
    }

    this.view = cloneDateParts(this.selected || this.rangeStart) || fromDate(new Date());
    this.isOpen = false;
    this.ignoreNextDocumentClick = false;
    this.boundDocumentClick = this.handleDocumentClick.bind(this);
    this.boundInputFocus = this.handleInputOpen.bind(this);
    this.boundInputClick = this.handleInputOpen.bind(this);
    this.boundInputInput = this.handleInputInput.bind(this);
    this.boundInputChange = this.handleInputChange.bind(this);
    this.boundKeyDown = this.handleKeyDown.bind(this);
    this.boundDaysMouseMove = this.handleDaysMouseMove.bind(this);
    this.boundThemeChange = this.syncThemeClasses.bind(this);
    this.boundPosition = () => {
      if (this.isOpen) {
        this.position();
      }
    };
    this.build();
    this.bind();
    this.setupThemeSync();
    this.render();

    if (this.hasValue()) {
      this.commit(false);
    } else {
      this.syncHiddenInput();
    }
  }

  build() {
    if (this.input && !this.options.inline) {
      this.input.classList.add("shardo-datepicker-input");

      if (this.options.inputReadonly) {
        this.input.readOnly = true;
      }

      if (this.options.hiddenInput) {
        this.hiddenInput = makeElement("input");
        this.hiddenInput.type = "hidden";
        this.hiddenInput.name = this.options.hiddenInputName || `${this.input.name || this.input.id || "jalali_date"}_gregorian`;

        if (this.options.hiddenInputId) {
          this.hiddenInput.id = this.options.hiddenInputId;
        }

        this.input.insertAdjacentElement("afterend", this.hiddenInput);
      }
    }

    this.panel = makeElement("div", `shardo-datepicker-panel${this.options.inline ? " shardo-datepicker-inline" : ""}`);
    this.panel.hidden = !this.options.inline;
    this.panel.setAttribute("role", "dialog");
    this.applyThemeClasses();

    this.header = makeElement("div", "shardo-datepicker-header");
    this.prevButton = makeElement("button", "shardo-datepicker-button");
    this.nextButton = makeElement("button", "shardo-datepicker-button");
    this.prevButton.type = "button";
    this.nextButton.type = "button";
    setButtonIcon(this.prevButton, "chevron-right", "ماه قبل");
    setButtonIcon(this.nextButton, "chevron-left", "ماه بعد");

    this.title = makeElement("button", "shardo-datepicker-view-button");
    this.title.type = "button";
    this.title.setAttribute("aria-expanded", "false");
    this.header.append(this.prevButton, this.title, this.nextButton);
    this.switcher = makeElement("div", "shardo-datepicker-switcher");
    this.switcher.setAttribute("aria-hidden", "true");
    this.switcherTabs = makeElement("div", "shardo-datepicker-switcher-tabs");
    this.monthTabButton = makeElement("button", "shardo-datepicker-switcher-tab", "ماه");
    this.yearTabButton = makeElement("button", "shardo-datepicker-switcher-tab", "سال");
    this.monthTabButton.type = "button";
    this.yearTabButton.type = "button";
    this.switcherTabs.append(this.monthTabButton, this.yearTabButton);
    this.yearBar = makeElement("div", "shardo-datepicker-year-bar");
    this.yearPrevButton = makeElement("button", "shardo-datepicker-button");
    this.yearNextButton = makeElement("button", "shardo-datepicker-button");
    this.yearText = makeElement("div", "shardo-datepicker-year-text");
    this.yearPrevButton.type = "button";
    this.yearNextButton.type = "button";
    setButtonIcon(this.yearPrevButton, "chevron-right", "سال قبل");
    setButtonIcon(this.yearNextButton, "chevron-left", "سال بعد");
    this.yearBar.append(this.yearPrevButton, this.yearText, this.yearNextButton);
    this.monthGrid = makeElement("div", "shardo-datepicker-month-grid");
    this.yearGrid = makeElement("div", "shardo-datepicker-year-grid");
    this.switcherPanel = makeElement("div", "shardo-datepicker-switcher-panel");
    this.switcherPanel.append(this.monthGrid, this.yearGrid);
    this.switcher.append(this.switcherTabs, this.yearBar, this.switcherPanel);

    this.weekdays = makeElement("div", "shardo-datepicker-weekdays");
    this.days = makeElement("div", "shardo-datepicker-days");
    this.selectedText = makeElement("div", "shardo-datepicker-selected-text");
    this.time = makeElement("div", "shardo-datepicker-time");
    this.hourInput = makeElement("input", "shardo-datepicker-time-input");
    this.minuteInput = makeElement("input", "shardo-datepicker-time-input");
    this.hourInput.type = "text";
    this.minuteInput.type = "text";
    this.hourInput.inputMode = "numeric";
    this.minuteInput.inputMode = "numeric";
    this.hourInput.min = "0";
    this.hourInput.max = "23";
    this.minuteInput.min = "0";
    this.minuteInput.max = "59";
    this.minuteInput.step = String(this.options.timeStep);
    this.hourInput.setAttribute("aria-label", "ساعت");
    this.minuteInput.setAttribute("aria-label", "دقیقه");
    this.time.append(this.hourInput, makeElement("span", "shardo-datepicker-time-separator", ":"), this.minuteInput);

    this.footer = makeElement("div", "shardo-datepicker-footer");
    this.todayButton = makeElement("button", "shardo-datepicker-button", "امروز");
    this.clearButton = makeElement("button", `shardo-datepicker-button ${classNames.danger}`);
    this.cancelButton = makeElement("button", "shardo-datepicker-button");
    this.okButton = makeElement("button", `shardo-datepicker-button ${classNames.primary}`);
    this.footerActions = makeElement("div", "shardo-datepicker-footer-actions");
    setButtonIcon(this.clearButton, "trash", "پاک کردن");
    setButtonIcon(this.cancelButton, "x", "بستن");
    setButtonIcon(this.okButton, "check", "تایید");
    [this.todayButton, this.clearButton, this.cancelButton, this.okButton].forEach((button) => {
      button.type = "button";
    });
    this.footerActions.append(this.okButton, this.cancelButton, this.clearButton);
    this.footer.append(this.todayButton, this.footerActions);

    this.panel.append(this.header, this.switcher, this.weekdays, this.days, this.selectedText);

    if (this.options.showTime) {
      this.panel.append(this.time);
    }

    this.panel.append(this.footer);
    this.renderFooter();

    const parent = this.options.inline ? this.input || document.body : resolveAppendTarget(this.options.appendTo);
    parent.appendChild(this.panel);
  }

  bind() {
    if (this.input && !this.options.inline) {
      this.input.addEventListener("focus", this.boundInputFocus);
      this.input.addEventListener("click", this.boundInputClick);
      this.input.addEventListener("input", this.boundInputInput);
      this.input.addEventListener("change", this.boundInputChange);
      this.input.addEventListener("keydown", this.boundKeyDown);
    }

    this.prevButton.addEventListener("click", () => this.changeMonth(-1));
    this.nextButton.addEventListener("click", () => this.changeMonth(1));
    this.title.addEventListener("click", () => this.toggleSwitcher());
    this.monthTabButton.addEventListener("click", () => this.setSwitcherMode("month"));
    this.yearTabButton.addEventListener("click", () => this.setSwitcherMode("year"));
    this.yearPrevButton.addEventListener("click", () => this.changeSwitcherYear(-1));
    this.yearNextButton.addEventListener("click", () => this.changeSwitcherYear(1));
    this.days.addEventListener("mousemove", this.boundDaysMouseMove);
    this.days.addEventListener("mouseleave", () => this.clearDayPreview());
    this.days.addEventListener("pointerleave", () => this.clearDayPreview());
    this.hourInput.addEventListener("change", () => this.normalizeTimeInputs());
    this.minuteInput.addEventListener("change", () => this.normalizeTimeInputs());
    this.todayButton.addEventListener("click", () => this.selectToday());
    this.clearButton.addEventListener("click", () => this.clear());
    this.cancelButton.addEventListener("click", () => this.close());
    this.okButton.addEventListener("click", () => this.commit(true));
    document.addEventListener("click", this.boundDocumentClick);
    window.addEventListener("resize", this.boundPosition);
    window.addEventListener("scroll", this.boundPosition, true);
  }

  render() {
    this.renderHeader();
    this.renderWeekdays();
    this.renderDays();
    this.renderSelectedText();
    this.renderTime();
    this.renderFooter();
  }

  renderFooter() {
    this.okButton.hidden = !this.shouldShowConfirmButton();
    this.cancelButton.hidden = Boolean(this.options.inline);
    this.footer.classList.toggle(classNames.hasConfirm, this.shouldShowConfirmButton());
  }

  renderSelectedText() {
    const text = this.getPreviewSelectedText() || this.getSelectedText();
    this.selectedText.hidden = !this.options.showSelectedText || !text;
    this.selectedText.textContent = text;
  }

  renderHeader() {
    const year = this.options.usePersianDigits ? toPersianDigits(this.view.jy) : String(this.view.jy);
    this.title.textContent = `${this.options.months[this.view.jm - 1]} ${year}`;
    this.title.setAttribute("aria-label", this.title.textContent);
    this.renderSwitcher();
  }

  renderSwitcher() {
    this.yearText.textContent = this.options.usePersianDigits ? toPersianDigits(this.view.jy) : String(this.view.jy);
    this.monthGrid.classList.toggle(classNames.visible, this.switcherMode === "month");
    this.yearGrid.classList.toggle(classNames.visible, this.switcherMode === "year");
    this.monthGrid.setAttribute("aria-hidden", this.switcherMode === "month" ? "false" : "true");
    this.yearGrid.setAttribute("aria-hidden", this.switcherMode === "year" ? "false" : "true");
    this.monthTabButton.classList.toggle(classNames.active, this.switcherMode === "month");
    this.yearTabButton.classList.toggle(classNames.active, this.switcherMode === "year");
    this.monthGrid.innerHTML = "";
    this.options.months.forEach((month, index) => {
      const button = makeElement("button", "shardo-datepicker-month-button", month);
      button.type = "button";

      if (index + 1 === this.view.jm) {
        button.classList.add(classNames.active);
      }

      button.addEventListener("click", () => {
        this.view = clampDay({ ...this.view, jm: index + 1 });
        this.closeSwitcher();
        this.render();
      });
      this.monthGrid.appendChild(button);
    });
    this.renderYearGrid();
  }

  renderYearGrid() {
    this.yearGrid.innerHTML = "";
    const start = this.view.jy - 5;

    for (let year = start; year < start + 12; year += 1) {
      const label = this.options.usePersianDigits ? toPersianDigits(year) : String(year);
      const button = makeElement("button", "shardo-datepicker-year-button", label);
      button.type = "button";

      if (year === this.view.jy) {
        button.classList.add(classNames.active);
      }

      button.addEventListener("click", () => {
        this.view = clampDay({ ...this.view, jy: year });
        this.setSwitcherMode("month");
      });
      this.yearGrid.appendChild(button);
    }
  }

  renderWeekdays() {
    this.weekdays.innerHTML = "";
    const shift = (Number(this.options.weekStart) - 6 + 7) % 7;
    const weekdays = this.options.weekdays.map((_, index, items) => items[(index + shift) % items.length]);
    weekdays.forEach((day) => {
      this.weekdays.appendChild(makeElement("div", "shardo-datepicker-weekday", day));
    });
  }

  renderDays() {
    this.days.innerHTML = "";
    const firstDate = toDate({ jy: this.view.jy, jm: this.view.jm, jd: 1, hour: 0, minute: 0 });
    const firstIndex = (firstDate.getDay() - Number(this.options.weekStart) + 7) % 7;
    const daysInMonth = jalaliMonthLength(this.view.jy, this.view.jm);
    const previousMonth = monthOffset({ ...this.view, jd: 1 }, -1);
    const previousDays = jalaliMonthLength(previousMonth.jy, previousMonth.jm);
    const today = fromDate(new Date());
    const previewEnd = this.rangeEnd || this.hoveredRangeEnd;
    const previewStart = this.rangeStart && previewEnd && compareDay(previewEnd, this.rangeStart) < 0 ? previewEnd : this.rangeStart;
    const previewFinish = this.rangeStart && previewEnd && compareDay(previewEnd, this.rangeStart) < 0 ? this.rangeStart : previewEnd;

    for (let cell = 0; cell < 42; cell += 1) {
      let parts;
      let outside = false;
      const dayNumber = cell - firstIndex + 1;

      if (dayNumber < 1) {
        outside = true;
        parts = { ...previousMonth, jd: previousDays + dayNumber };
      } else if (dayNumber > daysInMonth) {
        outside = true;
        parts = { ...monthOffset({ ...this.view, jd: 1 }, 1), jd: dayNumber - daysInMonth };
      } else {
        parts = { ...this.view, jd: dayNumber };
      }

      const active = this.selected || this.rangeEnd || this.rangeStart || this.view;
      parts.hour = active?.hour ?? this.view.hour ?? 0;
      parts.minute = active?.minute ?? this.view.minute ?? 0;

      const button = makeElement("button", "shardo-datepicker-day", this.options.usePersianDigits ? toPersianDigits(parts.jd) : String(parts.jd));
      button.type = "button";
      button.dataset.year = String(parts.jy);
      button.dataset.month = String(parts.jm);
      button.dataset.day = String(parts.jd);

      if (outside) {
        button.classList.add(classNames.outside);
      }

      if (sameDay(parts, today)) {
        button.classList.add(classNames.today);
      }

      if (this.isRange && sameDay(parts, this.rangeStart)) {
        button.classList.add(classNames.selected);
        button.classList.add(classNames.rangeStart);
      }

      if (this.isRange && sameDay(parts, this.rangeEnd)) {
        button.classList.add(classNames.selected);
        button.classList.add(classNames.rangeEnd);
      }

      if (this.isRange && isBetweenDays(parts, previewStart, previewFinish)) {
        button.classList.add(classNames.inRange);

        if (!this.rangeEnd) {
          button.classList.add(classNames.preview);
        }
      }

      if (this.isRange && !this.rangeEnd && sameDay(parts, this.hoveredRangeEnd)) {
        button.classList.add(classNames.rangePreviewEnd);
      }

      if (!this.isRange && sameDay(parts, this.selected)) {
        button.classList.add(classNames.selected);
      }

      if (this.isDisabled(parts)) {
        button.classList.add(classNames.disabled);
        button.disabled = true;
      }

      if (this.isHoliday(parts)) {
        button.classList.add(classNames.holiday);
        button.setAttribute("aria-label", `${button.textContent} تعطیل`);
      }

      button.addEventListener("mouseenter", () => this.previewRange(parts));
      button.addEventListener("click", () => this.selectDate(parts));
      this.days.appendChild(button);
    }
  }

  renderTime() {
    if (!this.options.showTime) {
      return;
    }

    const source = this.selected || this.rangeEnd || this.rangeStart || this.view;
    this.hourInput.value = pad(source.hour || 0);
    this.minuteInput.value = pad(source.minute || 0);
  }

  normalizeTimeInputs() {
    const step = Math.max(1, Number(this.options.timeStep) || 1);
    let hour = Number(normalizeNumber(this.hourInput.value));
    let minute = Number(normalizeNumber(this.minuteInput.value));

    hour = Number.isFinite(hour) ? Math.min(23, Math.max(0, hour)) : 0;
    minute = Number.isFinite(minute) ? Math.min(59, Math.max(0, Math.round(minute / step) * step)) : 0;

    if (minute > 59) {
      minute = 60 - step;
    }

    this.hourInput.value = pad(hour);
    this.minuteInput.value = pad(minute);
    this.view.hour = hour;
    this.view.minute = minute;

    if (this.selected) {
      this.selected.hour = hour;
      this.selected.minute = minute;
    }

    if (this.rangeStart) {
      this.rangeStart.hour = hour;
      this.rangeStart.minute = minute;
    }

    if (this.rangeEnd) {
      this.rangeEnd.hour = hour;
      this.rangeEnd.minute = minute;
    }
  }

  selectDate(parts) {
    const time = this.options.showTime ? {
      hour: Number(this.hourInput.value || parts.hour || 0),
      minute: Number(this.minuteInput.value || parts.minute || 0)
    } : { hour: 0, minute: 0 };

    const next = { ...parts, ...time };

    if (this.isRange) {
      if (!this.rangeStart || this.rangeEnd || compareDay(next, this.rangeStart) < 0) {
        this.rangeStart = next;
        this.rangeEnd = null;
        this.hoveredRangeEnd = null;
        this.hoveredDay = null;
      } else if (sameDay(next, this.rangeStart)) {
        this.rangeEnd = null;
        this.hoveredRangeEnd = null;
        this.hoveredDay = null;
      } else {
        this.rangeEnd = next;
        this.hoveredRangeEnd = null;
        this.hoveredDay = null;
      }

      this.selected = next;
      this.view = cloneDateParts(next);
    } else {
      this.selected = next;
      this.hoveredDay = null;
      this.view = cloneDateParts(this.selected);
    }

    this.render();
    this.emit("select");

    if (isFunction(this.options.onSelect)) {
      this.options.onSelect(this.getValue(), this.getDate(), this.getShardoDatePickerJalali());
    }

    if (this.shouldCommitAfterSelect()) {
      this.commit(true);
    }
  }

  previewRange(parts) {
    if (this.isDisabled(parts)) {
      return;
    }

    if (sameDay(parts, this.hoveredDay) && (!this.isRange || sameDay(parts, this.hoveredRangeEnd))) {
      return;
    }

    this.hoveredDay = cloneDateParts(parts);

    if (!this.isRange || !this.rangeStart || this.rangeEnd) {
      this.renderSelectedText();
      return;
    }

    this.hoveredRangeEnd = cloneDateParts(parts);
    this.render();
  }

  clearDayPreview() {
    if (!this.hoveredRangeEnd && !this.hoveredDay) {
      return;
    }

    this.hoveredRangeEnd = null;
    this.hoveredDay = null;
    this.render();
  }

  selectToday() {
    const today = fromDate(new Date());

    if (this.isDisabled(today)) {
      return;
    }

    if (this.isRange) {
      this.rangeStart = today;
      this.rangeEnd = null;
      this.selected = today;
      this.view = cloneDateParts(today);
      this.render();
      this.emit("select");

      if (isFunction(this.options.onSelect)) {
        this.options.onSelect(this.getValue(), this.getDate(), this.getShardoDatePickerJalali());
      }

      return;
    } else {
      this.selected = today;
    }

    this.view = cloneDateParts(today);
    this.commit(true);
    this.render();
  }

  isDisabled(parts) {
    const key = `${parts.jy}/${parts.jm}/${parts.jd}`;
    const date = startOfDay(parts);
    const min = parseValue(this.options.min);
    const max = parseValue(this.options.max);
    const now = fromDate(new Date());
    const today = startOfDay(now);

    if (this.disabledDates.has(key)) {
      return true;
    }

    if (min && date < startOfDay(min)) {
      return true;
    }

    if (max && date > startOfDay(max)) {
      return true;
    }

    if (this.options.disablePast && date < today) {
      return true;
    }

    if (this.options.disableFuture && date > today) {
      return true;
    }

    return false;
  }

  isHoliday(parts) {
    const key = `${parts.jy}/${parts.jm}/${parts.jd}`;

    if (this.holidays.has(key)) {
      return true;
    }

    return Boolean(this.options.showFridayHolidays && toDate(parts).getDay() === 5);
  }

  hasValue() {
    return this.isRange ? Boolean(this.rangeStart) : Boolean(this.selected);
  }

  shouldShowConfirmButton() {
    return Boolean(this.options.showTime && !this.options.autoClose);
  }

  shouldCommitAfterSelect() {
    if (this.isRange && !hasCompleteRange(this.rangeStart, this.rangeEnd)) {
      return false;
    }

    return Boolean(!this.options.showTime || this.options.autoClose);
  }

  eventDetail() {
    return {
      picker: this,
      value: this.getValue(),
      gregorianValue: this.getGregorianValue(),
      selectedText: this.getSelectedText(),
      date: this.getDate(),
      jalali: this.getShardoDatePickerJalali(),
      isRange: this.isRange
    };
  }

  emit(name) {
    const target = this.input || this.panel;
    target.dispatchEvent(new CustomEvent(`shardo-datepicker:${name}`, {
      bubbles: true,
      detail: this.eventDetail()
    }));
  }

  syncHiddenInput() {
    if (this.hiddenInput) {
      this.hiddenInput.value = this.getGregorianValue();
    }
  }

  commit(emitChange = true) {
    if (!this.hasValue()) {
      return;
    }

    if (this.options.showTime) {
      this.normalizeTimeInputs();
    }

    const previousValue = this.input?.value || "";
    const value = this.getValue();
    const shouldDispatchNative = Boolean(emitChange && previousValue !== value);

    if (this.input) {
      this.syncingInput = true;
      this.input.value = value;
      if (shouldDispatchNative) {
        this.input.dispatchEvent(new Event("input", { bubbles: true }));
        this.input.dispatchEvent(new Event("change", { bubbles: true }));
      }
      this.syncingInput = false;
    }

    this.syncHiddenInput();

    if (emitChange && previousValue !== value) {
      this.emit("change");

      if (isFunction(this.options.onChange)) {
        this.options.onChange(value, this.getDate(), this.getShardoDatePickerJalali(), this.getGregorianValue());
      }
    }

    if (this.options.autoClose) {
      this.close();
    }
  }

  getValue() {
    if (this.isRange) {
      const start = formatValue(this.rangeStart, this.options.format, this.options.usePersianDigits);
      const end = formatValue(this.rangeEnd, this.options.format, this.options.usePersianDigits);
      return end ? `${start}${this.options.rangeSeparator}${end}` : start;
    }

    return formatValue(this.selected, this.options.format, this.options.usePersianDigits);
  }

  getDate() {
    if (this.isRange) {
      return {
        start: this.rangeStart ? toDate(this.rangeStart) : null,
        end: this.rangeEnd ? toDate(this.rangeEnd) : null
      };
    }

    return this.selected ? toDate(this.selected) : null;
  }

  getShardoDatePickerJalali() {
    if (this.isRange) {
      return {
        start: cloneDateParts(this.rangeStart),
        end: cloneDateParts(this.rangeEnd)
      };
    }

    return cloneDateParts(this.selected);
  }

  getGregorianValue() {
    if (this.isRange) {
      const start = this.rangeStart ? formatGregorianDate(toDate(this.rangeStart), this.options.gregorianFormat) : "";
      const end = this.rangeEnd ? formatGregorianDate(toDate(this.rangeEnd), this.options.gregorianFormat) : "";
      return end ? `${start}${this.options.gregorianRangeSeparator}${end}` : start;
    }

    return this.selected ? formatGregorianDate(toDate(this.selected), this.options.gregorianFormat) : "";
  }

  getSelectedText() {
    if (this.isRange) {
      const start = formatSelectedTextValue(this.rangeStart, this.options);
      const end = formatSelectedTextValue(this.rangeEnd, this.options);
      return end ? `${start}${this.options.selectedTextRangeSeparator}${end}` : start;
    }

    return formatSelectedTextValue(this.selected, this.options);
  }

  getPreviewSelectedText() {
    if (!this.hoveredDay) {
      return "";
    }

    if (this.isRange && this.rangeStart && !this.rangeEnd) {
      const start = compareDay(this.hoveredDay, this.rangeStart) < 0 ? this.hoveredDay : this.rangeStart;
      const end = compareDay(this.hoveredDay, this.rangeStart) < 0 ? this.rangeStart : this.hoveredDay;
      const startText = formatSelectedTextValue(start, this.options);
      const endText = formatSelectedTextValue(end, this.options);
      return endText ? `${startText}${this.options.selectedTextRangeSeparator}${endText}` : startText;
    }

    return formatSelectedTextValue(this.hoveredDay, this.options);
  }

  setValue(value, emitChange = true) {
    if (this.isRange) {
      const parsedRange = parseRangeValue(value, this.options.rangeSeparator);

      if ((parsedRange.start && this.isDisabled(parsedRange.start)) || (parsedRange.end && this.isDisabled(parsedRange.end))) {
        return;
      }

      this.rangeStart = parsedRange.start;
      this.rangeEnd = parsedRange.end;
      this.selected = this.rangeEnd || this.rangeStart;
      this.view = cloneDateParts(this.selected || this.view);
      this.render();
      this.commit(emitChange);
      return;
    }

    const parsed = parseValue(value);

    if (!parsed || this.isDisabled(parsed)) {
      return;
    }

    this.selected = parsed;
    this.view = cloneDateParts(parsed);
    this.render();
    this.commit(emitChange);
  }

  clear() {
    const hadValue = Boolean(this.hasValue() || this.input?.value || this.hiddenInput?.value);
    this.selected = null;
    this.rangeStart = null;
    this.rangeEnd = null;
    this.hoveredRangeEnd = null;
    this.hoveredDay = null;

    if (this.input) {
      this.syncingInput = true;
      this.input.value = "";
      this.input.dispatchEvent(new Event("input", { bubbles: true }));
      this.input.dispatchEvent(new Event("change", { bubbles: true }));
      this.syncingInput = false;
    }

    this.syncHiddenInput();
    this.render();

    if (hadValue) {
      this.emit("clear");
      this.emit("change");

      if (isFunction(this.options.onChange)) {
        this.options.onChange("", this.getDate(), this.getShardoDatePickerJalali(), "");
      }
    }

    if (this.options.autoClose) {
      this.close();
    }
  }

  open() {
    if (this.options.inline || this.isOpen) {
      return;
    }

    this.isOpen = true;
    this.syncThemeClasses();
    this.panel.hidden = false;
    this.position();
    this.emit("open");

    if (isFunction(this.options.onOpen)) {
      this.options.onOpen(this);
    }
  }

  close() {
    if (this.options.inline || !this.isOpen) {
      return;
    }

    this.isOpen = false;
    this.panel.hidden = true;
    this.closeSwitcher();
    this.emit("close");

    if (isFunction(this.options.onClose)) {
      this.options.onClose(this);
    }
  }

  toggle() {
    this.isOpen ? this.close() : this.open();
  }

  position() {
    if (!this.input || this.options.inline) {
      return;
    }

    if (window.matchMedia?.("(max-width: 640px)").matches) {
      this.panel.style.top = "";
      this.panel.style.left = "";
      this.panel.dataset.placement = "sheet";
      return;
    }

    const rect = this.input.getBoundingClientRect();
    const gap = 8;
    const margin = 12;
    const panelWidth = this.panel.offsetWidth;
    const panelHeight = this.panel.offsetHeight;
    const requestedPlacement = ["bottom", "top", "right", "left"].includes(this.options.placement) ? this.options.placement : "auto";
    const candidates = [
      { name: "bottom", x: rect.left, y: rect.bottom + gap },
      { name: "top", x: rect.left, y: rect.top - panelHeight - gap },
      { name: "right", x: rect.right + gap, y: rect.top },
      { name: "left", x: rect.left - panelWidth - gap, y: rect.top }
    ].map((candidate, index) => ({
      ...candidate,
      index,
      score: positionOverflow(candidate, panelWidth, panelHeight, margin)
    }));
    const selected = requestedPlacement === "auto"
      ? [...candidates].sort((a, b) => a.score - b.score || a.index - b.index)[0]
      : candidates.find((candidate) => candidate.name === requestedPlacement);
    const maxLeft = Math.max(margin, window.innerWidth - panelWidth - margin);
    const maxTop = Math.max(margin, window.innerHeight - panelHeight - margin);
    const left = clampNumber(selected.x, margin, maxLeft);
    const top = clampNumber(selected.y, margin, maxTop);
    const offsetParent = this.panel.offsetParent;

    if (offsetParent && offsetParent !== document.body && offsetParent !== document.documentElement) {
      const parentRect = offsetParent.getBoundingClientRect();
      this.panel.style.top = `${top - parentRect.top + offsetParent.scrollTop}px`;
      this.panel.style.left = `${left - parentRect.left + offsetParent.scrollLeft}px`;
    } else {
      this.panel.style.top = `${window.scrollY + top}px`;
      this.panel.style.left = `${window.scrollX + left}px`;
    }
    this.panel.dataset.placement = selected.name;
  }

  changeMonth(offset) {
    this.view = monthOffset(this.view, offset);
    this.render();
  }

  changeYear(offset) {
    this.view = clampDay({ ...this.view, jy: this.view.jy + offset });
    this.render();
  }

  changeSwitcherYear(direction) {
    const amount = this.switcherMode === "year" ? 12 : 1;
    this.changeYear(direction * amount);
  }

  setSwitcherMode(mode) {
    this.switcherMode = mode;
    this.renderSwitcher();
  }

  toggleSwitcher() {
    this.switcher.classList.contains(classNames.open) ? this.closeSwitcher() : this.openSwitcher();
  }

  openSwitcher() {
    this.setSwitcherMode(this.switcherMode);
    this.title.setAttribute("aria-expanded", "true");
    this.switcher.setAttribute("aria-hidden", "false");
    requestAnimationFrame(() => {
      requestAnimationFrame(() => this.switcher.classList.add(classNames.open));
    });
  }

  closeSwitcher() {
    this.switcher.classList.remove(classNames.open);
    this.title.setAttribute("aria-expanded", "false");
    this.switcher.setAttribute("aria-hidden", "true");
  }

  handleDocumentClick(event) {
    if (this.options.inline || !this.isOpen) {
      return;
    }

    const path = event.composedPath();

    if (this.ignoreNextDocumentClick) {
      this.ignoreNextDocumentClick = false;
      return;
    }

    if (path.includes(this.panel) || (this.input && path.includes(this.input))) {
      return;
    }

    this.close();
  }

  handleInputOpen(event) {
    if (event?.type === "focus" || event?.type === "click") {
      this.ignoreNextDocumentClick = true;
      window.setTimeout(() => {
        this.ignoreNextDocumentClick = false;
      }, 0);
    }
    this.open();
  }

  handleInputInput() {
    if (this.syncingInput || !this.input) {
      return;
    }

    if (this.input.value.trim() === "") {
      this.clear();
    }
  }

  handleInputChange() {
    if (this.syncingInput || !this.input) {
      return;
    }

    const value = this.input.value.trim();

    if (!value) {
      this.clear();
      return;
    }

    this.setValue(value, true);
  }

  handleDaysMouseMove(event) {
    const button = event.target.closest(".shardo-datepicker-day");

    if (!button || button.disabled) {
      return;
    }

    this.previewRange({
      jy: Number(button.dataset.year),
      jm: Number(button.dataset.month),
      jd: Number(button.dataset.day),
      hour: this.selected?.hour ?? this.rangeStart?.hour ?? this.view.hour ?? 0,
      minute: this.selected?.minute ?? this.rangeStart?.minute ?? this.view.minute ?? 0
    });
  }

  handleKeyDown(event) {
    if (event.key === "Escape") {
      this.close();
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();
      this.open();
    }
  }

  setOptions(options = {}) {
    this.options = { ...this.options, ...options };
    this.disabledDates = normalizeDisabledDates(this.options.disabledDates);
    this.holidays = normalizeDisabledDates(this.options.holidays);
    this.isRange = Boolean(this.options.range);

    if (this.input && !this.options.inline) {
      this.input.readOnly = Boolean(this.options.inputReadonly);

      if (this.options.hiddenInput && !this.hiddenInput) {
        this.hiddenInput = makeElement("input");
        this.hiddenInput.type = "hidden";
        this.input.insertAdjacentElement("afterend", this.hiddenInput);
      }

      if (!this.options.hiddenInput && this.hiddenInput) {
        this.hiddenInput.remove();
        this.hiddenInput = null;
      }

      if (this.hiddenInput) {
        this.hiddenInput.name = this.options.hiddenInputName || `${this.input.name || this.input.id || "jalali_date"}_gregorian`;

        if (this.options.hiddenInputId) {
          this.hiddenInput.id = this.options.hiddenInputId;
        } else {
          this.hiddenInput.removeAttribute("id");
        }
      }
    }

    if (this.options.showTime && !this.time.isConnected) {
      this.panel.insertBefore(this.time, this.footer);
    }

    if (!this.options.showTime && this.time.isConnected) {
      this.time.remove();
    }

    this.applyThemeClasses();
    this.setupThemeSync();
    this.render();
    this.syncHiddenInput();
  }

  applyThemeClasses() {
    const targets = [this.input, this.panel].filter(Boolean);
    targets.forEach((target) => {
      target.classList.remove(classNames.themeAuto, classNames.themeDark, classNames.themeDarkResolved, classNames.themeBootstrap5);

      if (this.options.theme === "dark") {
        target.classList.add(classNames.themeDark);
      }

      if (this.options.theme === "auto") {
        target.classList.add(classNames.themeAuto);
      }

      if (this.options.bootstrapTheme) {
        target.classList.add(classNames.themeBootstrap5);
      }
    });
    this.syncBootstrapVariables();
    this.syncThemeClasses();
  }

  setupThemeSync() {
    this.themeObserver?.disconnect();

    if (this.themeMedia) {
      this.themeMedia.removeEventListener?.("change", this.boundThemeChange);
      this.themeMedia.removeListener?.(this.boundThemeChange);
    }

    this.themeObserver = null;
    this.themeMedia = null;

    if (this.options.theme !== "auto" || typeof MutationObserver === "undefined") {
      return;
    }

    const targets = new Set([document.documentElement, document.body]);
    let current = this.input?.parentElement;

    while (current && current !== document.body) {
      targets.add(current);
      current = current.parentElement;
    }

    this.themeObserver = new MutationObserver(this.boundThemeChange);
    targets.forEach((target) => {
      if (target) {
        this.themeObserver.observe(target, {
          attributes: true,
          attributeFilter: ["class", "style", "data-bs-theme", "data-theme"]
        });
      }
    });

    this.themeMedia = window.matchMedia?.("(prefers-color-scheme: dark)") || null;
    this.themeMedia?.addEventListener?.("change", this.boundThemeChange);
    this.themeMedia?.addListener?.(this.boundThemeChange);
  }

  detectDarkMode() {
    if (this.options.theme === "dark") {
      return true;
    }

    if (this.options.theme !== "auto") {
      return false;
    }

    const root = document.documentElement;
    const body = document.body;
    const source = this.input || this.panel;

    if (source?.closest?.(darkThemeSelector) || root?.matches?.(darkThemeSelector) || body?.matches?.(darkThemeSelector)) {
      return true;
    }

    const styleTargets = themeContextTargets(source);

    if (styleTargets.some((target) => getComputedStyle(target).colorScheme.split(/\s+/).includes("dark"))) {
      return true;
    }

    if (styleTargets.some((target) => isDarkColor(getComputedStyle(target).backgroundColor))) {
      return true;
    }

    return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)").matches);
  }

  syncBootstrapVariables() {
    if (!this.options.bootstrapTheme || !this.panel) {
      return;
    }

    const source = this.input || this.panel;
    const sourceStyle = getComputedStyle(source);
    bootstrapVariableNames.forEach((name) => {
      const value = sourceStyle.getPropertyValue(name).trim();

      if (value) {
        this.panel.style.setProperty(name, value);
      } else {
        this.panel.style.removeProperty(name);
      }
    });
  }

  hasUsableBootstrapDarkVariables() {
    if (!this.options.bootstrapTheme) {
      return false;
    }

    const targets = [this.input, this.panel, document.body, document.documentElement].filter(Boolean);
    return targets.some((target) => isDarkColor(getComputedStyle(target).getPropertyValue("--bs-body-bg")));
  }

  setPanelDarkFallback(enabled) {
    if (!this.panel) {
      return;
    }

    Object.entries(darkFallbackVariables).forEach(([name, value]) => {
      if (enabled) {
        this.panel.style.setProperty(name, value);
      } else {
        this.panel.style.removeProperty(name);
      }
    });
  }

  syncThemeClasses() {
    const dark = this.detectDarkMode();
    this.syncBootstrapVariables();
    [this.input, this.panel].filter(Boolean).forEach((target) => {
      target.classList.toggle(classNames.themeDark, dark);
      target.classList.remove(classNames.themeDarkResolved);
    });
    this.setPanelDarkFallback(false);

    if (!dark || !this.panel) {
      return;
    }

    const needsFallback = !isDarkColor(getComputedStyle(this.panel).backgroundColor);

    if (needsFallback) {
      this.panel.classList.add(classNames.themeDarkResolved);
      this.setPanelDarkFallback(true);
    }
  }

  destroy() {
    const sourceInput = this.input;

    if (this.input && !this.options.inline) {
      this.input.classList.remove("shardo-datepicker-input");
      this.input.removeEventListener("focus", this.boundInputFocus);
      this.input.removeEventListener("click", this.boundInputClick);
      this.input.removeEventListener("input", this.boundInputInput);
      this.input.removeEventListener("change", this.boundInputChange);
      this.input.removeEventListener("keydown", this.boundKeyDown);
    }

    this.days.removeEventListener("mousemove", this.boundDaysMouseMove);
    document.removeEventListener("click", this.boundDocumentClick);
    window.removeEventListener("resize", this.boundPosition);
    window.removeEventListener("scroll", this.boundPosition, true);
    this.themeObserver?.disconnect();
    this.themeMedia?.removeEventListener?.("change", this.boundThemeChange);
    this.themeMedia?.removeListener?.(this.boundThemeChange);
    this.input?.classList.remove(classNames.themeAuto, classNames.themeDark, classNames.themeDarkResolved, classNames.themeBootstrap5);
    this.hiddenInput?.remove();
    this.panel.remove();

    if (sourceInput?.shardoDatePicker === this) {
      delete sourceInput.shardoDatePicker;
    }
  }

  static autoInit(root = document) {
    return [...root.querySelectorAll("[data-shardo-datepicker]")].map((element) => {
      if (element.shardoDatePicker) {
        return element.shardoDatePicker;
      }

      const options = optionsFromAttributes(element);

      if (!options) {
        return null;
      }

      element.shardoDatePicker = new ShardoDatePicker(element, options);
      return element.shardoDatePicker;
    }).filter(Boolean);
  }

  static setDefaults(options = {}, applyToExisting = false, root = null) {
    const resolved = resolveOptionSource(options);
    globalDefaults = { ...globalDefaults, ...resolved };

    if (applyToExisting && typeof document !== "undefined") {
      ShardoDatePicker.instances(root || document).forEach((picker) => picker.setOptions(resolved));
    }

    return ShardoDatePicker.getDefaults();
  }

  static configure(options = {}, applyToExisting = false, root = null) {
    return ShardoDatePicker.setDefaults(options, applyToExisting, root);
  }

  static getDefaults() {
    return { ...defaultOptions() };
  }

  static resetDefaults() {
    globalDefaults = {};
    return ShardoDatePicker.getDefaults();
  }

  static instances(root = null) {
    const source = root || (typeof document !== "undefined" ? document : null);
    return source ? [...source.querySelectorAll("[data-shardo-datepicker]")].map((element) => element.shardoDatePicker).filter(Boolean) : [];
  }
}

export const ShardoDatePickerUtils = {
  gregorianToJalali,
  jalaliToGregorian,
  jalaliMonthLength,
  parse: parseValue,
  format: formatValue,
  formatSelectedText: formatSelectedTextValue,
  formatGregorian: formatGregorianDate,
  isJalaliLeap,
  isValidJalaliDate,
  toDate,
  fromDate
};

if (typeof window !== "undefined") {
  window.ShardoDatePicker = ShardoDatePicker;
  window.ShardoDatePickerUtils = ShardoDatePickerUtils;

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      if (defaultOptions().autoInit) {
        ShardoDatePicker.autoInit();
      }
    });
  } else if (defaultOptions().autoInit) {
    ShardoDatePicker.autoInit();
  }
}





