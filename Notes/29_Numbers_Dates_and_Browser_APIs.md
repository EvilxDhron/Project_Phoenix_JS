# JavaScript Numbers, Dates & Browser APIs

> Personal study notes — practical JavaScript reference for number handling, date/time handling, and useful browser features beyond the DOM API. Generated with the help of AI.
>
> Examples use regular JavaScript syntax. Some browser APIs require HTTPS, user permission, or a compatible browser. Promise-based examples use `.then()` / `.catch()` where practical.

## Contents

1. [Numbers in JavaScript](#1-numbers-in-javascript)
2. [Number literals and numeric bases](#2-number-literals-and-numeric-bases)
3. [Converting values to numbers](#3-converting-values-to-numbers)
4. [Checking numbers safely](#4-checking-numbers-safely)
5. [Floating-point precision](#5-floating-point-precision)
6. [Rounding and formatting numbers](#6-rounding-and-formatting-numbers)
7. [Useful `Math` methods](#7-useful-math-methods)
8. [`Number` constants and methods](#8-number-constants-and-methods)
9. [`BigInt` for large integers](#9-bigint-for-large-integers)
10. [Formatting numbers for people with `Intl.NumberFormat`](#10-formatting-numbers-for-people-with-intlnumberformat)
11. [Random numbers](#11-random-numbers)
12. [Dates and timestamps](#12-dates-and-timestamps)
13. [Creating dates correctly](#13-creating-dates-correctly)
14. [Reading date parts](#14-reading-date-parts)
15. [Changing dates and date arithmetic](#15-changing-dates-and-date-arithmetic)
16. [Formatting dates with `Intl.DateTimeFormat`](#16-formatting-dates-with-intldatetimeformat)
17. [Time zones, UTC, and common date mistakes](#17-time-zones-utc-and-common-date-mistakes)
18. [A note about `Temporal`](#18-a-note-about-temporal)
19. [Browser APIs: what they are](#19-browser-apis-what-they-are)
20. [Fetch API — getting data from a server](#20-fetch-api--getting-data-from-a-server)
21. [`URL` and `URLSearchParams`](#21-url-and-urlsearchparams)
22. [Web Storage: `localStorage` and `sessionStorage`](#22-web-storage-localstorage-and-sessionstorage)
23. [IndexedDB — larger browser-side storage](#23-indexeddb--larger-browser-side-storage)
24. [History and Location APIs](#24-history-and-location-apis)
25. [Clipboard API](#25-clipboard-api)
26. [Geolocation API](#26-geolocation-api)
27. [Timers and `requestAnimationFrame`](#27-timers-and-requestranimationframe)
28. [`AbortController` — cancelling work](#28-abortcontroller--cancelling-work)
29. [Web Workers — background JavaScript](#29-web-workers--background-javascript)
30. [Web Crypto API](#30-web-crypto-api)
31. [Performance API](#31-performance-api)
32. [WebSocket and Server-Sent Events](#32-websocket-and-server-sent-events)
33. [Broadcast Channel API](#33-broadcast-channel-api)
34. [File, Blob, and object URLs](#34-file-blob-and-object-urls)
35. [Notifications and Web Share](#35-notifications-and-web-share)
36. [MediaDevices API](#36-mediadevices-api)
37. [Service Workers and Cache API](#37-service-workers-and-cache-api)
38. [Permissions, security, and compatibility](#38-permissions-security-and-compatibility)
39. [Common mistakes checklist](#39-common-mistakes-checklist)
40. [Quick revision table](#40-quick-revision-table)
41. [Practice questions](#41-practice-questions)
42. [References](#42-references)

---

## 1. Numbers in JavaScript

JavaScript has two main numeric primitive types:

- **`Number`** — for everyday numbers, decimals, measurements, counters, prices, and calculations.
- **`BigInt`** — for integers that may be larger than the safe range of `Number`.

```js
const age = 23;           // Number
const price = 99.95;      // Number
const hugeId = 12345678901234567890n; // BigInt (notice n)

console.log(typeof age);     // "number"
console.log(typeof hugeId);  // "bigint"
```

There is no separate everyday `Integer` type. Even `10` and `10.5` both have `typeof` equal to `"number"`.

### Special numeric values

```js
console.log(1 / 0);          // Infinity
console.log(-1 / 0);         // -Infinity
console.log("hello" * 2);    // NaN
console.log(typeof NaN);     // "number"
```

- `Infinity` and `-Infinity` represent positive and negative infinity.
- `NaN` means “Not a Number” and usually appears when a numeric operation fails.
- `NaN` is unusual because it is not equal to itself: `NaN === NaN` is `false`.

Use `Number.isNaN(value)` to check whether a value is actually `NaN`.

## 2. Number literals and numeric bases

JavaScript supports several ways to write numeric literals.

```js
const decimal = 42;       // base 10
const binary = 0b101010;  // base 2  -> 42
const octal = 0o52;       // base 8  -> 42
const hex = 0x2a;         // base 16 -> 42
const large = 1_000_000;  // numeric separator; same value as 1000000
const scientific = 2.5e3; // 2.5 × 10^3 -> 2500
```

Numeric separators (`_`) make long numbers easier to read. They are allowed inside numeric literals, not at the beginning/end or next to the decimal point.

```js
const population = 1_400_000_000;
const bytes = 64 * 1024;
```

## 3. Converting values to numbers

### `Number(value)`

Converts the whole value to a number. If the whole value cannot be converted, the result is usually `NaN`.

```js
Number("42");        // 42
Number("42.75");     // 42.75
Number("  12  ");    // 12
Number("");          // 0
Number("hello");     // NaN
Number(true);         // 1
Number(false);        // 0
Number(null);         // 0
Number(undefined);    // NaN
```

### `parseInt()` and `parseFloat()`

These read a numeric part from the beginning of a string.

```js
parseInt("42px", 10);  // 42
parseInt("12.9", 10);  // 12
parseFloat("12.9kg");  // 12.9
parseFloat("3.5rem"); // 3.5
```

For `parseInt`, provide the radix `10` when you mean ordinary decimal input. `Number("42px")` returns `NaN`, while `parseInt("42px", 10)` returns `42`.

**Which should I use?**

- Use `Number(value)` when the entire input is expected to be numeric.
- Use `parseInt(value, 10)` when you intentionally want an integer prefix.
- Use `parseFloat(value)` when you intentionally want a decimal prefix.
- Validate user input; do not assume that conversion means the value is acceptable.

### Unary plus (`+value`)

A short conversion when the intention is clear:

```js
const input = "24";
const age = +input; // 24
```

`Number(input)` is often easier for beginners to read.

## 4. Checking numbers safely

### `Number.isNaN()` vs global `isNaN()`

```js
Number.isNaN(NaN);  // true
Number.isNaN("hi"); // false — the value is a string

isNaN("hi");       // true — global isNaN converts first
isNaN("12");       // false
```

Prefer `Number.isNaN()` when you specifically want to test for the numeric `NaN` value.

### `Number.isFinite()` vs global `isFinite()`

```js
Number.isFinite(10);       // true
Number.isFinite(Infinity); // false
Number.isFinite("10");    // false — no conversion

isFinite("10");           // true — converts the string first
```

### Integers and safe integers

```js
Number.isInteger(12);        // true
Number.isInteger(12.5);      // false
Number.isSafeInteger(12);    // true
Number.isSafeInteger(2 ** 53); // false
```

A number may look like an integer but be too large for exact integer representation. The safe integer range is from `Number.MIN_SAFE_INTEGER` to `Number.MAX_SAFE_INTEGER`.

A practical validation example:

```js
function readPositiveWholeNumber(value) {
  const number = Number(value);

  if (!Number.isFinite(number)) return null;
  if (!Number.isInteger(number)) return null;
  if (number <= 0) return null;

  return number;
}

readPositiveWholeNumber("25");   // 25
readPositiveWholeNumber("2.5");  // null
readPositiveWholeNumber("hello"); // null
```

## 5. Floating-point precision

Most JavaScript `Number` values use the IEEE 754 double-precision binary floating-point format. Many decimal fractions cannot be represented exactly in binary.

```js
console.log(0.1 + 0.2); // 0.30000000000000004
console.log(0.1 + 0.2 === 0.3); // false
```

This is normal floating-point behaviour, not a JavaScript bug.

### Compare decimal calculations with a tolerance

```js
const result = 0.1 + 0.2;
const expected = 0.3;
const isClose = Math.abs(result - expected) < Number.EPSILON;
```

`Number.EPSILON` is useful for some comparisons around `1`, but a single fixed tolerance is not ideal for every scale of number. Choose a tolerance suitable for the size and meaning of your values.

### Working with money

For simple money calculations, a common approach is to store the smallest currency unit as an integer (for example, paise in India) and format it only when displaying it.

```js
const priceInPaise = 1999; // ₹19.99
const taxInPaise = 180;    // ₹1.80
const totalInPaise = priceInPaise + taxInPaise; // 2179

const totalRupees = totalInPaise / 100; // 21.79
```

For financial applications, use an appropriate decimal-money strategy and understand rounding rules. `toFixed()` is a formatting method, not a complete solution to money precision.

## 6. Rounding and formatting numbers

### Rounding methods

```js
Math.round(4.4);  // 4
Math.round(4.5);  // 5
Math.round(-4.5); // -4 (ties go toward +Infinity)

Math.floor(4.9); // 4 — toward negative infinity
Math.ceil(4.1);  // 5 — toward positive infinity
Math.trunc(4.9); // 4 — removes the decimal part toward zero
Math.trunc(-4.9); // -4
```

Do not confuse `Math.floor()` and `Math.trunc()` for negative values: `Math.floor(-4.9)` is `-5`, but `Math.trunc(-4.9)` is `-4`.

### `toFixed()`

Returns a **string** containing a fixed number of digits after the decimal point.

```js
const value = 12.3456;

value.toFixed(2); // "12.35"
value.toFixed(0); // "12"
typeof value.toFixed(2); // "string"
```

Use it mainly for display. The result is text, and binary floating-point behaviour still affects the rounding of some values.

### Keep a number within a range (clamp)

There is no universal built-in `Math.clamp()` method in all browsers, but the common pattern is:

```js
function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

clamp(120, 0, 100); // 100
clamp(-5, 0, 100);  // 0
clamp(45, 0, 100);  // 45
```

## 7. Useful `Math` methods

`Math` is a built-in object; you do not create it with `new Math()`.

| Method | Purpose | Example |
|---|---|---|
| `Math.abs(x)` | Absolute value | `Math.abs(-8) // 8` |
| `Math.round(x)` | Nearest integer | `Math.round(4.6) // 5` |
| `Math.floor(x)` | Round down | `Math.floor(4.9) // 4` |
| `Math.ceil(x)` | Round up | `Math.ceil(4.1) // 5` |
| `Math.trunc(x)` | Remove fractional part | `Math.trunc(4.9) // 4` |
| `Math.max(a, b, ...)` | Largest value | `Math.max(3, 9, 5) // 9` |
| `Math.min(a, b, ...)` | Smallest value | `Math.min(3, 9, 5) // 3` |
| `Math.sqrt(x)` | Square root | `Math.sqrt(81) // 9` |
| `Math.cbrt(x)` | Cube root | `Math.cbrt(27) // 3` |
| `Math.pow(a, b)` | Power | `Math.pow(2, 3) // 8` |
| `Math.sign(x)` | Sign of a number | `Math.sign(-9) // -1` |
| `Math.hypot(a, b)` | Hypotenuse/length | `Math.hypot(3, 4) // 5` |
| `Math.random()` | Pseudorandom decimal in `[0, 1)` | `Math.random()` |
| `Math.PI` | π constant | `Math.PI` |

The exponent operator is usually simpler than `Math.pow()`:

```js
2 ** 3; // 8
```

### Find the minimum or maximum in an array

`Math.min()` and `Math.max()` accept separate arguments, not an array directly.

```js
const scores = [76, 91, 84, 67];

Math.max(...scores); // 91
Math.min(...scores); // 67
```

The spread syntax `...` passes each array item as an individual argument. For very large arrays, use a loop or a reduction rather than spreading a huge list into a function call.

## 8. `Number` constants and methods

### Useful constants

```js
Number.MAX_SAFE_INTEGER; // 9007199254740991
Number.MIN_SAFE_INTEGER; // -9007199254740991
Number.EPSILON;          // smallest representable gap above 1
Number.MAX_VALUE;        // largest finite Number
Number.MIN_VALUE;        // smallest positive Number greater than 0
Number.POSITIVE_INFINITY;
Number.NEGATIVE_INFINITY;
Number.NaN;
```

`Number.MIN_VALUE` does **not** mean the most negative number; it means the smallest positive number greater than zero. `Number.MIN_SAFE_INTEGER` is the negative safe-integer boundary.

### Useful formatting methods

```js
(1234.567).toFixed(2);       // "1234.57"
(1234.567).toPrecision(5);   // "1234.6"
(1234.567).toString();       // "1234.567"
(255).toString(16);          // "ff" — base 16
```

`toPrecision()` controls the number of significant digits, not just the digits after the decimal point.

## 9. `BigInt` for large integers

Use the `n` suffix to write a BigInt literal.

```js
const bigNumber = 123456789012345678901234567890n;
const anotherBigNumber = BigInt("123456789012345678901234567890");
```

### Arithmetic rules

```js
10n + 5n; // 15n
10n * 5n; // 50n
5n / 2n;  // 2n — the fractional part is discarded
```

You cannot mix `Number` and `BigInt` directly in most arithmetic expressions:

```js
// 10n + 5; // TypeError
10n + BigInt(5); // 15n
```

Other important points:

- BigInt represents integers, not decimal fractions.
- `Math` methods such as `Math.sqrt()` do not accept BigInt values.
- Converting a large BigInt to `Number` can lose precision.
- `JSON.stringify()` does not serialize BigInt by default.
- Convert an ID from a string using `BigInt("...")` if it may exceed the safe integer range. Do not first convert that long string to `Number`.

```js
const id = 900719925474099312345n;
id.toString(); // "900719925474099312345"
```

## 10. Formatting numbers for people with `Intl.NumberFormat`

`Intl.NumberFormat` formats numbers according to a locale (language/region) and options. This is much better than manually adding commas or currency symbols.

### Thousands separators and decimal places

```js
const amount = 1234567.891;

new Intl.NumberFormat("en-IN").format(amount); // e.g. "12,34,567.891"
new Intl.NumberFormat("en-US").format(amount); // e.g. "1,234,567.891"
```

### Currency formatting

```js
const rupees = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR"
});

rupees.format(123456.5); // e.g. "₹1,23,456.50"
```

### Percentages

```js
const percent = new Intl.NumberFormat("en-IN", {
  style: "percent",
  maximumFractionDigits: 1
});

percent.format(0.875); // "87.5%"
```

Remember that `0.875` is the value for 87.5% when using percent style.

### Compact values

```js
new Intl.NumberFormat("en", {
  notation: "compact",
  maximumFractionDigits: 1
}).format(1250000); // e.g. "1.3M"
```

Output can vary by locale and runtime. Let the API handle locale-specific separators and currency display.

## 11. Random numbers

### Random decimal

`Math.random()` returns a pseudorandom number greater than or equal to `0` and less than `1`.

```js
Math.random(); // Example: 0.372... (the result changes)
```

### Random integer from `min` to `max`, including both ends

```js
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

randomInt(1, 6); // suitable for a simple dice game
```

This example assumes valid integer inputs where `min <= max`.

**Security note:** Do not use `Math.random()` for passwords, authentication tokens, security keys, or other security-sensitive values. Use the Web Crypto API for cryptographically strong random values.

---

## 12. Dates and timestamps

JavaScript's built-in `Date` represents a point in time as milliseconds since **1970-01-01T00:00:00.000Z** (the Unix epoch, measured in milliseconds by `Date`).

```js
const now = new Date();
console.log(now);
console.log(Date.now()); // timestamp in milliseconds
console.log(now.getTime()); // same kind of timestamp
```

A timestamp is useful for comparing moments, storing an instant, and calculating elapsed time. It does not itself contain a timezone or a human-readable calendar format.

### Seconds vs milliseconds

JavaScript timestamps use milliseconds; many other systems use seconds.

```js
const timestampSeconds = 1_700_000_000;
const date = new Date(timestampSeconds * 1000);
```

If you pass a seconds timestamp directly to `new Date()`, the result will be close to January 1970 rather than the intended date.

## 13. Creating dates correctly

### Current date and time

```js
const now = new Date();
```

### From a standard ISO date/time string

```js
const date1 = new Date("2026-10-19T10:30:00Z"); // Z means UTC
const date2 = new Date("2026-10-19T10:30:00+05:30"); // explicit offset
```

ISO strings with an explicit `Z` or offset are the clearest choice when representing a specific moment in time.

### From parts

```js
// new Date(year, monthIndex, day, hours, minutes, seconds, milliseconds)
const date = new Date(2026, 9, 19, 14, 30); // local time: 19 October 2026, 14:30
```

Important details:

- Months are zero-based in the component constructor: `0` is January, `9` is October, and `11` is December.
- The component constructor uses the local timezone.
- The day is one-based: `1` is the first day of the month.
- Invalid or overflowing parts may be normalised instead of rejected. For example, day `32` rolls into the following month.

### From a timestamp

```js
const date = new Date(0); // epoch instant
const dateFromTimestamp = new Date(Date.now());
```

### Check whether a date is valid

```js
const goodDate = new Date("2026-10-19T00:00:00Z");
const badDate = new Date("not a date");

Number.isNaN(goodDate.getTime()); // false
Number.isNaN(badDate.getTime());  // true
```

Invalid dates usually return `NaN` from numeric getters and the string `"Invalid Date"` when converted for display. Validate dates that come from user input or external data.

### Be careful with date strings

Prefer the standard form `YYYY-MM-DDTHH:mm:ss.sssZ` (or an explicit UTC offset) for a specific instant. Parsing of non-standard date strings can vary between implementations.

A date-only ISO string such as `"2026-10-19"` is interpreted as UTC, whereas a date-time string without an offset such as `"2026-10-19T09:00:00"` is interpreted as local time. This difference can surprise you when converting between dates and displaying them in other time zones.

## 14. Reading date parts

There are local-time getters and UTC getters. Choose intentionally.

```js
const date = new Date("2026-10-19T12:34:56Z");

date.getFullYear(); // local year
 date.getMonth();   // local month, 0–11
 date.getDate();    // day of month, 1–31
 date.getDay();     // day of week, Sunday = 0 ... Saturday = 6
 date.getHours();   // local hour, 0–23
 date.getMinutes();
 date.getSeconds();
 date.getTime();    // timestamp in milliseconds
```

Use the corresponding `getUTC...()` methods when you need UTC parts, for example `getUTCFullYear()`, `getUTCMonth()`, `getUTCDate()`, and `getUTCHours()`.

**Common confusion:** `getDate()` gives the day of the month. `getDay()` gives the day of the week.

### Convert a valid date to ISO

```js
const date = new Date();
date.toISOString(); // e.g. "2026-10-19T09:24:00.000Z"
```

`toISOString()` always expresses the instant in UTC and ends in `Z`. It throws a `RangeError` for an invalid date.

## 15. Changing dates and date arithmetic

`Date` objects have setter methods such as `setFullYear()`, `setMonth()`, `setDate()`, `setHours()`, and UTC versions such as `setUTCDate()`.

```js
const date = new Date("2026-10-19T00:00:00Z");
date.setUTCDate(date.getUTCDate() + 7); // move forward by seven UTC calendar days
```

Date setters mutate the same `Date` object. If you want to keep the original, copy it first:

```js
const original = new Date();
const copy = new Date(original);
copy.setDate(copy.getDate() + 1); // copy is moved forward by one local calendar day
```

### Add a duration in milliseconds

```js
const start = Date.now();
const oneHourLater = new Date(start + 60 * 60 * 1000);
```

This adds exactly 60 minutes to a timestamp. It is not always the same thing as adding one local clock hour across daylight-saving transitions.

### Compare dates

```js
const first = new Date("2026-01-01T00:00:00Z");
const second = new Date("2026-02-01T00:00:00Z");

first.getTime() < second.getTime(); // true
first < second; // also true: Date objects convert to timestamps for comparison
```

When sorting or calculating durations, make sure every date is valid.

### Difference between two instants

```js
const start = new Date("2026-10-19T10:00:00Z");
const end = new Date("2026-10-19T12:30:00Z");

const differenceMs = end.getTime() - start.getTime();
const differenceMinutes = differenceMs / (1000 * 60); // 150
```

This is elapsed time. It is different from counting calendar days or months, which requires explicit calendar/timezone rules.

### Month arithmetic warning

Adding one month to the 31st may overflow into the following month because months have different lengths. Decide your expected rule (clamp to last day, overflow, or business/calendar logic) and implement it intentionally. Do not assume `setMonth()` always means “same day in the next month.”

## 16. Formatting dates with `Intl.DateTimeFormat`

Use `Intl.DateTimeFormat` for localised display rather than manually joining `getDate()`, `getMonth()`, and other values.

```js
const date = new Date("2026-10-19T10:30:00Z");

new Intl.DateTimeFormat("en-IN", {
  dateStyle: "long"
}).format(date);
```

### Include date and time

```js
const formatter = new Intl.DateTimeFormat("en-IN", {
  dateStyle: "medium",
  timeStyle: "short"
});

formatter.format(new Date());
```

### Pick the timezone explicitly

```js
const date = new Date("2026-10-19T10:30:00Z");

new Intl.DateTimeFormat("en-IN", {
  dateStyle: "full",
  timeStyle: "short",
  timeZone: "Asia/Kolkata"
}).format(date);
```

A `Date` stores an instant; the formatter decides how that instant is shown in a chosen timezone and locale.

### Reuse a formatter

If formatting many dates with the same options, create one formatter and reuse it rather than constructing a new formatter for every date.

```js
const dateFormatter = new Intl.DateTimeFormat("en-IN", {
  day: "2-digit",
  month: "short",
  year: "numeric"
});

const labels = [new Date(), new Date(Date.now() + 86_400_000)]
  .map(date => dateFormatter.format(date));
```

Other useful options include `weekday`, `era`, `hour`, `minute`, `second`, `hour12`, and `timeZoneName`.

## 17. Time zones, UTC, and common date mistakes

Remember these distinctions:

- **Instant:** one exact moment, usually stored as a timestamp or ISO string with `Z`/offset.
- **Local time:** a clock and calendar as interpreted in a particular timezone.
- **Date without time:** a calendar date such as a birthday; it may not represent a unique instant.
- **Duration:** an amount of elapsed time, such as 90 minutes.

Good habits:

1. Store a real moment in a standard form such as ISO 8601 with `Z` or an explicit offset.
2. Use UTC for comparisons and timestamp-based calculations where appropriate.
3. Format for the user's locale and intended timezone at the point of display.
4. Do not expect date-only values, calendar days, and 24-hour durations to be interchangeable.
5. Do not parse free-form dates like `"10/11/2026"` without knowing whether that means October 11 or November 10.
6. Remember that daylight-saving rules can make some local times repeated or nonexistent.

For a birthday or an all-day event, consider storing the calendar date as a validated `YYYY-MM-DD` string rather than automatically converting it to a timezone-sensitive instant.

## 18. A note about `Temporal`

`Temporal` is a newer API designed to make date/time concepts clearer than the older `Date` API. It has separate types for instants, plain dates, date-times, durations, and time zones.

However, browser support is still not universal. Check compatibility before using it in a project, and use a suitable polyfill if your support requirements allow one. Learn the built-in `Date` and `Intl` APIs first because they are widely available.

---

## 19. Browser APIs: what they are

A **Web API** is a feature provided by the browser that JavaScript can use. Examples include fetching server data, saving data in the browser, reading the clipboard (with permission), getting the user's location, creating workers, and accessing cryptographic utilities.

These notes focus on APIs other than DOM manipulation APIs. They do not cover `document.querySelector()`, element creation, or DOM event handling.

Some browser APIs:

- Work only on secure origins (usually HTTPS or localhost).
- Require user permission or a direct user action.
- Are unavailable in some browsers or contexts.
- Return a Promise, use callbacks, or send events.
- Behave differently in a normal page, private browsing, an iframe, or a worker.

Check browser support and handle errors rather than assuming every API is available.

## 20. Fetch API — getting data from a server

`fetch()` makes an HTTP request and returns a Promise that resolves to a `Response`.

### GET JSON data

```js
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error("Request failed:", error);
  });
```

Important: `fetch()` normally does **not** reject just because the server returns HTTP `404` or `500`. Check `response.ok` or `response.status` yourself.

### Send JSON with POST

```js
fetch("https://example.com/api/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({ name: "Dhron", role: "developer" })
})
  .then(response => {
    if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

This URL is an example placeholder; replace it with an actual API endpoint.

### Read other response types

```js
response.json();        // parse JSON
response.text();        // plain text
response.blob();        // Blob, often for binary files
response.arrayBuffer(); // raw binary buffer
```

A response body is normally consumed once. If you need to read it more than once, use `response.clone()` before consuming it.

### CORS

A browser may block JavaScript from reading a cross-origin response unless the server allows it using Cross-Origin Resource Sharing (CORS). You cannot fix a server's missing CORS headers by adding a client-side request header. Use a properly configured API/server.

## 21. `URL` and `URLSearchParams`

Use these to parse, build, and edit URLs safely instead of joining strings manually.

```js
const url = new URL("https://example.com/products?category=books&page=2");

url.hostname; // "example.com"
url.pathname; // "/products"
url.searchParams.get("page"); // "2"
```

### Add or update query parameters

```js
const url = new URL("https://example.com/search");
url.searchParams.set("q", "javascript functions");
url.searchParams.set("page", "1");

console.log(url.toString());
```

`URLSearchParams` encodes query values as needed. Use `.get()`, `.getAll()`, `.has()`, `.set()`, `.append()`, `.delete()`, and `.toString()` as needed.

```js
const params = new URLSearchParams("tag=js&tag=web&page=2");
params.get("tag");    // "js" (first matching value)
params.getAll("tag"); // ["js", "web"]
```

When resolving a relative URL, provide a base URL:

```js
new URL("/account", "https://example.com").href;
```

## 22. Web Storage: `localStorage` and `sessionStorage`

Both storage APIs save **strings** in the browser for an origin.

- **`localStorage`** usually persists after the browser is closed and reopened.
- **`sessionStorage`** is scoped to a tab's page session and is usually cleared when that tab's session ends.

### Save and read data

```js
localStorage.setItem("theme", "dark");
const theme = localStorage.getItem("theme"); // "dark"

localStorage.removeItem("theme");
// localStorage.clear(); // removes all keys for this origin — use with care
```

### Store an object using JSON

```js
const user = { name: "Dhron", level: "beginner" };
localStorage.setItem("user", JSON.stringify(user));

const savedText = localStorage.getItem("user");
const savedUser = savedText === null ? null : JSON.parse(savedText);
```

JSON parsing can throw if stored text is invalid. Wrap parsing in `try...catch` when the stored value may be damaged or manually edited.

### Important limits and security

- Values are strings; use `JSON.stringify()` and `JSON.parse()` for plain JSON-compatible data.
- Storage is not a database for huge amounts of data.
- Storage access can fail due to browser policy or quota limits.
- Do not store passwords, session secrets, or sensitive data in Web Storage. JavaScript running on the same origin can read it, including injected malicious scripts.
- Treat browser storage as user-controlled input; validate it when reading.

## 23. IndexedDB — larger browser-side storage

IndexedDB is an asynchronous database built into the browser. It can store larger amounts of structured data, including objects and blobs, and supports indexes and transactions.

Use it when `localStorage` is too limited — for example, an offline-first app, a notes app with many records, or cached structured data.

Conceptually, IndexedDB uses:

- A database with a name and version.
- Object stores, similar in broad purpose to tables or collections.
- Keys and optional indexes.
- Transactions to read/write data.

IndexedDB's raw API uses event-based request objects and has more setup than Web Storage. A production app may use a well-maintained wrapper library to make it easier to work with. Do not assume its API is synchronous like `localStorage`.

## 24. History and Location APIs

These are browser navigation APIs, not DOM element-manipulation methods.

### `location`

```js
console.log(location.href);     // full current URL
console.log(location.hostname); // host name
console.log(location.pathname); // path
console.log(location.search);   // query string including ?
console.log(location.hash);     // fragment including #
```

```js
// Navigate to another URL:
// location.assign("https://example.com");

// Replace the current history entry:
// location.replace("https://example.com");
```

Only execute navigation examples when you intend to leave the current page.

### `history`

```js
history.length; // number of entries in the session history (not a reliable back-button test)
history.back();
history.forward();
// history.go(-2); // move two history entries backward
```

Single-page applications can update the URL without a full page navigation using:

```js
history.pushState({ page: "profile" }, "", "/profile");
history.replaceState({ page: "settings" }, "", "/settings");
```

`pushState()` does not itself fetch a page or automatically notify your app to render new content. The app must handle the state change, and back/forward navigation is signalled by the `popstate` event. The server must also be configured correctly for direct visits to client-side routes.

## 25. Clipboard API

The Clipboard API lets a page copy or read clipboard data. Access is restricted for security and privacy; writing usually requires a secure context and may require a user gesture.

```js
navigator.clipboard.writeText("Copied text")
  .then(() => console.log("Text copied"))
  .catch(error => console.error("Could not copy:", error));
```

Do not assume clipboard access works from every environment. Call it in response to a clear user action, such as pressing a Copy button, and show a fallback or error message if it fails.

## 26. Geolocation API

Geolocation can request the device's location after asking the user for permission. It commonly requires HTTPS.

```js
if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(
    position => {
      console.log(position.coords.latitude);
      console.log(position.coords.longitude);
    },
    error => {
      console.error("Location unavailable:", error.message);
    },
    { enableHighAccuracy: false, timeout: 10000, maximumAge: 60000 }
  );
} else {
  console.log("Geolocation is not supported here.");
}
```

The user can deny permission, and the position may be inaccurate or unavailable. Request location only when it is needed, explain why, and provide a manual alternative.

`watchPosition()` can watch repeated position updates; stop it later with `clearWatch(id)`.

## 27. Timers and `requestAnimationFrame`

### `setTimeout()` and `setInterval()`

```js
const timeoutId = setTimeout(() => {
  console.log("Runs once after a delay");
}, 1000);

const intervalId = setInterval(() => {
  console.log("Runs repeatedly");
}, 2000);

// Stop them when they are no longer needed:
clearTimeout(timeoutId);
clearInterval(intervalId);
```

A delay is a minimum scheduling delay, not a promise that the callback runs at the exact millisecond. A busy main thread or browser throttling can delay it.

Do not write `setTimeout(myFunction(), 1000)` when you want to schedule the function. That calls the function immediately and passes its return value. Use `setTimeout(myFunction, 1000)` or `setTimeout(() => myFunction(), 1000)`.

### `requestAnimationFrame()`

Use it for visual updates that should be coordinated with the browser's next repaint (often animation). It is generally preferable to using a fast `setInterval()` loop for drawing/animation.

```js
let frameId;
let startTime;

function animate(timestamp) {
  if (startTime === undefined) startTime = timestamp;
  const elapsed = timestamp - startTime;

  // Calculate animation state using elapsed time here.
  console.log(elapsed);

  frameId = requestAnimationFrame(animate);
}

frameId = requestAnimationFrame(animate);

// Stop the loop when appropriate:
// cancelAnimationFrame(frameId);
```

This example shows the animation loop structure; remove `console.log()` in a real animation to avoid excessive logging. Browsers usually pause or throttle animation callbacks in background tabs.

## 28. `AbortController` — cancelling work

`AbortController` can cancel supported operations, most commonly a `fetch()` request.

```js
const controller = new AbortController();

fetch("https://jsonplaceholder.typicode.com/posts", {
  signal: controller.signal
})
  .then(response => {
    if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => {
    if (error.name === "AbortError") {
      console.log("Request was cancelled");
    } else {
      console.error(error);
    }
  });

// Call this when the request is no longer needed:
// controller.abort();
```

This is useful when a user changes a search query before an earlier request has finished, or when a page no longer needs a request. Once aborted, a controller's signal stays aborted; create another controller for a new operation.

## 29. Web Workers — background JavaScript

A Web Worker runs JavaScript in a separate thread so CPU-heavy work does not block the page's main thread. A worker cannot directly manipulate the DOM. Communication usually happens through messages.

Create two files in the same suitable project folder.

**`main.js`**

```js
const worker = new Worker("worker.js");

worker.postMessage({ limit: 1000000 });

worker.addEventListener("message", event => {
  console.log("Worker result:", event.data);
});

worker.addEventListener("error", error => {
  console.error("Worker error:", error.message);
});

// Call this when finished:
// worker.terminate();
```

**`worker.js`**

```js
self.addEventListener("message", event => {
  const { limit } = event.data;
  let total = 0;

  for (let i = 1; i <= limit; i++) {
    total += i;
  }

  self.postMessage(total);
});
```

Run this from a local development server or suitable web server rather than assuming every browser will load worker files from `file://` URLs. Workers have a separate global scope and communicate through messages. For large data, consider the cost of copying data between the main thread and worker.

## 30. Web Crypto API

Use the Web Crypto API for cryptographically strong random values and standard cryptographic operations. It is commonly exposed as `crypto` in secure contexts.

### UUIDs

```js
const id = crypto.randomUUID();
console.log(id); // e.g. "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx"
```

`crypto.randomUUID()` is convenient for generating UUIDs in supported secure contexts. A UUID is an identifier, not a substitute for authorisation or a secret-management system.

### Strong random bytes

```js
const values = new Uint8Array(16);
crypto.getRandomValues(values);
console.log(values);
```

Do not replace secure randomness with `Math.random()` when security matters.

### Cryptographic hashing

`crypto.subtle` provides cryptographic operations such as digest, signing, verification, encryption, and decryption. These APIs are lower-level and are easy to misuse; use established, reviewed designs and libraries for real security work. Do not invent your own cryptographic protocol.

## 31. Performance API

Use `performance.now()` for measuring elapsed time within a page. It is a high-resolution timestamp intended for performance measurements and is usually more suitable than `Date.now()` for timing short operations.

```js
const start = performance.now();

// Code you want to measure:
for (let i = 0; i < 1_000_000; i++) {
  Math.sqrt(i);
}

const end = performance.now();
console.log(`Elapsed: ${(end - start).toFixed(2)} ms`);
```

`performance.now()` measures elapsed time relative to a performance time origin; it is not a calendar date. Use `Date.now()` or `Date` for wall-clock time.

The Performance API also offers entries and observers for navigation, resources, and user timing. Use those when you need to analyse loading or application performance instead of relying only on one loop benchmark.

## 32. WebSocket and Server-Sent Events

These APIs keep a connection open for updates from a server, but they work differently.

### WebSocket

WebSocket supports two-way communication: the client and server can send messages to each other over the connection.

```js
const socket = new WebSocket("wss://example.com/socket");

socket.addEventListener("open", () => {
  console.log("Connected");
  socket.send("Hello server");
});

socket.addEventListener("message", event => {
  console.log("Message from server:", event.data);
});

socket.addEventListener("error", error => {
  console.error("WebSocket error:", error);
});

socket.addEventListener("close", () => {
  console.log("Connection closed");
});

// Close when finished:
// socket.close();
```

Use `wss://` for encrypted WebSocket connections in production. This example requires a real WebSocket server at the URL.

### Server-Sent Events (`EventSource`)

EventSource is a one-way stream from server to browser, useful for live updates where the client does not need to send messages through the same connection.

```js
const source = new EventSource("https://example.com/events");

source.addEventListener("message", event => {
  console.log("Update:", event.data);
});

source.addEventListener("error", () => {
  console.log("Event stream error or reconnecting");
});

// Stop receiving updates:
// source.close();
```

The server must support the correct protocol and headers. `EventSource` uses a text event stream and automatically attempts to reconnect in normal cases.

## 33. Broadcast Channel API

`BroadcastChannel` lets same-origin browsing contexts (such as tabs or windows) communicate using messages, without needing a server.

```js
const channel = new BroadcastChannel("app-updates");

channel.postMessage({ type: "THEME_CHANGED", theme: "dark" });

channel.addEventListener("message", event => {
  console.log("Message from another context:", event.data);
});

// Close when you no longer need it:
// channel.close();
```

Open the same channel name in another same-origin tab to test it. Messages should be treated as data from another context; validate their structure before trusting them.

## 34. File, Blob, and object URLs

A `Blob` represents immutable raw data, such as text or downloaded file content. A `File` is a kind of Blob that also has a name and metadata. Browsers commonly provide File objects when users choose files or when an API returns them.

### Create a Blob from text

```js
const blob = new Blob(["Hello from JavaScript!"], {
  type: "text/plain"
});

const objectUrl = URL.createObjectURL(blob);
console.log(objectUrl); // temporary blob: URL

// When no longer needed, release the object URL:
// URL.revokeObjectURL(objectUrl);
```

Object URLs are useful for previews and downloads. Revoke them when they are no longer needed to release associated resources.

### Read a Blob as text

```js
const blob = new Blob(["Example text"], { type: "text/plain" });

blob.text().then(text => {
  console.log(text);
});
```

Reading a user's chosen file usually involves a file picker or another user-approved file access flow. Never assume you can read arbitrary files from the user's device by guessing file paths.

## 35. Notifications and Web Share

### Notifications API

The Notifications API can show system notifications, but browser/OS support, permission rules, and user settings vary. Ask only when the user understands why notifications are needed.

```js
if ("Notification" in window) {
  Notification.requestPermission().then(permission => {
    if (permission === "granted") {
      new Notification("Study reminder", {
        body: "Time to revise JavaScript notes."
      });
    }
  });
}
```

Request permission in response to a clear user action, and do not keep prompting after denial. Persistent/background notifications often involve service workers and have different requirements.

### Web Share API

This can open the device's native share interface where supported, and usually needs a user gesture.

```js
const shareData = {
  title: "JavaScript Notes",
  text: "My study notes on JavaScript",
  url: location.href
};

if (navigator.share) {
  navigator.share(shareData)
    .then(() => console.log("Share flow completed"))
    .catch(error => console.log("Share cancelled or failed:", error));
} else {
  console.log("Native sharing is not supported in this browser.");
}
```

A rejected share Promise may mean the user cancelled the share sheet; handle it without treating every cancellation as a serious error.

## 36. MediaDevices API

`navigator.mediaDevices` provides access to media-device capabilities such as the camera and microphone. Access generally requires a secure context and the user's permission.

```js
if (navigator.mediaDevices?.getUserMedia) {
  navigator.mediaDevices.getUserMedia({ audio: true, video: true })
    .then(stream => {
      console.log("Media stream available", stream);

      // When finished, stop each track:
      // stream.getTracks().forEach(track => track.stop());
    })
    .catch(error => {
      console.error("Camera/microphone access failed:", error.name, error.message);
    });
} else {
  console.log("Media capture is not available here.");
}
```

This asks for camera and microphone access. Do not run it unexpectedly; use a clear user action and explain why access is required. Stop tracks when you no longer need them. The returned stream does not automatically start recording or upload data.

## 37. Service Workers and Cache API

### Service Worker

A service worker is a background worker associated with a site. It can intercept certain network requests and help build offline-capable apps, caching strategies, and push-notification workflows. It has a lifecycle and generally requires a secure context (with localhost treated specially for development).

Service workers run in a different context from the page and cannot directly manipulate the page's DOM. They are usually registered from the main page, with their own script file.

```js
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/service-worker.js")
    .then(registration => {
      console.log("Service worker registered:", registration.scope);
    })
    .catch(error => {
      console.error("Service worker registration failed:", error);
    });
}
```

A registration alone does not make an app work offline. The service-worker script must implement the intended caching/fetch behaviour, and deployment paths and scope must be correct.

### Cache API

The Cache API stores `Request`/`Response` pairs and is often used from service workers. It is different from `localStorage` and from the HTTP browser cache.

```js
caches.open("static-v1")
  .then(cache => cache.addAll([
    "/",
    "/styles.css",
    "/app.js"
  ]))
  .then(() => console.log("Files added to cache"))
  .catch(error => console.error("Caching failed:", error));
```

Use only URLs and caching strategies appropriate for your app. Cached content can become outdated; version caches and remove old versions thoughtfully. Never assume that caching a file automatically guarantees a full offline experience.

## 38. Permissions, security, and compatibility

A quick guide before using a browser API:

- **Feature detection:** check that the method exists before calling it, such as `if (navigator.share) { ... }`.
- **Secure contexts:** APIs such as geolocation, clipboard, media capture, and crypto-related features often require HTTPS (localhost is commonly allowed for development).
- **Permissions:** the user may deny access or later change permission settings. Handle errors and offer an alternative.
- **User gestures:** clipboard, sharing, and notification flows may require a click or other clear user action.
- **CORS:** cross-origin data requests depend on the server's CORS policy.
- **Privacy:** collect only the data you need, explain why, and avoid storing sensitive information unnecessarily.
- **Input validation:** data from URLs, storage, network responses, and other tabs is not automatically trustworthy.
- **Compatibility:** check current browser support on MDN or Can I Use before depending on a newer API.

## 39. Common mistakes checklist

- [ ] Using `parseInt()` for all conversions without considering `Number()` or `parseFloat()`.
- [ ] Forgetting that `Number("hello")` becomes `NaN`.
- [ ] Checking `NaN` with `value === NaN` instead of `Number.isNaN(value)`.
- [ ] Assuming `0.1 + 0.2` equals exactly `0.3`.
- [ ] Using `toFixed()` as if it returns a number; it returns a string.
- [ ] Mixing `Number` and `BigInt` in arithmetic.
- [ ] Using `Math.random()` for passwords or security tokens.
- [ ] Forgetting that JavaScript date timestamps use milliseconds, not seconds.
- [ ] Forgetting that months in `new Date(year, monthIndex, ...)` start at `0`.
- [ ] Confusing `getDate()` (day of month) with `getDay()` (day of week).
- [ ] Parsing ambiguous date strings such as `"10/11/2026"` without knowing the intended format.
- [ ] Assuming a local calendar day always equals exactly 24 hours.
- [ ] Forgetting to check `response.ok` after `fetch()`.
- [ ] Expecting `fetch()` to bypass CORS restrictions.
- [ ] Assuming `localStorage` stores objects directly; it stores strings.
- [ ] Storing secrets or sensitive personal information in Web Storage.
- [ ] Forgetting to handle permission denial or missing browser features.
- [ ] Forgetting to cancel timers, abort requests, stop media tracks, close channels/sockets, or revoke object URLs when appropriate.

## 40. Quick revision table

| Need | Use |
|---|---|
| Convert a whole input to a number | `Number(value)` |
| Read an integer prefix | `parseInt(value, 10)` |
| Read a decimal prefix | `parseFloat(value)` |
| Check valid finite number | `Number.isFinite(value)` |
| Check for `NaN` | `Number.isNaN(value)` |
| Check integer / safe integer | `Number.isInteger()` / `Number.isSafeInteger()` |
| Round or calculate | `Math.round()`, `Math.floor()`, `Math.max()`, etc. |
| Format a number/currency | `Intl.NumberFormat` |
| Handle very large integers | `BigInt` |
| Get current timestamp | `Date.now()` |
| Create a date object | `new Date(...)` |
| Convert an instant to UTC ISO format | `date.toISOString()` |
| Format localised date/time | `Intl.DateTimeFormat` |
| Request data from a server | `fetch()` |
| Build/read query parameters | `URL`, `URLSearchParams` |
| Save small string data | `localStorage` / `sessionStorage` |
| Store many structured records | IndexedDB |
| Cancel a fetch request | `AbortController` |
| Move work off the main thread | Web Workers |
| Generate a UUID | `crypto.randomUUID()` |
| Measure elapsed performance time | `performance.now()` |
| Communicate live, both ways | WebSocket |
| Receive a one-way event stream | EventSource |
| Share data between same-origin tabs | `BroadcastChannel` |
| Work with binary/text file data | `Blob`, `File`, object URLs |

## 41. Practice questions

Try these without checking the answers online first. Write the code yourself and run it in the browser console or Node.js where applicable.

### Numbers

1. What is the difference between `Number("12px")` and `parseInt("12px", 10)`?
2. What does `Number.isNaN("hello")` return, and why?
3. Explain why `0.1 + 0.2 === 0.3` is false.
4. Write a function that accepts a value and returns it only if it is a finite positive number; otherwise, return `null`.
5. Write a `randomInt(min, max)` function that includes both limits.
6. Find the largest and smallest numbers in `[7, 21, -3, 11]` using `Math` methods.
7. What does `toFixed(2)` return: a number or a string?
8. When should you prefer `BigInt` over `Number`?
9. Format `1234567.5` using Indian number grouping and format `999.5` as Indian rupees.
10. Why is `Math.random()` inappropriate for creating security tokens?

### Dates

11. What does `Date.now()` return, and in what unit?
12. In `new Date(2026, 9, 19)`, which month does `9` represent?
13. Explain the difference between `getDate()` and `getDay()`.
14. How can you check if a `Date` object is invalid?
15. Format the current date using `Intl.DateTimeFormat` with the `en-IN` locale.
16. Why is an ISO string with `Z` or an explicit offset often safer for representing an instant?
17. How do you calculate elapsed minutes between two valid dates?
18. Why can adding 24 hours differ from moving to the next local calendar day around a daylight-saving change?

### Browser APIs

19. Why should a fetch example usually check `response.ok`?
20. What is the difference between `localStorage` and `sessionStorage`?
21. Why is `JSON.stringify()` used before storing an object in Web Storage?
22. What is CORS, and why can't client-side code simply bypass it?
23. What problem does `AbortController` solve?
24. When would IndexedDB be a better choice than `localStorage`?
25. What is the difference between WebSocket and Server-Sent Events?
26. What can a Web Worker do that helps keep a page responsive, and what can't it do directly?
27. Why must object URLs sometimes be revoked?
28. Name three reasons a browser API call might fail even when the code looks correct.
29. Why should permission-based features explain their purpose and handle denial?
30. Which API would you use for (a) building query strings, (b) strong random values, and (c) measuring elapsed time?

---

## 42. References

Use these when you need exact syntax, browser support information, or more examples.

- [MDN: Numbers and strings](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Numbers_and_strings)
- [MDN: `Number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
- [MDN: `Math`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)
- [MDN: `BigInt`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt)
- [MDN: `Intl.NumberFormat`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat)
- [MDN: `Date`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
- [MDN: `Intl.DateTimeFormat`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat)
- [MDN: Temporal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal)
- [MDN: Web APIs reference](https://developer.mozilla.org/en-US/docs/Web/API)
- [MDN: Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- [MDN: URL](https://developer.mozilla.org/en-US/docs/Web/API/URL)
- [MDN: Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API)
- [MDN: IndexedDB API](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API)
- [MDN: Clipboard API](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API)
- [MDN: Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API)
- [MDN: Web Workers API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API)
- [MDN: Web Crypto API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API)
- [MDN: Performance API](https://developer.mozilla.org/en-US/docs/Web/API/Performance_API)
- [MDN: Service Worker API](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API)
- [Can I Use](https://caniuse.com/) — check browser compatibility before using newer APIs.

---

**Study tip:** Learn one section, run its examples, then write a tiny experiment of your own. For the browser APIs, start with Fetch, URL/URLSearchParams, Web Storage, timers, AbortController, and `Intl`; learn permission-based and offline APIs when you have a project that needs them.
