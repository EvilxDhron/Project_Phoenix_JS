# How the `this` keyword works?

- `this` keyword/variable - Special variable that is created for every execution context. Takes the value of(points to) the *owner* of the function in which the `this` keyword is used.

- `this` is NOT static, it depends on how the function is called, and its value is only assigned when the function is actually called.

- Inside a **Method** `this` -> Points to the Object that is called the method.
- Inside a **Simple function call** -> `this` = `undefined` -->(Only in strict mode)
- Inside an **Arrow Function** -> `this` = `this` of surrounding function(lexical `this`).
- Inside an **Event Listener** -> `this` = DOM Element that the handler is attached to.

### **Note**

    this does NOT point to the function itself, and also NOT to its variable environment.