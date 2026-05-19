<h1 dir="rtl">Shardo Date Picker</h1>

<p dir="rtl">
  <strong>Shardo Date Picker</strong> یک انتخاب‌گر تاریخ شمسی/جلالی برای پروژه‌های فارسی و راست‌به‌چپ است.
  این پکیج امکان انتخاب تاریخ، زمان و بازهٔ تاریخ را فراهم می‌کند و هم‌زمان می‌تواند مقدار شمسی قابل نمایش برای کاربر و مقدار میلادی مناسب برای ارسال به سرور را تولید کند.
</p>

<p dir="rtl">
  این ابزار برای فرم‌های رزرو، نوبت‌دهی، گزارش‌گیری، فیلترهای تاریخی، پنل‌های مدیریتی و هر پروژه‌ای که به تاریخ شمسی نیاز دارد مناسب است.
</p>

<p dir="ltr">
  <img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-ES%20Modules-f7df1e">
  <img alt="Jalali Calendar" src="https://img.shields.io/badge/Calendar-Jalali%20%2F%20Persian-2563eb">
  <img alt="RTL Support" src="https://img.shields.io/badge/RTL-Supported-0f766e">
  <img alt="Bootstrap" src="https://img.shields.io/badge/Bootstrap-5.3-7952b3">
  <img alt="License" src="https://img.shields.io/badge/License-MIT-green">
</p>

---

<h2 id="فهرست-مطالب" dir="rtl">فهرست مطالب</h2>

<ul dir="rtl">
  <li><a href="#معرفی">معرفی</a></li>
  <li><a href="#قابلیتها">قابلیت‌ها</a></li>
  <li><a href="#نصب-و-راهاندازی">نصب و راه‌اندازی</a></li>
  <li><a href="#اجرای-دمو">اجرای دمو</a></li>
  <li><a href="#استفاده-با-attribute">استفاده با Attribute</a></li>
  <li><a href="#انتخاب-بازه-تاریخ">انتخاب بازه تاریخ</a></li>
  <li><a href="#استفاده-با-javascript">استفاده با JavaScript</a></li>
  <li><a href="#رویدادها">رویدادها</a></li>
  <li><a href="#تعطیلیها-و-تاریخهای-غیرفعال">تعطیلی‌ها و تاریخ‌های غیرفعال</a></li>
  <li><a href="#تم-رنگ-و-bootstrap">تم، رنگ و Bootstrap</a></li>
  <li><a href="#تنظیمات">تنظیمات</a></li>
  <li><a href="#فرمت-تاریخ">فرمت تاریخ</a></li>
  <li><a href="#api">API</a></li>
  <li><a href="#تست-و-اعتبارسنجی">تست و اعتبارسنجی</a></li>
  <li><a href="#موضوعات-پیشنهادی-github">موضوعات پیشنهادی GitHub</a></li>
  <li><a href="#مشارکت">مشارکت</a></li>
  <li><a href="#لایسنس">لایسنس</a></li>
</ul>

---

<h2 id="معرفی" dir="rtl">معرفی</h2>

<p dir="rtl">
  در بسیاری از پروژه‌های فارسی، کاربر باید تاریخ را به صورت شمسی مشاهده و انتخاب کند؛ اما در سمت سرور، پایگاه داده یا API معمولاً ذخیره‌سازی و پردازش تاریخ با فرمت میلادی انجام می‌شود.
</p>

<p dir="rtl">
  <strong>Shardo Date Picker</strong> این فرایند را ساده می‌کند. کاربر با یک تقویم شمسی فارسی کار می‌کند و برنامه می‌تواند خروجی میلادی استاندارد را از طریق <code dir="ltr">hidden input</code> یا متدهای JavaScript دریافت کند.
</p>

<p dir="rtl">
  پکیج به گونه‌ای طراحی شده است که هم با HTML ساده و Attributeها قابل استفاده باشد و هم در سناریوهای پیشرفته‌تر، کنترل کامل‌تری از طریق JavaScript در اختیار توسعه‌دهنده قرار دهد.
</p>

---

<h2 id="قابلیتها" dir="rtl">قابلیت‌ها</h2>

<ul dir="rtl">
  <li>پشتیبانی از تقویم شمسی/جلالی</li>
  <li>مناسب برای رابط‌های فارسی و راست‌به‌چپ</li>
  <li>انتخاب تاریخ تکی</li>
  <li>انتخاب تاریخ همراه با ساعت و دقیقه</li>
  <li>انتخاب بازهٔ تاریخ</li>
  <li>ساخت خودکار Date Picker با <code dir="ltr">data-shardo-datepicker</code></li>
  <li>تولید مقدار شمسی برای نمایش به کاربر</li>
  <li>تولید مقدار میلادی برای ارسال به سرور</li>
  <li>ساخت خودکار <code dir="ltr">hidden input</code></li>
  <li>پشتیبانی از مقدار اولیه</li>
  <li>پشتیبانی از حداقل و حداکثر تاریخ قابل انتخاب</li>
  <li>پشتیبانی از تاریخ‌های غیرفعال</li>
  <li>نمایش جمعه‌ها و تعطیلی‌های سفارشی</li>
  <li>پشتیبانی از حالت روشن، تاریک و خودکار</li>
  <li>هماهنگی با Bootstrap 5.3</li>
  <li>شخصی‌سازی ظاهر با CSS Variable</li>
  <li>پشتیبانی از رویدادهای سفارشی</li>
  <li>پشتیبانی از حالت Popup و Inline</li>
</ul>

---

<h2 id="نصب-و-راهاندازی" dir="rtl">نصب و راه‌اندازی</h2>

<h3 dir="rtl">نصب وابستگی‌های پروژه</h3>

```bash
npm install
```

<h3 dir="rtl">استفاده از طریق npm</h3>

<p dir="rtl">
  اگر پکیج روی npm منتشر شده باشد، می‌توانید آن را به شکل زیر نصب کنید:
</p>

```bash
npm install shardo-datepicker
```

<p dir="rtl">
  سپس فایل JavaScript و CSS را در پروژه وارد کنید:
</p>

```js
import { ShardoDatePicker } from "shardo-datepicker";
import "shardo-datepicker/ShardoDatePicker.css";
```

<h3 dir="rtl">استفاده مستقیم از فایل‌های پروژه</h3>

<p dir="rtl">
  اگر پکیج را مستقیم از سورس پروژه استفاده می‌کنید، فایل CSS و JavaScript را در صفحه وارد کنید:
</p>

```html
<link rel="stylesheet" href="./src/ShardoDatePicker.css">
<script type="module" src="./src/ShardoDatePicker.js"></script>
```

---

<h2 id="اجرای-دمو" dir="rtl">اجرای دمو</h2>

```bash
npm run demo
```

<p dir="rtl">
  بعد از اجرای دستور بالا، دمو از آدرس زیر در دسترس است:
</p>

```text
http://127.0.0.1:5173/index.html
```

---

<h2 id="استفاده-با-attribute" dir="rtl">استفاده با Attribute</h2>

<p dir="rtl">
  ساده‌ترین روش استفاده از پکیج، اضافه کردن Attribute زیر به یک input یا container است:
</p>

```html
data-shardo-datepicker
```

<p dir="rtl">
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

<h3 dir="rtl">خروجی فرم چگونه ساخته می‌شود؟</h3>

<ul dir="rtl">
  <li>مقدار input اصلی برای نمایش به کاربر است و به صورت شمسی تولید می‌شود.</li>
  <li>در صورت فعال بودن <code dir="ltr">hiddenInput</code>، یک input مخفی کنار input اصلی ساخته می‌شود.</li>
  <li>مقدار input مخفی به صورت میلادی است و برای ارسال به سرور مناسب‌تر است.</li>
  <li>نام hidden input را می‌توانید با <code dir="ltr">data-shardo-datepicker-hidden-input-name</code> مشخص کنید.</li>
</ul>

---

<h2 id="انتخاب-بازه-تاریخ" dir="rtl">انتخاب بازه تاریخ</h2>

<p dir="rtl">
  برای فعال کردن انتخاب بازه، گزینهٔ <code dir="ltr">range</code> را فعال کنید. در این حالت کاربر ابتدا تاریخ شروع و سپس تاریخ پایان را انتخاب می‌کند.
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

<p dir="rtl">
  مقدار بازه در input اصلی به صورت شمسی نمایش داده می‌شود و مقدار معادل میلادی در hidden input قرار می‌گیرد.
</p>

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

<h3 dir="rtl">مقدار اولیه برای انتخاب تاریخ</h3>

```js
new ShardoDatePicker("#date", {
  value: "1405/02/28",
  format: "yyyy/MM/dd",
  showTime: false
});
```

<h3 dir="rtl">مقدار اولیه برای انتخاب بازه</h3>

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
  کنترل روی همان input یا container رویدادهای سفارشی منتشر می‌کند. اطلاعات اصلی هر رویداد در <code dir="ltr">event.detail</code> قرار دارد.
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

<h2 id="تعطیلیها-و-تاریخهای-غیرفعال" dir="rtl">تعطیلی‌ها و تاریخ‌های غیرفعال</h2>

<p dir="rtl">
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
      <td>لیست تعطیلی‌های سفارشی شمسی را مشخص می‌کند.</td>
    </tr>
    <tr>
      <td><code dir="ltr">disabledDates</code></td>
      <td>تاریخ‌هایی را مشخص می‌کند که کاربر نمی‌تواند انتخاب کند.</td>
    </tr>
  </tbody>
</table>

<p dir="rtl">
  توجه: گزینهٔ <code dir="ltr">holidays</code> فقط ظاهر روز را تغییر می‌دهد و به تنهایی باعث غیرفعال شدن آن تاریخ نمی‌شود.
</p>

---

<h2 id="تم-رنگ-و-bootstrap" dir="rtl">تم، رنگ و Bootstrap</h2>

<p dir="rtl">
  ظاهر کنترل با CSS Variable قابل شخصی‌سازی است. همچنین در صورت نیاز می‌توانید آن را با متغیرهای Bootstrap 5.3 هماهنگ کنید.
</p>

<h3 dir="rtl">فعال‌سازی تم Bootstrap</h3>

```html
<input
  data-shardo-datepicker
  data-shardo-datepicker-bootstrap-theme="true"
  data-shardo-datepicker-theme="auto"
>
```

<p dir="rtl">
  زمانی که <code dir="ltr">bootstrapTheme</code> فعال باشد، کنترل از متغیرهای رسمی Bootstrap استفاده می‌کند. بنابراین باید CSS Bootstrap یا تعریف متغیرهای <code dir="ltr">--bs-*</code> در صفحه وجود داشته باشد.
</p>

<h3 dir="rtl">نمونه استفاده از Dark Mode در Bootstrap</h3>

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

<p dir="rtl">
  برای جلوگیری از اسکرول افقی و به‌هم‌ریختگی در GitHub، متغیرهای CSS به جای جدول عریض، به صورت فهرست خوانا نمایش داده شده‌اند.
</p>

<ul dir="rtl">
  <li><code dir="ltr">--shardo-datepicker-bg</code>: پس‌زمینه پنل تقویم</li>
  <li><code dir="ltr">--shardo-datepicker-fg</code>: رنگ متن اصلی</li>
  <li><code dir="ltr">--shardo-datepicker-muted</code>: رنگ متن‌های کم‌اهمیت</li>
  <li><code dir="ltr">--shardo-datepicker-muted-soft</code>: رنگ روزهای خارج از ماه فعلی</li>
  <li><code dir="ltr">--shardo-datepicker-border</code>: رنگ border معمولی</li>
  <li><code dir="ltr">--shardo-datepicker-border-strong</code>: رنگ border در hover</li>
  <li><code dir="ltr">--shardo-datepicker-soft</code>: پس‌زمینه‌های ملایم</li>
  <li><code dir="ltr">--shardo-datepicker-soft-strong</code>: پس‌زمینه یا border ملایم‌تر اما مشخص‌تر</li>
  <li><code dir="ltr">--shardo-datepicker-control-bg</code>: پس‌زمینه دکمه‌ها و inputهای داخلی</li>
  <li><code dir="ltr">--shardo-datepicker-input-bg</code>: پس‌زمینه input اصلی</li>
  <li><code dir="ltr">--shardo-datepicker-control-hover-bg</code>: پس‌زمینه کنترل‌ها در hover</li>
  <li><code dir="ltr">--shardo-datepicker-primary</code>: رنگ اصلی انتخاب، focus و تأکید</li>
  <li><code dir="ltr">--shardo-datepicker-primary-dark</code>: نسخه تیره‌تر رنگ اصلی</li>
  <li><code dir="ltr">--shardo-datepicker-primary-soft</code>: پس‌زمینه ملایم رنگ اصلی</li>
  <li><code dir="ltr">--shardo-datepicker-primary-range</code>: پس‌زمینه روزهای داخل بازه</li>
  <li><code dir="ltr">--shardo-datepicker-primary-range-border</code>: border روزهای داخل بازه</li>
  <li><code dir="ltr">--shardo-datepicker-primary-preview</code>: پس‌زمینه پیش‌نمایش بازه هنگام hover</li>
  <li><code dir="ltr">--shardo-datepicker-primary-preview-border</code>: border پیش‌نمایش بازه</li>
  <li><code dir="ltr">--shardo-datepicker-primary-preview-end</code>: پس‌زمینه روز انتهایی در پیش‌نمایش بازه</li>
  <li><code dir="ltr">--shardo-datepicker-primary-fg</code>: رنگ متن روی رنگ اصلی</li>
  <li><code dir="ltr">--shardo-datepicker-danger</code>: رنگ خطا، تعطیلی یا پاک کردن</li>
  <li><code dir="ltr">--shardo-datepicker-danger-soft</code>: پس‌زمینه ملایم برای روزهای تعطیل</li>
  <li><code dir="ltr">--shardo-datepicker-danger-border</code>: border روزهای تعطیل</li>
  <li><code dir="ltr">--shardo-datepicker-focus-shadow</code>: سایه focus</li>
  <li><code dir="ltr">--shardo-datepicker-shadow</code>: سایه popup</li>
  <li><code dir="ltr">--shardo-datepicker-radius</code>: گردی گوشه‌ها</li>
  <li><code dir="ltr">--shardo-datepicker-font</code>: فونت کنترل</li>
</ul>

---

<h2 id="تنظیمات" dir="rtl">تنظیمات</h2>

<p dir="rtl">
  نام هر گزینه در HTML به صورت kebab-case بعد از <code dir="ltr">data-shardo-datepicker-</code> نوشته می‌شود.
</p>

<p dir="rtl">
  برای مثال، گزینهٔ <code dir="ltr">showTime</code> در JavaScript به شکل زیر در HTML نوشته می‌شود:
</p>

```html
data-shardo-datepicker-show-time
```

<p dir="rtl">
  مقدارهای boolean در Attribute می‌توانند <code dir="ltr">true</code>، <code dir="ltr">false</code>، <code dir="ltr">1</code> یا Attribute بدون مقدار باشند. اگر Attribute بدون مقدار نوشته شود، مقدار آن <code dir="ltr">true</code> در نظر گرفته می‌شود.
</p>

```html
<input
  data-shardo-datepicker
  data-shardo-datepicker-show-time="false"
  data-shardo-datepicker-disabled-dates="1405/01/13,1405/02/15"
>
```

<h3 dir="rtl">تنظیمات اصلی</h3>

<h4 dir="rtl"><code dir="ltr">format</code></h4>
<ul dir="rtl">
  <li>Attribute: <code dir="ltr">data-shardo-datepicker-format</code></li>
  <li>نوع: <code dir="ltr">string</code></li>
  <li>پیش‌فرض: <code dir="ltr">yyyy/MM/dd HH:mm</code></li>
  <li>فرمت مقدار شمسی قابل مشاهده در input را تعیین می‌کند.</li>
</ul>

<h4 dir="rtl"><code dir="ltr">gregorianFormat</code></h4>
<ul dir="rtl">
  <li>Attribute: <code dir="ltr">data-shardo-datepicker-gregorian-format</code></li>
  <li>نوع: <code dir="ltr">string</code></li>
  <li>پیش‌فرض: <code dir="ltr">yyyy-MM-dd HH:mm</code></li>
  <li>فرمت مقدار میلادی در hidden input و خروجی <code dir="ltr">getGregorianValue()</code> را تعیین می‌کند.</li>
</ul>

<h4 dir="rtl"><code dir="ltr">showTime</code></h4>
<ul dir="rtl">
  <li>Attribute: <code dir="ltr">data-shardo-datepicker-show-time</code></li>
  <li>نوع: <code dir="ltr">boolean</code></li>
  <li>پیش‌فرض: <code dir="ltr">true</code></li>
  <li>اگر فعال باشد، انتخاب ساعت و دقیقه نمایش داده می‌شود.</li>
</ul>

<h4 dir="rtl"><code dir="ltr">timeStep</code></h4>
<ul dir="rtl">
  <li>Attribute: <code dir="ltr">data-shardo-datepicker-time-step</code></li>
  <li>نوع: <code dir="ltr">number</code></li>
  <li>پیش‌فرض: <code dir="ltr">1</code></li>
  <li>گام دقیقه را مشخص می‌کند. برای مثال مقدار <code dir="ltr">5</code> دقیقه را به مضرب‌های ۵ نزدیک می‌کند.</li>
</ul>

<h4 dir="rtl"><code dir="ltr">autoClose</code></h4>
<ul dir="rtl">
  <li>Attribute: <code dir="ltr">data-shardo-datepicker-auto-close</code></li>
  <li>نوع: <code dir="ltr">boolean</code></li>
  <li>پیش‌فرض: <code dir="ltr">false</code></li>
  <li>اگر فعال باشد، پنل بعد از انتخاب کامل مقدار بسته می‌شود.</li>
</ul>

<h4 dir="rtl"><code dir="ltr">inputReadonly</code></h4>
<ul dir="rtl">
  <li>Attribute: <code dir="ltr">data-shardo-datepicker-input-readonly</code></li>
  <li>نوع: <code dir="ltr">boolean</code></li>
  <li>پیش‌فرض: <code dir="ltr">false</code></li>
  <li>اگر فعال باشد، کاربر نمی‌تواند مقدار input را به صورت دستی تایپ کند.</li>
</ul>

<h4 dir="rtl"><code dir="ltr">usePersianDigits</code></h4>
<ul dir="rtl">
  <li>Attribute: <code dir="ltr">data-shardo-datepicker-use-persian-digits</code></li>
  <li>نوع: <code dir="ltr">boolean</code></li>
  <li>پیش‌فرض: <code dir="ltr">false</code></li>
  <li>اگر فعال باشد، خروجی نمایشی با اعداد فارسی ساخته می‌شود.</li>
</ul>

<h3 dir="rtl">محدودیت تاریخ و تعطیلی‌ها</h3>

<h4 dir="rtl"><code dir="ltr">min</code></h4>
<ul dir="rtl">
  <li>Attribute: <code dir="ltr">data-shardo-datepicker-min</code></li>
  <li>نوع: <code dir="ltr">string | Date | object | null</code></li>
  <li>پیش‌فرض: <code dir="ltr">null</code></li>
  <li>کمترین تاریخ قابل انتخاب را مشخص می‌کند. در HTML مقدار شمسی مانند <code dir="ltr">1404/01/01</code> وارد کنید.</li>
</ul>

<h4 dir="rtl"><code dir="ltr">max</code></h4>
<ul dir="rtl">
  <li>Attribute: <code dir="ltr">data-shardo-datepicker-max</code></li>
  <li>نوع: <code dir="ltr">string | Date | object | null</code></li>
  <li>پیش‌فرض: <code dir="ltr">null</code></li>
  <li>بیشترین تاریخ قابل انتخاب را مشخص می‌کند.</li>
</ul>

<h4 dir="rtl"><code dir="ltr">disabledDates</code></h4>
<ul dir="rtl">
  <li>Attribute: <code dir="ltr">data-shardo-datepicker-disabled-dates</code></li>
  <li>نوع: <code dir="ltr">array</code></li>
  <li>پیش‌فرض: <code dir="ltr">[]</code></li>
  <li>لیست تاریخ‌های غیرفعال شمسی را مشخص می‌کند. نمونه: <code dir="ltr">1405/01/13,1405/02/15</code></li>
</ul>

<h4 dir="rtl"><code dir="ltr">disablePast</code></h4>
<ul dir="rtl">
  <li>Attribute: <code dir="ltr">data-shardo-datepicker-disable-past</code></li>
  <li>نوع: <code dir="ltr">boolean</code></li>
  <li>پیش‌فرض: <code dir="ltr">false</code></li>
  <li>اگر فعال باشد، تاریخ‌های قبل از امروز غیرفعال می‌شوند.</li>
</ul>

<h4 dir="rtl"><code dir="ltr">disableFuture</code></h4>
<ul dir="rtl">
  <li>Attribute: <code dir="ltr">data-shardo-datepicker-disable-future</code></li>
  <li>نوع: <code dir="ltr">boolean</code></li>
  <li>پیش‌فرض: <code dir="ltr">false</code></li>
  <li>اگر فعال باشد، تاریخ‌های بعد از امروز غیرفعال می‌شوند.</li>
</ul>

<h4 dir="rtl"><code dir="ltr">showFridayHolidays</code></h4>
<ul dir="rtl">
  <li>Attribute: <code dir="ltr">data-shardo-datepicker-show-friday-holidays</code></li>
  <li>نوع: <code dir="ltr">boolean</code></li>
  <li>پیش‌فرض: <code dir="ltr">true</code></li>
  <li>اگر فعال باشد، جمعه‌ها با ظاهر تعطیل نمایش داده می‌شوند.</li>
</ul>

<h4 dir="rtl"><code dir="ltr">holidays</code></h4>
<ul dir="rtl">
  <li>Attribute: <code dir="ltr">data-shardo-datepicker-holidays</code></li>
  <li>نوع: <code dir="ltr">array</code></li>
  <li>پیش‌فرض: <code dir="ltr">[]</code></li>
  <li>لیست تعطیلی‌های سفارشی شمسی را مشخص می‌کند. این گزینه فقط ظاهر روز را تغییر می‌دهد.</li>
</ul>

<h3 dir="rtl">انتخاب بازه تاریخ</h3>

<h4 dir="rtl"><code dir="ltr">range</code></h4>
<ul dir="rtl">
  <li>Attribute: <code dir="ltr">data-shardo-datepicker-range</code></li>
  <li>نوع: <code dir="ltr">boolean</code></li>
  <li>پیش‌فرض: <code dir="ltr">false</code></li>
  <li>اگر فعال باشد، انتخاب بازه تاریخ فعال می‌شود.</li>
</ul>

<h4 dir="rtl"><code dir="ltr">rangeSeparator</code></h4>
<ul dir="rtl">
  <li>Attribute: <code dir="ltr">data-shardo-datepicker-range-separator</code></li>
  <li>نوع: <code dir="ltr">string</code></li>
  <li>پیش‌فرض: <code dir="ltr"> - </code></li>
  <li>جداکننده مقدار شمسی در حالت بازه را مشخص می‌کند.</li>
</ul>

<h4 dir="rtl"><code dir="ltr">gregorianRangeSeparator</code></h4>
<ul dir="rtl">
  <li>Attribute: <code dir="ltr">data-shardo-datepicker-gregorian-range-separator</code></li>
  <li>نوع: <code dir="ltr">string</code></li>
  <li>پیش‌فرض: <code dir="ltr"> - </code></li>
  <li>جداکننده مقدار میلادی در hidden input را مشخص می‌کند.</li>
</ul>

<h3 dir="rtl">Hidden Input و نمایش Inline</h3>

<h4 dir="rtl"><code dir="ltr">hiddenInput</code></h4>
<ul dir="rtl">
  <li>Attribute: <code dir="ltr">data-shardo-datepicker-hidden-input</code></li>
  <li>نوع: <code dir="ltr">boolean</code></li>
  <li>پیش‌فرض: <code dir="ltr">true</code></li>
  <li>اگر فعال باشد، یک hidden input برای مقدار میلادی ساخته می‌شود.</li>
</ul>

<h4 dir="rtl"><code dir="ltr">hiddenInputName</code></h4>
<ul dir="rtl">
  <li>Attribute: <code dir="ltr">data-shardo-datepicker-hidden-input-name</code></li>
  <li>نوع: <code dir="ltr">string | null</code></li>
  <li>پیش‌فرض: <code dir="ltr">null</code></li>
  <li>نام hidden input را مشخص می‌کند. اگر تنظیم نشود، از <code dir="ltr">name</code> یا <code dir="ltr">id</code> ورودی اصلی با پسوند <code dir="ltr">_gregorian</code> ساخته می‌شود.</li>
</ul>

<h4 dir="rtl"><code dir="ltr">hiddenInputId</code></h4>
<ul dir="rtl">
  <li>Attribute: <code dir="ltr">data-shardo-datepicker-hidden-input-id</code></li>
  <li>نوع: <code dir="ltr">string | null</code></li>
  <li>پیش‌فرض: <code dir="ltr">null</code></li>
  <li>شناسه hidden input را مشخص می‌کند.</li>
</ul>

<h4 dir="rtl"><code dir="ltr">inline</code></h4>
<ul dir="rtl">
  <li>Attribute: <code dir="ltr">data-shardo-datepicker-inline</code></li>
  <li>نوع: <code dir="ltr">boolean</code></li>
  <li>پیش‌فرض: <code dir="ltr">false</code></li>
  <li>اگر فعال باشد، تقویم به صورت ثابت داخل container نمایش داده می‌شود و مانند popup باز و بسته نمی‌شود.</li>
</ul>

<h4 dir="rtl"><code dir="ltr">appendTo</code></h4>
<ul dir="rtl">
  <li>Attribute: ندارد و فقط در JavaScript قابل استفاده است.</li>
  <li>نوع: <code dir="ltr">HTMLElement | null</code></li>
  <li>پیش‌فرض: <code dir="ltr">null</code></li>
  <li>محل اضافه شدن popup را مشخص می‌کند. اگر مقدار آن <code dir="ltr">null</code> باشد، popup به <code dir="ltr">document.body</code> اضافه می‌شود.</li>
</ul>

<h3 dir="rtl">تم، زبان و متن نمایشی</h3>

<h4 dir="rtl"><code dir="ltr">bootstrapTheme</code></h4>
<ul dir="rtl">
  <li>Attribute: <code dir="ltr">data-shardo-datepicker-bootstrap-theme</code></li>
  <li>نوع: <code dir="ltr">boolean</code></li>
  <li>پیش‌فرض: <code dir="ltr">false</code></li>
  <li>اگر فعال باشد، کنترل از متغیرهای Bootstrap 5.3 استفاده می‌کند.</li>
</ul>

<h4 dir="rtl"><code dir="ltr">theme</code></h4>
<ul dir="rtl">
  <li>Attribute: <code dir="ltr">data-shardo-datepicker-theme</code></li>
  <li>نوع: <code dir="ltr">string</code></li>
  <li>پیش‌فرض: <code dir="ltr">auto</code></li>
  <li>مقدارهای قابل قبول: <code dir="ltr">auto</code>، <code dir="ltr">light</code>، <code dir="ltr">dark</code></li>
</ul>

<h4 dir="rtl"><code dir="ltr">weekStart</code></h4>
<ul dir="rtl">
  <li>Attribute: <code dir="ltr">data-shardo-datepicker-week-start</code></li>
  <li>نوع: <code dir="ltr">number</code></li>
  <li>پیش‌فرض: <code dir="ltr">6</code></li>
  <li>روز شروع هفته را بر اساس <code dir="ltr">Date.getDay()</code> مشخص می‌کند. مقدار <code dir="ltr">6</code> یعنی شنبه.</li>
</ul>

<h4 dir="rtl"><code dir="ltr">showSelectedText</code></h4>
<ul dir="rtl">
  <li>Attribute: <code dir="ltr">data-shardo-datepicker-show-selected-text</code></li>
  <li>نوع: <code dir="ltr">boolean</code></li>
  <li>پیش‌فرض: <code dir="ltr">false</code></li>
  <li>اگر فعال باشد، متن خلاصه انتخاب‌شده زیر روزها نمایش داده می‌شود.</li>
</ul>

<h4 dir="rtl"><code dir="ltr">selectedTextFormat</code></h4>
<ul dir="rtl">
  <li>Attribute: <code dir="ltr">data-shardo-datepicker-selected-text-format</code></li>
  <li>نوع: <code dir="ltr">string</code></li>
  <li>پیش‌فرض: <code dir="ltr">dddd d MMMM</code></li>
  <li>فرمت متن خلاصه انتخاب‌شده را مشخص می‌کند.</li>
</ul>

<h4 dir="rtl"><code dir="ltr">selectedTextRangeSeparator</code></h4>
<ul dir="rtl">
  <li>Attribute: <code dir="ltr">data-shardo-datepicker-selected-text-range-separator</code></li>
  <li>نوع: <code dir="ltr">string</code></li>
  <li>پیش‌فرض: <code dir="ltr"> تا </code></li>
  <li>جداکننده متن خلاصه در حالت بازه را مشخص می‌کند.</li>
</ul>

<h4 dir="rtl"><code dir="ltr">months</code></h4>
<ul dir="rtl">
  <li>Attribute: <code dir="ltr">data-shardo-datepicker-months</code></li>
  <li>نوع: <code dir="ltr">array</code></li>
  <li>پیش‌فرض: نام ماه‌های شمسی</li>
  <li>لیست ۱۲ نام ماه برای نمایش را مشخص می‌کند. در HTML مقدارها با کاما جدا می‌شوند.</li>
</ul>

<h4 dir="rtl"><code dir="ltr">weekdays</code></h4>
<ul dir="rtl">
  <li>Attribute: <code dir="ltr">data-shardo-datepicker-weekdays</code></li>
  <li>نوع: <code dir="ltr">array</code></li>
  <li>پیش‌فرض: <code dir="ltr">ش,ی,د,س,چ,پ,ج</code></li>
  <li>عنوان کوتاه روزهای هفته در سربرگ تقویم را مشخص می‌کند.</li>
</ul>

<h4 dir="rtl"><code dir="ltr">weekdayNames</code></h4>
<ul dir="rtl">
  <li>Attribute: <code dir="ltr">data-shardo-datepicker-weekday-names</code></li>
  <li>نوع: <code dir="ltr">array</code></li>
  <li>پیش‌فرض: نام کامل روزهای هفته</li>
  <li>نام کامل روزهای هفته را برای <code dir="ltr">selectedTextFormat</code> مشخص می‌کند.</li>
</ul>

<h4 dir="rtl"><code dir="ltr">yearRange</code></h4>
<ul dir="rtl">
  <li>Attribute: <code dir="ltr">data-shardo-datepicker-year-range</code></li>
  <li>نوع: <code dir="ltr">number</code></li>
  <li>پیش‌فرض: <code dir="ltr">80</code></li>
  <li>محدوده منطقی انتخاب سال را مشخص می‌کند.</li>
</ul>

<h3 dir="rtl">گزینه‌های فقط JavaScript</h3>

<h4 dir="rtl"><code dir="ltr">value</code></h4>
<ul dir="rtl">
  <li>نوع: <code dir="ltr">string | Date | object | array</code></li>
  <li>مقدار اولیه را مشخص می‌کند. در حالت بازه می‌تواند آرایه یا آبجکت شامل شروع و پایان باشد.</li>
</ul>

<h4 dir="rtl"><code dir="ltr">autoInit</code></h4>
<ul dir="rtl">
  <li>نوع: <code dir="ltr">boolean</code></li>
  <li>رفتار ساخت خودکار را کنترل می‌کند. ساخت خودکار با <code dir="ltr">ShardoDatePicker.autoInit()</code> انجام می‌شود.</li>
</ul>

<h4 dir="rtl"><code dir="ltr">onChange</code></h4>
<ul dir="rtl">
  <li>نوع: <code dir="ltr">function | null</code></li>
  <li>بعد از تغییر مقدار اجرا می‌شود.</li>
</ul>

```js
(value, date, jalali, gregorianValue) => void
```

<h4 dir="rtl"><code dir="ltr">onSelect</code></h4>
<ul dir="rtl">
  <li>نوع: <code dir="ltr">function | null</code></li>
  <li>بعد از انتخاب روز اجرا می‌شود.</li>
</ul>

```js
(value, date, jalali) => void
```

<h4 dir="rtl"><code dir="ltr">onOpen</code></h4>
<ul dir="rtl">
  <li>نوع: <code dir="ltr">function | null</code></li>
  <li>بعد از باز شدن popup اجرا می‌شود.</li>
</ul>

```js
(picker) => void
```

<h4 dir="rtl"><code dir="ltr">onClose</code></h4>
<ul dir="rtl">
  <li>نوع: <code dir="ltr">function | null</code></li>
  <li>بعد از بسته شدن popup اجرا می‌شود.</li>
</ul>

```js
(picker) => void
```

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
    <tr><td><code dir="ltr">yyyy</code></td><td>سال چهار رقمی، مانند <code dir="ltr">1405</code></td></tr>
    <tr><td><code dir="ltr">yy</code></td><td>دو رقم آخر سال، مانند <code dir="ltr">05</code></td></tr>
    <tr><td><code dir="ltr">MM</code></td><td>ماه دو رقمی، مانند <code dir="ltr">02</code></td></tr>
    <tr><td><code dir="ltr">M</code></td><td>ماه بدون صفر، مانند <code dir="ltr">2</code></td></tr>
    <tr><td><code dir="ltr">dd</code></td><td>روز دو رقمی، مانند <code dir="ltr">09</code></td></tr>
    <tr><td><code dir="ltr">d</code></td><td>روز بدون صفر، مانند <code dir="ltr">9</code></td></tr>
    <tr><td><code dir="ltr">HH</code></td><td>ساعت دو رقمی، مانند <code dir="ltr">08</code></td></tr>
    <tr><td><code dir="ltr">H</code></td><td>ساعت بدون صفر، مانند <code dir="ltr">8</code></td></tr>
    <tr><td><code dir="ltr">mm</code></td><td>دقیقه دو رقمی، مانند <code dir="ltr">05</code></td></tr>
    <tr><td><code dir="ltr">m</code></td><td>دقیقه بدون صفر، مانند <code dir="ltr">5</code></td></tr>
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
      <td>نام کامل روز هفته، مانند <code>شنبه</code></td>
    </tr>
    <tr>
      <td><code dir="ltr">MMMM</code></td>
      <td>نام ماه، مانند <code>مهر</code></td>
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
      <td>دریافت متن نمایشی انتخاب‌شده، مانند <code>شنبه 13 مهر</code></td>
    </tr>
  </tbody>
</table>

---

<h2 dir="rtl">تقویم و تبدیل تاریخ</h2>

<p dir="rtl">
  تبدیل تاریخ در این پکیج با استفاده از <code dir="ltr">Intl.DateTimeFormat</code> و calendar استاندارد <code dir="ltr">persian</code> انجام می‌شود. اعتبارسنجی تاریخ‌هایی مانند اسفند ۳۰ و سال کبیسه نیز بر همین اساس بررسی شده است.
</p>

---

<h2 id="تست-و-اعتبارسنجی" dir="rtl">تست و اعتبارسنجی</h2>

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
  دستور <code dir="ltr">npm test</code> ابتدا تست‌های واحد و سپس تست‌های مرورگری را اجرا می‌کند. تست‌های مرورگری با Playwright اجرا می‌شوند، سرور دمو را روی پورت <code dir="ltr">5174</code> بالا می‌آورند و صفحه fixture را مشابه رفتار یک کاربر واقعی بررسی می‌کنند.
</p>

<h3 dir="rtl">اجرای تست واحد با Node.js سفارشی</h3>

<p dir="rtl">
  اگر در محیط توسعه یا CI از مسیر سفارشی برای Node.js استفاده می‌کنید، می‌توانید تست‌های واحد را با همان runtime اجرا کنید:
</p>

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

<ul dir="rtl">
  <li>ساخت خودکار کنترل از روی Attributeها</li>
  <li>ساخت hidden input</li>
  <li>بررسی مقدار شمسی input و مقدار میلادی hidden input</li>
  <li>بررسی <code dir="ltr">selectedText</code> و detail رویدادها</li>
  <li>انتخاب تاریخ در حالت date-only</li>
  <li>انتخاب زمان و normalize شدن دقیقه با <code dir="ltr">timeStep</code></li>
  <li>انتخاب بازه تاریخ و preview هنگام hover</li>
  <li>پاک شدن input و hidden input با خالی کردن دستی فیلد</li>
  <li>نمایش جمعه‌ها، تعطیلی‌های سفارشی و روزهای disabled</li>
  <li>مقداردهی تنظیمات از JSON داخل <code dir="ltr">data-shardo-datepicker</code></li>
  <li>بررسی گزینه‌های فقط JavaScript مانند <code dir="ltr">value</code>، <code dir="ltr">appendTo</code>، <code dir="ltr">onOpen</code>، <code dir="ltr">onClose</code>، <code dir="ltr">onSelect</code> و <code dir="ltr">onChange</code></li>
  <li>بررسی حالت Inline</li>
  <li>هماهنگی با Bootstrap و Dark Mode</li>
  <li>قرار گرفتن popup داخل viewport موبایل</li>
</ul>

---

<h2 id="موضوعات-پیشنهادی-github" dir="rtl">موضوعات پیشنهادی GitHub</h2>

<p dir="rtl">
  برای بهتر دیده شدن پروژه در GitHub، می‌توانید از Topicهای زیر استفاده کنید:
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
  مشارکت در توسعه پروژه آزاد است. برای گزارش باگ، پیشنهاد قابلیت جدید یا ارسال تغییرات، می‌توانید از Issue و Pull Request استفاده کنید.
</p>

<ol dir="rtl">
  <li>ابتدا پروژه را fork کنید.</li>
  <li>یک branch جدید برای تغییرات خود بسازید.</li>
  <li>تغییرات را همراه با تست مناسب ثبت کنید.</li>
  <li>قبل از ارسال Pull Request، تست‌ها را اجرا کنید.</li>
</ol>

```bash
npm test
```

---

<h2 id="لایسنس" dir="rtl">لایسنس</h2>

<p dir="rtl">
  این پروژه به صورت عمومی، رایگان و متن‌باز منتشر می‌شود. استفاده، کپی، تغییر، انتشار و توزیع آن تحت مجوز <strong>MIT</strong> آزاد است.
</p>

<p dir="rtl">
  متن کامل مجوز در فایل <code dir="ltr">LICENSE</code> قرار داده شده است.
</p>
