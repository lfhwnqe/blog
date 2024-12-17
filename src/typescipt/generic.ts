// Implement a generic First<T> that takes an Array T and returns its first element's type.

// For example:

type arr1 = ["a", "b", "c"];

type arr2 = [3, 2, 1];

type head1 = First<arr1>; // expected to be 'a'

type head2 = First<arr2>; // expected to be 3

// type First<T extends any[]> = T["length"] extends 0 ? never : T[0];
// type First<T extends any[]> = T extends [] ? never : T[0];
type First<T extends any[]> = T extends [infer First, ...infer Rest]
  ? First
  : never;

// ----分割线----

// Implement a generic Last<T> that takes an Array T and returns its last element.

// For example

type arr3 = ["a", "b", "c"];

type arr4 = [3, 2, 1];

type tail1 = Last<arr3>; // expected to be 'c'

type tail2 = Last<arr4>; // expected to be 1

type Last<T extends any[]> = T["length"] extends 0
  ? never
  : [never, ...T][T["length"]];
// type Last<T extends any[]> = T extends [...infer Item, infer Last]
//   ? Last
//   : never;
