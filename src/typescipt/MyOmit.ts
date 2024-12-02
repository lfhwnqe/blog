// Implement the built-in Omit<T, K> generic without using it.

// Constructs a type by picking all properties from T and then removing K

// For example

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = MyOmit<Todo, "description" | "title">;
const todo: TodoPreview = {
  completed: false,
};

// never 类型在映射类型中用作键时，该属性会被完全移除
type MyOmit<T, K> = {
  [key in keyof T as key extends K ? never : key]: T[key];
};

interface User {
  id: number;
  info: {
    name: string;
    age: number;
    address: {
      city: string;
      street: string;
    };
  };
  hobbies: string[];
}

type PartialUser = DeepPartial<User>;

// 这样使用时，所有属性都是可选的，包括嵌套属性
const user: PartialUser = {
  info: {
    name: "John",
    // age 可以省略
    address: {
      city: "Beijing",
      // street 可以省略
    },
  },
  // id 和 hobbies 可以省略
};

type DeepPartial<T> = T extends object
  ? { [P in keyof T]?: DeepPartial<T[P]> }
  : T;

// 原始表单数据类型
interface RegistrationForm {
  username: string;
  age: number;
  email: string;
  password: {
    main: string;
    confirmation: string;
  };
  addresses: {
    street: string;
    city: string;
    zipCode: string;
  }[];
}

// 应该转换成：
type RegistrationFormErrors = ValidationErrors<RegistrationForm>;

/* 结果应该等同于：
{
  username?: string | string[];    // 可能的用户名错误
  age?: string | string[];        // 可能的年龄错误
  email?: string | string[];      // 可能的邮箱错误
  password?: {
    main?: string | string[];     // 可能的密码错误
    confirmation?: string | string[];  // 可能的确认密码错误
  };
  addresses?: {
    street?: string | string[];   // 可能的街道错误
    city?: string | string[];     // 可能的城市错误
    zipCode?: string | string[];  // 可能的邮编错误
  }[];
}
*/

// 使用示例：
const errors: RegistrationFormErrors = {
  username: "Username must be at least 3 characters",
  password: {
    main: ["Password is too weak", "Must contain special characters"],
  },
  addresses: [
    {
      zipCode: "Invalid zip code format",
    },
  ],
};
type ValidationErrors<T> = T extends (infer U)[]
  ? ValidationErrors<U>[]
  : T extends object
  ? {
      [P in keyof T]?: ValidationErrors<T[P]>;
    }
  : string | string[];

type ClickHandler = (event: MouseEvent) => void;
type ChangeHandler = (value: string, event: Event) => void;

type ClickParam = GetFirstParam<ClickHandler>; // 应该得到 MouseEvent
type ChangeParam = GetFirstParam<ChangeHandler>; // 应该得到 string

type GetFirstParam<T> = T extends (first: infer P, ...rest: any[]) => any
  ? P
  : never;

// 一个普通的 React 函数组件
function UserCard(props: { name: string; age: number; avatar?: string }) {
  return null;
}

// 一个 React 类组件
class UserProfile extends React.Component<{
  userId: string;
  onUpdate: (id: string) => void;
}> {
  render() {
    return null;
  }
}

// 应该能够正确提取 props 类型
type UserCardProps = ExtractProps<typeof UserCard>;
// 应该得到: { name: string; age: number; avatar?: string; }

type UserProfileProps = ExtractProps<typeof UserProfile>;
// 应该得到: { userId: string; onUpdate: (id: string) => void; }

type ExtractProps<T> = T extends (props: infer P, ...args: any) => any
  ? P
  : T extends React.ComponentType<infer P>
  ? P
  : never;
