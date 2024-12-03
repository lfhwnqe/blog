// Implement the built-in Pick<T, K> generic without using it.

// Constructs a type by picking the set of properties K from T

// For example:

interface Todo {
  title: string;

  description: string;

  completed: boolean;
}

type TodoPreview1 = MyPick<Todo, "title" | "completed">;

const todo1: TodoPreview1 = {
  title: "Clean room",
  completed: false,
};

type MyPick<T, K extends keyof T> = { [P in K]: T[P] };
