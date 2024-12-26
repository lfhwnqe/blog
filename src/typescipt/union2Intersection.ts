// Implement the advanced util type UnionToIntersection<U>

// For example

type IUnion = Union2Intersection<"foo" | 42 | true>; // expected to be 'foo' & 42 & true

// type Union2Intersection<T> = T extends T ? (args: any) => void : never;
type Union2Intersection<T> = (
  [T] extends [T] ? (args: T) => void : never
) extends (arg: infer T) => void
  ? T
  : never;
