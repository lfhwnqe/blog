let nextUnitOfWork = null;

export function render(element, container) {
  // 根节点设置成第一个工作单元
  nextUnitOfWork = {
    dom: container,
    props: {
      children: [element],
    },
  };
}

export function createDom(fiber) {
  const dom =
    fiber.type === "TEXT_ELEMENT"
      ? document.createTextNode("")
      : document.createElement(fiber.type);

  const isProperty = (key) => key !== "children";

  Object.keys(fiber.props)
    .filter(isProperty)
    .forEach((name) => {
      // 检查属性是否可以被设置
      if (name in dom) {
        dom[name] = fiber.props[name];
      } else {
        dom.setAttribute(name, fiber.props[name]);
      }
    });
  return dom;
  // if (element.props.children) {
  //   // stack 同步的 不能被中断的
  //   element.props.children.forEach((child) => render(child, dom));
  // }

  // container.appendChild(dom);
}
// params 截止时间
function workLoop(deadline) {
  // 停止标识
  let showYield = false;
  while (nextUnitOfWork && !showYield) {
    nextUnitOfWork = performUnitOfWork(nextUnitOfWork);
    showYield = deadline.timeRemaining();
    requestIdleCallback(workLoop);
  }
}

requestIdleCallback(workLoop);

function performUnitOfWork(fiber) {
  if (!fiber.dom) {
    fiber.dom = createDom(fiber);
  }
  if (fiber.parent) {
    fiber.parent.dom.appendChild(fiber.dom);
  }
  const elements = fiber.props.children;
  // console.log("elements:", elements);
  // 索引 index=0
  let index = 0;
  // 上一个兄弟节点
  let prevSibling = null;
  while (index < elements.length) {
    const element = elements[index];
    const newFiber = {
      type: element.type,
      props: element.props,
      parent: fiber,
      dom: null,
    };
    if (index === 0) {
      fiber.child = newFiber;
    } else if (element) {
      prevSibling.sibling = newFiber;
    }
    prevSibling = newFiber;
    index++;
  }
  if (fiber.child) {
    // console.log("🌹fiber.child:", fiber.child);
    return fiber.child;
  }
  let nextFiber = fiber;
  while (nextFiber) {
    if (nextFiber.sibling) {
      // console.log("🌹nextFiber.sibling:", nextFiber.sibling);
      return nextFiber.sibling;
    }
    console.log("🌹nextFiber:", nextFiber);
    // console.log('nextFiber.parent:',nextFiber.parent);
    nextFiber = nextFiber.parent;
  }
}

// fiber的实现，实现时间分片渲染
// 运行流程 render => requestIdleCallback => workLoop => nextUnitOfWork => performUnitOfWork
