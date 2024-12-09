// Implement the built-in Readonly<T> generic without using it.

// Constructs a type with all properties of T set to readonly, meaning the properties of the constructed type cannot be reassigned.

// For example:

interface Todo3 {
  title: string;

  description: string;
}

const todo4: MyReadonly<Todo3> = {
  title: "Hey",

  description: "foobar",
};

todo4.title = "Hello"; // Error: cannot reassign a readonly property

todo4.description = "barFoo"; // Error: cannot reassign a readonly property
type MyReadonly<T> = {
  readonly [K in keyof T]: T[K];
};

// ------我是分割线------

// Implement a generic MyReadonly2<T, K> which takes two type argument T and K.

// K specify the set of properties of T that should set to Readonly. When K is not provided, it should make all properties readonly just like the normal Readonly<T>.

// For example

interface Todo5 {
  title: string;

  description: string;

  completed: boolean;
}

const todo5: MyReadonly5<Todo5, "title" | "description"> = {
  title: "Hey",

  description: "foobar",

  completed: false,
};
todo5.title = "Hello"; // Error: cannot reassign a readonly property

todo5.description = "barFoo"; // Error: cannot reassign a readonly property

todo5.completed = true; // OK

type MyReadonly5<T, K extends keyof T = keyof T> = {
  +readonly [P in K]: T[P];
} & { [key in keyof T as key extends K ? never : key]: T[key] };
