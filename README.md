# Shardo Date Picker

Shardo Date Picker یک کنترل شمسی برای انتخاب تاریخ، زمان و رنج تاریخ است. مقدار قابل مشاهده شمسی است و hidden input میلادی برای ارسال به سرور ساخته می‌شود.

## اجرا

```bash
npm run demo
```

آدرس دمو:

```text
http://127.0.0.1:5173/index.html
```

## تست قبل از انتشار

```bash
npm install
npx playwright install chromium
npm run check
npm run test:unit
npm run test:e2e
npm test
npm run prepublishOnly
```

`npm test` ابتدا تست‌های واحد و سپس تست‌های مرورگری را اجرا می‌کند. تست‌های مرورگری با Playwright اجرا می‌شوند، سرور دمو را روی پورت `5174` بالا می‌آورند و صفحه fixture را مثل کاربر واقعی تست می‌کنند.

در همین محیط، اگر `node` عمومی سیستم محدود بود، تست واحد را با runtime bundled هم می‌توانید اجرا کنید:

```powershell
& 'C:\Users\emami.s\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe' --test tests/*.test.mjs
```

تست‌های مرورگری جدید در مسیر `tests/e2e/shardo-datepicker-user.spec.mjs` هستند و fixture آن‌ها در `tests/fixtures/user-settings.html` قرار دارد. این تست‌ها موارد زیر را از دید کاربر بررسی می‌کنند:

| بخش | موارد تست‌شده |
| --- | --- |
| attribute auto-init | ساخت خودکار کنترل از روی `data-shardo-datepicker`، ساخت hidden input، کلاس‌ها و تم‌ها |
| فرمت و خروجی | مقدار شمسی input، مقدار میلادی hidden، `selectedText` و detail رویدادها |
| انتخاب تاریخ | auto close، نبودن دکمه تایید برای date-only، انتخاب روز و بسته شدن popup |
| انتخاب زمان | نمایش دکمه تایید، باز ماندن popup تا تایید، normalize شدن دقیقه با `timeStep` |
| رنج تاریخ | preview هنگام hover، انتخاب شروع/پایان، جداکننده شمسی و میلادی |
| پاک کردن دستی | پاک شدن input و hidden input با خالی کردن دستی فیلد |
| تعطیلی‌ها | جمعه‌ها، تعطیلی‌های سفارشی و روزهای disabled |
| JSON attribute | مقداردهی تنظیمات از JSON داخل `data-shardo-datepicker` |
| JS-only options | `value`، `appendTo`، `onOpen`، `onClose`، `onSelect`، `onChange` |
| inline mode | نمایش ثابت داخل container و عدم ساخت hidden input وقتی `hiddenInput=false` است |
| Bootstrap/Dark mode | استفاده از متغیرهای `--bs-*` و تغییر رنگ در `data-bs-theme="dark"` |
| Responsive | قرار گرفتن popup داخل viewport موبایل |

## استفاده با attribute

هر input یا container که `data-shardo-datepicker` داشته باشد به صورت خودکار ساخته می‌شود.

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

## انتخاب رنج

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

## استفاده با JavaScript

```js
import { ShardoDatePicker } from "./src/ShardoDatePicker.js";

new ShardoDatePicker("#date", {
  format: "yyyy/MM/dd HH:mm",
  gregorianFormat: "yyyy-MM-dd HH:mm",
  hiddenInputName: "date",
  showTime: true,
  showSelectedText: true,
  selectedTextFormat: "dddd d MMMM yyyy"
});
```

## رویدادها

کنترل روی همان input یا container رویدادهای سفارشی منتشر می‌کند. خروجی اصلی در `event.detail` است.

```js
const input = document.querySelector("#date");

input.addEventListener("shardo-datepicker:change", (event) => {
  console.log(event.detail.value);
  console.log(event.detail.gregorianValue);
  console.log(event.detail.selectedText);
  console.log(event.detail.jalali);
});
```

| رویداد | زمان اجرا |
| --- | --- |
| `shardo-datepicker:select` | بعد از انتخاب روز |
| `shardo-datepicker:change` | بعد از ثبت تغییر مقدار یا پاک شدن |
| `shardo-datepicker:clear` | بعد از پاک شدن مقدار |
| `shardo-datepicker:open` | بعد از باز شدن پنل |
| `shardo-datepicker:close` | بعد از بسته شدن پنل |

`event.detail` شامل `value`، `gregorianValue`، `selectedText`، `date`، `jalali`، `isRange` و `picker` است.

## تعطیلی‌ها

```html
<input
  data-shardo-datepicker
  data-shardo-datepicker-show-friday-holidays="true"
  data-shardo-datepicker-holidays="1405/02/15,1405/03/14"
>
```

`showFridayHolidays` جمعه‌ها را تعطیل نشان می‌دهد و `holidays` لیست تعطیلی‌های سفارشی شمسی را می‌گیرد.

## تم و رنگ

پالت پیش‌فرض حفظ شده است و رنگ‌ها از طریق CSS variableهای عمومی قابل تغییر هستند. برای استفاده از پالت Bootstrap 5، گزینه `bootstrapTheme` را فعال کنید.

وقتی `bootstrapTheme` فعال است، کنترل رنگ ثابت داخلی برای Bootstrap تعریف نمی‌کند و متغیرهای خودش را به متغیرهای رسمی Bootstrap 5.3 مثل `--bs-body-bg`، `--bs-body-color`، `--bs-border-color`، `--bs-primary`، `--bs-primary-bg-subtle` و `--bs-danger-bg-subtle` وصل می‌کند. بنابراین باید CSS Bootstrap یا تعریف همین `--bs-*`ها در صفحه موجود باشد. اگر input داخل یک container دارک باشد ولی popup به `body` اضافه شود، مقدارهای `--bs-*` از input به popup منتقل می‌شود تا پنجره انتخاب تاریخ هم همان تم را بگیرد.

```html
<input
  data-shardo-datepicker
  data-shardo-datepicker-bootstrap-theme="true"
  data-shardo-datepicker-theme="auto"
>
```

```css
:root {
  --shardo-datepicker-primary: #0f766e;
  --shardo-datepicker-bg: #ffffff;
  --shardo-datepicker-fg: #172033;
}
```

`theme` مقدارهای `auto`، `light` و `dark` را می‌پذیرد. حالت `auto` در درجه اول با CSS و selectorهایی مثل `data-bs-theme="dark"`، `data-theme="dark"`، کلاس‌های `dark`، `theme-dark` و `is-dark` روی `html`، `body` یا والد input کار می‌کند. اگر popup به `body` منتقل شده باشد، هسته فقط برای sync کردن همین وضعیت از محیط بیرونی input، مثل والدها و `html/body`، کمک می‌گیرد و رنگ خود کنترل را معیار تشخیص قرار نمی‌دهد تا برگشت از دارک به روشن sticky نشود. اگر Bootstrap فعال باشد ولی متغیرهای دارک Bootstrap برای popup قابل استفاده نباشند، popup از تم دارک داخلی کنترل استفاده می‌کند تا سفید باقی نماند. برای Bootstrap بهتر است مطابق الگوی خود Bootstrap مقدار `data-bs-theme` روی `html` قرار بگیرد.

### متغیرهای CSS

همه رنگ‌ها و ابعاد اصلی از طریق CSS variable قابل override هستند. این متغیرها را می‌توانید روی `:root`، یک container، خود input یا کلاس‌های تم تعریف کنید.

| متغیر | پیش‌فرض | کاربرد |
| --- | --- | --- |
| `--shardo-datepicker-bg` | `#ffffff` | پس‌زمینه پنل تقویم |
| `--shardo-datepicker-fg` | `#172033` | رنگ متن اصلی |
| `--shardo-datepicker-muted` | `#667085` | رنگ متن‌های کم‌اهمیت مثل روزهای هفته |
| `--shardo-datepicker-muted-soft` | `#98a2b3` | رنگ روزهای خارج از ماه فعلی |
| `--shardo-datepicker-border` | `#d6dce7` | رنگ border معمولی |
| `--shardo-datepicker-border-strong` | `#b9c3d2` | رنگ border در hover |
| `--shardo-datepicker-soft` | `#f5f7fa` | پس‌زمینه‌های ملایم |
| `--shardo-datepicker-soft-strong` | `#e8edf4` | پس‌زمینه یا border ملایم‌تر اما مشخص‌تر |
| `--shardo-datepicker-control-bg` | `#ffffff` | پس‌زمینه دکمه‌ها و inputهای داخلی |
| `--shardo-datepicker-input-bg` | `linear-gradient(180deg, #ffffff, #fbfcfe)` | پس‌زمینه input اصلی |
| `--shardo-datepicker-control-hover-bg` | `#fbfcfd` | پس‌زمینه کنترل‌ها در hover |
| `--shardo-datepicker-primary` | `#0f766e` | رنگ اصلی انتخاب، focus و تاکید |
| `--shardo-datepicker-primary-dark` | `#115e59` | نسخه تیره‌تر رنگ اصلی |
| `--shardo-datepicker-primary-soft` | `#e5f4f2` | پس‌زمینه ملایم رنگ اصلی |
| `--shardo-datepicker-primary-range` | `#edf8f6` | پس‌زمینه روزهای داخل رنج |
| `--shardo-datepicker-primary-range-border` | `#d4eeea` | border روزهای داخل رنج |
| `--shardo-datepicker-primary-preview` | `#f0fbf9` | پس‌زمینه preview رنج هنگام hover |
| `--shardo-datepicker-primary-preview-border` | `#d9f2ee` | border preview رنج |
| `--shardo-datepicker-primary-preview-end` | `#dff3ef` | پس‌زمینه روز انتهایی preview رنج |
| `--shardo-datepicker-primary-fg` | `#ffffff` | رنگ متن روی رنگ اصلی |
| `--shardo-datepicker-danger` | `#b42318` | رنگ خطر/تعطیلی/پاک کردن |
| `--shardo-datepicker-danger-soft` | `#fff5f5` | پس‌زمینه ملایم تعطیلی |
| `--shardo-datepicker-danger-border` | `#ffd5d2` | border تعطیلی |
| `--shardo-datepicker-focus-shadow` | `rgba(15, 118, 110, 0.16)` | سایه focus |
| `--shardo-datepicker-shadow` | `0 24px 70px rgba(17, 24, 39, 0.18)` | سایه popup |
| `--shardo-datepicker-radius` | `8px` | گردی گوشه‌ها |
| `--shardo-datepicker-font` | `Vazirmatn, IRANSans, Tahoma, Arial, sans-serif` | فونت کنترل |

## تنظیمات کامل

نام هر گزینه در HTML به صورت kebab-case بعد از `data-shardo-datepicker-` می‌آید. برای مثال گزینه `showTime` در HTML با `data-shardo-datepicker-show-time` تنظیم می‌شود.

مقدارهای boolean در attribute می‌توانند `true`، `false`، `1` یا attribute خالی باشند. اگر attribute خالی باشد، مقدار آن `true` در نظر گرفته می‌شود. مقدارهای لیستی در attribute با کاما جدا می‌شوند.

```html
<input
  data-shardo-datepicker
  data-shardo-datepicker-show-time="false"
  data-shardo-datepicker-disabled-dates="1405/01/13,1405/02/15"
>
```

| گزینه JS | attribute | نوع ورودی | پیش‌فرض | مقدارهای قابل قبول و توضیح |
| --- | --- | --- | --- | --- |
| `format` | `data-shardo-datepicker-format` | `string` | `yyyy/MM/dd HH:mm` | فرمت مقدار شمسی قابل مشاهده در input. توکن‌ها: `yyyy`، `yy`، `MM`، `M`، `dd`، `d`، `HH`، `H`، `mm`، `m`. |
| `gregorianFormat` | `data-shardo-datepicker-gregorian-format` | `string` | `yyyy-MM-dd HH:mm` | فرمت مقدار میلادی در hidden input و `getGregorianValue()`. توکن‌ها مشابه `format` هستند. |
| `showTime` | `data-shardo-datepicker-show-time` | `boolean` | `true` | اگر `true` باشد انتخاب ساعت و دقیقه نمایش داده می‌شود. در این حالت اگر `autoClose` برابر `false` باشد دکمه تایید نمایش داده می‌شود. |
| `timeStep` | `data-shardo-datepicker-time-step` | `number` | `1` | گام دقیقه. مثال: `5` یعنی دقیقه‌ها هنگام normalize شدن به مضرب ۵ نزدیک می‌شوند. |
| `min` | `data-shardo-datepicker-min` | `string \| Date \| object \| null` | `null` | کمترین تاریخ قابل انتخاب. در HTML مقدار شمسی مثل `1404/01/01` بدهید. در JS می‌تواند `Date` یا `{ jy, jm, jd, hour, minute }` هم باشد. |
| `max` | `data-shardo-datepicker-max` | `string \| Date \| object \| null` | `null` | بیشترین تاریخ قابل انتخاب. قالب ورودی مانند `min` است. |
| `disabledDates` | `data-shardo-datepicker-disabled-dates` | `array` | `[]` | لیست تاریخ‌های غیرفعال شمسی. در HTML: `1405/01/13,1405/02/15`. |
| `disablePast` | `data-shardo-datepicker-disable-past` | `boolean` | `false` | اگر `true` باشد تاریخ‌های قبل از امروز غیرفعال می‌شوند. |
| `disableFuture` | `data-shardo-datepicker-disable-future` | `boolean` | `false` | اگر `true` باشد تاریخ‌های بعد از امروز غیرفعال می‌شوند. |
| `showFridayHolidays` | `data-shardo-datepicker-show-friday-holidays` | `boolean` | `true` | اگر `true` باشد جمعه‌ها با حالت تعطیل نمایش داده می‌شوند. |
| `holidays` | `data-shardo-datepicker-holidays` | `array` | `[]` | لیست تعطیلی‌های سفارشی شمسی. این گزینه فقط ظاهر روز را تعطیل می‌کند و آن را غیرفعال نمی‌کند. |
| `bootstrapTheme` | `data-shardo-datepicker-bootstrap-theme` | `boolean` | `false` | اگر `true` باشد کنترل از متغیرهای `--bs-*` Bootstrap 5.3 استفاده می‌کند. CSS Bootstrap یا تعریف این متغیرها باید در صفحه وجود داشته باشد. |
| `theme` | `data-shardo-datepicker-theme` | `string` | `auto` | مقدارهای قابل قبول: `auto`، `light`، `dark`. در حالت `auto` با دارک‌مود صفحه هماهنگ می‌شود. |
| `autoClose` | `data-shardo-datepicker-auto-close` | `boolean` | `false` | اگر `true` باشد بعد از انتخاب کامل مقدار، پنل بسته می‌شود. در حالت تاریخ بدون ساعت، انتخاب روز به صورت خودکار ثبت و بسته می‌شود. |
| `usePersianDigits` | `data-shardo-datepicker-use-persian-digits` | `boolean` | `false` | اگر `true` باشد خروجی نمایشی با اعداد فارسی ساخته می‌شود. پیش‌فرض اعداد انگلیسی است. |
| `inputReadonly` | `data-shardo-datepicker-input-readonly` | `boolean` | `false` | اگر `true` باشد کاربر نمی‌تواند مقدار input را دستی تایپ کند. اگر `false` باشد پاک کردن دستی فیلد ممکن است. |
| `range` | `data-shardo-datepicker-range` | `boolean` | `false` | اگر `true` باشد انتخاب بازه تاریخ فعال می‌شود. مقدار خروجی شامل شروع و پایان است. |
| `rangeSeparator` | `data-shardo-datepicker-range-separator` | `string` | ` - ` | جداکننده بازه در مقدار شمسی قابل مشاهده. مثال خروجی: `1405/03/01 - 1405/03/10`. |
| `gregorianRangeSeparator` | `data-shardo-datepicker-gregorian-range-separator` | `string` | ` - ` | جداکننده بازه در مقدار میلادی hidden input. |
| `hiddenInput` | `data-shardo-datepicker-hidden-input` | `boolean` | `true` | اگر `true` باشد یک hidden input کنار input اصلی ساخته می‌شود تا مقدار میلادی برای سرور ارسال شود. |
| `hiddenInputName` | `data-shardo-datepicker-hidden-input-name` | `string \| null` | `null` | نام hidden input. اگر تنظیم نشود، از `name` یا `id` ورودی اصلی با پسوند `_gregorian` ساخته می‌شود. |
| `hiddenInputId` | `data-shardo-datepicker-hidden-input-id` | `string \| null` | `null` | شناسه hidden input. |
| `inline` | `data-shardo-datepicker-inline` | `boolean` | `false` | اگر `true` باشد تقویم به صورت ثابت داخل همان container ساخته می‌شود و مثل popup باز و بسته نمی‌شود. |
| `appendTo` | ندارد | `HTMLElement \| null` | `null` | فقط در JS قابل استفاده است. محل اضافه شدن popup را تعیین می‌کند. اگر `null` باشد به `document.body` اضافه می‌شود. |
| `weekStart` | `data-shardo-datepicker-week-start` | `number` | `6` | روز شروع هفته بر اساس `Date.getDay()`: مقدار `6` یعنی شنبه، `0` یعنی یکشنبه، `1` یعنی دوشنبه. |
| `autoInit` | ندارد | `boolean` | `true` | گزینه داخلی/JS برای کنترل رفتار auto initialization. ساخت خودکار با `ShardoDatePicker.autoInit()` انجام می‌شود. |
| `showSelectedText` | `data-shardo-datepicker-show-selected-text` | `boolean` | `false` | اگر `true` باشد متن خلاصه انتخاب‌شده زیر روزها نمایش داده می‌شود. مثال: `شنبه 13 مهر`. |
| `selectedTextFormat` | `data-shardo-datepicker-selected-text-format` | `string` | `dddd d MMMM` | فرمت متن خلاصه انتخاب‌شده. توکن‌ها: `dddd` نام روز هفته، `MMMM` نام ماه، `yyyy`، `yy`، `MM`، `M`، `dd`، `d`. |
| `selectedTextRangeSeparator` | `data-shardo-datepicker-selected-text-range-separator` | `string` | ` تا ` | جداکننده متن خلاصه در حالت رنج. |
| `months` | `data-shardo-datepicker-months` | `array` | نام ماه‌های شمسی | لیست ۱۲ نام ماه برای نمایش. در HTML با کاما جدا کنید. |
| `weekdays` | `data-shardo-datepicker-weekdays` | `array` | `ش,ی,د,س,چ,پ,ج` | عنوان کوتاه روزهای هفته در سربرگ تقویم. ترتیب پیش‌فرض از شنبه شروع می‌شود. |
| `weekdayNames` | `data-shardo-datepicker-weekday-names` | `array` | `شنبه,یکشنبه,دوشنبه,سه‌شنبه,چهارشنبه,پنجشنبه,جمعه` | نام کامل روزهای هفته برای `selectedTextFormat`. |
| `yearRange` | `data-shardo-datepicker-year-range` | `number` | `80` | محدوده منطقی انتخاب سال در تنظیمات کنترل. در نسخه فعلی گرید سال اطراف سال جاری نمایش داده می‌شود و با دکمه‌های قبل/بعد جابه‌جا می‌شود. |
| `value` | ندارد | `string \| Date \| object \| array` | ندارد | مقدار اولیه فقط در JS. در حالت عادی: `1405/02/28` یا `Date` یا `{ jy, jm, jd, hour, minute }`. در حالت رنج: آرایه `[start, end]` یا `{ start, end }`. |
| `onChange` | ندارد | `function \| null` | `null` | callback بعد از تغییر ثبت‌شده مقدار. امضا: `(value, date, jalali, gregorianValue) => void`. |
| `onSelect` | ندارد | `function \| null` | `null` | callback بعد از انتخاب روز. امضا: `(value, date, jalali) => void`. |
| `onOpen` | ندارد | `function \| null` | `null` | callback بعد از باز شدن popup. امضا: `(picker) => void`. |
| `onClose` | ندارد | `function \| null` | `null` | callback بعد از بسته شدن popup. امضا: `(picker) => void`. |

### فرمت تاریخ

توکن‌های `format` و `gregorianFormat`:

| توکن | خروجی |
| --- | --- |
| `yyyy` | سال چهار رقمی، مثل `1405` |
| `yy` | دو رقم آخر سال، مثل `05` |
| `MM` | ماه دو رقمی، مثل `02` |
| `M` | ماه بدون صفر، مثل `2` |
| `dd` | روز دو رقمی، مثل `09` |
| `d` | روز بدون صفر، مثل `9` |
| `HH` | ساعت دو رقمی، مثل `08` |
| `H` | ساعت بدون صفر، مثل `8` |
| `mm` | دقیقه دو رقمی، مثل `05` |
| `m` | دقیقه بدون صفر، مثل `5` |

توکن‌های `selectedTextFormat`:

| توکن | خروجی |
| --- | --- |
| `dddd` | نام کامل روز هفته، مثل `شنبه` |
| `MMMM` | نام ماه، مثل `مهر` |
| `yyyy`، `yy`، `MM`، `M`، `dd`، `d` | همان خروجی‌های تاریخ شمسی |

## API

| نام | توضیح |
| --- | --- |
| `ShardoDatePicker` | کلاس اصلی کنترل |
| `ShardoDatePicker.autoInit(root)` | ساخت خودکار کنترل‌ها از روی `data-shardo-datepicker` |
| `ShardoDatePickerUtils` | ابزارهای تبدیل، parse، format، کبیسه و اعتبارسنجی |
| `getValue()` | مقدار شمسی قابل مشاهده |
| `getGregorianValue()` | مقدار میلادی آماده ارسال |
| `getDate()` | Date میلادی یا `{ start, end }` در حالت رنج |
| `getShardoDatePickerJalali()` | اجزای شمسی انتخاب‌شده |
| `getSelectedText()` | متن نمایشی مثل `شنبه 13 مهر` |

## تقویم

تبدیل تاریخ با `Intl.DateTimeFormat` و calendar استاندارد `persian` انجام می‌شود. اعتبارسنجی اسفند ۳۰ و سال کبیسه نیز بر همین اساس تست شده است.




