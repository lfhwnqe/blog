// Implement the built-in ReturnType<T> generic without using it.

// For example

const fn = (v: boolean) => {
  if (v) return 1;
  else return 2;
};
const fn1 = (v: boolean) => {
  if (v) return 1;
  else return 3;
};

type a = MyReturnType<typeof fn>; // should be "1 | 2"
type b = MyReturnType<typeof fn1>;

type MyReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer P
  ? P
  : never;
