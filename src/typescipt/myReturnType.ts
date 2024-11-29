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

import React from "react";

// 我们经常在React中这样定义事件处理函数：
const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  console.log("Button clicked!");
};

const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  console.log("Input changed!");
};

// 请实现一个类型GetEventType，它可以提取出事件处理函数中的事件类型：
type GetEventType<T> = T extends (event: infer P) => any ? P : never;

// 它应该能这样工作：
type ClickEventType = GetEventType<typeof handleClick>;
// 应该得到：React.MouseEvent<HTMLButtonElement>

type ChangeEventType = GetEventType<typeof handleChange>;
// 应该得到：React.ChangeEvent<HTMLInputElement>

// 想象我们有一个函数类型
type FuncType = (x: number, y: string) => boolean;

// 我们想提取第一个参数的类型
type FirstParameter<T> = T extends (first: infer First, ...args: any[]) => any
  ? First
  : never;

// 使用
type FirstType = FirstParameter<FuncType>; // number

// 在前端开发中，我们经常会有这样的API调用函数：
const fetchUserData = async () => {
  const response = await fetch("/api/user");
  return {
    id: 1,
    name: "John",
    age: 30,
  };
};

const fetchPostData = async () => {
  const response = await fetch("/api/posts");
  return {
    title: "Hello",
    content: "World",
  };
};

// 请实现一个类型UnwrapPromise，它可以提取Promise resolved的类型：
type UnwrapPromise<T> = T extends Promise<infer U> ? U : never;

// T extends Promise<infer Inside> 意思是："如果T是一个Promise，把它里面的类型叫做Inside"
// ? Inside : never 意思是："如果是Promise，就返回里面的类型；如果不是，返回never"

// 它应该这样工作：
type UserData = UnwrapPromise<ReturnType<typeof fetchUserData>>;
// 应该得到：{ id: number; name: string; age: number }

type PostData = UnwrapPromise<ReturnType<typeof fetchPostData>>;
// 应该得到：{ title: string; content: string }
