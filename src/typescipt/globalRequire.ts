// Implement the advanced util type GetRequired<T>, which remains all the required fields

// For example

type I = GetRequired<{ foo: number; bar?: string }>; // expected to be { foo: number }

type GetRequired<T> = {
  [K in keyof T as Omit<T, K> extends T ? never : K]: T[K];
};

type I1 = { foo: number; bar?: string };
type I2 = Omit<I1, "foo"> extends I1 ? "1" : "2";
type I3 = Omit<I1, "bar"> extends I1 ? "1" : "2";
