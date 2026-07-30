# Modern JavaScript Operators

## 1. Spread Operator (...)

Expands (spreads) iterable elements or object properties. It creates a shallow copy only.

    Uses:
    • Copy array: const b=[...a]
    • Merge arrays: [...a,...b]
    • Copy object: {...obj}
    • Merge objects: {...a,...b} (later keys overwrite earlier)
    • Function call: fn(...arr)

## 2. Rest Parameter & Rest Pattern (...)

Rest collects multiple values into a variable. It should be the last element.

    Uses:
    • Rest parameter: function sum(...nums){}
    • Rest array destructuring: const [a,...rest]=arr
    • Rest object: const {id,...others}=user

## 3. Logical Operators (&& and ||)

&& returns first falsy value, otherwise last value.
|| returns first truthy value, otherwise last value.

    Short-circuiting:
    • false && fn() => fn not called
    • true || fn() => fn not called

## 4. Nullish Coalescing (??)

Returns right side only if left side is null or undefined.

## 5. Logical Assignment (&&= , ||= and ??=)

    • ||= assign if LHS is falsy\
    • &&= assign if LHS is truthy\
    • ??= assign if LHS is null/undefined

## 6. Spread Vs Rest

    • Spread expands values.\
    • Rest collects values.\
    • Same syntax (...), meaning depends on position.

