// Implement a generic Pop<T> that takes an Array T and returns an Array without it's last element.

// For example

type arr10 = ["a", "b", "c", "d"];

type arr20 = [3, 2, 1];

type re1 = Pop<arr10>; // expected to be ['a', 'b', 'c']

type re2 = Pop<arr20>; // expected to be [3, 2]
type re3 = Shift<arr10>; // expected to be ['b', 'c', 'd']
type re4 = Push<arr20, 4>; // expected to be [2, 1]

type Pop<T> = T extends [ ...infer Rest,infer F,] ? Rest : never;
type Shift<T> = T extends [infer F, ...infer Rest] ? Rest : never;
type Push<T, V> = T extends any[] ? [...T, V] : never;
// Extra: Similarly, can you implement Shift, Push and Unshift as well?

// ----分割线---

// For given a tuple, you need create a generic Length, pick the length of the tuple

// For example:

type tesla = ["tesla", "model 3", "model X", "model Y"];

type spaceX = [
  "FALCON 9",
  "FALCON HEAVY",
  "DRAGON",
  "STARSHIP",
  "HUMAN SPACEFLIGHT"
];

type teslaLength = Length<tesla>; // expected 4

type spaceXLength = Length<spaceX>; // expected 5

// type Length<T extends any[]> = T["length"] extends 0 ? never : T["length"];
type Length<T extends readonly any[]> = T extends { length: infer L } ? L : never;

