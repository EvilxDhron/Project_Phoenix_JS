# JavaScript String Methods

## 0. First: What is a String?

### Q. What is a string in JavaScript?

A **string** is a sequence of text characters.

```js
const name = "Dhron";
const message = "Hello, JavaScript!";
```

Strings can be created with:

```js
const a = "Hello";
const b = 'Hello';
const c = `Hello`;
```

### Q. Are JavaScript strings mutable?

**No. Strings are immutable.**

That means methods such as `toUpperCase()`, `slice()`, and `replace()` do **not** change the original string. They return a new string.

```js
const name = "dhron";

const upperName = name.toUpperCase();

console.log(name);      // "dhron"
console.log(upperName); // "DHRON"
```

### Q. What is an index?

JavaScript strings are **zero-indexed**.

```text
"HELLO"
 01234
```

```js
const word = "HELLO";

console.log(word[0]); // "H"
console.log(word[4]); // "O"
```

---

# 1. `length`

## Q. What does `length` do?

`length` returns the number of **UTF-16 code units** in a string.

```js
const name = "Dhron";

console.log(name.length); // 5
```

## Q. Why do we use `length`?

Use it when you need to know:

- How long a string is
- Whether input is empty
- Whether a password meets a minimum length
- Where the last index is
- How many iterations a loop should perform

## Q. Where would I use it?

### Example: Validate username length

```js
const username = "dhron";

if (username.length >= 3) {
  console.log("Valid username");
}
```

### Example: Check empty input

```js
const email = "";

if (email.length === 0) {
  console.log("Email is required");
}
```

A more common modern check is:

```js
if (email.trim() === "") {
  console.log("Email is required");
}
```

This also catches inputs containing only spaces.

## Q. What is the important index rule with `length`?

The last valid index is:

```js
string.length - 1
```

Example:

```js
const word = "JavaScript";

console.log(word[word.length - 1]); // "t"
```

## Best practice

Use `length` for validation and boundaries, but remember:

```js
"😊".length // 2
```

So `length` is not always equal to the number of visual characters.

---

# 2. `charAt()`

## Q. What does `charAt()` do?

`charAt(index)` returns the character at a specified index.

```js
const language = "JavaScript";

console.log(language.charAt(0)); // "J"
console.log(language.charAt(4)); // "S"
```

## Q. Why use `charAt()` when bracket notation exists?

You can also write:

```js
language[0]
```

Modern JavaScript generally prefers bracket notation for simple indexing because it is shorter.

Still, `charAt()` is useful when you specifically want its defined behavior for an invalid index.

```js
console.log(language.charAt(100)); // ""
console.log(language[100]);        // undefined
```

## Q. Where is it useful?

When reading a character by index in older codebases or when you specifically want an empty string for an out-of-range index.

## Common mistake

```js
language.charAt(-1)
```

does **not** mean "last character".

```js
console.log(language.charAt(-1)); // ""
```

Use:

```js
language.at(-1);
```

or:

```js
language[language.length - 1];
```

---

# 3. `charCodeAt()`

## Q. What does `charCodeAt()` do?

It returns the **UTF-16 code unit value** at a given index.

```js
console.log("A".charCodeAt(0)); // 65
console.log("a".charCodeAt(0)); // 97
```

## Q. Why would I use it?

It is useful for:

- Working with character codes
- ASCII-style exercises
- Basic encoding/decoding exercises
- Comparing characters by their code values
- Some algorithmic / interview problems

## Example

```js
const letter = "B";

console.log(letter.charCodeAt(0)); // 66
```

### Character range example

```js
const code = "D".charCodeAt(0);

if (code >= 65 && code <= 90) {
  console.log("Uppercase English letter");
}
```

## Important distinction

`charCodeAt()` works with **UTF-16 code units**, not complete Unicode code points.

For many normal English letters this is straightforward. For some Unicode characters such as emoji, one visible character can consist of multiple UTF-16 code units.

For code-point-aware work, `codePointAt()` is often more appropriate.

## Common mistake

Do not assume:

```js
"😊".charCodeAt(0)
```

is the complete Unicode value of the emoji.

---

# 4. `at()`

## Q. What does `at()` do?

`at(index)` returns the character at an index and supports **negative indexes**.

```js
const word = "Hello";

console.log(word.at(0));  // "H"
console.log(word.at(4));  // "o"
console.log(word.at(-1)); // "o"
console.log(word.at(-2)); // "l"
```

## Q. Why is `at()` useful?

The biggest benefit is easy access from the end.

Without `at()`:

```js
word[word.length - 1];
```

With `at()`:

```js
word.at(-1);
```

## Where should I use it?

Use it when:

- You need the first or last character
- You need to read positions relative to the end
- You want readable negative indexing

### Example

```js
const fileName = "report.pdf";

if (fileName.at(-1) === "f") {
  console.log("Ends with f");
}
```

A more realistic extension check would use:

```js
fileName.endsWith(".pdf")
```

So `at()` is best for **index-based character access**, not when a dedicated string method expresses your intention more clearly.

## Best practice

Prefer:

```js
word.at(-1)
```

over:

```js
word[word.length - 1]
```

when negative-index access makes the code clearer.

---

# 5. `slice()`

## Q. What does `slice()` do?

`slice(start, end)` extracts part of a string and returns a new string.

```js
const text = "Hello World";

console.log(text.slice(0, 5)); // "Hello"
```

The `end` index is **not included**.

```text
H e l l o   W o r l d
0 1 2 3 4 5 6 7 8 9 10
|---------|
0         5 (not included)
```

## Q. Why is `slice()` important?

`slice()` is one of the most useful string methods because it lets you:

- Extract part of a string
- Remove prefixes/suffixes
- Get first/last characters
- Create shortened previews
- Work with negative indexes

## Negative indexes

```js
const word = "JavaScript";

console.log(word.slice(-6)); // "Script"
console.log(word.slice(0, -6)); // "Java"
```

## Example: Get file extension

```js
const fileName = "resume.pdf";

const extension = fileName.slice(fileName.lastIndexOf(".") + 1);

console.log(extension); // "pdf"
```

## Q. Does `slice()` mutate the original string?

No.

```js
const text = "Hello";

const result = text.slice(0, 2);

console.log(text);   // "Hello"
console.log(result); // "He"
```

## Best practice

For modern JavaScript, prefer `slice()` over the older `substring()` / `substr()` when you need flexible extraction, especially when negative indexes are useful.

---

# 6. `substring()`

## Q. What does `substring()` do?

`substring(start, end)` extracts characters between two indexes.

```js
const text = "Hello World";

console.log(text.substring(0, 5)); // "Hello"
```

Like `slice()`, the `end` index is excluded.

## Q. How is `substring()` different from `slice()`?

This is an important interview question.

### `slice()`

- Supports negative indexes
- Negative values count from the end

```js
"Hello".slice(-2); // "lo"
```

### `substring()`

- Does not support negative indexing in the same way
- Negative values are treated as `0`

```js
"Hello".substring(-2); // "Hello"
```

## Another important difference

`substring()` swaps arguments when `start > end`.

```js
"Hello".substring(4, 1); // "ell"
```

Conceptually it behaves like:

```js
"Hello".substring(1, 4);
```

`slice()` does not do that:

```js
"Hello".slice(4, 1); // ""
```

## Best practice

Know `substring()` because you will see it in existing code and interviews, but for new code, `slice()` is often the clearer default.

---

# 7. `substr()` — Legacy / Deprecated

## Q. What does `substr()` do?

Historically, `substr(start, length)` extracts a portion of a string using:

- Starting index
- Number of characters

```js
const text = "Hello World";

console.log(text.substr(0, 5)); // "Hello"
```

## Q. Is `substr()` recommended for new code?

**No.**

`substr()` is a legacy method and is considered deprecated.

Use alternatives such as:

```js
text.slice(start, end);
```

or:

```js
text.substring(start, end);
```

## Important difference

```js
"Hello World".substr(6, 5); // "World"
```

Here `5` means **length**, not end index.

Compare:

```js
"Hello World".slice(6, 11); // "World"
```

## Interview question

### `slice()` vs `substring()` vs `substr()`

| Method | Second argument means | Negative indexes |
|---|---|---|
| `slice()` | End index | Yes |
| `substring()` | End index | No |
| `substr()` | Length | Legacy/deprecated |

### Best practice

For new code:

> Prefer `slice()` unless you have a specific reason to use another method.

---

# 8. `toLowerCase()`

## Q. What does `toLowerCase()` do?

Converts a string to lowercase.

```js
const message = "HELLO WORLD";

console.log(message.toLowerCase());
// "hello world"
```

## Why use it?

It is very useful for:

- Case-insensitive comparisons
- Normalizing user input
- Search/filter logic
- Email/username comparisons in appropriate contexts
- Converting text for display

## Example: Case-insensitive search

```js
const input = "JaVaScRiPt";

if (input.toLowerCase() === "javascript") {
  console.log("Match");
}
```

## Example: Search

```js
const query = "script";
const text = "JavaScript is powerful.";

if (text.toLowerCase().includes(query.toLowerCase())) {
  console.log("Found");
}
```

## Important caution

Do not blindly use lowercase conversion as a universal solution for every language. Locale-sensitive text can require:

```js
toLocaleLowerCase()
```

## Best practice

Normalize both sides of a comparison:

```js
a.toLowerCase() === b.toLowerCase()
```

Do not normalize only one side unless that is intentional.

---

# 9. `toUpperCase()`

## Q. What does `toUpperCase()` do?

Converts a string to uppercase.

```js
const text = "hello";

console.log(text.toUpperCase()); // "HELLO"
```

## Why use it?

Useful for:

- Headings
- Labels
- Display formatting
- Case-insensitive comparisons
- Normalizing certain types of input

## Example

```js
const countryCode = "in";

console.log(countryCode.toUpperCase()); // "IN"
```

## Example: Case-insensitive comparison

```js
const answer = "yes";

if (answer.toUpperCase() === "YES") {
  console.log("Accepted");
}
```

## Best practice

Use it when the **intent** is uppercase formatting or normalization.

Do not repeatedly convert strings when you could normalize once:

```js
const normalizedAnswer = answer.trim().toLowerCase();
```

Then use that value.

---

# 10. `trim()`

## Q. What does `trim()` do?

Removes whitespace from **both ends** of a string.

```js
const text = "   hello   ";

console.log(text.trim()); // "hello"
```

It does not remove spaces in the middle:

```js
"hello world".trim(); // "hello world"
```

## Why use it?

Especially useful for:

- Form inputs
- Usernames
- Search boxes
- Empty-input validation
- Cleaning text before comparison

## Example: Form validation

```js
const name = userInput.trim();

if (name === "") {
  console.log("Name is required");
}
```

## Why is `trim()` better than only checking `length`?

Because this:

```js
"   ".length
```

is greater than zero.

But:

```js
"   ".trim()
```

becomes:

```js
""
```

## Related methods

```js
trimStart(); // Removes whitespace from start
trimEnd();   // Removes whitespace from end
```

## Best practice

For user-entered text:

```js
const cleanInput = input.trim();
```

Perform validation after trimming when surrounding whitespace should not matter.

---

# 11. `trimStart()` / `trimEnd()`

## Q. What do they do?

`trimStart()` removes whitespace from the beginning.

```js
const text = "   hello   ";

console.log(text.trimStart());
// "hello   "
```

`trimEnd()` removes whitespace from the end.

```js
console.log(text.trimEnd());
// "   hello"
```

## Where should I use them?

When only one side should be cleaned.

This can matter when formatting structured text where spacing on one side is meaningful.

## Example

```js
const username = "   dhron   ";

const cleanUsername = username.trimStart();

console.log(cleanUsername); // "dhron   "
```

## Best practice

Use:

```js
trim()
```

when both sides should be cleaned.

Use:

```js
trimStart()
trimEnd()
```

when the direction matters.

---

# 12. `includes()`

## Q. What does `includes()` do?

Checks whether a string contains a specific value.

It returns a boolean:

```js
true
```

or:

```js
false
```

Example:

```js
const text = "JavaScript";

console.log(text.includes("Script")); // true
console.log(text.includes("Python")); // false
```

## Why use it?

Use it when the only question you care about is:

> "Does this text contain this value?"

## Example: Search

```js
const message = "Your order has been shipped.";

if (message.includes("shipped")) {
  console.log("Show delivery status");
}
```

## Is it case-sensitive?

Yes.

```js
"JavaScript".includes("javascript"); // false
```

For case-insensitive checks:

```js
"JavaScript".toLowerCase().includes("javascript");
```

## `includes()` vs `indexOf()`

If you only need true/false:

```js
text.includes("JS");
```

is usually clearer than:

```js
text.indexOf("JS") !== -1;
```

Use `indexOf()` when you actually need the position.

## Best practice

Choose the method that matches the question:

- Need **contains?** → `includes()`
- Need **position?** → `indexOf()`

---

# 13. `startsWith()`

## Q. What does `startsWith()` do?

Checks whether a string begins with a specific value.

```js
const fileName = "profile.jpg";

console.log(fileName.startsWith("profile")); // true
```

## Why use it?

Useful for:

- Prefix checks
- URL checks
- File naming conventions
- Command parsing
- IDs and codes

## Example

```js
const command = "/help";

if (command.startsWith("/")) {
  console.log("This looks like a command");
}
```

## Can I specify where to start checking?

Yes.

```js
const text = "JavaScript";

console.log(text.startsWith("Script", 4)); // true
```

The search starts from index `4`.

## Best practice

Use `startsWith()` instead of manually extracting the first characters when your real intention is simply "does it start with this?"

---

# 14. `endsWith()`

## Q. What does `endsWith()` do?

Checks whether a string ends with a value.

```js
const fileName = "resume.pdf";

console.log(fileName.endsWith(".pdf")); // true
```

## Where should I use it?

Very common for:

- File extensions
- URL suffixes
- Sentence punctuation checks
- IDs/codes
- Validation rules

## Example

```js
const file = "photo.png";

if (file.endsWith(".png") || file.endsWith(".jpg")) {
  console.log("Image file");
}
```

## Optional second argument

You can specify the length of the portion to inspect:

```js
const text = "Hello World";

console.log(text.endsWith("Hello", 5)); // true
```

## Best practice

Prefer:

```js
fileName.endsWith(".pdf")
```

over:

```js
fileName.slice(-4) === ".pdf"
```

because `endsWith()` directly communicates your intention.

---

# 15. `indexOf()`

## Q. What does `indexOf()` do?

Returns the index of the **first occurrence** of a value.

```js
const text = "banana";

console.log(text.indexOf("na")); // 2
```

If the value is not found:

```js
console.log(text.indexOf("xyz")); // -1
```

## Why is `-1` important?

It allows you to check whether something was found.

```js
if (text.indexOf("na") !== -1) {
  console.log("Found");
}
```

But if you only need true/false, `includes()` is usually clearer.

## Example: Find a delimiter

```js
const email = "dhron@example.com";

const atIndex = email.indexOf("@");

console.log(atIndex); // position of "@"
```

## Second parameter

You can choose where the search starts:

```js
"banana".indexOf("na", 3);
```

## Best practice

Remember:

```js
indexOf() === -1
```

means "not found".

Also:

```js
indexOf() === 0
```

is a valid result and means "found at the beginning".

Do not write:

```js
if (text.indexOf("a")) {
  // Wrong for a match at index 0!
}
```

Because `0` is falsy.

---

# 16. `lastIndexOf()`

## Q. What does `lastIndexOf()` do?

Returns the index of the **last occurrence** of a value.

```js
const text = "banana";

console.log(text.lastIndexOf("na")); // 4
```

## Why use it?

Useful when you care about the final occurrence.

Common examples:

- Finding the last `/` in a path
- Finding the final `.` before a file extension
- Finding the last repeated delimiter

## Example: Get file extension

```js
const fileName = "my.project.final.pdf";

const dotIndex = fileName.lastIndexOf(".");

const extension = fileName.slice(dotIndex + 1);

console.log(extension); // "pdf"
```

## `indexOf()` vs `lastIndexOf()`

```text
indexOf()      → first occurrence
lastIndexOf()  → last occurrence
```

## Best practice

Use `lastIndexOf()` when searching from the end instead of writing unnecessary reverse logic.

---

# 17. `replace()`

## Q. What does `replace()` do?

Replaces a matching part of a string and returns a new string.

```js
const text = "Hello";

const result = text.replace("Hello", "Hi");

console.log(result); // "Hi"
```

## Important behavior

With a normal string search, `replace()` replaces the **first matching occurrence**.

```js
const text = "foo foo foo";

console.log(text.replace("foo", "bar"));
// "bar foo foo"
```

## Why use it?

Useful for:

- Cleaning text
- Replacing labels
- Formatting data
- Masking values
- Text transformations

## Example

```js
const message = "Hello Dhron";

const updated = message.replace("Dhron", "Developer");

console.log(updated);
// "Hello Developer"
```

## Can `replace()` use regular expressions?

Yes.

```js
const text = "foo foo foo";

console.log(text.replace(/foo/g, "bar"));
// "bar bar bar"
```

But for a simple "replace every exact string" task, `replaceAll()` may be easier to read.

## Does it mutate the original?

No.

```js
const text = "Hello";

const result = text.replace("Hello", "Hi");

console.log(text);   // "Hello"
console.log(result); // "Hi"
```

---

# 18. `replaceAll()`

## Q. What does `replaceAll()` do?

Replaces **all occurrences** of a matching value.

```js
const text = "foo foo foo";

console.log(text.replaceAll("foo", "bar"));
// "bar bar bar"
```

## Why use it?

Use it when you intentionally want every occurrence changed.

## Example: Remove all spaces

```js
const text = "Java Script Is Fun";

const result = text.replaceAll(" ", "");

console.log(result);
// "JavaScriptIsFun"
```

## Important difference

```js
replace()
```

normally replaces the first matching string.

```js
replaceAll()
```

replaces all matching strings.

## Regular expression note

When using a regular expression with `replaceAll()`, the regex must be global.

```js
text.replaceAll(/foo/g, "bar");
```

Without `g`, using a regex with `replaceAll()` throws an error.

## Best practice

Use the clearest expression of intent:

```js
replace("x", "y")
```

for one replacement.

```js
replaceAll("x", "y")
```

for all exact string occurrences.

---

# 19. `split()`

## Q. What does `split()` do?

Splits a string into an **array** using a separator.

```js
const text = "a,b,c";

const parts = text.split(",");

console.log(parts);
// ["a", "b", "c"]
```

This is a key conversion:

```text
String → Array
```

## Why use it?

Very useful for:

- Processing CSV-like text
- Splitting sentences
- Reading words
- Turning text into characters
- Parsing simple delimiters

## Example: Get words

```js
const sentence = "I love JavaScript";

const words = sentence.split(" ");

console.log(words);
// ["I", "love", "JavaScript"]
```

## Example: Split into characters

```js
const word = "Hello";

console.log(word.split(""));
// ["H", "e", "l", "l", "o"]
```

## Important: `split("")` and Unicode

For many ordinary English strings, `split("")` appears to work as expected.

But for certain Unicode characters such as emoji, it can split UTF-16 code units rather than complete user-perceived characters.

For Unicode-aware iteration, consider:

```js
[..."😊"]
```

or:

```js
Array.from("😊")
```

## Example: Remove spaces and process words

```js
const sentence = "JavaScript makes web development fun";

const words = sentence
  .trim()
  .split(/\s+/);

console.log(words);
```

Using `/\s+/` is more robust than splitting only on `" "` because it handles multiple whitespace characters.

---

# 20. `join()`

## Q. What does `join()` do?

`join()` is an **Array method** that combines array elements into a string.

```js
const words = ["JavaScript", "is", "fun"];

console.log(words.join(" "));
// "JavaScript is fun"
```

Key conversion:

```text
Array → String
```

## Why is `join()` important with strings?

It is commonly used together with `split()`.

```js
const sentence = "hello world";

const result = sentence
  .split(" ")
  .join("-");

console.log(result);
// "hello-world"
```

## Example: Convert words to CSV-like text

```js
const subjects = ["HTML", "CSS", "JavaScript"];

console.log(subjects.join(", "));
// "HTML, CSS, JavaScript"
```

## What happens without a separator?

```js
["a", "b", "c"].join();
// "a,b,c"
```

The default separator is a comma.

## Best practice

Choose the separator explicitly when readability matters:

```js
words.join(" ")
```

is clearer than:

```js
words.join()
```

if you actually want spaces.

---

# 21. `concat()`

## Q. What does `concat()` do?

Combines strings and returns a new string.

```js
const first = "Hello";
const second = "World";

console.log(first.concat(" ", second));
// "Hello World"
```

## Why use it?

It is useful for explicit string concatenation.

## But is it the preferred way today?

Usually **no**.

For modern JavaScript, template literals are often clearer:

```js
const first = "Hello";
const second = "World";

const message = `${first} ${second}`;
```

## `concat()` with multiple values

```js
"Hello".concat(" ", "JavaScript", "!");
// "Hello JavaScript!"
```

## Best practice

For normal readable code, prefer:

```js
`${firstName} ${lastName}`
```

over:

```js
firstName.concat(" ", lastName)
```

Know `concat()` because you may encounter it in code and interviews.

---

# 22. `toString()`

## Q. What does `toString()` do?

`toString()` returns a string representation of a value/object.

```js
const number = 123;

console.log(number.toString());
// "123"
```

## Why use it?

Use it when you explicitly need a string representation.

### Example

```js
const score = 95;

const textScore = score.toString();

console.log(typeof textScore); // "string"
```

## Important: Object examples

```js
const user = {
  name: "Dhron"
};

console.log(user.toString());
// "[object Object]"
```

That is usually **not** the meaningful text representation you want.

For objects, JSON serialization may be more appropriate:

```js
JSON.stringify(user);
// '{"name":"Dhron"}'
```

## Important `null` / `undefined` caveat

You cannot do:

```js
null.toString();
```

or:

```js
undefined.toString();
```

Those values do not have the method.

For safe general conversion, you might use:

```js
String(value);
```

Example:

```js
String(null);      // "null"
String(undefined); // "undefined"
String(123);       // "123"
```

## Best practice

Use `toString()` when the value is known to support it.

Use `String(value)` when you want explicit general string conversion.

---

# 23. `match()`

## Q. What does `match()` do?

Searches a string using a **regular expression** and returns information about the match.

```js
const text = "I have 123 apples";

console.log(text.match(/\d+/));
// ["123", index: 7, input: "...", groups: undefined]
```

The exact returned result depends on the regular expression flags.

## Why use it?

Use `match()` when you need to **extract matching text**, not merely check whether text exists.

## Example: Extract numbers

```js
const text = "Price: ₹499";

const result = text.match(/\d+/);

console.log(result?.[0]); // "499"
```

## Global matching

```js
const text = "10 apples, 20 bananas, 30 oranges";

const numbers = text.match(/\d+/g);

console.log(numbers);
// ["10", "20", "30"]
```

With the `g` flag, the result focuses on all matches rather than returning a single detailed match object.

## Important difference

```js
includes()
```

asks:

> Does this exact text occur?

```js
match()
```

asks:

> What text matches this pattern?

## Best practice

Use optional chaining when a match may not exist:

```js
const match = text.match(/\d+/);

const firstNumber = match?.[0];
```

Without a match, `match()` can return `null`.

---

# 24. `search()`

## Q. What does `search()` do?

Searches for a match using a regular expression and returns the index of the first match.

```js
const text = "Hello 123";

console.log(text.search(/\d/));
// 6
```

If there is no match:

```js
text.search(/\d/); // -1
```

## Why use it?

Use `search()` when you care about:

> "Where does this regex pattern first match?"

## Example

```js
const message = "Order ID: 4821";

const index = message.search(/\d/);

console.log(index);
```

## `search()` vs `match()`

| Question | Method |
|---|---|
| Does the regex match, and where is the first match? | `search()` |
| What text matched? | `match()` |

## Important note

`search()` does not return all match positions.

If you need all matches, use other regex techniques such as `matchAll()` or a global `match()` depending on the task.

## `search()` vs `indexOf()`

Use:

```js
indexOf("123")
```

when searching for a literal string.

Use:

```js
search(/\d+/)
```

when searching using a pattern.

---

# 25. `padStart()` / `padEnd()`

## Q. What do they do?

They add padding characters until a string reaches a desired length.

### `padStart()`

```js
const value = "5";

console.log(value.padStart(2, "0"));
// "05"
```

### `padEnd()`

```js
const value = "5";

console.log(value.padEnd(3, "0"));
// "500"
```

## Why use them?

Common use cases:

- Displaying numbers with leading zeros
- Formatting IDs
- Creating aligned text
- Building simple fixed-width output

## Example: Clock-style formatting

```js
const hour = "7";
const minute = "5";

const time = `${hour.padStart(2, "0")}:${minute.padStart(2, "0")}`;

console.log(time);
// "07:05"
```

## Important detail

The first argument is the **target length**, not the number of padding characters.

```js
"5".padStart(4, "0");
// "0005"
```

## Best practice

Do not use padding as a substitute for numeric formatting when working with actual numbers. It is primarily a **string formatting** tool.

---

# 26. `repeat()`

## Q. What does `repeat()` do?

Repeats a string a specified number of times.

```js
console.log("ha".repeat(3));
// "hahaha"
```

## Why use it?

Useful for:

- Simple visual separators
- Repeated characters
- Generating placeholder text
- Formatting console output

## Example

```js
console.log("-".repeat(30));
```

This can produce a separator line.

## Example: Indentation

```js
const indent = " ".repeat(4);

console.log(indent + "Hello");
```

## Important

The count must be a non-negative finite value.

```js
"ha".repeat(0); // ""
```

## Best practice

Use it for formatting and controlled repetition.

Avoid creating unnecessarily huge strings.

---

# 27. `localeCompare()`

## Q. What does `localeCompare()` do?

Compares two strings according to language/locale-sensitive sorting rules.

```js
console.log("apple".localeCompare("banana"));
// negative value
```

A typical interpretation is:

- Negative → first string sorts before second
- `0` → equivalent for comparison
- Positive → first string sorts after second

**Do not rely on the exact numeric value** such as `-1` or `1`; rely on whether the result is negative, zero, or positive.

## Why use it?

Especially useful for sorting text.

```js
const names = ["Zara", "Aman", "Ravi", "Dhron"];

names.sort((a, b) => a.localeCompare(b));

console.log(names);
```

## Why not simply use `<` and `>`?

For human-language sorting, locale-aware comparison can produce more appropriate ordering.

## Options

You can provide locale/options:

```js
"ä".localeCompare("z", "de");
```

For more advanced applications, use `Intl.Collator`, especially when performing many comparisons.

## Best practice

When sorting user-facing text, consider:

```js
a.localeCompare(b)
```

rather than relying on simple code-unit comparison.

---

# 28. `normalize()`

## Q. What does `normalize()` do?

It converts a string into a specified **Unicode normalization form**.

```js
const normalized = text.normalize();
```

The default form is `"NFC"`.

## Why do we need it?

Some visually identical text can be represented by different sequences of Unicode code points.

For example, `é` can be represented:

- As one precomposed character
- As `e` + a combining accent

They may look the same but have different underlying representations.

## Example

```js
const a = "\u00E9";
const b = "e\u0301";

console.log(a === b); // false

console.log(a.normalize() === b.normalize()); // true
```

## Why is this useful?

Use normalization when working with:

- International text
- Unicode-heavy applications
- Search/comparison logic
- User-generated multilingual text
- Data that may come from different sources

## Normalization forms

Common forms include:

```js
"NFC"
"NFD"
"NFKC"
"NFKD"
```

For most ordinary application comparisons, NFC is a common choice, but the correct form depends on your requirements.

## Best practice

Do not call `normalize()` randomly everywhere.

Use it intentionally when Unicode equivalence matters.

---

# 29. `isWellFormed()`

## Q. What does `isWellFormed()` do?

Checks whether a string contains valid Unicode scalar values, specifically detecting **unpaired UTF-16 surrogates**.

```js
const text = "hello";

console.log(text.isWellFormed());
// true
```

## Why is this useful?

Most ordinary strings are well-formed. This method becomes useful when working with:

- Low-level Unicode manipulation
- User-generated text
- Data transformations involving UTF-16
- APIs or systems where malformed Unicode needs to be handled safely

## Example

```js
const text = "hello";

if (text.isWellFormed()) {
  console.log("String is well-formed");
}
```

## Related method: `toWellFormed()`

If you need to replace lone surrogates with the Unicode replacement character, JavaScript also provides:

```js
text.toWellFormed();
```

## Important beginner note

You do **not** need to call `isWellFormed()` on every normal string.

It is a specialized Unicode-safety tool.

---

# 30. `toLocaleLowerCase()` / `toLocaleUpperCase()`

## Q. What do locale-aware case conversion methods do?

They perform case conversion according to locale-sensitive rules.

```js
const text = "I";

console.log(text.toLocaleLowerCase("tr"));
```

Certain languages, such as Turkish, have case-mapping behavior that differs from simple English assumptions.

## Why use them?

Use them when:

- Building multilingual applications
- Correct casing matters for a specific language/locale
- You know which locale should control the transformation

## Example

```js
const city = "ISTANBUL";

console.log(city.toLocaleLowerCase("tr"));
```

## `toLowerCase()` vs `toLocaleLowerCase()`

For ordinary English-focused application logic:

```js
toLowerCase()
```

is often enough.

For locale-sensitive behavior:

```js
toLocaleLowerCase(locale)
```

can be appropriate.

The same concept applies to:

```js
toUpperCase()
toLocaleUpperCase()
```

## Best practice

Do not use locale-sensitive methods simply because they sound "more correct."

Use them when the application actually needs locale-specific casing.

---

# 🔥 The Most Important Comparisons to Memorize

## Q. `slice()` vs `substring()` vs `substr()`?

```text
slice(start, end)
    → supports negative indexes
    → end is excluded

substring(start, end)
    → negative values become 0
    → swaps start/end when start > end

substr(start, length)
    → second argument is LENGTH
    → legacy/deprecated
```

### Example

```js
const text = "JavaScript";

text.slice(0, 4);       // "Java"
text.substring(0, 4);   // "Java"
text.substr(0, 4);      // "Java"
```

But:

```js
text.slice(-6);         // "Script"
text.substring(-6);     // "JavaScript"
text.substr(-6, 6);     // "Script"
```

---

# Q. `includes()` vs `indexOf()`?

### `includes()`

Use when you only need:

```text
"Does it exist?"
```

```js
"JavaScript".includes("Script"); // true
```

### `indexOf()`

Use when you need:

```text
"Where is it?"
```

```js
"JavaScript".indexOf("Script"); // 4
```

---

# Q. `indexOf()` vs `lastIndexOf()`?

```text
indexOf()      → first occurrence
lastIndexOf()  → last occurrence
```

```js
"banana".indexOf("na");      // 2
"banana".lastIndexOf("na");  // 4
```

---

# Q. `replace()` vs `replaceAll()`?

```text
replace()
    → normally replaces first matching string

replaceAll()
    → replaces all matching strings
```

```js
"foo foo".replace("foo", "bar");
// "bar foo"

"foo foo".replaceAll("foo", "bar");
// "bar bar"
```

---

# Q. `match()` vs `search()`?

```text
match()
    → returns information about matching text

search()
    → returns index of first regex match
```

```js
"abc123".match(/\d+/);  // information about "123"
"abc123".search(/\d+/); // 3
```

---

# Q. `split()` vs `join()`?

They often work as opposites:

```text
split()
    String → Array

join()
    Array → String
```

Example:

```js
const result = "a-b-c"
  .split("-")
  .join(" ");

console.log(result);
// "a b c"
```

---

# Q. `toLowerCase()` vs `toLocaleLowerCase()`?

```text
toLowerCase()
    → standard case conversion

toLocaleLowerCase(locale)
    → locale-sensitive case conversion
```

Use locale-aware versions when multilingual behavior matters.

---

# Q. `at()` vs `charAt()`?

Both access a character by index, but:

```js
"Hello".charAt(-1); // ""
"Hello".at(-1);     // "o"
```

So:

> `at()` is especially useful for negative indexing.

---

# Q. `length` vs number of visible characters?

Do not assume they are always identical.

```js
"Hello".length; // 5
"😊".length;    // 2
```

JavaScript string indexing/length is based on UTF-16 code units.

---

# 🧠 Practical Decision Guide

## "I want to know if text contains another string."

Use:

```js
includes()
```

---

## "I want the position of the first occurrence."

Use:

```js
indexOf()
```

---

## "I want the position of the last occurrence."

Use:

```js
lastIndexOf()
```

---

## "I want to check the beginning."

Use:

```js
startsWith()
```

---

## "I want to check the end."

Use:

```js
endsWith()
```

---

## "I want part of a string."

Usually:

```js
slice()
```

---

## "I want to change case."

Use:

```js
toLowerCase()
toUpperCase()
```

or locale-aware variants when required.

---

## "I want to remove extra outer whitespace."

Use:

```js
trim()
```

---

## "I want to replace one occurrence."

Use:

```js
replace()
```

---

## "I want to replace every exact occurrence."

Use:

```js
replaceAll()
```

---

## "I want to turn a string into an array."

Use:

```js
split()
```

---

## "I want to turn an array into a string."

Use:

```js
join()
```

---

## "I want a regex match."

Use:

```js
match()
```

---

## "I want the index of a regex match."

Use:

```js
search()
```

---

## "I want leading zeros."

Use:

```js
padStart()
```

---

## "I want to repeat text."

Use:

```js
repeat()
```

---

## "I want to sort human-readable text."

Use:

```js
localeCompare()
```

---

# ⚠️ Common Beginner Mistakes

## 1. Expecting string methods to mutate the string

Wrong assumption:

```js
let name = "dhron";

name.toUpperCase();

console.log(name); // still "dhron"
```

Correct:

```js
name = name.toUpperCase();
```

or:

```js
const upperName = name.toUpperCase();
```

---

## 2. Forgetting that `end` is excluded

```js
"Hello".slice(0, 2);
// "He"
```

Not `"Hel"`.

---

## 3. Checking `indexOf()` incorrectly

Avoid:

```js
if (text.indexOf("a")) {
  // unreliable
}
```

Because index `0` is falsy.

Use:

```js
if (text.indexOf("a") !== -1) {
  // found
}
```

Or simply:

```js
if (text.includes("a")) {
  // found
}
```

---

## 4. Confusing `replace()` with `replaceAll()`

```js
"ha ha ha".replace("ha", "Ho");
// "Ho ha ha"
```

For all:

```js
"ha ha ha".replaceAll("ha", "Ho");
// "Ho Ho Ho"
```

---

## 5. Forgetting that many searches are case-sensitive

```js
"JavaScript".includes("javascript");
// false
```

Normalize when appropriate:

```js
"JavaScript".toLowerCase().includes("javascript");
```

---

## 6. Splitting only on a single space

This:

```js
sentence.split(" ");
```

can produce empty items when multiple spaces occur.

Often this is better:

```js
sentence.trim().split(/\s+/);
```

---

## 7. Using a string method when a clearer method exists

Instead of:

```js
fileName.slice(-4) === ".pdf"
```

prefer:

```js
fileName.endsWith(".pdf")
```

The second version communicates intent better.

---

## 8. Using deprecated `substr()` in new code

Prefer:

```js
slice()
```

unless you are maintaining existing legacy code.

---

# 🛠️ Real-World Mini Examples

## 1. Clean and normalize a user's name

```js
const rawName = "   dHrOn yAdAv   ";

const name = rawName
  .trim()
  .toLowerCase()
  .replace(/\b\w/g, char => char.toUpperCase());

console.log(name);
// "Dhron Yadav"
```

---

## 2. Check an email-like input

```js
const email = "  DHRON@EXAMPLE.COM  ";

const cleanEmail = email.trim().toLowerCase();

if (cleanEmail.includes("@")) {
  console.log("Contains @");
}
```

> This is only a simple demonstration, not full email validation.

---

## 3. Generate a URL slug

```js
const title = "  JavaScript String Methods  ";

const slug = title
  .trim()
  .toLowerCase()
  .replaceAll(" ", "-");

console.log(slug);
// "javascript-string-methods"
```

For more complex slug generation, you would also handle punctuation, repeated separators, Unicode, etc.

---

## 4. Get a file extension

```js
const fileName = "project.final.version.js";

const extension = fileName
  .slice(fileName.lastIndexOf(".") + 1)
  .toLowerCase();

console.log(extension);
// "js"
```

---

## 5. Mask part of a phone number

```js
const phone = "9876543210";

const masked = phone.slice(0, -4).replaceAll(/\d/g, "*") + phone.slice(-4);

console.log(masked);
// "******3210"
```

---

## 6. Count words

```js
const sentence = "JavaScript is powerful and fun.";

const words = sentence.trim().split(/\s+/);

console.log(words.length);
// 5
```

---

## 7. Turn an array into a sentence

```js
const subjects = ["HTML", "CSS", "JavaScript"];

const sentence = subjects.join(", ");

console.log(sentence);
// "HTML, CSS, JavaScript"
```

---

## 8. Format a score

```js
const score = 7;

const formatted = String(score).padStart(3, "0");

console.log(formatted);
// "007"
```

---