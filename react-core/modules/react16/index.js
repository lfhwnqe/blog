import React from "./entry";
import { useState } from "./hooks";

const element = (
  <div>
    <h1 title="foo">
      <span>hello</span>
    </h1>
    <h2>副标题</h2>
    <a href="">测试链接</a>
  </div>
);
// const [num, setNum] = useState(1);
const [num1, setNum1] = useState(1);
const [num, setNum, subscribeNum] = useState(1);
subscribeNum((i) => {
    console.log("num changed:", i);
  });
// console.log("num:", num);
// console.log("num1:", num1);
setNum(3);
setNum((i) => i + 5);
setNum1((i) => i + 5);
// console.log("num1:", num1);

const container = document.getElementById("root");

React.render(element, container);
