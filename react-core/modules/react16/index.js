import React from "./entry";

const element = (
  <div>
    div内容
    <h1>标题</h1>
  </div>
);
console.log("element:", element);

const container = document.getElementById("root");

React.render(element, container);
