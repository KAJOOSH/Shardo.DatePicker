<h1 dir="rtl" align="right">Shardo Date Picker</h1>

<p dir="rtl" align="right">
  <strong>Shardo Date Picker</strong> یک انتخاب‌گر تاریخ شمسی/جلالی برای پروژه‌های فارسی و راست‌به‌چپ است.
  این پکیج امکان انتخاب تاریخ، زمان و بازهٔ تاریخ را فراهم می‌کند و در کنار مقدار شمسی قابل نمایش برای کاربر،
  مقدار معادل میلادی را نیز برای ارسال به سرور آماده می‌سازد.
</p>

<p dir="rtl" align="right">
  این ابزار برای فرم‌های رزرو، نوبت‌دهی، گزارش‌گیری، فیلترهای تاریخی، پنل‌های مدیریتی و هر پروژه‌ای که به انتخاب تاریخ شمسی نیاز دارد مناسب است.
</p>

<p align="left" dir="ltr">
  <img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-ES%20Modules-f7df1e">
  <img alt="Jalali Calendar" src="https://img.shields.io/badge/Calendar-Jalali%20%2F%20Persian-2563eb">
  <img alt="RTL Support" src="https://img.shields.io/badge/RTL-Supported-0f766e">
  <img alt="Bootstrap" src="https://img.shields.io/badge/Bootstrap-5.3-7952b3">
  <img alt="License" src="https://img.shields.io/badge/License-MIT-green">
</p>

---

<h2 dir="rtl" align="right">فهرست مطالب</h2>

<div dir="rtl" align="right">

- [معرفی](#معرفی)
- [قابلیت‌ها](#قابلیتها)
- [نصب و راه‌اندازی](#نصب-و-راهاندازی)
- [اجرای دمو](#اجرای-دمو)
- [استفاده با Attribute](#استفاده-با-attribute)
- [انتخاب بازه تاریخ](#انتخاب-بازه-تاریخ)
- [استفاده با JavaScript](#استفاده-با-javascript)
- [رویدادها](#رویدادها)
- [تعطیلی‌ها و تاریخ‌های غیرفعال](#تعطیلیها-و-تاریخهای-غیرفعال)
- [تم، رنگ و Bootstrap](#تم-رنگ-و-bootstrap)
- [تنظیمات](#تنظیمات)
- [فرمت تاریخ](#فرمت-تاریخ)
- [API](#api)
- [تست و اعتبارسنجی](#تست-و-اعتبارسنجی)
- [موضوعات پیشنهادی GitHub](#موضوعات-پیشنهادی-github)
- [مشارکت](#مشارکت)
- [لایسنس](#لایسنس)

</div>

---

<h2 id="معرفی" dir="rtl" align="right">معرفی</h2>

<p dir="rtl" align="right">
  در بسیاری از پروژه‌های فارسی، کاربر باید تاریخ را به صورت شمسی مشاهده و انتخاب کند؛
  اما در سمت سرور، پایگاه داده یا API معمولاً ذخیره‌سازی و پردازش تاریخ با فرمت میلادی انجام می‌شود.
</p>

<p dir="rtl" align="right">
  <strong>Shardo Date Picker</strong> این فاصله را ساده می‌کند:
  کاربر با یک تقویم شمسی فارسی کار می‌کند، اما برنامه می‌تواند خروجی میلادی استاندارد را از طریق
  <code>hidden input</code> یا متدهای JavaScript دریافت کند.
</p>

<p dir="rtl" align="right">
  این پکیج به گونه‌ای طراحی شده که هم با HTML ساده و Attributeها قابل استفاده باشد و هم در سناریوهای پیشرفته‌تر
  از طریق JavaScript کنترل کامل‌تری در اختیار توسعه‌دهنده قرار دهد.
</p>

---

<h2 id="قابلیتها" dir="rtl" align="right">قابلیت‌ها</h2>

<div dir="rtl" align="right">

- پشتیبانی از تقویم شمسی/جلالی
- مناسب برای رابط‌های فارسی و راست‌به‌چپ
- انتخاب تاریخ تکی
- انتخاب تاریخ همراه با ساعت و دقیقه
- انتخاب بازهٔ تاریخ
- ساخت خودکار Date Picker با `data-shardo-datepicker`
- تولید مقدار شمسی برای نمایش به کاربر
- تولید مقدار میلادی برای ارسال به سرور
- ساخت خودکار `hidden input`
- پشتیبانی از مقدار اولیه
- پشتیبانی از تاریخ حداقل و حداکثر
- پشتیبانی از تاریخ‌های غیرفعال
- نمایش جمعه‌ها و تعطیلی‌های سفارشی
- پشتیبانی از حالت روشن، تاریک و خودکار
- هماهنگی با Bootstrap 5.3
- شخصی‌سازی ظاهر با CSS Variable
- پشتیبانی از رویدادهای سفارشی
- پشتیبانی از حالت Popup و Inline
- مناسب برای تست‌های واحد و تست‌های مرورگری

</div>

---

<h2 id="نصب-و-راهاندازی" dir="rtl" align="right">نصب و راه‌اندازی</h2>

<h3 dir="rtl" align="right">نصب وابستگی‌های پروژه</h3>

```bash
npm install
```

<h3 dir="rtl" align="right">استفاده از طریق npm</h3>

<p dir="rtl" align="right">
  اگر پکیج روی npm منتشر شده باشد، می‌توانید آن را به شکل زیر نصب کنید:
</p>

```bash
npm install shardo-datepicker
```

<p dir="rtl" align="right">
  سپس فایل JavaScript و CSS را در پروژه وارد کنید:
</p>

```js
import { ShardoDatePicker } from "shardo-datepicker";
import "shardo-datepicker/ShardoDatePicker.css";
```

<h3 dir="rtl" align="right">استفاده مستقیم از فایل‌های پروژه</h3>

<p dir="rtl" align="right">
  اگر پکیج را مستقیم از سورس پروژه استفاده می‌کنید، فایل CSS و JavaScript را در صفحه وارد کنید:
</p>

```html
<link rel="stylesheet" href="./src/ShardoDatePicker.css">
<script type="module" src="./src/ShardoDatePicker.js"></script>
```

---

<h2 id="اجرای-دمو" dir="rtl" align="right">اجرای دمو</h2>

```bash
npm run demo
```

<p dir="rtl" align="right">
  بعد از اجرای دستور بالا، دمو از آدرس زیر در دسترس است:
</p>

```text
http://127.0.0.1:5173/index.html
```

---

<h2 id="استفاده-با-attribute" dir="rtl" align="right">استفاده با Attribute</h2>

<p dir="rtl" align="right">
  ساده‌ترین روش استفاده از پکیج، اضافه کردن Attribute زیر به یک input یا container است:
</p>

```html
data-shardo-datepicker
```

<p dir="rtl" align="right">
  هر المنتی که این Attribute را داشته باشد، به صورت خودکار به Date Picker تبدیل می‌شود.
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

<h3 dir="rtl" align="right">خروجی فرم چگونه ساخته می‌شود؟</h3>

<div dir="rtl" align="right">

- مقدار input اصلی برای نمایش به کاربر است و به صورت شمسی تولید می‌شود.
- در صورت فعال بودن `hiddenInput`، یک input مخفی کنار input اصلی ساخته می‌شود.
- مقدار input مخفی به صورت میلادی است و برای ارسال به سرور مناسب‌تر است.
- نام hidden input را می‌توانید با `data-shardo-datepicker-hidden-input-name` مشخص کنید.

</div>

---

<h2 id="انتخاب-بازه-تاریخ" dir="rtl" align="right">انتخاب بازه تاریخ</h2>

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

<p dir="rtl" align="right">
  مقدار بازه در input اصلی به صورت شمسی نمایش داده می‌شود و مقدار معادل میلادی در hidden input قرار می‌گیرد.
</p>

---

<h2 id="استفاده-با-javascript" dir="rtl" align="right">استفاده با JavaScript</h2>

<p dir="rtl" align="right">
  اگر به کنترل کامل‌تری نیاز دارید، می‌توانید Date Picker را مستقیم با JavaScript بسازید.
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

<h3 dir="rtl" align="right">مقدار اولیه برای انتخاب تاریخ</h3>

```js
new ShardoDatePicker("#date", {
  value: "1405/02/28",
  format: "yyyy/MM/dd",
  showTime: false
});
```

<h3 dir="rtl" align="right">مقدار اولیه برای انتخاب بازه</h3>

```js
new ShardoDatePicker("#range", {
  range: true,
  value: ["1405/03/01", "1405/03/10"],
  format: "yyyy/MM/dd",
  gregorianFormat: "yyyy-MM-dd"
});
```

---

<h2 id="رویدادها" dir="rtl" align="right">رویدادها</h2>

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

<h3 dir="rtl" align="right">لیست رویدادها</h3>

<table dir="rtl" align="right">
  <thead>
    <tr>
      <th align="right">رویداد</th>
      <th align="right">زمان اجرا</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>shardo-datepicker:select</code></td>
      <td>بعد از انتخاب روز اجرا می‌شود.</td>
    </tr>
    <tr>
      <td><code>shardo-datepicker:change</code></td>
      <td>بعد از ثبت تغییر مقدار یا پاک شدن مقدار اجرا می‌شود.</td>
    </tr>
    <tr>
      <td><code>shardo-datepicker:clear</code></td>
      <td>بعد از پاک شدن مقدار اجرا می‌شود.</td>
    </tr>
    <tr>
      <td><code>shardo-datepicker:open</code></td>
      <td>بعد از باز شدن پنل اجرا می‌شود.</td>
    </tr>
    <tr>
      <td><code>shardo-datepicker:close</code></td>
      <td>بعد از بسته شدن پنل اجرا می‌شود.</td>
    </tr>
  </tbody>
</table>

<h3 dir="rtl" align="right">ساختار event.detail</h3>

<table dir="rtl" align="right">
  <thead>
    <tr>
      <th align="right">کلید</th>
      <th align="right">توضیح</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>value</code></td>
      <td>مقدار شمسی قابل نمایش در input اصلی</td>
    </tr>
    <tr>
      <td><code>gregorianValue</code></td>
      <td>مقدار میلادی آماده برای ذخیره‌سازی یا ارسال به سرور</td>
    </tr>
    <tr>
      <td><code>selectedText</code></td>
      <td>متن خوانای انتخاب‌شده، مانند نام روز و ماه</td>
    </tr>
    <tr>
      <td><code>date</code></td>
      <td>نمونه <code>Date</code> میلادی یا آبجکت بازه در حالت range</td>
    </tr>
    <tr>
      <td><code>jalali</code></td>
      <td>اجزای تاریخ شمسی انتخاب‌شده</td>
    </tr>
    <tr>
      <td><code>isRange</code></td>
      <td>مشخص می‌کند انتخاب از نوع بازه است یا خیر</td>
    </tr>
    <tr>
      <td><code>picker</code></td>
      <td>نمونه ساخته‌شده از کلاس Date Picker</td>
    </tr>
  </tbody>
</table>

---

<h2 id="تعطیلیها-و-تاریخهای-غیرفعال" dir="rtl" align="right">تعطیلی‌ها و تاریخ‌های غیرفعال</h2>

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

<table dir="rtl" align="right">
  <thead>
    <tr>
      <th align="right">گزینه</th>
      <th align="right">کاربرد</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>showFridayHolidays</code></td>
      <td>جمعه‌ها را با ظاهر تعطیل نمایش می‌دهد.</td>
    </tr>
    <tr>
      <td><code>holidays</code></td>
      <td>لیست تعطیلی‌های سفارشی شمسی را مشخص می‌کند.</td>
    </tr>
    <tr>
      <td><code>disabledDates</code></td>
      <td>تاریخ‌هایی را مشخص می‌کند که کاربر نمی‌تواند انتخاب کند.</td>
    </tr>
  </tbody>
</table>

<p dir="rtl" align="right">
  توجه: گزینهٔ <code>holidays</code> فقط ظاهر روز را تغییر می‌دهد و به تنهایی باعث غیرفعال شدن آن تاریخ نمی‌شود.
</p>

---

<h2 id="تم-رنگ-و-bootstrap" dir="rtl" align="right">تم، رنگ و Bootstrap</h2>

<p dir="rtl" align="right">
  ظاهر کنترل با CSS Variable قابل شخصی‌سازی است.
  همچنین در صورت نیاز می‌توانید آن را با متغیرهای Bootstrap 5.3 هماهنگ کنید.
</p>

<h3 dir="rtl" align="right">فعال‌سازی تم Bootstrap</h3>

```html
<input
  data-shardo-datepicker
  data-shardo-datepicker-bootstrap-theme="true"
  data-shardo-datepicker-theme="auto"
>
```

<p dir="rtl" align="right">
  زمانی که <code>bootstrapTheme</code> فعال باشد، کنترل از متغیرهای رسمی Bootstrap استفاده می‌کند.
  بنابراین باید CSS Bootstrap یا تعریف متغیرهای <code>--bs-*</code> در صفحه وجود داشته باشد.
</p>

<h3 dir="rtl" align="right">نمونه استفاده از Dark Mode در Bootstrap</h3>

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

<table dir="rtl" align="right">
  <thead>
    <tr>
      <th align="right">مقدار</th>
      <th align="right">توضیح</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>auto</code></td>
      <td>تم کنترل با تم صفحه هماهنگ می‌شود.</td>
    </tr>
    <tr>
      <td><code>light</code></td>
      <td>کنترل همیشه با ظاهر روشن نمایش داده می‌شود.</td>
    </tr>
    <tr>
      <td><code>dark</code></td>
      <td>کنترل همیشه با ظاهر تاریک نمایش داده می‌شود.</td>
    </tr>
  </tbody>
</table>

<h3 dir="rtl" align="right">متغیرهای مهم CSS</h3>

<table dir="rtl" align="right">
  <thead>
    <tr>
      <th align="right">متغیر</th>
      <th align="right">کاربرد</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>--shardo-datepicker-bg</code></td>
      <td>پس‌زمینه پنل تقویم</td>
    </tr>
    <tr>
      <td><code>--shardo-datepicker-fg</code></td>
      <td>رنگ متن اصلی</td>
    </tr>
    <tr>
      <td><code>--shardo-datepicker-muted</code></td>
      <td>رنگ متن‌های کم‌اهمیت</td>
    </tr>
    <tr>
      <td><code>--shardo-datepicker-border</code></td>
      <td>رنگ border معمولی</td>
    </tr>
    <tr>
      <td><code>--shardo-datepicker-primary</code></td>
      <td>رنگ اصلی انتخاب، focus و تأکید</td>
    </tr>
    <tr>
      <td><code>--shardo-datepicker-primary-soft</code></td>
      <td>پس‌زمینه ملایم رنگ اصلی</td>
    </tr>
    <tr>
      <td><code>--shardo-datepicker-primary-range</code></td>
      <td>پس‌زمینه روزهای داخل بازه</td>
    </tr>
    <tr>
      <td><code>--shardo-datepicker-danger</code></td>
      <td>رنگ خطا، تعطیلی یا پاک کردن</td>
    </tr>
    <tr>
      <td><code>--shardo-datepicker-danger-soft</code></td>
      <td>پس‌زمینه ملایم برای روزهای تعطیل</td>
    </tr>
    <tr>
      <td><code>--shardo-datepicker-shadow</code></td>
      <td>سایه popup</td>
    </tr>
    <tr>
      <td><code>--shardo-datepicker-radius</code></td>
      <td>گردی گوشه‌ها</td>
    </tr>
    <tr>
      <td><code>--shardo-datepicker-font</code></td>
      <td>فونت کنترل</td>
    </tr>
  </tbody>
</table>

---

<h2 id="تنظیمات" dir="rtl" align="right">تنظیمات</h2>

<p dir="rtl" align="right">
  نام هر گزینه در HTML به صورت kebab-case بعد از <code>data-shardo-datepicker-</code> نوشته می‌شود.
</p>

<p dir="rtl" align="right">
  برای مثال، گزینهٔ <code>showTime</code> در JavaScript به شکل زیر در HTML نوشته می‌شود:
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

<table dir="rtl" align="right">
  <thead>
    <tr>
      <th align="right">گزینه</th>
      <th align="right">Attribute</th>
      <th align="right">توضیح</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>format</code></td>
      <td><code>data-shardo-datepicker-format</code></td>
      <td>فرمت مقدار شمسی قابل مشاهده در input. پیش‌فرض: <code>yyyy/MM/dd HH:mm</code></td>
    </tr>
    <tr>
      <td><code>gregorianFormat</code></td>
      <td><code>data-shardo-datepicker-gregorian-format</code></td>
      <td>فرمت مقدار میلادی در hidden input و خروجی <code>getGregorianValue()</code>. پیش‌فرض: <code>yyyy-MM-dd HH:mm</code></td>
    </tr>
    <tr>
      <td><code>showTime</code></td>
      <td><code>data-shardo-datepicker-show-time</code></td>
      <td>نمایش انتخاب ساعت و دقیقه. پیش‌فرض: <code>true</code></td>
    </tr>
    <tr>
      <td><code>timeStep</code></td>
      <td><code>data-shardo-datepicker-time-step</code></td>
      <td>گام دقیقه. برای مثال مقدار <code>5</code> دقیقه را به مضرب‌های ۵ نزدیک می‌کند. پیش‌فرض: <code>1</code></td>
    </tr>
    <tr>
      <td><code>autoClose</code></td>
      <td><code>data-shardo-datepicker-auto-close</code></td>
      <td>بسته شدن خودکار پنل بعد از انتخاب کامل مقدار. پیش‌فرض: <code>false</code></td>
    </tr>
    <tr>
      <td><code>inputReadonly</code></td>
      <td><code>data-shardo-datepicker-input-readonly</code></td>
      <td>جلوگیری از تایپ دستی در input. پیش‌فرض: <code>false</code></td>
    </tr>
    <tr>
      <td><code>usePersianDigits</code></td>
      <td><code>data-shardo-datepicker-use-persian-digits</code></td>
      <td>نمایش خروجی با اعداد فارسی. پیش‌فرض: <code>false</code></td>
    </tr>
  </tbody>
</table>

<h3 dir="rtl" align="right">محدودیت تاریخ و تعطیلی‌ها</h3>

<table dir="rtl" align="right">
  <thead>
    <tr>
      <th align="right">گزینه</th>
      <th align="right">Attribute</th>
      <th align="right">توضیح</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>min</code></td>
      <td><code>data-shardo-datepicker-min</code></td>
      <td>کمترین تاریخ قابل انتخاب. در HTML مقدار شمسی مانند <code>1404/01/01</code> وارد کنید.</td>
    </tr>
    <tr>
      <td><code>max</code></td>
      <td><code>data-shardo-datepicker-max</code></td>
      <td>بیشترین تاریخ قابل انتخاب. قالب ورودی مانند <code>min</code> است.</td>
    </tr>
    <tr>
      <td><code>disabledDates</code></td>
      <td><code>data-shardo-datepicker-disabled-dates</code></td>
      <td>لیست تاریخ‌های غیرفعال شمسی. نمونه: <code>1405/01/13,1405/02/15</code></td>
    </tr>
    <tr>
      <td><code>disablePast</code></td>
      <td><code>data-shardo-datepicker-disable-past</code></td>
      <td>غیرفعال کردن تاریخ‌های قبل از امروز. پیش‌فرض: <code>false</code></td>
    </tr>
    <tr>
      <td><code>disableFuture</code></td>
      <td><code>data-shardo-datepicker-disable-future</code></td>
      <td>غیرفعال کردن تاریخ‌های بعد از امروز. پیش‌فرض: <code>false</code></td>
    </tr>
    <tr>
      <td><code>showFridayHolidays</code></td>
      <td><code>data-shardo-datepicker-show-friday-holidays</code></td>
      <td>نمایش جمعه‌ها با ظاهر تعطیل. پیش‌فرض: <code>true</code></td>
    </tr>
    <tr>
      <td><code>holidays</code></td>
      <td><code>data-shardo-datepicker-holidays</code></td>
      <td>لیست تعطیلی‌های سفارشی شمسی. این گزینه فقط ظاهر روز را تغییر می‌دهد.</td>
    </tr>
  </tbody>
</table>

<h3 dir="rtl" align="right">انتخاب بازه تاریخ</h3>

<table dir="rtl" align="right">
  <thead>
    <tr>
      <th align="right">گزینه</th>
      <th align="right">Attribute</th>
      <th align="right">توضیح</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>range</code></td>
      <td><code>data-shardo-datepicker-range</code></td>
      <td>فعال‌سازی انتخاب بازه تاریخ. پیش‌فرض: <code>false</code></td>
    </tr>
    <tr>
      <td><code>rangeSeparator</code></td>
      <td><code>data-shardo-datepicker-range-separator</code></td>
      <td>جداکننده مقدار شمسی در حالت بازه. پیش‌فرض: <code> - </code></td>
    </tr>
    <tr>
      <td><code>gregorianRangeSeparator</code></td>
      <td><code>data-shardo-datepicker-gregorian-range-separator</code></td>
      <td>جداکننده مقدار میلادی در hidden input. پیش‌فرض: <code> - </code></td>
    </tr>
  </tbody>
</table>

<h3 dir="rtl" align="right">Hidden Input و حالت Inline</h3>

<table dir="rtl" align="right">
  <thead>
    <tr>
      <th align="right">گزینه</th>
      <th align="right">Attribute</th>
      <th align="right">توضیح</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>hiddenInput</code></td>
      <td><code>data-shardo-datepicker-hidden-input</code></td>
      <td>ساخت hidden input برای مقدار میلادی. پیش‌فرض: <code>true</code></td>
    </tr>
    <tr>
      <td><code>hiddenInputName</code></td>
      <td><code>data-shardo-datepicker-hidden-input-name</code></td>
      <td>نام hidden input. اگر تنظیم نشود، از <code>name</code> یا <code>id</code> ورودی اصلی با پسوند <code>_gregorian</code> ساخته می‌شود.</td>
    </tr>
    <tr>
      <td><code>hiddenInputId</code></td>
      <td><code>data-shardo-datepicker-hidden-input-id</code></td>
      <td>شناسه hidden input.</td>
    </tr>
    <tr>
      <td><code>inline</code></td>
      <td><code>data-shardo-datepicker-inline</code></td>
      <td>نمایش ثابت تقویم داخل container به جای popup. پیش‌فرض: <code>false</code></td>
    </tr>
    <tr>
      <td><code>appendTo</code></td>
      <td>فقط JavaScript</td>
      <td>محل اضافه شدن popup را مشخص می‌کند. اگر <code>null</code> باشد، popup به <code>document.body</code> اضافه می‌شود.</td>
    </tr>
  </tbody>
</table>

<h3 dir="rtl" align="right">تم، زبان و نمایش</h3>

<table dir="rtl" align="right">
  <thead>
    <tr>
      <th align="right">گزینه</th>
      <th align="right">Attribute</th>
      <th align="right">توضیح</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>bootstrapTheme</code></td>
      <td><code>data-shardo-datepicker-bootstrap-theme</code></td>
      <td>استفاده از متغیرهای Bootstrap 5.3. پیش‌فرض: <code>false</code></td>
    </tr>
    <tr>
      <td><code>theme</code></td>
      <td><code>data-shardo-datepicker-theme</code></td>
      <td>تم کنترل. مقدارهای قابل قبول: <code>auto</code>، <code>light</code>، <code>dark</code>. پیش‌فرض: <code>auto</code></td>
    </tr>
    <tr>
      <td><code>weekStart</code></td>
      <td><code>data-shardo-datepicker-week-start</code></td>
      <td>روز شروع هفته بر اساس <code>Date.getDay()</code>. مقدار <code>6</code> یعنی شنبه. پیش‌فرض: <code>6</code></td>
    </tr>
    <tr>
      <td><code>showSelectedText</code></td>
      <td><code>data-shardo-datepicker-show-selected-text</code></td>
      <td>نمایش متن خلاصه انتخاب‌شده زیر روزها. پیش‌فرض: <code>false</code></td>
    </tr>
    <tr>
      <td><code>selectedTextFormat</code></td>
      <td><code>data-shardo-datepicker-selected-text-format</code></td>
      <td>فرمت متن خلاصه انتخاب‌شده. پیش‌فرض: <code>dddd d MMMM</code></td>
    </tr>
    <tr>
      <td><code>selectedTextRangeSeparator</code></td>
      <td><code>data-shardo-datepicker-selected-text-range-separator</code></td>
      <td>جداکننده متن خلاصه در حالت بازه. پیش‌فرض: <code> تا </code></td>
    </tr>
    <tr>
      <td><code>months</code></td>
      <td><code>data-shardo-datepicker-months</code></td>
      <td>لیست ۱۲ نام ماه برای نمایش. در HTML با کاما جدا می‌شود.</td>
    </tr>
    <tr>
      <td><code>weekdays</code></td>
      <td><code>data-shardo-datepicker-weekdays</code></td>
      <td>عنوان کوتاه روزهای هفته در سربرگ تقویم. پیش‌فرض: <code>ش,ی,د,س,چ,پ,ج</code></td>
    </tr>
    <tr>
      <td><code>weekdayNames</code></td>
      <td><code>data-shardo-datepicker-weekday-names</code></td>
      <td>نام کامل روزهای هفته برای <code>selectedTextFormat</code>.</td>
    </tr>
    <tr>
      <td><code>yearRange</code></td>
      <td><code>data-shardo-datepicker-year-range</code></td>
      <td>محدوده منطقی انتخاب سال. پیش‌فرض: <code>80</code></td>
    </tr>
  </tbody>
</table>

<h3 dir="rtl" align="right">گزینه‌های فقط JavaScript</h3>

<table dir="rtl" align="right">
  <thead>
    <tr>
      <th align="right">گزینه</th>
      <th align="right">توضیح</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>value</code></td>
      <td>مقدار اولیه. می‌تواند string، Date، object یا در حالت بازه array باشد.</td>
    </tr>
    <tr>
      <td><code>autoInit</code></td>
      <td>کنترل رفتار auto initialization. ساخت خودکار با <code>ShardoDatePicker.autoInit()</code> انجام می‌شود.</td>
    </tr>
    <tr>
      <td><code>onChange</code></td>
      <td>callback بعد از تغییر مقدار. امضا: <code>(value, date, jalali, gregorianValue) =&gt; void</code></td>
    </tr>
    <tr>
      <td><code>onSelect</code></td>
      <td>callback بعد از انتخاب روز. امضا: <code>(value, date, jalali) =&gt; void</code></td>
    </tr>
    <tr>
      <td><code>onOpen</code></td>
      <td>callback بعد از باز شدن popup. امضا: <code>(picker) =&gt; void</code></td>
    </tr>
    <tr>
      <td><code>onClose</code></td>
      <td>callback بعد از بسته شدن popup. امضا: <code>(picker) =&gt; void</code></td>
    </tr>
  </tbody>
</table>

---

<h2 id="فرمت-تاریخ" dir="rtl" align="right">فرمت تاریخ</h2>

<h3 dir="rtl" align="right">توکن‌های format و gregorianFormat</h3>

<table dir="rtl" align="right">
  <thead>
    <tr>
      <th align="right">توکن</th>
      <th align="right">خروجی</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>yyyy</code></td>
      <td>سال چهار رقمی، مانند <code>1405</code></td>
    </tr>
    <tr>
      <td><code>yy</code></td>
      <td>دو رقم آخر سال، مانند <code>05</code></td>
    </tr>
    <tr>
      <td><code>MM</code></td>
      <td>ماه دو رقمی، مانند <code>02</code></td>
    </tr>
    <tr>
      <td><code>M</code></td>
      <td>ماه بدون صفر، مانند <code>2</code></td>
    </tr>
    <tr>
      <td><code>dd</code></td>
      <td>روز دو رقمی، مانند <code>09</code></td>
    </tr>
    <tr>
      <td><code>d</code></td>
      <td>روز بدون صفر، مانند <code>9</code></td>
    </tr>
    <tr>
      <td><code>HH</code></td>
      <td>ساعت دو رقمی، مانند <code>08</code></td>
    </tr>
    <tr>
      <td><code>H</code></td>
      <td>ساعت بدون صفر، مانند <code>8</code></td>
    </tr>
    <tr>
      <td><code>mm</code></td>
      <td>دقیقه دو رقمی، مانند <code>05</code></td>
    </tr>
    <tr>
      <td><code>m</code></td>
      <td>دقیقه بدون صفر، مانند <code>5</code></td>
    </tr>
  </tbody>
</table>

<h3 dir="rtl" align="right">توکن‌های selectedTextFormat</h3>

<table dir="rtl" align="right">
  <thead>
    <tr>
      <th align="right">توکن</th>
      <th align="right">خروجی</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>dddd</code></td>
      <td>نام کامل روز هفته، مانند <code>شنبه</code></td>
    </tr>
    <tr>
      <td><code>MMMM</code></td>
      <td>نام ماه، مانند <code>مهر</code></td>
    </tr>
    <tr>
      <td><code>yyyy</code>، <code>yy</code>، <code>MM</code>، <code>M</code>، <code>dd</code>، <code>d</code></td>
      <td>همان خروجی‌های تاریخ شمسی</td>
    </tr>
  </tbody>
</table>

---

<h2 id="api" dir="rtl" align="right">API</h2>

<table dir="rtl" align="right">
  <thead>
    <tr>
      <th align="right">نام</th>
      <th align="right">توضیح</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>ShardoDatePicker</code></td>
      <td>کلاس اصلی کنترل</td>
    </tr>
    <tr>
      <td><code>ShardoDatePicker.autoInit(root)</code></td>
      <td>ساخت خودکار کنترل‌ها از روی <code>data-shardo-datepicker</code></td>
    </tr>
    <tr>
      <td><code>ShardoDatePickerUtils</code></td>
      <td>ابزارهای تبدیل، parse، format، کبیسه و اعتبارسنجی</td>
    </tr>
    <tr>
      <td><code>getValue()</code></td>
      <td>دریافت مقدار شمسی قابل مشاهده</td>
    </tr>
    <tr>
      <td><code>getGregorianValue()</code></td>
      <td>دریافت مقدار میلادی آماده ارسال</td>
    </tr>
    <tr>
      <td><code>getDate()</code></td>
      <td>دریافت <code>Date</code> میلادی یا <code>{ start, end }</code> در حالت بازه</td>
    </tr>
    <tr>
      <td><code>getShardoDatePickerJalali()</code></td>
      <td>دریافت اجزای شمسی انتخاب‌شده</td>
    </tr>
    <tr>
      <td><code>getSelectedText()</code></td>
      <td>دریافت متن نمایشی انتخاب‌شده، مانند <code>شنبه 13 مهر</code></td>
    </tr>
  </tbody>
</table>

---

<h2 dir="rtl" align="right">تقویم و تبدیل تاریخ</h2>

<p dir="rtl" align="right">
  تبدیل تاریخ در این پکیج با استفاده از <code>Intl.DateTimeFormat</code> و calendar استاندارد <code>persian</code> انجام می‌شود.
  اعتبارسنجی تاریخ‌هایی مانند اسفند ۳۰ و سال کبیسه نیز بر همین اساس بررسی شده است.
</p>

---

<h2 id="تست-و-اعتبارسنجی" dir="rtl" align="right">تست و اعتبارسنجی</h2>

<p dir="rtl" align="right">
  برای بررسی پروژه قبل از انتشار، دستورهای زیر را اجرا کنید:
</p>

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
  تست‌های مرورگری با Playwright اجرا می‌شوند، سرور دمو را روی پورت <code>5174</code> بالا می‌آورند
  و صفحه fixture را مشابه رفتار یک کاربر واقعی بررسی می‌کنند.
</p>

<h3 dir="rtl" align="right">اجرای تست واحد با Node.js سفارشی</h3>

<p dir="rtl" align="right">
  اگر در محیط توسعه یا CI از مسیر سفارشی برای Node.js استفاده می‌کنید، می‌توانید تست‌های واحد را با همان runtime اجرا کنید:
</p>

```bash
/path/to/node --test tests/*.test.mjs
```

<h3 dir="rtl" align="right">مسیر تست‌های مرورگری</h3>

```text
tests/e2e/shardo-datepicker-user.spec.mjs
```

<h3 dir="rtl" align="right">مسیر fixture تست‌ها</h3>

```text
tests/fixtures/user-settings.html
```

<h3 dir="rtl" align="right">پوشش تست‌ها</h3>

<table dir="rtl" align="right">
  <thead>
    <tr>
      <th align="right">بخش</th>
      <th align="right">موارد بررسی‌شده</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Auto Init با Attribute</td>
      <td>ساخت خودکار کنترل، ساخت hidden input، کلاس‌ها و تم‌ها</td>
    </tr>
    <tr>
      <td>فرمت و خروجی</td>
      <td>مقدار شمسی input، مقدار میلادی hidden input، selectedText و detail رویدادها</td>
    </tr>
    <tr>
      <td>انتخاب تاریخ</td>
      <td>auto close، نبودن دکمه تأیید در حالت date-only، انتخاب روز و بسته شدن popup</td>
    </tr>
    <tr>
      <td>انتخاب زمان</td>
      <td>نمایش دکمه تأیید، باز ماندن popup تا تأیید و normalize شدن دقیقه با timeStep</td>
    </tr>
    <tr>
      <td>انتخاب بازه</td>
      <td>preview هنگام hover، انتخاب شروع و پایان، جداکننده شمسی و میلادی</td>
    </tr>
    <tr>
      <td>پاک کردن دستی</td>
      <td>پاک شدن input و hidden input با خالی کردن دستی فیلد</td>
    </tr>
    <tr>
      <td>تعطیلی‌ها</td>
      <td>جمعه‌ها، تعطیلی‌های سفارشی و روزهای disabled</td>
    </tr>
    <tr>
      <td>JSON Attribute</td>
      <td>مقداردهی تنظیمات از JSON داخل <code>data-shardo-datepicker</code></td>
    </tr>
    <tr>
      <td>گزینه‌های فقط JavaScript</td>
      <td><code>value</code>، <code>appendTo</code>، <code>onOpen</code>، <code>onClose</code>، <code>onSelect</code>، <code>onChange</code></td>
    </tr>
    <tr>
      <td>Inline Mode</td>
      <td>نمایش ثابت داخل container و عدم ساخت hidden input وقتی <code>hiddenInput=false</code> است</td>
    </tr>
    <tr>
      <td>Bootstrap و Dark Mode</td>
      <td>استفاده از متغیرهای <code>--bs-*</code> و تغییر رنگ در <code>data-bs-theme="dark"</code></td>
    </tr>
    <tr>
      <td>Responsive</td>
      <td>قرار گرفتن popup داخل viewport موبایل</td>
    </tr>
  </tbody>
</table>

---

<h2 id="موضوعات-پیشنهادی-github" dir="rtl" align="right">موضوعات پیشنهادی GitHub</h2>

<p dir="rtl" align="right">
  برای بهتر دیده شدن پروژه در GitHub، می‌توانید از Topicهای زیر استفاده کنید:
</p>

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

<h2 id="مشارکت" dir="rtl" align="right">مشارکت</h2>

<p dir="rtl" align="right">
  مشارکت در توسعه پروژه آزاد است.
  برای گزارش باگ، پیشنهاد قابلیت جدید یا ارسال تغییرات، می‌توانید از Issue و Pull Request استفاده کنید.
</p>

<div dir="rtl" align="right">

1. ابتدا پروژه را fork کنید.
2. یک branch جدید برای تغییرات خود بسازید.
3. تغییرات را همراه با تست مناسب ثبت کنید.
4. قبل از ارسال Pull Request، تست‌ها را اجرا کنید.

</div>

```bash
npm test
```

---

<h2 id="لایسنس" dir="rtl" align="right">لایسنس</h2>

<p dir="rtl" align="right">
  این پروژه به صورت عمومی، رایگان و متن‌باز منتشر می‌شود.
  استفاده، کپی، تغییر، انتشار و توزیع آن تحت مجوز <strong>MIT</strong> آزاد است.
</p>

<p dir="rtl" align="right">
  پیشنهاد می‌شود متن کامل مجوز MIT را در فایل جداگانه‌ای با نام <code>LICENSE</code> در ریشه پروژه قرار دهید.
</p>

```text
MIT License

Copyright (c) 2026 Shardo Date Picker Contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files, to use, copy, modify,
merge, publish, distribute, sublicense, and/or sell copies of the software,
subject to the conditions of the MIT License.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND.
```
