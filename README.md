<h1 dir="rtl" align="center">Shardo Date Picker</h1>

<p dir="rtl" align="center">
  انتخاب‌گر تاریخ شمسی/جلالی برای رابط‌های فارسی، با پشتیبانی از تاریخ، زمان، بازهٔ تاریخ، حالت راست‌به‌چپ، تم تاریک و خروجی میلادی برای ارسال به سرور.
</p>

<p align="center" dir="ltr">
  <img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-ES%20Modules-f7df1e">
  <img alt="Jalali Calendar" src="https://img.shields.io/badge/Calendar-Jalali%20%2F%20Persian-2563eb">
  <img alt="RTL Support" src="https://img.shields.io/badge/RTL-Supported-0f766e">
  <img alt="Bootstrap" src="https://img.shields.io/badge/Bootstrap-5.3-7952b3">
  <img alt="License" src="https://img.shields.io/badge/License-MIT-green">
</p>

---

<h2 id="intro" dir="rtl" align="right">معرفی</h2>

<p dir="rtl" align="right">
  <strong>Shardo Date Picker</strong> یک کامپوننت سبک و قابل تنظیم برای انتخاب تاریخ شمسی است.
  کاربر تاریخ را به صورت شمسی و خوانا مشاهده می‌کند، اما برنامه می‌تواند مقدار معادل میلادی را برای ذخیره‌سازی، ارسال فرم یا استفاده در API دریافت کند.
</p>

<p dir="rtl" align="right">
  این پکیج برای فرم‌های رزرو، نوبت‌دهی، پنل‌های مدیریتی، فیلترهای گزارش، داشبوردها و پروژه‌هایی مناسب است که به انتخاب تاریخ شمسی در رابط فارسی نیاز دارند.
</p>

<h2 id="toc" dir="rtl" align="right">فهرست مطالب</h2>

<p dir="rtl" align="right">
  <a href="#features">قابلیت‌ها</a> ·
  <a href="#install">نصب</a> ·
  <a href="#demo">دمو</a> ·
  <a href="#attribute-usage">استفاده با Attribute</a> ·
  <a href="#javascript-usage">استفاده با JavaScript</a> ·
  <a href="#events">رویدادها</a> ·
  <a href="#theme">تم و ظاهر</a> ·
  <a href="#options">تنظیمات</a> ·
  <a href="#api">API</a> ·
  <a href="#tests">تست</a> ·
  <a href="#license">لایسنس</a>
</p>

---

<h2 id="features" dir="rtl" align="right">قابلیت‌ها</h2>

<div dir="rtl" align="right">
  <ul>
    <li>پشتیبانی از تقویم شمسی/جلالی</li>
    <li>نمایش صحیح در رابط‌های فارسی و راست‌به‌چپ</li>
    <li>انتخاب تاریخ تکی</li>
    <li>انتخاب تاریخ همراه با ساعت و دقیقه</li>
    <li>انتخاب بازهٔ تاریخ</li>
    <li>ساخت خودکار کنترل با <code>data-shardo-datepicker</code></li>
    <li>تولید مقدار شمسی برای نمایش به کاربر</li>
    <li>تولید مقدار میلادی برای ارسال به سرور</li>
    <li>ساخت خودکار <code>hidden input</code></li>
    <li>پشتیبانی از تاریخ حداقل، تاریخ حداکثر و تاریخ‌های غیرفعال</li>
    <li>نمایش جمعه‌ها و تعطیلی‌های سفارشی</li>
    <li>پشتیبانی از حالت روشن، تاریک و خودکار</li>
    <li>هماهنگی با Bootstrap 5.3</li>
    <li>شخصی‌سازی ظاهر با CSS Variable</li>
    <li>پشتیبانی از رویدادهای سفارشی</li>
    <li>قابل استفاده به صورت Popup یا Inline</li>
  </ul>
</div>

---

<h2 id="install" dir="rtl" align="right">نصب و راه‌اندازی</h2>

<p dir="rtl" align="right">ابتدا وابستگی‌های پروژه را نصب کنید:</p>

```bash
npm install
```

<p dir="rtl" align="right">اگر پکیج روی npm منتشر شده باشد، می‌توانید آن را به شکل زیر نصب کنید:</p>

```bash
npm install shardo-datepicker
```

<p dir="rtl" align="right">سپس فایل JavaScript و CSS را در پروژه وارد کنید:</p>

```js
import { ShardoDatePicker } from "shardo-datepicker";
import "shardo-datepicker/ShardoDatePicker.css";
```

<p dir="rtl" align="right">برای استفاده مستقیم از فایل‌های سورس:</p>

```html
<link rel="stylesheet" href="./src/ShardoDatePicker.css">
<script type="module" src="./src/ShardoDatePicker.js"></script>
```

---

<h2 id="demo" dir="rtl" align="right">اجرای دمو</h2>

```bash
npm run demo
```

<p dir="rtl" align="right">بعد از اجرای دستور، دمو از آدرس زیر در دسترس است:</p>

```text
http://127.0.0.1:5173/index.html
```

---

<h2 id="attribute-usage" dir="rtl" align="right">استفاده با Attribute</h2>

<p dir="rtl" align="right">
  ساده‌ترین روش استفاده، اضافه کردن <code>data-shardo-datepicker</code> به یک input یا container است.
</p>

```html
<link rel="stylesheet" href="./src/ShardoDatePicker.css">

<input
  id="appointment"
  name="appointment_display"
  type="text"
  data-shardo-datepicker
  data-shardo-datepicker-format="yyyy/MM/dd HH:mm"
  data-shardo-datepicker-gregorian-format="yyyy-MM-dd HH:mm"
  data-shardo-datepicker-hidden-input-name="appointment"
  data-shardo-datepicker-show-time="true"
  data-shardo-datepicker-time-step="5"
>

<script type="module" src="./src/ShardoDatePicker.js"></script>
```

<h3 dir="rtl" align="right">خروجی فرم</h3>

<div dir="rtl" align="right">
  <ul>
    <li>مقدار input اصلی به صورت شمسی نمایش داده می‌شود.</li>
    <li>در صورت فعال بودن <code>hiddenInput</code>، یک input مخفی ساخته می‌شود.</li>
    <li>مقدار input مخفی به صورت میلادی است و برای ارسال به سرور مناسب‌تر است.</li>
    <li>نام input مخفی را می‌توانید با <code>data-shardo-datepicker-hidden-input-name</code> مشخص کنید.</li>
  </ul>
</div>

---

<h2 id="range-usage" dir="rtl" align="right">انتخاب بازه تاریخ</h2>

<p dir="rtl" align="right">
  برای فعال کردن انتخاب بازه، گزینهٔ <code>range</code> را فعال کنید.
  در این حالت کاربر ابتدا تاریخ شروع و سپس تاریخ پایان را انتخاب می‌کند.
</p>

```html
<input
  id="range"
  name="range_display"
  type="text"
  data-shardo-datepicker
  data-shardo-datepicker-range="true"
  data-shardo-datepicker-format="yyyy/MM/dd"
  data-shardo-datepicker-gregorian-format="yyyy-MM-dd"
  data-shardo-datepicker-hidden-input-name="date_range"
  data-shardo-datepicker-show-time="false"
  data-shardo-datepicker-auto-close="true"
>
```

---

<h2 id="javascript-usage" dir="rtl" align="right">استفاده با JavaScript</h2>

<p dir="rtl" align="right">
  برای کنترل کامل‌تر، می‌توانید Date Picker را مستقیم با JavaScript بسازید.
</p>

```js
import { ShardoDatePicker } from "./src/ShardoDatePicker.js";

const picker = new ShardoDatePicker("#date", {
  format: "yyyy/MM/dd HH:mm",
  gregorianFormat: "yyyy-MM-dd HH:mm",
  hiddenInputName: "date",
  showTime: true,
  showSelectedText: true,
  selectedTextFormat: "dddd d MMMM yyyy"
});
```

<h3 dir="rtl" align="right">مقدار اولیه برای تاریخ تکی</h3>

```js
new ShardoDatePicker("#date", {
  value: "1405/02/28",
  format: "yyyy/MM/dd",
  showTime: false
});
```

<h3 dir="rtl" align="right">مقدار اولیه برای بازه تاریخ</h3>

```js
new ShardoDatePicker("#range", {
  range: true,
  value: ["1405/03/01", "1405/03/10"],
  format: "yyyy/MM/dd",
  gregorianFormat: "yyyy-MM-dd"
});
```

---

<h2 id="events" dir="rtl" align="right">رویدادها</h2>

<p dir="rtl" align="right">
  کنترل روی همان input یا container رویدادهای سفارشی منتشر می‌کند.
  اطلاعات اصلی هر رویداد در <code>event.detail</code> قرار دارد.
</p>

```js
const input = document.querySelector("#date");

input.addEventListener("shardo-datepicker:change", (event) => {
  console.log(event.detail.value);
  console.log(event.detail.gregorianValue);
  console.log(event.detail.selectedText);
  console.log(event.detail.jalali);
});
```

<h3 dir="rtl" align="right">رویدادهای قابل استفاده</h3>

<div dir="rtl" align="right">
  <ul>
    <li><code>shardo-datepicker:select</code>: بعد از انتخاب روز اجرا می‌شود.</li>
    <li><code>shardo-datepicker:change</code>: بعد از ثبت تغییر مقدار یا پاک شدن مقدار اجرا می‌شود.</li>
    <li><code>shardo-datepicker:clear</code>: بعد از پاک شدن مقدار اجرا می‌شود.</li>
    <li><code>shardo-datepicker:open</code>: بعد از باز شدن پنل اجرا می‌شود.</li>
    <li><code>shardo-datepicker:close</code>: بعد از بسته شدن پنل اجرا می‌شود.</li>
  </ul>
</div>

<h3 dir="rtl" align="right">اطلاعات موجود در event.detail</h3>

<div dir="rtl" align="right">
  <ul>
    <li><code>value</code>: مقدار شمسی قابل نمایش در input اصلی</li>
    <li><code>gregorianValue</code>: مقدار میلادی آماده برای ذخیره‌سازی یا ارسال به سرور</li>
    <li><code>selectedText</code>: متن خوانای انتخاب‌شده، مانند نام روز و ماه</li>
    <li><code>date</code>: نمونهٔ <code>Date</code> میلادی یا آبجکت بازه در حالت range</li>
    <li><code>jalali</code>: اجزای تاریخ شمسی انتخاب‌شده</li>
    <li><code>isRange</code>: مشخص می‌کند انتخاب از نوع بازه است یا نه</li>
    <li><code>picker</code>: نمونه ساخته‌شده از کلاس Date Picker</li>
  </ul>
</div>

---

<h2 id="holidays" dir="rtl" align="right">تعطیلی‌ها و تاریخ‌های غیرفعال</h2>

<p dir="rtl" align="right">
  می‌توانید جمعه‌ها، تعطیلی‌های سفارشی و تاریخ‌های غیرقابل انتخاب را مشخص کنید.
</p>

```html
<input
  data-shardo-datepicker
  data-shardo-datepicker-show-friday-holidays="true"
  data-shardo-datepicker-holidays="1405/02/15,1405/03/14"
  data-shardo-datepicker-disabled-dates="1405/01/13,1405/02/20"
>
```

<div dir="rtl" align="right">
  <ul>
    <li><code>showFridayHolidays</code>: جمعه‌ها را با ظاهر تعطیل نمایش می‌دهد.</li>
    <li><code>holidays</code>: لیست تعطیلی‌های سفارشی شمسی را مشخص می‌کند.</li>
    <li><code>disabledDates</code>: تاریخ‌هایی را مشخص می‌کند که کاربر نمی‌تواند انتخاب کند.</li>
  </ul>
</div>

<p dir="rtl" align="right">
  نکته: گزینهٔ <code>holidays</code> فقط ظاهر روز را تغییر می‌دهد و به تنهایی باعث غیرفعال شدن آن تاریخ نمی‌شود.
</p>

---

<h2 id="theme" dir="rtl" align="right">تم، رنگ و Bootstrap</h2>

<p dir="rtl" align="right">
  ظاهر کنترل با CSS Variable قابل شخصی‌سازی است.
  همچنین می‌توانید آن را با متغیرهای Bootstrap 5.3 هماهنگ کنید.
</p>

<h3 dir="rtl" align="right">فعال‌سازی Bootstrap Theme</h3>

```html
<input
  data-shardo-datepicker
  data-shardo-datepicker-bootstrap-theme="true"
  data-shardo-datepicker-theme="auto"
>
```

<p dir="rtl" align="right">
  وقتی <code>bootstrapTheme</code> فعال باشد، کنترل از متغیرهای رسمی Bootstrap مثل
  <code>--bs-body-bg</code>، <code>--bs-body-color</code>، <code>--bs-border-color</code> و <code>--bs-primary</code> استفاده می‌کند.
</p>

<h3 dir="rtl" align="right">نمونه Dark Mode در Bootstrap</h3>

```html
<html lang="fa" dir="rtl" data-bs-theme="dark">
```

<h3 dir="rtl" align="right">شخصی‌سازی رنگ‌ها</h3>

```css
:root {
  --shardo-datepicker-primary: #0f766e;
  --shardo-datepicker-bg: #ffffff;
  --shardo-datepicker-fg: #172033;
  --shardo-datepicker-radius: 8px;
  --shardo-datepicker-font: Vazirmatn, IRANSans, Tahoma, Arial, sans-serif;
}
```

<h3 dir="rtl" align="right">حالت‌های تم</h3>

<div dir="rtl" align="right">
  <ul>
    <li><code>auto</code>: کنترل با تم صفحه هماهنگ می‌شود.</li>
    <li><code>light</code>: کنترل همیشه با ظاهر روشن نمایش داده می‌شود.</li>
    <li><code>dark</code>: کنترل همیشه با ظاهر تاریک نمایش داده می‌شود.</li>
  </ul>
</div>

<h3 dir="rtl" align="right">متغیرهای مهم CSS</h3>

<div dir="rtl" align="right">
  <ul>
    <li><code>--shardo-datepicker-bg</code>: پس‌زمینه پنل تقویم</li>
    <li><code>--shardo-datepicker-fg</code>: رنگ متن اصلی</li>
    <li><code>--shardo-datepicker-muted</code>: رنگ متن‌های کم‌اهمیت</li>
    <li><code>--shardo-datepicker-border</code>: رنگ border معمولی</li>
    <li><code>--shardo-datepicker-primary</code>: رنگ اصلی انتخاب، focus و تأکید</li>
    <li><code>--shardo-datepicker-primary-soft</code>: پس‌زمینه ملایم رنگ اصلی</li>
    <li><code>--shardo-datepicker-primary-range</code>: پس‌زمینه روزهای داخل بازه</li>
    <li><code>--shardo-datepicker-danger</code>: رنگ خطا، تعطیلی یا پاک کردن</li>
    <li><code>--shardo-datepicker-danger-soft</code>: پس‌زمینه ملایم برای روزهای تعطیل</li>
    <li><code>--shardo-datepicker-shadow</code>: سایه popup</li>
    <li><code>--shardo-datepicker-radius</code>: گردی گوشه‌ها</li>
    <li><code>--shardo-datepicker-font</code>: فونت کنترل</li>
  </ul>
</div>

---

<h2 id="options" dir="rtl" align="right">تنظیمات</h2>

<p dir="rtl" align="right">
  در HTML، نام هر گزینه به صورت kebab-case بعد از <code>data-shardo-datepicker-</code> نوشته می‌شود.
  برای مثال گزینهٔ <code>showTime</code> در JavaScript، در HTML به شکل زیر نوشته می‌شود:
</p>

```html
data-shardo-datepicker-show-time
```

<p dir="rtl" align="right">
  مقدارهای boolean در Attribute می‌توانند <code>true</code>، <code>false</code>، <code>1</code> یا Attribute بدون مقدار باشند.
  اگر Attribute بدون مقدار نوشته شود، مقدار آن <code>true</code> در نظر گرفته می‌شود.
</p>

```html
<input
  data-shardo-datepicker
  data-shardo-datepicker-show-time="false"
  data-shardo-datepicker-disabled-dates="1405/01/13,1405/02/15"
>
```

<h3 dir="rtl" align="right">تنظیمات اصلی</h3>

<div dir="rtl" align="right">
  <h4><code>format</code></h4>
  <ul>
    <li><strong>Attribute:</strong> <code>data-shardo-datepicker-format</code></li>
    <li><strong>نوع:</strong> <code>string</code></li>
    <li><strong>پیش‌فرض:</strong> <code>yyyy/MM/dd HH:mm</code></li>
    <li><strong>کاربرد:</strong> فرمت مقدار شمسی قابل مشاهده در input.</li>
  </ul>

  <h4><code>gregorianFormat</code></h4>
  <ul>
    <li><strong>Attribute:</strong> <code>data-shardo-datepicker-gregorian-format</code></li>
    <li><strong>نوع:</strong> <code>string</code></li>
    <li><strong>پیش‌فرض:</strong> <code>yyyy-MM-dd HH:mm</code></li>
    <li><strong>کاربرد:</strong> فرمت مقدار میلادی در hidden input و خروجی <code>getGregorianValue()</code>.</li>
  </ul>

  <h4><code>showTime</code></h4>
  <ul>
    <li><strong>Attribute:</strong> <code>data-shardo-datepicker-show-time</code></li>
    <li><strong>نوع:</strong> <code>boolean</code></li>
    <li><strong>پیش‌فرض:</strong> <code>true</code></li>
    <li><strong>کاربرد:</strong> نمایش انتخاب ساعت و دقیقه.</li>
  </ul>

  <h4><code>timeStep</code></h4>
  <ul>
    <li><strong>Attribute:</strong> <code>data-shardo-datepicker-time-step</code></li>
    <li><strong>نوع:</strong> <code>number</code></li>
    <li><strong>پیش‌فرض:</strong> <code>1</code></li>
    <li><strong>کاربرد:</strong> تعیین گام دقیقه. برای مثال مقدار <code>5</code> دقیقه را به مضرب‌های ۵ نزدیک می‌کند.</li>
  </ul>

  <h4><code>autoClose</code></h4>
  <ul>
    <li><strong>Attribute:</strong> <code>data-shardo-datepicker-auto-close</code></li>
    <li><strong>نوع:</strong> <code>boolean</code></li>
    <li><strong>پیش‌فرض:</strong> <code>false</code></li>
    <li><strong>کاربرد:</strong> بسته شدن خودکار پنل بعد از انتخاب کامل مقدار.</li>
  </ul>

  <h4><code>inputReadonly</code></h4>
  <ul>
    <li><strong>Attribute:</strong> <code>data-shardo-datepicker-input-readonly</code></li>
    <li><strong>نوع:</strong> <code>boolean</code></li>
    <li><strong>پیش‌فرض:</strong> <code>false</code></li>
    <li><strong>کاربرد:</strong> جلوگیری از تایپ دستی در input.</li>
  </ul>

  <h4><code>usePersianDigits</code></h4>
  <ul>
    <li><strong>Attribute:</strong> <code>data-shardo-datepicker-use-persian-digits</code></li>
    <li><strong>نوع:</strong> <code>boolean</code></li>
    <li><strong>پیش‌فرض:</strong> <code>false</code></li>
    <li><strong>کاربرد:</strong> نمایش خروجی با اعداد فارسی.</li>
  </ul>
</div>

<h3 dir="rtl" align="right">محدودیت تاریخ و تعطیلی‌ها</h3>

<div dir="rtl" align="right">
  <h4><code>min</code></h4>
  <ul>
    <li><strong>Attribute:</strong> <code>data-shardo-datepicker-min</code></li>
    <li><strong>نوع:</strong> <code>string | Date | object | null</code></li>
    <li><strong>پیش‌فرض:</strong> <code>null</code></li>
    <li><strong>کاربرد:</strong> کمترین تاریخ قابل انتخاب.</li>
  </ul>

  <h4><code>max</code></h4>
  <ul>
    <li><strong>Attribute:</strong> <code>data-shardo-datepicker-max</code></li>
    <li><strong>نوع:</strong> <code>string | Date | object | null</code></li>
    <li><strong>پیش‌فرض:</strong> <code>null</code></li>
    <li><strong>کاربرد:</strong> بیشترین تاریخ قابل انتخاب.</li>
  </ul>

  <h4><code>disabledDates</code></h4>
  <ul>
    <li><strong>Attribute:</strong> <code>data-shardo-datepicker-disabled-dates</code></li>
    <li><strong>نوع:</strong> <code>array</code></li>
    <li><strong>پیش‌فرض:</strong> <code>[]</code></li>
    <li><strong>کاربرد:</strong> لیست تاریخ‌های غیرقابل انتخاب.</li>
  </ul>

  <h4><code>disablePast</code></h4>
  <ul>
    <li><strong>Attribute:</strong> <code>data-shardo-datepicker-disable-past</code></li>
    <li><strong>نوع:</strong> <code>boolean</code></li>
    <li><strong>پیش‌فرض:</strong> <code>false</code></li>
    <li><strong>کاربرد:</strong> غیرفعال کردن تاریخ‌های قبل از امروز.</li>
  </ul>

  <h4><code>disableFuture</code></h4>
  <ul>
    <li><strong>Attribute:</strong> <code>data-shardo-datepicker-disable-future</code></li>
    <li><strong>نوع:</strong> <code>boolean</code></li>
    <li><strong>پیش‌فرض:</strong> <code>false</code></li>
    <li><strong>کاربرد:</strong> غیرفعال کردن تاریخ‌های بعد از امروز.</li>
  </ul>

  <h4><code>showFridayHolidays</code></h4>
  <ul>
    <li><strong>Attribute:</strong> <code>data-shardo-datepicker-show-friday-holidays</code></li>
    <li><strong>نوع:</strong> <code>boolean</code></li>
    <li><strong>پیش‌فرض:</strong> <code>true</code></li>
    <li><strong>کاربرد:</strong> نمایش جمعه‌ها با ظاهر تعطیل.</li>
  </ul>

  <h4><code>holidays</code></h4>
  <ul>
    <li><strong>Attribute:</strong> <code>data-shardo-datepicker-holidays</code></li>
    <li><strong>نوع:</strong> <code>array</code></li>
    <li><strong>پیش‌فرض:</strong> <code>[]</code></li>
    <li><strong>کاربرد:</strong> لیست تعطیلی‌های سفارشی شمسی.</li>
  </ul>
</div>

<h3 dir="rtl" align="right">انتخاب بازه</h3>

<div dir="rtl" align="right">
  <h4><code>range</code></h4>
  <ul>
    <li><strong>Attribute:</strong> <code>data-shardo-datepicker-range</code></li>
    <li><strong>نوع:</strong> <code>boolean</code></li>
    <li><strong>پیش‌فرض:</strong> <code>false</code></li>
    <li><strong>کاربرد:</strong> فعال‌سازی انتخاب بازه تاریخ.</li>
  </ul>

  <h4><code>rangeSeparator</code></h4>
  <ul>
    <li><strong>Attribute:</strong> <code>data-shardo-datepicker-range-separator</code></li>
    <li><strong>نوع:</strong> <code>string</code></li>
    <li><strong>پیش‌فرض:</strong> <code> - </code></li>
    <li><strong>کاربرد:</strong> جداکننده مقدار شمسی در حالت بازه.</li>
  </ul>

  <h4><code>gregorianRangeSeparator</code></h4>
  <ul>
    <li><strong>Attribute:</strong> <code>data-shardo-datepicker-gregorian-range-separator</code></li>
    <li><strong>نوع:</strong> <code>string</code></li>
    <li><strong>پیش‌فرض:</strong> <code> - </code></li>
    <li><strong>کاربرد:</strong> جداکننده مقدار میلادی در hidden input.</li>
  </ul>
</div>

<h3 dir="rtl" align="right">Hidden Input و حالت Inline</h3>

<div dir="rtl" align="right">
  <h4><code>hiddenInput</code></h4>
  <ul>
    <li><strong>Attribute:</strong> <code>data-shardo-datepicker-hidden-input</code></li>
    <li><strong>نوع:</strong> <code>boolean</code></li>
    <li><strong>پیش‌فرض:</strong> <code>true</code></li>
    <li><strong>کاربرد:</strong> ساخت hidden input برای مقدار میلادی.</li>
  </ul>

  <h4><code>hiddenInputName</code></h4>
  <ul>
    <li><strong>Attribute:</strong> <code>data-shardo-datepicker-hidden-input-name</code></li>
    <li><strong>نوع:</strong> <code>string | null</code></li>
    <li><strong>پیش‌فرض:</strong> <code>null</code></li>
    <li><strong>کاربرد:</strong> نام hidden input.</li>
  </ul>

  <h4><code>hiddenInputId</code></h4>
  <ul>
    <li><strong>Attribute:</strong> <code>data-shardo-datepicker-hidden-input-id</code></li>
    <li><strong>نوع:</strong> <code>string | null</code></li>
    <li><strong>پیش‌فرض:</strong> <code>null</code></li>
    <li><strong>کاربرد:</strong> شناسه hidden input.</li>
  </ul>

  <h4><code>inline</code></h4>
  <ul>
    <li><strong>Attribute:</strong> <code>data-shardo-datepicker-inline</code></li>
    <li><strong>نوع:</strong> <code>boolean</code></li>
    <li><strong>پیش‌فرض:</strong> <code>false</code></li>
    <li><strong>کاربرد:</strong> نمایش ثابت تقویم داخل container به جای popup.</li>
  </ul>

  <h4><code>appendTo</code></h4>
  <ul>
    <li><strong>Attribute:</strong> ندارد؛ فقط از طریق JavaScript قابل استفاده است.</li>
    <li><strong>نوع:</strong> <code>HTMLElement | null</code></li>
    <li><strong>پیش‌فرض:</strong> <code>null</code></li>
    <li><strong>کاربرد:</strong> محل اضافه شدن popup را مشخص می‌کند.</li>
  </ul>
</div>

<h3 dir="rtl" align="right">تم، زبان و نمایش</h3>

<div dir="rtl" align="right">
  <h4><code>bootstrapTheme</code></h4>
  <ul>
    <li><strong>Attribute:</strong> <code>data-shardo-datepicker-bootstrap-theme</code></li>
    <li><strong>نوع:</strong> <code>boolean</code></li>
    <li><strong>پیش‌فرض:</strong> <code>false</code></li>
    <li><strong>کاربرد:</strong> استفاده از متغیرهای Bootstrap 5.3.</li>
  </ul>

  <h4><code>theme</code></h4>
  <ul>
    <li><strong>Attribute:</strong> <code>data-shardo-datepicker-theme</code></li>
    <li><strong>نوع:</strong> <code>string</code></li>
    <li><strong>پیش‌فرض:</strong> <code>auto</code></li>
    <li><strong>مقادیر مجاز:</strong> <code>auto</code>، <code>light</code>، <code>dark</code></li>
  </ul>

  <h4><code>weekStart</code></h4>
  <ul>
    <li><strong>Attribute:</strong> <code>data-shardo-datepicker-week-start</code></li>
    <li><strong>نوع:</strong> <code>number</code></li>
    <li><strong>پیش‌فرض:</strong> <code>6</code></li>
    <li><strong>کاربرد:</strong> روز شروع هفته بر اساس <code>Date.getDay()</code>. مقدار <code>6</code> یعنی شنبه.</li>
  </ul>

  <h4><code>showSelectedText</code></h4>
  <ul>
    <li><strong>Attribute:</strong> <code>data-shardo-datepicker-show-selected-text</code></li>
    <li><strong>نوع:</strong> <code>boolean</code></li>
    <li><strong>پیش‌فرض:</strong> <code>false</code></li>
    <li><strong>کاربرد:</strong> نمایش متن خلاصه انتخاب‌شده زیر روزها.</li>
  </ul>

  <h4><code>selectedTextFormat</code></h4>
  <ul>
    <li><strong>Attribute:</strong> <code>data-shardo-datepicker-selected-text-format</code></li>
    <li><strong>نوع:</strong> <code>string</code></li>
    <li><strong>پیش‌فرض:</strong> <code>dddd d MMMM</code></li>
    <li><strong>کاربرد:</strong> فرمت متن خلاصه انتخاب‌شده.</li>
  </ul>

  <h4><code>selectedTextRangeSeparator</code></h4>
  <ul>
    <li><strong>Attribute:</strong> <code>data-shardo-datepicker-selected-text-range-separator</code></li>
    <li><strong>نوع:</strong> <code>string</code></li>
    <li><strong>پیش‌فرض:</strong> <code> تا </code></li>
    <li><strong>کاربرد:</strong> جداکننده متن خلاصه در حالت بازه.</li>
  </ul>

  <h4><code>months</code></h4>
  <ul>
    <li><strong>Attribute:</strong> <code>data-shardo-datepicker-months</code></li>
    <li><strong>نوع:</strong> <code>array</code></li>
    <li><strong>کاربرد:</strong> لیست ۱۲ نام ماه برای نمایش.</li>
  </ul>

  <h4><code>weekdays</code></h4>
  <ul>
    <li><strong>Attribute:</strong> <code>data-shardo-datepicker-weekdays</code></li>
    <li><strong>نوع:</strong> <code>array</code></li>
    <li><strong>پیش‌فرض:</strong> <code>ش,ی,د,س,چ,پ,ج</code></li>
    <li><strong>کاربرد:</strong> عنوان کوتاه روزهای هفته در سربرگ تقویم.</li>
  </ul>

  <h4><code>weekdayNames</code></h4>
  <ul>
    <li><strong>Attribute:</strong> <code>data-shardo-datepicker-weekday-names</code></li>
    <li><strong>نوع:</strong> <code>array</code></li>
    <li><strong>کاربرد:</strong> نام کامل روزهای هفته برای <code>selectedTextFormat</code>.</li>
  </ul>

  <h4><code>yearRange</code></h4>
  <ul>
    <li><strong>Attribute:</strong> <code>data-shardo-datepicker-year-range</code></li>
    <li><strong>نوع:</strong> <code>number</code></li>
    <li><strong>پیش‌فرض:</strong> <code>80</code></li>
    <li><strong>کاربرد:</strong> محدوده منطقی انتخاب سال.</li>
  </ul>
</div>

<h3 dir="rtl" align="right">گزینه‌های فقط JavaScript</h3>

<div dir="rtl" align="right">
  <ul>
    <li><code>value</code>: مقدار اولیه. می‌تواند string، Date، object یا در حالت بازه array باشد.</li>
    <li><code>autoInit</code>: کنترل رفتار ساخت خودکار.</li>
    <li><code>onChange</code>: callback بعد از تغییر مقدار.</li>
    <li><code>onSelect</code>: callback بعد از انتخاب روز.</li>
    <li><code>onOpen</code>: callback بعد از باز شدن popup.</li>
    <li><code>onClose</code>: callback بعد از بسته شدن popup.</li>
  </ul>
</div>

---

<h2 id="date-format" dir="rtl" align="right">فرمت تاریخ</h2>

<h3 dir="rtl" align="right">توکن‌های format و gregorianFormat</h3>

<div dir="rtl" align="right">
  <ul>
    <li><code>yyyy</code>: سال چهار رقمی؛ مانند <code>1405</code></li>
    <li><code>yy</code>: دو رقم آخر سال؛ مانند <code>05</code></li>
    <li><code>MM</code>: ماه دو رقمی؛ مانند <code>02</code></li>
    <li><code>M</code>: ماه بدون صفر؛ مانند <code>2</code></li>
    <li><code>dd</code>: روز دو رقمی؛ مانند <code>09</code></li>
    <li><code>d</code>: روز بدون صفر؛ مانند <code>9</code></li>
    <li><code>HH</code>: ساعت دو رقمی؛ مانند <code>08</code></li>
    <li><code>H</code>: ساعت بدون صفر؛ مانند <code>8</code></li>
    <li><code>mm</code>: دقیقه دو رقمی؛ مانند <code>05</code></li>
    <li><code>m</code>: دقیقه بدون صفر؛ مانند <code>5</code></li>
  </ul>
</div>

<h3 dir="rtl" align="right">توکن‌های selectedTextFormat</h3>

<div dir="rtl" align="right">
  <ul>
    <li><code>dddd</code>: نام کامل روز هفته؛ مانند <code>شنبه</code></li>
    <li><code>MMMM</code>: نام ماه؛ مانند <code>مهر</code></li>
    <li><code>yyyy</code>، <code>yy</code>، <code>MM</code>، <code>M</code>، <code>dd</code>، <code>d</code>: همان خروجی‌های تاریخ شمسی</li>
  </ul>
</div>

---

<h2 id="api" dir="rtl" align="right">API</h2>

<div dir="rtl" align="right">
  <ul>
    <li><code>ShardoDatePicker</code>: کلاس اصلی کنترل</li>
    <li><code>ShardoDatePicker.autoInit(root)</code>: ساخت خودکار کنترل‌ها از روی <code>data-shardo-datepicker</code></li>
    <li><code>ShardoDatePickerUtils</code>: ابزارهای تبدیل، parse، format، کبیسه و اعتبارسنجی</li>
    <li><code>getValue()</code>: دریافت مقدار شمسی قابل مشاهده</li>
    <li><code>getGregorianValue()</code>: دریافت مقدار میلادی آماده ارسال</li>
    <li><code>getDate()</code>: دریافت <code>Date</code> میلادی یا <code>{ start, end }</code> در حالت بازه</li>
    <li><code>getShardoDatePickerJalali()</code>: دریافت اجزای شمسی انتخاب‌شده</li>
    <li><code>getSelectedText()</code>: دریافت متن نمایشی انتخاب‌شده، مانند <code>شنبه 13 مهر</code></li>
  </ul>
</div>

---

<h2 id="calendar" dir="rtl" align="right">تقویم و تبدیل تاریخ</h2>

<p dir="rtl" align="right">
  تبدیل تاریخ با استفاده از <code>Intl.DateTimeFormat</code> و calendar استاندارد <code>persian</code> انجام می‌شود.
  اعتبارسنجی تاریخ‌هایی مانند اسفند ۳۰ و سال کبیسه نیز بر همین اساس بررسی شده است.
</p>

---

<h2 id="tests" dir="rtl" align="right">تست و اعتبارسنجی</h2>

<p dir="rtl" align="right">برای بررسی پروژه قبل از انتشار، دستورهای زیر را اجرا کنید:</p>

```bash
npm install
npx playwright install chromium
npm run check
npm run test:unit
npm run test:e2e
npm test
npm run prepublishOnly
```

<p dir="rtl" align="right">
  دستور <code>npm test</code> ابتدا تست‌های واحد و سپس تست‌های مرورگری را اجرا می‌کند.
  تست‌های مرورگری با Playwright اجرا می‌شوند، سرور دمو را روی پورت <code>5174</code> بالا می‌آورند و صفحه fixture را مشابه رفتار کاربر واقعی بررسی می‌کنند.
</p>

<h3 dir="rtl" align="right">اجرای تست واحد با Node.js سفارشی</h3>

```bash
/path/to/node --test tests/*.test.mjs
```

<h3 dir="rtl" align="right">مسیر تست‌ها</h3>

```text
tests/e2e/shardo-datepicker-user.spec.mjs
tests/fixtures/user-settings.html
```

<h3 dir="rtl" align="right">موارد پوشش داده‌شده در تست‌ها</h3>

<div dir="rtl" align="right">
  <ul>
    <li>ساخت خودکار کنترل از روی <code>data-shardo-datepicker</code></li>
    <li>ساخت hidden input و بررسی مقدار میلادی</li>
    <li>بررسی مقدار شمسی input و مقدار <code>selectedText</code></li>
    <li>انتخاب تاریخ و بسته شدن popup در حالت مناسب</li>
    <li>انتخاب زمان و normalize شدن دقیقه با <code>timeStep</code></li>
    <li>انتخاب بازه، preview هنگام hover و جداکننده‌های شمسی و میلادی</li>
    <li>پاک شدن مقدار input و hidden input با خالی کردن دستی فیلد</li>
    <li>تعطیلی‌ها، جمعه‌ها و تاریخ‌های disabled</li>
    <li>خواندن تنظیمات از JSON داخل <code>data-shardo-datepicker</code></li>
    <li>گزینه‌های فقط JavaScript مانند <code>value</code>، <code>appendTo</code> و callbackها</li>
    <li>حالت Inline</li>
    <li>Bootstrap Theme و Dark Mode</li>
    <li>قرار گرفتن popup داخل viewport موبایل</li>
  </ul>
</div>

---

<h2 id="github-topics" dir="rtl" align="right">موضوعات پیشنهادی GitHub</h2>

<p dir="rtl" align="right">برای بهتر دیده شدن پروژه در GitHub، می‌توانید از Topicهای زیر استفاده کنید:</p>

<p dir="ltr" align="left">
  <code>datepicker</code>
  <code>jalali</code>
  <code>jalali-datepicker</code>
  <code>persian-calendar</code>
  <code>persian-date</code>
  <code>shamsi-date-picker</code>
  <code>rtl</code>
  <code>javascript</code>
  <code>bootstrap</code>
  <code>date-range-picker</code>
  <code>calendar</code>
</p>

---

<h2 id="contributing" dir="rtl" align="right">مشارکت</h2>

<p dir="rtl" align="right">
  مشارکت در توسعه پروژه آزاد است.
  برای گزارش باگ، پیشنهاد قابلیت جدید یا ارسال تغییرات، می‌توانید از Issue و Pull Request استفاده کنید.
</p>

<div dir="rtl" align="right">
  <ol>
    <li>پروژه را fork کنید.</li>
    <li>یک branch جدید برای تغییرات خود بسازید.</li>
    <li>تغییرات را همراه با تست مناسب ثبت کنید.</li>
    <li>قبل از ارسال Pull Request، تست‌ها را اجرا کنید.</li>
  </ol>
</div>

```bash
npm test
```

---

<h2 id="license" dir="rtl" align="right">لایسنس</h2>

<p dir="rtl" align="right">
  این پروژه عمومی، رایگان و متن‌باز است.
  استفاده، کپی، تغییر، انتشار و توزیع آن تحت مجوز <strong>MIT</strong> آزاد است.
</p>

<p dir="rtl" align="right">
  متن کامل مجوز در فایل <code>LICENSE</code> قرار دارد.
</p>
