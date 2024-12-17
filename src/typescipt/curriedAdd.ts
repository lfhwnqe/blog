// TypeScript 4.0 is recommended in this challenge

// Currying is the technique of converting a function that takes multiple arguments into a sequence of functions that each take a single argument.

// For example:

const add = (a: number, b: number) => a + b;

const three = add(1, 2);

function Currying<F extends Function>(fn: F): CurringFn<F>;

function Currying(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, ...args);
    } else {
      return function (...args2) {
        return curried.apply(this, args.concat(args2));
      };
    }
  };
}

type CurringFn<F extends Function> = F extends (
  first: infer First,
  ...remaining: infer Rest
) => infer Ret
  ? Rest["length"] extends 0
    ? F
    : (first: First) => CurringFn<(...args: Rest) => Ret>
  : never;

const curriedAdd = Currying(add);

const five = curriedAdd(2)(3);

// The function passed to Currying may have multiple arguments, you need to correctly type it.
// In this challenge, the curried function only accept one argument at a time. Once all the argument is assigned, it should return its result.
