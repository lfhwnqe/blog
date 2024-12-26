// Implement the advanced util type RequiredKeys<T>, which picks all the required keys into a union.

// For example

type Result123 = RequiredKeys<{ foo: number; bar?: string }>;

// expected to be “foo”
type RequiredKeys<T> = keyof {
  [K in keyof T as Omit<T, K> extends T ? never : K]: any;
};

// ----我是分割线---

// Implement Capitalize<T> which converts the first letter of a string to uppercase and leave the rest as-is.

// For example

type capitalized123 = Capitalize123<"hello world">; // expected to be 'Hello world'
type Capitalize123<S extends string> = S extends `${infer F}${infer R}`
  ? `${Uppercase<F>}${R}`
  : S;
