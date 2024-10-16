export function render(element, container) {
    const dom =
      element.type === "TEXT_ELEMENT"
        ? document.createTextNode("")
        : document.createElement(element.type);
  
    const isProperty = (key) => key !== "children";
  
    Object.keys(element.props)
      .filter(isProperty)
      .forEach((name) => {
        // 检查属性是否可以被设置
        if (name in dom) {
          dom[name] = element.props[name];
        } else {
          dom.setAttribute(name, element.props[name]);
        }
      });
  
    if (element.props.children) {
      element.props.children.forEach((child) => render(child, dom));
    }
  
    container.appendChild(dom);
  }