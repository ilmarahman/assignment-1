# Type Aliases vs Interfaces in TypeScript: Which One Should You Pick?

If you've written TypeScript for more than a week, you've probably stared at your screen wondering: should this be a `type` or an `interface`? Honestly, they overlap so much that the confusion is fair. But they are not the same thing, and knowing where they differ will save you real headaches.

## The Core Differences

Both can describe the shape of an object, but interfaces have one superpower types don't: **declaration merging**. Define the same interface twice, and TypeScript quietly merges them into one. This is exactly why library authors love interfaces — consumers can extend them through module augmentation.

```ts
interface User {
  name: string;
}

interface User {
  age: number; // merges with the one above
}
```

Type aliases, on the other hand, are the flexible ones. They can represent **unions, tuples, primitives, and mapped types** — things interfaces simply can't do:

```ts
type Status = "loading" | "success" | "error";
type Point = [number, number];
```

There's also a subtle difference in `extends` behavior. Interfaces use clean, readable extension syntax, while types combine through intersections (`&`). And when an interface extends a complex union-based type, TypeScript will flat-out refuse, whereas a type alias handles it without complaining.

## So, Which One?

Here's my rule of thumb: use **interfaces** for object shapes you expect to grow or expose publicly, especially in libraries or class contracts — they also produce slightly friendlier error messages. Reach for **type aliases** the moment you need unions, intersections, tuples, or anything beyond a plain object shape.

## Conclusion

Neither is "better" — they're tools with different blades. Interfaces shine at describing extendable object contracts; type aliases shine at expressing flexible, composable types. Learn both, and stop treating the choice like a coin flip.
