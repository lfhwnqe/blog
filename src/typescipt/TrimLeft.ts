// Implement TrimLeft<T> which takes an exact string type and returns a new string with the whitespace beginning removed.

// For example
type whiteSpace = " " | "\n" | "\t";
type trimed = TrimLeft<"  Hello World  ">; // expected to be 'Hello World  '
type TrimLeft<T extends string> = T extends `${whiteSpace}${infer R}`
  ? TrimLeft<R>
  : T;
// ------我是分割线------

// Implement Trim<T> which takes an exact string type and returns a new string with the whitespace from both ends removed.

// For example

type trimmed = Trim<"  Hello World  ">; // expected to be 'Hello World'
type Trim<T extends string> = T extends `${whiteSpace}${infer R}` | `${infer R}${whiteSpace}`
  ? Trim<R>
  : T;
