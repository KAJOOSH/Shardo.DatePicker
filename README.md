<div dir="rtl" lang="fa" align="right">

<h1>Shardo Date Picker</h1>

<p>
  <strong>Shardo Date Picker</strong> یک Date Picker شمسی/جلالی سبک، قابل تنظیم و مناسب رابط‌های فارسی است که امکان انتخاب تاریخ، زمان و بازهٔ تاریخ را فراهم می‌کند.
  مقدار قابل مشاهده برای کاربر به صورت شمسی نمایش داده می‌شود و در صورت نیاز، مقدار معادل میلادی نیز داخل یک <code>hidden input</code> قرار می‌گیرد تا ارسال داده به سرور ساده‌تر و استانداردتر باشد.
</p>

<p>
  <img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-ES%20Modules-f7df1e">
  <img alt="RTL" src="https://img.shields.io/badge/RTL-Supported-0f766e">
  <img alt="Persian Calendar" src="https://img.shields.io/badge/Calendar-Jalali%20%2F%20Persian-2563eb">
  <img alt="License" src="https://img.shields.io/badge/License-MIT-green">
</p>

<hr>

<h2>فهرست مطالب</h2>

<ul>
  <li><a href="#معرفی">معرفی</a></li>
  <li><a href="#ویژگیها">ویژگی‌ها</a></li>
  <li><a href="#نصب-و-راهاندازی">نصب و راه‌اندازی</a></li>
  <li><a href="#اجرای-دمو">اجرای دمو</a></li>
  <li><a href="#استفاده-با-attribute">استفاده با Attribute</a></li>
  <li><a href="#انتخاب-بازه-تاریخ">انتخاب بازه تاریخ</a></li>
  <li><a href="#استفاده-با-javascript">استفاده با JavaScript</a></li>
  <li><a href="#رویدادها">رویدادها</a></li>
  <li><a href="#تعطیلیها-و-تاریخهای-غیرفعال">تعطیلی‌ها و تاریخ‌های غیرفعال</a></li>
  <li><a href="#تم-رنگ-و-bootstrap">تم، رنگ و Bootstrap</a></li>
  <li><a href="#تنظیمات">تنظیمات</a></li>
  <li><a href="#api">API</a></li>
  <li><a href="#تست-و-اعتبارسنجی">تست و اعتبارسنجی</a></li>
  <li><a href="#لایسنس">لایسنس</a></li>
</ul>

<hr>

<h2 id="معرفی">معرفی</h2>

<p>
  این پکیج برای پروژه‌هایی ساخته شده که به یک انتخاب‌گر تاریخ فارسی، راست‌به‌چپ و قابل اعتماد نیاز دارند.
  کاربر تاریخ را به صورت شمسی می‌بیند و انتخاب می‌کند، اما برنامه می‌تواند مقدار میلادی استاندارد را برای ذخیره‌سازی، ارسال فرم یا پردازش سمت سرور دریافت کند.
</p>

<p>
  <strong>Shardo Date Picker</strong> برای فرم‌های رزرو، نوبت‌دهی، فیلترهای تاریخ، انتخاب بازه گزارش، داشبوردهای مدیریتی، پنل‌های فارسی و هر پروژه‌ای که نیاز به تاریخ شمسی دارد مناسب است.
</p>

<h2 id="ویژگیها">ویژگی‌ها</h2>

<ul>
  <li>پشتیبانی کامل از تقویم شمسی/جلالی</li>
  <li>پشتیبانی از رابط راست‌به‌چپ و زبان فارسی</li>
  <li>انتخاب تاریخ تکی</li>
  <li>انتخاب تاریخ همراه با ساعت و دقیقه</li>
  <li>انتخاب بازه تاریخ</li>
  <li>ساخت خودکار کنترل با <code>data-shardo-datepicker</code></li>
  <li>ساخت <code>hidden input</code> برای مقدار میلادی قابل ارسال به سرور</li>
  <li>پشتیبانی از مقدار اولیه در JavaScript</li>
  <li>پشتیبانی از تاریخ‌های غیرفعال، حداقل تاریخ و حداکثر تاریخ</li>
  <li>نمایش جمعه‌ها و تعطیلی‌های سفارشی</li>
  <li>پشتیبانی از حالت روشن، تاریک و خودکار</li>
  <li>هماهنگ با متغیرهای Bootstrap 5.3</li>
  <li>قابل شخصی‌سازی با CSS Variable</li>
  <li>پشتیبانی از رویدادهای سفارشی برای کنترل کامل رفتار</li>
  <li>قابل استفاده به صورت popup یا inline</li>
  <li>بدون وابستگی سنگین برای تبدیل تاریخ</li>
</ul>

<h2 id="نصب-و-راهاندازی">نصب و راه‌اندازی</h2>

<h3>نصب وابستگی‌های پروژه</h3>

<pre dir="ltr"><code class="language-bash">npm install</code></pre>

<h3>استفاده در پروژه</h3>

<p>
  اگر پکیج را به صورت npm منتشر کرده‌اید، می‌توانید آن را با نام پکیج نصب کنید:
</p>

<pre dir="ltr"><code class="language-bash">npm install shardo-datepicker</code></pre>

<p>
  سپس فایل JavaScript و CSS را در پروژه وارد کنید.
</p>

<pre dir="ltr"><code class="language-js">import { ShardoDatePicker } from "shardo-datepicker";
import "shardo-datepicker/ShardoDatePicker.css";</code></pre>

<p>
  اگر پروژه را به صورت محلی یا مستقیم از سورس استفاده می‌کنید:
</p>

<pre dir="ltr"><code class="language-html">&lt;link rel="stylesheet" href="./src/ShardoDatePicker.css"&gt;
&lt;script type="module" src="./src/ShardoDatePicker.js"&gt;&lt;/script&gt;</code></pre>

<h2 id="اجرای-دمو">اجرای دمو</h2>

<pre dir="ltr"><code class="language-bash">npm run demo</code></pre>

<p>بعد از اجرای دستور بالا، دمو از مسیر زیر در دسترس است:</p>

<pre dir="ltr"><code class="language-text">http://127.0.0.1:5173/index.html</code></pre>

<h2 id="استفاده-با-attribute">استفاده با Attribute</h2>

<p>
  ساده‌ترین روش استفاده از این پکیج، اضافه کردن attribute زیر به یک <code>input</code> یا container است:
</p>

<pre dir="ltr"><code class="language-html">data-shardo-datepicker</code></pre>

<p>
  هر المنتی که این attribute را داشته باشد، به صورت خودکار به Date Picker تبدیل می‌شود.
</p>

<pre dir="ltr"><code class="language-html">&lt;link rel="stylesheet" href="./src/ShardoDatePicker.css"&gt;

&lt;input
  id="appointment"
  name="appointment_display"
  type="text"
  data-shardo-datepicker
  data-shardo-datepicker-format="yyyy/MM/dd HH:mm"
  data-shardo-datepicker-gregorian-format="yyyy-MM-dd HH:mm"
  data-shardo-datepicker-hidden-input-name="appointment"
  data-shardo-datepicker-show-time="true"
  data-shardo-datepicker-time-step="5"
&gt;

&lt;script type="module" src="./src/ShardoDatePicker.js"&gt;&lt;/script&gt;</code></pre>

<h3>خروجی فرم</h3>

<ul>
  <li>مقدار داخل input اصلی برای نمایش به کاربر است و به صورت شمسی تولید می‌شود.</li>
  <li>در صورت فعال بودن <code>hiddenInput</code>، یک input مخفی ساخته می‌شود.</li>
  <li>مقدار input مخفی به صورت میلادی است و برای ارسال به سرور مناسب‌تر است.</li>
</ul>

<h2 id="انتخاب-بازه-تاریخ">انتخاب بازه تاریخ</h2>

<p>
  برای فعال کردن انتخاب بازه، گزینه <code>range</code> را فعال کنید.
</p>

<pre dir="ltr"><code class="language-html">&lt;input
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
&gt;</code></pre>

<p>
  در حالت بازه، کاربر ابتدا تاریخ شروع و سپس تاریخ پایان را انتخاب می‌کند.
  مقدار شمسی در input اصلی و مقدار میلادی در hidden input قرار می‌گیرد.
</p>

<h2 id="استفاده-با-javascript">استفاده با JavaScript</h2>

<p>
  اگر به کنترل کامل‌تری نیاز دارید، می‌توانید Date Picker را مستقیم با JavaScript بسازید.
</p>

<pre dir="ltr"><code class="language-js">import { ShardoDatePicker } from "./src/ShardoDatePicker.js";

const picker = new ShardoDatePicker("#date", {
  format: "yyyy/MM/dd HH:mm",
  gregorianFormat: "yyyy-MM-dd HH:mm",
  hiddenInputName: "date",
  showTime: true,
  showSelectedText: true,
  selectedTextFormat: "dddd d MMMM yyyy"
});</code></pre>

<h3>نمونه مقدار اولیه</h3>

<pre dir="ltr"><code class="language-js">new ShardoDatePicker("#date", {
  value: "1405/02/28",
  format: "yyyy/MM/dd",
  showTime: false
});</code></pre>

<h3>نمونه مقدار اولیه برای بازه</h3>

<pre dir="ltr"><code class="language-js">new ShardoDatePicker("#range", {
  range: true,
  value: ["1405/03/01", "1405/03/10"],
  format: "yyyy/MM/dd",
  gregorianFormat: "yyyy-MM-dd"
});</code></pre>

<h2 id="رویدادها">رویدادها</h2>

<p>
  کنترل روی همان input یا container رویدادهای سفارشی منتشر می‌کند.
  اطلاعات اصلی هر رویداد در <code>event.detail</code> قرار دارد.
</p>

<pre dir="ltr"><code class="language-js">const input = document.querySelector("#date");

input.addEventListener("shardo-datepicker:change", (event) =&gt; {
  console.log(event.detail.value);
  console.log(event.detail.gregorianValue);
  console.log(event.detail.selectedText);
  console.log(event.detail.jalali);
});</code></pre>

<h3>لیست رویدادها</h3>

<table>
  <thead>
    <tr>
      <th align="right">رویداد</th>
      <th align="right">زمان اجرا</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>shardo-datepicker:select</code></td>
      <td>بعد از انتخاب روز</td>
    </tr>
    <tr>
      <td><code>shardo-datepicker:change</code></td>
      <td>بعد از ثبت تغییر مقدار یا پاک شدن مقدار</td>
    </tr>
    <tr>
      <td><code>shardo-datepicker:clear</code></td>
      <td>بعد از پاک شدن مقدار</td>
    </tr>
    <tr>
      <td><code>shardo-datepicker:open</code></td>
      <td>بعد از باز شدن پنل</td>
    </tr>
    <tr>
      <td><code>shardo-datepicker:close</code></td>
      <td>بعد از بسته شدن پنل</td>
    </tr>
  </tbody>
</table>

<h3>ساختار event.detail</h3>

<table>
  <thead>
    <tr>
      <th align="right">کلید</th>
      <th align="right">توضیح</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>value</code></td>
      <td>مقدار شمسی قابل نمایش</td>
    </tr>
    <tr>
      <td><code>gregorianValue</code></td>
      <td>مقدار میلادی آماده ارسال به سرور</td>
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
      <td>مشخص می‌کند انتخاب از نوع بازه است یا نه</td>
    </tr>
    <tr>
      <td><code>picker</code></td>
      <td>نمونه ساخته‌شده از کلاس Date Picker</td>
    </tr>
  </tbody>
</table>

<h2 id="تعطیلیها-و-تاریخهای-غیرفعال">تعطیلی‌ها و تاریخ‌های غیرفعال</h2>

<p>
  می‌توانید جمعه‌ها، تعطیلی‌های سفارشی و تاریخ‌های غیرقابل انتخاب را مشخص کنید.
</p>

<pre dir="ltr"><code class="language-html">&lt;input
  data-shardo-datepicker
  data-shardo-datepicker-show-friday-holidays="true"
  data-shardo-datepicker-holidays="1405/02/15,1405/03/14"
  data-shardo-datepicker-disabled-dates="1405/01/13,1405/02/20"
&gt;</code></pre>

<ul>
  <li><code>showFridayHolidays</code> جمعه‌ها را با ظاهر تعطیل نمایش می‌دهد.</li>
  <li><code>holidays</code> لیست تعطیلی‌های سفارشی شمسی را مشخص می‌کند.</li>
  <li><code>disabledDates</code> تاریخ‌هایی را مشخص می‌کند که کاربر نمی‌تواند انتخاب کند.</li>
  <li><code>holidays</code> فقط ظاهر روز را تغییر می‌دهد و لزوماً آن را غیرفعال نمی‌کند.</li>
</ul>

<h2 id="تم-رنگ-و-bootstrap">تم، رنگ و Bootstrap</h2>

<p>
  رنگ‌ها و ظاهر کنترل از طریق CSS Variable قابل تغییر است.
  همچنین می‌توانید کنترل را با متغیرهای Bootstrap 5.3 هماهنگ کنید.
</p>

<h3>فعال‌سازی Bootstrap Theme</h3>

<pre dir="ltr"><code class="language-html">&lt;input
  data-shardo-datepicker
  data-shardo-datepicker-bootstrap-theme="true"
  data-shardo-datepicker-theme="auto"
&gt;</code></pre>

<p>
  زمانی که <code>bootstrapTheme</code> فعال باشد، کنترل تلاش می‌کند از متغیرهای رسمی Bootstrap مانند موارد زیر استفاده کند:
</p>

<ul>
  <li><code>--bs-body-bg</code></li>
  <li><code>--bs-body-color</code></li>
  <li><code>--bs-border-color</code></li>
  <li><code>--bs-primary</code></li>
  <li><code>--bs-primary-bg-subtle</code></li>
  <li><code>--bs-danger-bg-subtle</code></li>
</ul>

<p>
  برای بهترین نتیجه در Bootstrap، مقدار <code>data-bs-theme</code> را روی <code>html</code> یا یک container والد قرار دهید.
</p>

<pre dir="ltr"><code class="language-html">&lt;html lang="fa" dir="rtl" data-bs-theme="dark"&gt;</code></pre>

<h3>شخصی‌سازی رنگ‌ها</h3>

<pre dir="ltr"><code class="language-css">:root {
  --shardo-datepicker-primary: #0f766e;
  --shardo-datepicker-bg: #ffffff;
  --shardo-datepicker-fg: #172033;
  --shardo-datepicker-radius: 8px;
  --shardo-datepicker-font: Vazirmatn, IRANSans, Tahoma, Arial, sans-serif;
}</code></pre>

<h3>حالت‌های تم</h3>

<table>
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

<h3>متغیرهای CSS</h3>

<details>
  <summary><strong>مشاهده متغیرهای رنگ و ظاهر</strong></summary>

  <table>
    <thead>
      <tr>
        <th align="right">متغیر</th>
        <th align="right">پیش‌فرض</th>
        <th align="right">کاربرد</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>--shardo-datepicker-bg</code></td>
        <td><code>#ffffff</code></td>
        <td>پس‌زمینه پنل تقویم</td>
      </tr>
      <tr>
        <td><code>--shardo-datepicker-fg</code></td>
        <td><code>#172033</code></td>
        <td>رنگ متن اصلی</td>
      </tr>
      <tr>
        <td><code>--shardo-datepicker-muted</code></td>
        <td><code>#667085</code></td>
        <td>رنگ متن‌های کم‌اهمیت</td>
      </tr>
      <tr>
        <td><code>--shardo-datepicker-muted-soft</code></td>
        <td><code>#98a2b3</code></td>
        <td>رنگ روزهای خارج از ماه فعلی</td>
      </tr>
      <tr>
        <td><code>--shardo-datepicker-border</code></td>
        <td><code>#d6dce7</code></td>
        <td>رنگ border معمولی</td>
      </tr>
      <tr>
        <td><code>--shardo-datepicker-border-strong</code></td>
        <td><code>#b9c3d2</code></td>
        <td>رنگ border در hover</td>
      </tr>
      <tr>
        <td><code>--shardo-datepicker-soft</code></td>
        <td><code>#f5f7fa</code></td>
        <td>پس‌زمینه ملایم</td>
      </tr>
      <tr>
        <td><code>--shardo-datepicker-soft-strong</code></td>
        <td><code>#e8edf4</code></td>
        <td>پس‌زمینه یا border ملایم‌تر اما مشخص‌تر</td>
      </tr>
      <tr>
        <td><code>--shardo-datepicker-control-bg</code></td>
        <td><code>#ffffff</code></td>
        <td>پس‌زمینه دکمه‌ها و inputهای داخلی</td>
      </tr>
      <tr>
        <td><code>--shardo-datepicker-input-bg</code></td>
        <td><code>linear-gradient(180deg, #ffffff, #fbfcfe)</code></td>
        <td>پس‌زمینه input اصلی</td>
      </tr>
      <tr>
        <td><code>--shardo-datepicker-control-hover-bg</code></td>
        <td><code>#fbfcfd</code></td>
        <td>پس‌زمینه کنترل‌ها در hover</td>
      </tr>
      <tr>
        <td><code>--shardo-datepicker-primary</code></td>
        <td><code>#0f766e</code></td>
        <td>رنگ اصلی انتخاب، focus و تأکید</td>
      </tr>
      <tr>
        <td><code>--shardo-datepicker-primary-dark</code></td>
        <td><code>#115e59</code></td>
        <td>نسخه تیره‌تر رنگ اصلی</td>
      </tr>
      <tr>
        <td><code>--shardo-datepicker-primary-soft</code></td>
        <td><code>#e5f4f2</code></td>
        <td>پس‌زمینه ملایم رنگ اصلی</td>
      </tr>
      <tr>
        <td><code>--shardo-datepicker-primary-range</code></td>
        <td><code>#edf8f6</code></td>
        <td>پس‌زمینه روزهای داخل بازه</td>
      </tr>
      <tr>
        <td><code>--shardo-datepicker-primary-range-border</code></td>
        <td><code>#d4eeea</code></td>
        <td>border روزهای داخل بازه</td>
      </tr>
      <tr>
        <td><code>--shardo-datepicker-primary-preview</code></td>
        <td><code>#f0fbf9</code></td>
        <td>پس‌زمینه پیش‌نمایش بازه هنگام hover</td>
      </tr>
      <tr>
        <td><code>--shardo-datepicker-primary-preview-border</code></td>
        <td><code>#d9f2ee</code></td>
        <td>border پیش‌نمایش بازه</td>
      </tr>
      <tr>
        <td><code>--shardo-datepicker-primary-preview-end</code></td>
        <td><code>#dff3ef</code></td>
        <td>پس‌زمینه روز انتهایی در پیش‌نمایش بازه</td>
      </tr>
      <tr>
        <td><code>--shardo-datepicker-primary-fg</code></td>
        <td><code>#ffffff</code></td>
        <td>رنگ متن روی رنگ اصلی</td>
      </tr>
      <tr>
        <td><code>--shardo-datepicker-danger</code></td>
        <td><code>#b42318</code></td>
        <td>رنگ خطر، تعطیلی یا پاک کردن</td>
      </tr>
      <tr>
        <td><code>--shardo-datepicker-danger-soft</code></td>
        <td><code>#fff5f5</code></td>
        <td>پس‌زمینه ملایم تعطیلی</td>
      </tr>
      <tr>
        <td><code>--shardo-datepicker-danger-border</code></td>
        <td><code>#ffd5d2</code></td>
        <td>border تعطیلی</td>
      </tr>
      <tr>
        <td><code>--shardo-datepicker-focus-shadow</code></td>
        <td><code>rgba(15, 118, 110, 0.16)</code></td>
        <td>سایه focus</td>
      </tr>
      <tr>
        <td><code>--shardo-datepicker-shadow</code></td>
        <td><code>0 24px 70px rgba(17, 24, 39, 0.18)</code></td>
        <td>سایه popup</td>
      </tr>
      <tr>
        <td><code>--shardo-datepicker-radius</code></td>
        <td><code>8px</code></td>
        <td>گردی گوشه‌ها</td>
      </tr>
      <tr>
        <td><code>--shardo-datepicker-font</code></td>
        <td><code>Vazirmatn, IRANSans, Tahoma, Arial, sans-serif</code></td>
        <td>فونت کنترل</td>
      </tr>
    </tbody>
  </table>
</details>

<h2 id="تنظیمات">تنظیمات</h2>

<p>
  نام هر گزینه در HTML به صورت kebab-case بعد از <code>data-shardo-datepicker-</code> نوشته می‌شود.
</p>

<p>
  برای مثال:
</p>

<ul>
  <li><code>showTime</code> در JavaScript</li>
  <li><code>data-shardo-datepicker-show-time</code> در HTML</li>
</ul>

<p>
  مقدارهای boolean در attribute می‌توانند <code>true</code>، <code>false</code>، <code>1</code> یا attribute خالی باشند.
  اگر attribute بدون مقدار نوشته شود، مقدار آن <code>true</code> در نظر گرفته می‌شود.
</p>

<pre dir="ltr"><code class="language-html">&lt;input
  data-shardo-datepicker
  data-shardo-datepicker-show-time="false"
  data-shardo-datepicker-disabled-dates="1405/01/13,1405/02/15"
&gt;</code></pre>

<details open>
  <summary><strong>تنظیمات اصلی</strong></summary>

  <table>
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
</details>

<details>
  <summary><strong>محدودیت تاریخ و تعطیلی‌ها</strong></summary>

  <table>
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
</details>

<details>
  <summary><strong>بازه تاریخ</strong></summary>

  <table>
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
</details>

<details>
  <summary><strong>Hidden Input و حالت Inline</strong></summary>

  <table>
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
</details>

<details>
  <summary><strong>تم، زبان و نمایش</strong></summary>

  <table>
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
</details>

<details>
  <summary><strong>گزینه‌های فقط JavaScript</strong></summary>

  <table>
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
</details>

<h2>فرمت تاریخ</h2>

<h3>توکن‌های format و gregorianFormat</h3>

<table>
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

<h3>توکن‌های selectedTextFormat</h3>

<table>
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

<h2 id="api">API</h2>

<table>
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

<h2>تقویم و تبدیل تاریخ</h2>

<p>
  تبدیل تاریخ در این پکیج با استفاده از <code>Intl.DateTimeFormat</code> و calendar استاندارد <code>persian</code> انجام می‌شود.
  اعتبارسنجی تاریخ‌هایی مانند اسفند ۳۰ و سال کبیسه نیز بر همین اساس بررسی شده است.
</p>

<h2 id="تست-و-اعتبارسنجی">تست و اعتبارسنجی</h2>

<p>
  برای بررسی پروژه قبل از انتشار، دستورهای زیر را اجرا کنید:
</p>

<pre dir="ltr"><code class="language-bash">npm install
npx playwright install chromium
npm run check
npm run test:unit
npm run test:e2e
npm test
npm run prepublishOnly</code></pre>

<p>
  دستور <code>npm test</code> ابتدا تست‌های واحد و سپس تست‌های مرورگری را اجرا می‌کند.
  تست‌های مرورگری با Playwright اجرا می‌شوند، سرور دمو را روی پورت <code>5174</code> بالا می‌آورند و صفحه fixture را مشابه رفتار کاربر واقعی بررسی می‌کنند.
</p>

<h3>اجرای تست واحد با Node.js سفارشی</h3>

<p>
  اگر در محیط توسعه یا CI از مسیر سفارشی برای Node.js استفاده می‌کنید، می‌توانید تست‌های واحد را با همان runtime اجرا کنید:
</p>

<pre dir="ltr"><code class="language-bash">/path/to/node --test tests/*.test.mjs</code></pre>

<h3>پوشش تست‌های مرورگری</h3>

<p>
  تست‌های مرورگری در مسیر زیر قرار دارند:
</p>

<pre dir="ltr"><code class="language-text">tests/e2e/shardo-datepicker-user.spec.mjs</code></pre>

<p>
  fixture مربوط به این تست‌ها نیز در مسیر زیر است:
</p>

<pre dir="ltr"><code class="language-text">tests/fixtures/user-settings.html</code></pre>

<details>
  <summary><strong>موارد بررسی‌شده در تست‌ها</strong></summary>

  <table>
    <thead>
      <tr>
        <th align="right">بخش</th>
        <th align="right">موارد تست‌شده</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Auto Init با Attribute</td>
        <td>ساخت خودکار کنترل از روی <code>data-shardo-datepicker</code>، ساخت hidden input، کلاس‌ها و تم‌ها</td>
      </tr>
      <tr>
        <td>فرمت و خروجی</td>
        <td>مقدار شمسی input، مقدار میلادی hidden input، مقدار <code>selectedText</code> و detail رویدادها</td>
      </tr>
      <tr>
        <td>انتخاب تاریخ</td>
        <td>auto close، نبودن دکمه تأیید در حالت date-only، انتخاب روز و بسته شدن popup</td>
      </tr>
      <tr>
        <td>انتخاب زمان</td>
        <td>نمایش دکمه تأیید، باز ماندن popup تا تأیید، normalize شدن دقیقه با <code>timeStep</code></td>
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
</details>

<h2>برچسب‌های پیشنهادی GitHub</h2>

<p>
  برای بهتر دیده شدن پروژه در GitHub، می‌توانید از Topicهای زیر استفاده کنید:
</p>

<p dir="ltr" align="left">
  <code>datepicker</code>
  <code>jalali</code>
  <code>persian-calendar</code>
  <code>shamsi-date-picker</code>
  <code>rtl</code>
  <code>javascript</code>
  <code>bootstrap</code>
  <code>date-range-picker</code>
  <code>persian-date</code>
  <code>calendar</code>
</p>

<h2>مشارکت</h2>

<p>
  مشارکت در توسعه پروژه آزاد است.
  برای گزارش باگ، پیشنهاد قابلیت جدید یا ارسال تغییرات، می‌توانید از Issue و Pull Request استفاده کنید.
</p>

<ol>
  <li>ابتدا پروژه را fork کنید.</li>
  <li>یک branch جدید برای تغییرات خود بسازید.</li>
  <li>تغییرات را همراه با تست مناسب ثبت کنید.</li>
  <li>قبل از ارسال Pull Request، تست‌ها را اجرا کنید.</li>
</ol>

<pre dir="ltr"><code class="language-bash">npm test</code></pre>

<h2 id="لایسنس">لایسنس</h2>

<p>
  این پروژه به صورت عمومی، رایگان و متن‌باز منتشر می‌شود.
  استفاده، کپی، تغییر، انتشار و توزیع آن تحت مجوز <strong>MIT</strong> آزاد است.
</p>

<p>
  پیشنهاد می‌شود متن کامل مجوز MIT را در فایل جداگانه‌ای با نام <code>LICENSE</code> در ریشه پروژه قرار دهید.
</p>

<pre dir="ltr"><code class="language-text">MIT License

Copyright (c) 2026 Shardo Date Picker Contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files, to use, copy, modify,
merge, publish, distribute, sublicense, and/or sell copies of the software,
subject to the conditions of the MIT License.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND.</code></pre>

</div>
