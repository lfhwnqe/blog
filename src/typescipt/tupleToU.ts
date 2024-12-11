// Implement a generic TupleToUnion<T> which covers the values of a tuple to its values union.
// For example
type Arr = ["1", "2", "3"];
type Test = TupleToUnion<Arr>; // expected to be '1' | '2' | '3'

// type TupleToUnion<T extends any[]> = T[number];
type TupleToUnion<T extends any[]> = T extends Array<infer U> ? U : never;
