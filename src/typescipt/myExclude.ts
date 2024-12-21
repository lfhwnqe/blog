// Implement the built-in Exclude<T, U>

// Exclude from T those types that are assignable to U

// For example:

type Result321 = Exclude<"a" | "b" | "c", "a">; // 'b' | 'c'
// type Result321 = MyExclude<"a" | "b" | "c", "a">; // 'b' | 'c'

type MyExclude<T, U> = T extends U ? never : T;
