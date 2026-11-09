# Type Narrowing in TypeScript: Teaching the Compiler to Trust You

Picture this: you have a variable typed as `string | number`, and TypeScript refuses to let you call `.toUpperCase()` on it. Frustrating, right? That's where **type narrowing** comes in — it's the process of using runtime checks so TypeScript can refine a broad type into a specific one within a block of code.

## Narrowing with `typeof`

The `typeof` guard is your best friend for primitives. TypeScript understands these checks and narrows accordingly:

```ts
function format(value: string | number) {
  if (typeof value === "string") {
    return value.toUpperCase(); // value is string here
  }
  return value.toFixed(2); // value is number here
}
```

## Narrowing with `instanceof`

When you're dealing with class instances, `instanceof` steps in. It checks the prototype chain at runtime, and TypeScript uses that to narrow:

```ts
class Dog { bark() { console.log("Woof!"); } }
class Cat { meow() { console.log("Meow!"); } }

function speak(pet: Dog | Cat) {
  if (pet instanceof Dog) {
    pet.bark(); // narrowed to Dog
  } else {
    pet.meow(); // narrowed to Cat
  }
}
```

## Narrowing with `in`

The `in` operator checks whether a property exists on an object — perfect for distinguishing between object types in a union:

```ts
type Fish = { swim: () => void };
type Bird = { fly: () => void };

function move(animal: Fish | Bird) {
  if ("swim" in animal) {
    animal.swim(); // narrowed to Fish
  } else {
    animal.fly(); // narrowed to Bird
  }
}
```

## Conclusion

Type narrowing isn't just a compiler trick — it's how you write code that's both safe and expressive. Master `typeof`, `instanceof`, and `in`, and those annoying union-type errors turn into helpful guardrails that guide you toward correct code.
