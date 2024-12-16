// Chainable options are commonly used in Javascript. But when we switch to TypeScript, can you properly type it?
// In this challenge, you need to type an object or a class - whatever you like - to provide two function option(key, value) and get(). In option, you can extend the current config type by the given key and value. We should about to access the final result via get.
// For example
declare const config: Chainable;
const result = config
  .option("foo", 123)
  .option("name", "type-challenges")
  .option("bar", { value: "Hello World" })
  .get();

interface Result {
  foo: number;
  name: string;
  bar: { value: string };
}
// expect the type of result to be:interface Result {foo: numbername: stringbar: {value: string}}You don't need to write any js/ts logic to handle the problem - just in type level.
// You can assume that key only accepts string and the value can be anything - just leave it as-is. Same key won't be passed twice.
type Chainable<T = {}> = {
  option: <K extends PropertyKey, V>(
    key: K extends keyof T ? never : K,
    value: V
  ) => Chainable<Omit<T, K> & { [key in K]: V }>;
  get: () => T;
};
