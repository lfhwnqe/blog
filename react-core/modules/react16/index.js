import React from "./entry";

const element = (
  <div>
    <h1 title="foo">
      <span>hello</span>
    </h1>
    <h2>副标题</h2>
    <a href="">测试链接</a>
  </div>
);
// console.log("element:", element);

const container = document.getElementById("root");

React.render(element, container);
