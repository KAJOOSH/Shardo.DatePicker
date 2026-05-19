<h1 dir="rtl">Shardo Date Picker</h1>

<p dir="rtl">
  <strong>Shardo Date Picker</strong> یک انتخاب‌گر تاریخ شمسی/جلالی برای پروژه‌های فارسی است.
  این پکیج به کاربر اجازه می‌دهد تاریخ، زمان یا بازهٔ تاریخ را به صورت شمسی انتخاب کند و هم‌زمان مقدار میلادی مناسب برای ارسال به سرور را نیز دریافت کنید.
</p>

<p dir="rtl">
  این ابزار برای فرم‌های نوبت‌دهی، رزرو، گزارش‌گیری، فیلترهای تاریخ، پنل‌های مدیریتی و هر رابط کاربری فارسی که به تاریخ شمسی نیاز دارد مناسب است.
</p>

<p dir="ltr">
  <img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-ES%20Modules-f7df1e">
  <img alt="Jalali Calendar" src="https://img.shields.io/badge/Calendar-Jalali%20%2F%20Persian-2563eb">
  <img alt="RTL Support" src="https://img.shields.io/badge/RTL-Supported-0f766e">
  <img alt="Bootstrap" src="https://img.shields.io/badge/Bootstrap-5.3-7952b3">
  <img alt="License" src="https://img.shields.io/badge/License-MIT-green">
</p>

---

<h2 dir="rtl">بخش‌های مستندات</h2>

<p dir="rtl">
  <a href="#معرفی">معرفی</a> ·
  <a href="#قابلیتها">قابلیت‌ها</a> ·
  <a href="#نصب">نصب</a> ·
  <a href="#شروع-سریع">شروع سریع</a> ·
  <a href="#انتخاب-بازه-تاریخ">انتخاب بازه تاریخ</a> ·
  <a href="#استفاده-با-javascript">استفاده با JavaScript</a> ·
  <a href="#رویدادها">رویدادها</a> ·
  <a href="#تنظیمات">تنظیمات</a> ·
  <a href="#api">API</a> ·
  <a href="#تست">تست</a> ·
  <a href="#لایسنس">لایسنس</a>
</p>

---

<h2 id="معرفی" dir="rtl">معرفی</h2>

<p dir="rtl">
  در بسیاری از پروژه‌های فارسی، نمایش و انتخاب تاریخ باید بر اساس تقویم شمسی انجام شود؛
  اما ذخیره‌سازی، ارسال فرم و ارتباط با API معمولاً با تاریخ میلادی ساده‌تر و استانداردتر است.
</p>

<p dir="rtl">
  <strong>Shardo Date Picker</strong> این فرایند را ساده می‌کند:
  مقدار قابل مشاهده برای کاربر شمسی است، ولی مقدار قابل ارسال به سرور می‌تواند به صورت میلادی در یک
  <code dir="ltr">hidden input</code> ساخته شود.
</p>

<p dir="rtl">
  این پکیج هم با HTML و Attributeها قابل استفاده است و هم با JavaScript برای سناریوهای پیشرفته‌تر.
</p>

---

<h2 id="قابلیتها" dir="rtl">قابلیت‌ها</h2>

<table dir="rtl">
  <thead>
    <tr>
      <th>بخش</th>
      <th>قابلیت‌ها</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>تقویم</td>
      <td>انتخاب تاریخ شمسی، انتخاب زمان، انتخاب بازهٔ تاریخ، نمایش روزهای تعطیل</td>
    </tr>
    <tr>
      <td>خروجی</td>
      <td>نمایش مقدار شمسی برای کاربر و تولید مقدار میلادی برای ارسال به سرور</td>
    </tr>
    <tr>
      <td>فرم</td>
      <td>ساخت خودکار <code dir="ltr">hidden input</code>، پشتیبانی از نام سفارشی، پاک شدن مقدار با خالی کردن فیلد</td>
    </tr>
    <tr>
      <td>رابط کاربری</td>
      <td>سازگار با RTL، پشتیبانی از حالت روشن و تاریک، قابل استفاده به صورت popup یا inline</td>
    </tr>
    <tr>
      <td>شخصی‌سازی</td>
      <td>تنظیم فرمت تاریخ، محدودیت تاریخ، تعطیلی‌ها، زبان نمایش، رنگ‌ها و متغیرهای CSS</td>
    </tr>
    <tr>
      <td>Bootstrap</td>
      <td>هماهنگ با Bootstrap 5.3 و متغیرهای <code dir="ltr">--bs-*</code></td>
    </tr>
    <tr>
      <td>توسعه</td>
      <td>رویدادهای سفارشی، callbackهای JavaScript، تست واحد و تست مرورگری با Playwright</td>
    </tr>
  </tbody>
</table>

---

<h2 id="نصب" dir="rtl">نصب</h2>

<h3 dir="rtl">نصب وابستگی‌های پروژه</h3>

```bash
npm install
```

<h3 dir="rtl">نصب از npm</h3>

```bash
npm install shardo-datepicker
```

<h3 dir="rtl">Import در پروژه</h3>

```js
import { ShardoDatePicker } from "shardo-datepicker";
import "shardo-datepicker/ShardoDatePicker.css";
```

<h3 dir="rtl">استفاده مستقیم از فایل‌های پروژه</h3>

```html
<link rel="stylesheet" href="./src/ShardoDatePicker.css">
<script type="module" src="./src/ShardoDatePicker.js"></script>
```

---

<h2 id="شروع-سریع" dir="rtl">شروع سریع</h2>

<p dir="rtl">
  ساده‌ترین روش استفاده، اضافه کردن <code dir="ltr">data-shardo-datepicker</code> به یک input است.
  با این کار کنترل به صورت خودکار ساخته می‌شود.
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

<h3 dir="rtl">خروجی این مثال</h3>

<table dir="rtl">
  <thead>
    <tr>
      <th>بخش</th>
      <th>توضیح</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>input اصلی</td>
      <td>مقدار قابل مشاهده شمسی را نمایش می‌دهد.</td>
    </tr>
    <tr>
      <td>hidden input</td>
      <td>مقدار میلادی را برای ارسال به سرور نگه می‌دارد.</td>
    </tr>
    <tr>
      <td>فرمت شمسی</td>
      <td><code dir="ltr">yyyy/MM/dd HH:mm</code></td>
    </tr>
    <tr>
      <td>فرمت میلادی</td>
      <td><code dir="ltr">yyyy-MM-dd HH:mm</code></td>
    </tr>
  </tbody>
</table>

---

<h2 id="انتخاب-بازه-تاریخ" dir="rtl">انتخاب بازه تاریخ</h2>

<p dir="rtl">
  برای فعال کردن انتخاب بازه، مقدار <code dir="ltr">range</code> را فعال کنید.
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

<h2 id="استفاده-با-javascript" dir="rtl">استفاده با JavaScript</h2>

<p dir="rtl">
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

<h3 dir="rtl">مقدار اولیه برای تاریخ تکی</h3>

```js
new ShardoDatePicker("#date", {
  value: "1405/02/28",
  format: "yyyy/MM/dd",
  showTime: false
});
```

<h3 dir="rtl">مقدار اولیه برای بازه تاریخ</h3>

```js
new ShardoDatePicker("#range", {
  range: true,
  value: ["1405/03/01", "1405/03/10"],
  format: "yyyy/MM/dd",
  gregorianFormat: "yyyy-MM-dd"
});
```

---

<h2 id="رویدادها" dir="rtl">رویدادها</h2>

<p dir="rtl">
  کنترل روی همان input یا container رویدادهای سفارشی منتشر می‌کند.
  اطلاعات اصلی هر رویداد در <code dir="ltr">event.detail</code> قرار دارد.
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

<h3 dir="rtl">لیست رویدادها</h3>

<table dir="rtl">
  <thead>
    <tr>
      <th>رویداد</th>
      <th>زمان اجرا</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code dir="ltr">shardo-datepicker:select</code></td>
      <td>بعد از انتخاب روز اجرا می‌شود.</td>
    </tr>
    <tr>
      <td><code dir="ltr">shardo-datepicker:change</code></td>
      <td>بعد از ثبت تغییر مقدار یا پاک شدن مقدار اجرا می‌شود.</td>
    </tr>
    <tr>
      <td><code dir="ltr">shardo-datepicker:clear</code></td>
      <td>بعد از پاک شدن مقدار اجرا می‌شود.</td>
    </tr>
    <tr>
      <td><code dir="ltr">shardo-datepicker:open</code></td>
      <td>بعد از باز شدن پنل اجرا می‌شود.</td>
    </tr>
    <tr>
      <td><code dir="ltr">shardo-datepicker:close</code></td>
      <td>بعد از بسته شدن پنل اجرا می‌شود.</td>
    </tr>
  </tbody>
</table>

<h3 dir="rtl">ساختار event.detail</h3>

<table dir="rtl">
  <thead>
    <tr>
      <th>کلید</th>
      <th>توضیح</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code dir="ltr">value</code></td>
      <td>مقدار شمسی قابل نمایش در input اصلی</td>
    </tr>
    <tr>
      <td><code dir="ltr">gregorianValue</code></td>
      <td>مقدار میلادی آماده برای ذخیره‌سازی یا ارسال به سرور</td>
    </tr>
    <tr>
      <td><code dir="ltr">selectedText</code></td>
      <td>متن خوانای انتخاب‌شده، مانند نام روز و ماه</td>
    </tr>
    <tr>
      <td><code dir="ltr">date</code></td>
      <td>نمونه <code dir="ltr">Date</code> میلادی یا آبجکت بازه در حالت range</td>
    </tr>
    <tr>
      <td><code dir="ltr">jalali</code></td>
      <td>اجزای تاریخ شمسی انتخاب‌شده</td>
    </tr>
    <tr>
      <td><code dir="ltr">isRange</code></td>
      <td>مشخص می‌کند انتخاب از نوع بازه است یا خیر</td>
    </tr>
    <tr>
      <td><code dir="ltr">picker</code></td>
      <td>نمونه ساخته‌شده از کلاس Date Picker</td>
    </tr>
  </tbody>
</table>

---

<h2 id="تعطیلیها" dir="rtl">تعطیلی‌ها و تاریخ‌های غیرفعال</h2>

```html
<input
  data-shardo-datepicker
  data-shardo-datepicker-show-friday-holidays="true"
  data-shardo-datepicker-holidays="1405/02/15,1405/03/14"
  data-shardo-datepicker-disabled-dates="1405/01/13,1405/02/20"
>
```

<table dir="rtl">
  <thead>
    <tr>
      <th>گزینه</th>
      <th>کاربرد</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code dir="ltr">showFridayHolidays</code></td>
      <td>جمعه‌ها را با ظاهر تعطیل نمایش می‌دهد.</td>
    </tr>
    <tr>
      <td><code dir="ltr">holidays</code></td>
      <td>تعطیلی‌های سفارشی شمسی را مشخص می‌کند. این گزینه فقط ظاهر روز را تغییر می‌دهد.</td>
    </tr>
    <tr>
      <td><code dir="ltr">disabledDates</code></td>
      <td>تاریخ‌هایی را مشخص می‌کند که کاربر نمی‌تواند انتخاب کند.</td>
    </tr>
  </tbody>
</table>

---

<h2 id="تم" dir="rtl">تم، رنگ و Bootstrap</h2>

<p dir="rtl">
  ظاهر کنترل با CSS Variable قابل شخصی‌سازی است.
  همچنین می‌توانید کنترل را با متغیرهای Bootstrap 5.3 هماهنگ کنید.
</p>

<h3 dir="rtl">فعال‌سازی تم Bootstrap</h3>

```html
<input
  data-shardo-datepicker
  data-shardo-datepicker-bootstrap-theme="true"
  data-shardo-datepicker-theme="auto"
>
```

<h3 dir="rtl">نمونه Dark Mode در Bootstrap</h3>

```html
<html lang="fa" dir="rtl" data-bs-theme="dark">
```

<h3 dir="rtl">شخصی‌سازی رنگ‌ها</h3>

```css
:root {
  --shardo-datepicker-primary: #0f766e;
  --shardo-datepicker-bg: #ffffff;
  --shardo-datepicker-fg: #172033;
  --shardo-datepicker-radius: 8px;
  --shardo-datepicker-font: Vazirmatn, IRANSans, Tahoma, Arial, sans-serif;
}
```

<h3 dir="rtl">حالت‌های تم</h3>

<table dir="rtl">
  <thead>
    <tr>
      <th>مقدار</th>
      <th>توضیح</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code dir="ltr">auto</code></td>
      <td>تم کنترل با تم صفحه هماهنگ می‌شود.</td>
    </tr>
    <tr>
      <td><code dir="ltr">light</code></td>
      <td>کنترل همیشه با ظاهر روشن نمایش داده می‌شود.</td>
    </tr>
    <tr>
      <td><code dir="ltr">dark</code></td>
      <td>کنترل همیشه با ظاهر تاریک نمایش داده می‌شود.</td>
    </tr>
  </tbody>
</table>

<h3 dir="rtl">متغیرهای مهم CSS</h3>

<table dir="rtl">
  <thead>
    <tr>
      <th>متغیر</th>
      <th>کاربرد</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code dir="ltr">--shardo-datepicker-bg</code></td>
      <td>پس‌زمینه پنل تقویم</td>
    </tr>
    <tr>
      <td><code dir="ltr">--shardo-datepicker-fg</code></td>
      <td>رنگ متن اصلی</td>
    </tr>
    <tr>
      <td><code dir="ltr">--shardo-datepicker-muted</code></td>
      <td>رنگ متن‌های کم‌اهمیت</td>
    </tr>
    <tr>
      <td><code dir="ltr">--shardo-datepicker-border</code></td>
      <td>رنگ border معمولی</td>
    </tr>
    <tr>
      <td><code dir="ltr">--shardo-datepicker-primary</code></td>
      <td>رنگ اصلی انتخاب، focus و تأکید</td>
    </tr>
    <tr>
      <td><code dir="ltr">--shardo-datepicker-primary-soft</code></td>
      <td>پس‌زمینه ملایم رنگ اصلی</td>
    </tr>
    <tr>
      <td><code dir="ltr">--shardo-datepicker-primary-range</code></td>
      <td>پس‌زمینه روزهای داخل بازه</td>
    </tr>
    <tr>
      <td><code dir="ltr">--shardo-datepicker-danger</code></td>
      <td>رنگ خطا، تعطیلی یا پاک کردن</td>
    </tr>
    <tr>
      <td><code dir="ltr">--shardo-datepicker-danger-soft</code></td>
      <td>پس‌زمینه ملایم برای روزهای تعطیل</td>
    </tr>
    <tr>
      <td><code dir="ltr">--shardo-datepicker-shadow</code></td>
      <td>سایه popup</td>
    </tr>
    <tr>
      <td><code dir="ltr">--shardo-datepicker-radius</code></td>
      <td>گردی گوشه‌ها</td>
    </tr>
    <tr>
      <td><code dir="ltr">--shardo-datepicker-font</code></td>
      <td>فونت کنترل</td>
    </tr>
  </tbody>
</table>

---

<h2 id="تنظیمات" dir="rtl">تنظیمات</h2>

<p dir="rtl">
  هر گزینه در JavaScript با نام camelCase نوشته می‌شود.
  همان گزینه در HTML بعد از <code dir="ltr">data-shardo-datepicker-</code> و به صورت kebab-case قرار می‌گیرد.
</p>

<p dir="rtl">
  مثال:
</p>

```html
data-shardo-datepicker-show-time
```

<p dir="rtl">
  مقدارهای boolean در Attribute می‌توانند <code dir="ltr">true</code>، <code dir="ltr">false</code>، <code dir="ltr">1</code> یا Attribute بدون مقدار باشند.
  اگر Attribute بدون مقدار نوشته شود، مقدار آن <code dir="ltr">true</code> در نظر گرفته می‌شود.
</p>

```html
<input
  data-shardo-datepicker
  data-shardo-datepicker-show-time="false"
  data-shardo-datepicker-disabled-dates="1405/01/13,1405/02/15"
>
```

<h3 dir="rtl">تنظیمات اصلی</h3>

<table dir="rtl">
  <thead>
    <tr>
      <th>گزینه</th>
      <th>Attribute</th>
      <th>نوع / پیش‌فرض</th>
      <th>کاربرد</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code dir="ltr">format</code></td>
      <td><code dir="ltr">data-shardo-datepicker-<wbr>format</code></td>
      <td><code dir="ltr">string</code><br>پیش‌فرض: <code dir="ltr">yyyy/MM/dd HH:mm</code></td>
      <td>فرمت مقدار شمسی قابل مشاهده در input.</td>
    </tr>
    <tr>
      <td><code dir="ltr">gregorianFormat</code></td>
      <td><code dir="ltr">data-shardo-datepicker-<wbr>gregorian-format</code></td>
      <td><code dir="ltr">string</code><br>پیش‌فرض: <code dir="ltr">yyyy-MM-dd HH:mm</code></td>
      <td>فرمت مقدار میلادی در hidden input و خروجی <code dir="ltr">getGregorianValue()</code>.</td>
    </tr>
    <tr>
      <td><code dir="ltr">showTime</code></td>
      <td><code dir="ltr">data-shardo-datepicker-<wbr>show-time</code></td>
      <td><code dir="ltr">boolean</code><br>پیش‌فرض: <code dir="ltr">true</code></td>
      <td>نمایش انتخاب ساعت و دقیقه.</td>
    </tr>
    <tr>
      <td><code dir="ltr">timeStep</code></td>
      <td><code dir="ltr">data-shardo-datepicker-<wbr>time-step</code></td>
      <td><code dir="ltr">number</code><br>پیش‌فرض: <code dir="ltr">1</code></td>
      <td>گام دقیقه. برای مثال مقدار <code dir="ltr">5</code> دقیقه را به مضرب‌های ۵ نزدیک می‌کند.</td>
    </tr>
    <tr>
      <td><code dir="ltr">autoClose</code></td>
      <td><code dir="ltr">data-shardo-datepicker-<wbr>auto-close</code></td>
      <td><code dir="ltr">boolean</code><br>پیش‌فرض: <code dir="ltr">false</code></td>
      <td>بستن خودکار پنل بعد از انتخاب کامل مقدار.</td>
    </tr>
    <tr>
      <td><code dir="ltr">inputReadonly</code></td>
      <td><code dir="ltr">data-shardo-datepicker-<wbr>input-readonly</code></td>
      <td><code dir="ltr">boolean</code><br>پیش‌فرض: <code dir="ltr">false</code></td>
      <td>جلوگیری از تایپ دستی در input.</td>
    </tr>
    <tr>
      <td><code dir="ltr">usePersianDigits</code></td>
      <td><code dir="ltr">data-shardo-datepicker-<wbr>use-persian-digits</code></td>
      <td><code dir="ltr">boolean</code><br>پیش‌فرض: <code dir="ltr">false</code></td>
      <td>نمایش خروجی با اعداد فارسی.</td>
    </tr>
  </tbody>
</table>

<h3 dir="rtl">محدودیت تاریخ و تعطیلی‌ها</h3>

<table dir="rtl">
  <thead>
    <tr>
      <th>گزینه</th>
      <th>Attribute</th>
      <th>نوع / پیش‌فرض</th>
      <th>کاربرد</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code dir="ltr">min</code></td>
      <td><code dir="ltr">data-shardo-datepicker-<wbr>min</code></td>
      <td><code dir="ltr">string | Date | object | null</code><br>پیش‌فرض: <code dir="ltr">null</code></td>
      <td>کمترین تاریخ قابل انتخاب. در HTML مقدار شمسی مانند <code dir="ltr">1404/01/01</code> وارد کنید.</td>
    </tr>
    <tr>
      <td><code dir="ltr">max</code></td>
      <td><code dir="ltr">data-shardo-datepicker-<wbr>max</code></td>
      <td><code dir="ltr">string | Date | object | null</code><br>پیش‌فرض: <code dir="ltr">null</code></td>
      <td>بیشترین تاریخ قابل انتخاب.</td>
    </tr>
    <tr>
      <td><code dir="ltr">disabledDates</code></td>
      <td><code dir="ltr">data-shardo-datepicker-<wbr>disabled-dates</code></td>
      <td><code dir="ltr">array</code><br>پیش‌فرض: <code dir="ltr">[]</code></td>
      <td>لیست تاریخ‌های غیرفعال شمسی. نمونه: <code dir="ltr">1405/01/13,1405/02/15</code></td>
    </tr>
    <tr>
      <td><code dir="ltr">disablePast</code></td>
      <td><code dir="ltr">data-shardo-datepicker-<wbr>disable-past</code></td>
      <td><code dir="ltr">boolean</code><br>پیش‌فرض: <code dir="ltr">false</code></td>
      <td>غیرفعال کردن تاریخ‌های قبل از امروز.</td>
    </tr>
    <tr>
      <td><code dir="ltr">disableFuture</code></td>
      <td><code dir="ltr">data-shardo-datepicker-<wbr>disable-future</code></td>
      <td><code dir="ltr">boolean</code><br>پیش‌فرض: <code dir="ltr">false</code></td>
      <td>غیرفعال کردن تاریخ‌های بعد از امروز.</td>
    </tr>
    <tr>
      <td><code dir="ltr">showFridayHolidays</code></td>
      <td><code dir="ltr">data-shardo-datepicker-<wbr>show-friday-holidays</code></td>
      <td><code dir="ltr">boolean</code><br>پیش‌فرض: <code dir="ltr">true</code></td>
      <td>نمایش جمعه‌ها با ظاهر تعطیل.</td>
    </tr>
    <tr>
      <td><code dir="ltr">holidays</code></td>
      <td><code dir="ltr">data-shardo-datepicker-<wbr>holidays</code></td>
      <td><code dir="ltr">array</code><br>پیش‌فرض: <code dir="ltr">[]</code></td>
      <td>تعطیلی‌های سفارشی شمسی. این گزینه فقط ظاهر روز را تغییر می‌دهد.</td>
    </tr>
  </tbody>
</table>

<h3 dir="rtl">انتخاب بازه تاریخ</h3>

<table dir="rtl">
  <thead>
    <tr>
      <th>گزینه</th>
      <th>Attribute</th>
      <th>نوع / پیش‌فرض</th>
      <th>کاربرد</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code dir="ltr">range</code></td>
      <td><code dir="ltr">data-shardo-datepicker-<wbr>range</code></td>
      <td><code dir="ltr">boolean</code><br>پیش‌فرض: <code dir="ltr">false</code></td>
      <td>فعال‌سازی انتخاب بازه تاریخ.</td>
    </tr>
    <tr>
      <td><code dir="ltr">rangeSeparator</code></td>
      <td><code dir="ltr">data-shardo-datepicker-<wbr>range-separator</code></td>
      <td><code dir="ltr">string</code><br>پیش‌فرض: <code dir="ltr"> - </code></td>
      <td>جداکننده بازه در مقدار شمسی قابل مشاهده.</td>
    </tr>
    <tr>
      <td><code dir="ltr">gregorianRangeSeparator</code></td>
      <td><code dir="ltr">data-shardo-datepicker-<wbr>gregorian-range-<wbr>separator</code></td>
      <td><code dir="ltr">string</code><br>پیش‌فرض: <code dir="ltr"> - </code></td>
      <td>جداکننده بازه در مقدار میلادی hidden input.</td>
    </tr>
  </tbody>
</table>

<h3 dir="rtl">Hidden Input و حالت Inline</h3>

<table dir="rtl">
  <thead>
    <tr>
      <th>گزینه</th>
      <th>Attribute</th>
      <th>نوع / پیش‌فرض</th>
      <th>کاربرد</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code dir="ltr">hiddenInput</code></td>
      <td><code dir="ltr">data-shardo-datepicker-<wbr>hidden-input</code></td>
      <td><code dir="ltr">boolean</code><br>پیش‌فرض: <code dir="ltr">true</code></td>
      <td>ساخت hidden input برای مقدار میلادی.</td>
    </tr>
    <tr>
      <td><code dir="ltr">hiddenInputName</code></td>
      <td><code dir="ltr">data-shardo-datepicker-<wbr>hidden-input-name</code></td>
      <td><code dir="ltr">string | null</code><br>پیش‌فرض: <code dir="ltr">null</code></td>
      <td>نام hidden input. اگر تنظیم نشود، از نام یا شناسه ورودی اصلی با پسوند <code dir="ltr">_gregorian</code> ساخته می‌شود.</td>
    </tr>
    <tr>
      <td><code dir="ltr">hiddenInputId</code></td>
      <td><code dir="ltr">data-shardo-datepicker-<wbr>hidden-input-id</code></td>
      <td><code dir="ltr">string | null</code><br>پیش‌فرض: <code dir="ltr">null</code></td>
      <td>شناسه hidden input.</td>
    </tr>
    <tr>
      <td><code dir="ltr">inline</code></td>
      <td><code dir="ltr">data-shardo-datepicker-<wbr>inline</code></td>
      <td><code dir="ltr">boolean</code><br>پیش‌فرض: <code dir="ltr">false</code></td>
      <td>نمایش ثابت تقویم داخل container به جای popup.</td>
    </tr>
    <tr>
      <td><code dir="ltr">appendTo</code></td>
      <td>فقط JavaScript</td>
      <td><code dir="ltr">HTMLElement | null</code><br>پیش‌فرض: <code dir="ltr">null</code></td>
      <td>محل اضافه شدن popup. اگر مقدار آن <code dir="ltr">null</code> باشد، popup به <code dir="ltr">document.body</code> اضافه می‌شود.</td>
    </tr>
  </tbody>
</table>

<h3 dir="rtl">تم، زبان و نمایش</h3>

<table dir="rtl">
  <thead>
    <tr>
      <th>گزینه</th>
      <th>Attribute</th>
      <th>نوع / پیش‌فرض</th>
      <th>کاربرد</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code dir="ltr">bootstrapTheme</code></td>
      <td><code dir="ltr">data-shardo-datepicker-<wbr>bootstrap-theme</code></td>
      <td><code dir="ltr">boolean</code><br>پیش‌فرض: <code dir="ltr">false</code></td>
      <td>استفاده از متغیرهای Bootstrap 5.3.</td>
    </tr>
    <tr>
      <td><code dir="ltr">theme</code></td>
      <td><code dir="ltr">data-shardo-datepicker-<wbr>theme</code></td>
      <td><code dir="ltr">string</code><br>پیش‌فرض: <code dir="ltr">auto</code></td>
      <td>مقدارهای قابل قبول: <code dir="ltr">auto</code>، <code dir="ltr">light</code>، <code dir="ltr">dark</code>.</td>
    </tr>
    <tr>
      <td><code dir="ltr">weekStart</code></td>
      <td><code dir="ltr">data-shardo-datepicker-<wbr>week-start</code></td>
      <td><code dir="ltr">number</code><br>پیش‌فرض: <code dir="ltr">6</code></td>
      <td>روز شروع هفته بر اساس <code dir="ltr">Date.getDay()</code>. مقدار <code dir="ltr">6</code> یعنی شنبه.</td>
    </tr>
    <tr>
      <td><code dir="ltr">showSelectedText</code></td>
      <td><code dir="ltr">data-shardo-datepicker-<wbr>show-selected-text</code></td>
      <td><code dir="ltr">boolean</code><br>پیش‌فرض: <code dir="ltr">false</code></td>
      <td>نمایش متن خلاصه انتخاب‌شده زیر روزها.</td>
    </tr>
    <tr>
      <td><code dir="ltr">selectedTextFormat</code></td>
      <td><code dir="ltr">data-shardo-datepicker-<wbr>selected-text-format</code></td>
      <td><code dir="ltr">string</code><br>پیش‌فرض: <code dir="ltr">dddd d MMMM</code></td>
      <td>فرمت متن خلاصه انتخاب‌شده.</td>
    </tr>
    <tr>
      <td><code dir="ltr">selectedTextRangeSeparator</code></td>
      <td><code dir="ltr">data-shardo-datepicker-<wbr>selected-text-range-<wbr>separator</code></td>
      <td><code dir="ltr">string</code><br>پیش‌فرض: <code dir="ltr"> تا </code></td>
      <td>جداکننده متن خلاصه در حالت بازه.</td>
    </tr>
    <tr>
      <td><code dir="ltr">months</code></td>
      <td><code dir="ltr">data-shardo-datepicker-<wbr>months</code></td>
      <td><code dir="ltr">array</code><br>پیش‌فرض: نام ماه‌های شمسی</td>
      <td>لیست ۱۲ نام ماه برای نمایش.</td>
    </tr>
    <tr>
      <td><code dir="ltr">weekdays</code></td>
      <td><code dir="ltr">data-shardo-datepicker-<wbr>weekdays</code></td>
      <td><code dir="ltr">array</code><br>پیش‌فرض: <code dir="ltr">ش,ی,د,س,چ,پ,ج</code></td>
      <td>عنوان کوتاه روزهای هفته در سربرگ تقویم.</td>
    </tr>
    <tr>
      <td><code dir="ltr">weekdayNames</code></td>
      <td><code dir="ltr">data-shardo-datepicker-<wbr>weekday-names</code></td>
      <td><code dir="ltr">array</code><br>پیش‌فرض: نام کامل روزهای هفته</td>
      <td>نام کامل روزهای هفته برای <code dir="ltr">selectedTextFormat</code>.</td>
    </tr>
    <tr>
      <td><code dir="ltr">yearRange</code></td>
      <td><code dir="ltr">data-shardo-datepicker-<wbr>year-range</code></td>
      <td><code dir="ltr">number</code><br>پیش‌فرض: <code dir="ltr">80</code></td>
      <td>محدوده منطقی انتخاب سال.</td>
    </tr>
  </tbody>
</table>

<h3 dir="rtl">گزینه‌های فقط JavaScript</h3>

<table dir="rtl">
  <thead>
    <tr>
      <th>گزینه</th>
      <th>نوع</th>
      <th>کاربرد</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code dir="ltr">value</code></td>
      <td><code dir="ltr">string | Date | object | array</code></td>
      <td>مقدار اولیه. در حالت بازه می‌تواند آرایه <code dir="ltr">[start, end]</code> یا آبجکت <code dir="ltr">{ start, end }</code> باشد.</td>
    </tr>
    <tr>
      <td><code dir="ltr">autoInit</code></td>
      <td><code dir="ltr">boolean</code></td>
      <td>کنترل رفتار ساخت خودکار با <code dir="ltr">ShardoDatePicker.autoInit()</code>.</td>
    </tr>
    <tr>
      <td><code dir="ltr">onChange</code></td>
      <td><code dir="ltr">function | null</code></td>
      <td>callback بعد از تغییر مقدار. امضا: <code dir="ltr">(value, date, jalali, gregorianValue) =&gt; void</code></td>
    </tr>
    <tr>
      <td><code dir="ltr">onSelect</code></td>
      <td><code dir="ltr">function | null</code></td>
      <td>callback بعد از انتخاب روز. امضا: <code dir="ltr">(value, date, jalali) =&gt; void</code></td>
    </tr>
    <tr>
      <td><code dir="ltr">onOpen</code></td>
      <td><code dir="ltr">function | null</code></td>
      <td>callback بعد از باز شدن popup. امضا: <code dir="ltr">(picker) =&gt; void</code></td>
    </tr>
    <tr>
      <td><code dir="ltr">onClose</code></td>
      <td><code dir="ltr">function | null</code></td>
      <td>callback بعد از بسته شدن popup. امضا: <code dir="ltr">(picker) =&gt; void</code></td>
    </tr>
  </tbody>
</table>

---

<h2 id="فرمت-تاریخ" dir="rtl">فرمت تاریخ</h2>

<h3 dir="rtl">توکن‌های format و gregorianFormat</h3>

<table dir="rtl">
  <thead>
    <tr>
      <th>توکن</th>
      <th>خروجی</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code dir="ltr">yyyy</code></td>
      <td>سال چهار رقمی، مانند <code dir="ltr">1405</code></td>
    </tr>
    <tr>
      <td><code dir="ltr">yy</code></td>
      <td>دو رقم آخر سال، مانند <code dir="ltr">05</code></td>
    </tr>
    <tr>
      <td><code dir="ltr">MM</code></td>
      <td>ماه دو رقمی، مانند <code dir="ltr">02</code></td>
    </tr>
    <tr>
      <td><code dir="ltr">M</code></td>
      <td>ماه بدون صفر، مانند <code dir="ltr">2</code></td>
    </tr>
    <tr>
      <td><code dir="ltr">dd</code></td>
      <td>روز دو رقمی، مانند <code dir="ltr">09</code></td>
    </tr>
    <tr>
      <td><code dir="ltr">d</code></td>
      <td>روز بدون صفر، مانند <code dir="ltr">9</code></td>
    </tr>
    <tr>
      <td><code dir="ltr">HH</code></td>
      <td>ساعت دو رقمی، مانند <code dir="ltr">08</code></td>
    </tr>
    <tr>
      <td><code dir="ltr">H</code></td>
      <td>ساعت بدون صفر، مانند <code dir="ltr">8</code></td>
    </tr>
    <tr>
      <td><code dir="ltr">mm</code></td>
      <td>دقیقه دو رقمی، مانند <code dir="ltr">05</code></td>
    </tr>
    <tr>
      <td><code dir="ltr">m</code></td>
      <td>دقیقه بدون صفر، مانند <code dir="ltr">5</code></td>
    </tr>
  </tbody>
</table>

<h3 dir="rtl">توکن‌های selectedTextFormat</h3>

<table dir="rtl">
  <thead>
    <tr>
      <th>توکن</th>
      <th>خروجی</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code dir="ltr">dddd</code></td>
      <td>نام کامل روز هفته، مانند شنبه</td>
    </tr>
    <tr>
      <td><code dir="ltr">MMMM</code></td>
      <td>نام ماه، مانند مهر</td>
    </tr>
    <tr>
      <td><code dir="ltr">yyyy</code>، <code dir="ltr">yy</code>، <code dir="ltr">MM</code>، <code dir="ltr">M</code>، <code dir="ltr">dd</code>، <code dir="ltr">d</code></td>
      <td>همان خروجی‌های تاریخ شمسی</td>
    </tr>
  </tbody>
</table>

---

<h2 id="api" dir="rtl">API</h2>

<table dir="rtl">
  <thead>
    <tr>
      <th>نام</th>
      <th>توضیح</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code dir="ltr">ShardoDatePicker</code></td>
      <td>کلاس اصلی کنترل</td>
    </tr>
    <tr>
      <td><code dir="ltr">ShardoDatePicker.autoInit(root)</code></td>
      <td>ساخت خودکار کنترل‌ها از روی <code dir="ltr">data-shardo-datepicker</code></td>
    </tr>
    <tr>
      <td><code dir="ltr">ShardoDatePickerUtils</code></td>
      <td>ابزارهای تبدیل، parse، format، کبیسه و اعتبارسنجی</td>
    </tr>
    <tr>
      <td><code dir="ltr">getValue()</code></td>
      <td>دریافت مقدار شمسی قابل مشاهده</td>
    </tr>
    <tr>
      <td><code dir="ltr">getGregorianValue()</code></td>
      <td>دریافت مقدار میلادی آماده ارسال</td>
    </tr>
    <tr>
      <td><code dir="ltr">getDate()</code></td>
      <td>دریافت <code dir="ltr">Date</code> میلادی یا <code dir="ltr">{ start, end }</code> در حالت بازه</td>
    </tr>
    <tr>
      <td><code dir="ltr">getShardoDatePickerJalali()</code></td>
      <td>دریافت اجزای شمسی انتخاب‌شده</td>
    </tr>
    <tr>
      <td><code dir="ltr">getSelectedText()</code></td>
      <td>دریافت متن نمایشی انتخاب‌شده، مانند شنبه ۱۳ مهر</td>
    </tr>
  </tbody>
</table>

---

<h2 id="تست" dir="rtl">تست و اعتبارسنجی</h2>

<p dir="rtl">
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

<p dir="rtl">
  دستور <code dir="ltr">npm test</code> ابتدا تست‌های واحد و سپس تست‌های مرورگری را اجرا می‌کند.
  تست‌های مرورگری با Playwright اجرا می‌شوند، سرور دمو را روی پورت <code dir="ltr">5174</code> بالا می‌آورند و صفحه fixture را مانند رفتار یک کاربر واقعی بررسی می‌کنند.
</p>

<h3 dir="rtl">اجرای تست واحد با Node.js سفارشی</h3>

```bash
/path/to/node --test tests/*.test.mjs
```

<h3 dir="rtl">مسیر تست‌های مرورگری</h3>

```text
tests/e2e/shardo-datepicker-user.spec.mjs
```

<h3 dir="rtl">مسیر fixture تست‌ها</h3>

```text
tests/fixtures/user-settings.html
```

<h3 dir="rtl">پوشش تست‌ها</h3>

<table dir="rtl">
  <thead>
    <tr>
      <th>بخش</th>
      <th>موارد بررسی‌شده</th>
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
      <td>مقداردهی تنظیمات از JSON داخل <code dir="ltr">data-shardo-datepicker</code></td>
    </tr>
    <tr>
      <td>گزینه‌های فقط JavaScript</td>
      <td><code dir="ltr">value</code>، <code dir="ltr">appendTo</code>، <code dir="ltr">onOpen</code>، <code dir="ltr">onClose</code>، <code dir="ltr">onSelect</code>، <code dir="ltr">onChange</code></td>
    </tr>
    <tr>
      <td>Inline Mode</td>
      <td>نمایش ثابت داخل container و عدم ساخت hidden input وقتی <code dir="ltr">hiddenInput=false</code> است</td>
    </tr>
    <tr>
      <td>Bootstrap و Dark Mode</td>
      <td>استفاده از متغیرهای <code dir="ltr">--bs-*</code> و تغییر رنگ در <code dir="ltr">data-bs-theme="dark"</code></td>
    </tr>
    <tr>
      <td>Responsive</td>
      <td>قرار گرفتن popup داخل viewport موبایل</td>
    </tr>
  </tbody>
</table>

---

<h2 id="موضوعات-github" dir="rtl">موضوعات پیشنهادی GitHub</h2>

<p dir="rtl">
  برای بهتر دیده شدن پروژه در GitHub، می‌توانید Topicهای زیر را اضافه کنید:
</p>

<p dir="ltr">
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

<h2 id="مشارکت" dir="rtl">مشارکت</h2>

<p dir="rtl">
  مشارکت در توسعه پروژه آزاد است.
  برای گزارش باگ، پیشنهاد قابلیت جدید یا ارسال تغییرات، می‌توانید از Issue و Pull Request استفاده کنید.
</p>

<table dir="rtl">
  <thead>
    <tr>
      <th>مرحله</th>
      <th>توضیح</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>۱</td>
      <td>پروژه را fork کنید.</td>
    </tr>
    <tr>
      <td>۲</td>
      <td>یک branch جدید برای تغییرات خود بسازید.</td>
    </tr>
    <tr>
      <td>۳</td>
      <td>تغییرات را همراه با تست مناسب ثبت کنید.</td>
    </tr>
    <tr>
      <td>۴</td>
      <td>قبل از ارسال Pull Request، تست‌ها را اجرا کنید.</td>
    </tr>
  </tbody>
</table>

```bash
npm test
```

---

<h2 id="لایسنس" dir="rtl">لایسنس</h2>

<p dir="rtl">
  این پروژه به صورت عمومی، رایگان و متن‌باز منتشر می‌شود.
  استفاده، کپی، تغییر، انتشار و توزیع آن تحت مجوز <strong>MIT</strong> آزاد است.
</p>

<p dir="rtl">
  متن کامل مجوز در فایل <code dir="ltr">LICENSE</code> قرار می‌گیرد.
</p>
