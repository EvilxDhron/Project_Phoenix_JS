# Hoisting and Temporal Dead Zone (TDZ)

## Q.1 What is **Hoisting** in JavaScript?

Makes some types of variables accessible/usable in the code before they are actually declared. Some peoples also say that "Variables lifted to the top of their scope".

Behind the scene 👇

**Before execution** in the creation phase inside **Execution Context**, code is scanned for variable declarations, and for each variable, a new property is created in the **Variable Environment object**.

## Q.2 What is **Temporal Dead Zone(TDZ)**?

- `let` and `const` are hoisted, but they remain uninitialized until their declaration is executed.
- So, we can say that the period between the start of the scope and the declaration is called the Temporal Dead Zone(TDZ). 
- During the TDZ, accessing the variable throws a RefferenceError.
- The TDZ helps catch bugs by preventing accidental use of variables before they're initialized.