let nextUnitOfWork = null;
let wipRoot = null;

export function render(element, container) {
  // 根节点设置成第一个工作单元
  wipRoot = {
    dom: container,
    props: {
      children: [element],
    },
  };
  nextUnitOfWork = wipRoot;
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
// 处理提交的fiber tree
function commitWork(fiber) {
  if (!fiber) return;
  const domParent = fiber.parent.dom;
  domParent.appendChild(fiber.dom);

  commitWork(fiber.child);
  commitWork(fiber.sibling);
}
// 提交任务，将fiber tree 渲染为真实 DOM
function commitRoot() {
  commitWork(wipRoot.child);
  wipRoot = null;
}

// params 截止时间
function workLoop(deadline) {
  // 停止标识
  let showYield = false;
  while (nextUnitOfWork && !showYield) {
    nextUnitOfWork = performUnitOfWork(nextUnitOfWork);
    showYield = deadline.timeRemaining() < 1;
  }
  if (!nextUnitOfWork && wipRoot) {
    commitRoot();
  }
  requestIdleCallback(workLoop);
}

requestIdleCallback(workLoop);

function performUnitOfWork(fiber) {
  if (!fiber.dom) {
    fiber.dom = createDom(fiber);
  }
  // if (fiber.parent) {
  //   fiber.parent.dom.appendChild(fiber.dom);
  // }
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
    // console.log("🌹nextFiber:", nextFiber);
    // console.log('nextFiber.parent:',nextFiber.parent);
    nextFiber = nextFiber.parent;
  }
}

// fiber的实现，实现时间分片渲染
// 运行流程 render => requestIdleCallback => workLoop => nextUnitOfWork => performUnitOfWork
// 初始化render=> requestIdleCallback检测有没有时间执行任务 => workLoop生成fiberTree =>
// 下一个循环继续生成fiberTree => 直到当前任务节点完整的fiberTree完全生成 =>
// commit完整的fiberTree(添加到真实dom上);
