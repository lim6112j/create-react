// 1. createElement Stub
// 2. createElement simple implementation
import createElementVdom from 'virtual-dom/create-element';

const MyReact = (function () {
  function createElement(type, attributes = {}, ...children) {
    let childElements = [].concat(...children).reduce(
        (acc, child) => {
            if (child != null && child !== true && child !== false) {
                if (child instanceof Object) {
                    acc.push(child);
                } else {
                    acc.push(createElement("text", {
                        textContent: child
                    }));
                }
            }
            return acc;
        }
        , []);
    return {
        type,
        children: childElements,
        props: Object.assign({ children: childElements }, attributes)
    }
}
  const render = function (vdom, container, oldDom = container.firstChild) {
    if (!oldDom) {
        // mountElement(vdom, container, oldDom);
        container.appendChild(createElementVdom(vdom))
    }
}

const mountElement = function (vdom, container, oldDom) {
    // Native DOM elements as well as functions.
    return mountSimpleNode(vdom, container, oldDom);
}

const mountSimpleNode = function (vdom, container, oldDomElement, parentComponent) {
    let newDomElement = null;
    const nextSibling = oldDomElement && oldDomElement.nextSibling;

    if (vdom.tagName === "text") {
        newDomElement = document.createTextNode(vdom.props.textContent);
    } else {
        newDomElement = document.createElement(vdom.tagName);
    }

    // Setting reference to vdom to dom
    newDomElement._virtualElement = vdom;
    if (nextSibling) {
        container.insertBefore(newDomElement, nextSibling);
    } else {
        container.appendChild(newDomElement);
    }
    console.log(vdom.children)
    //TODO: Render children
    vdom.children.forEach(child => {
        mountElement(child, newDomElement);
    });

}

  return {
      createElement,
      render
  }
}());

export default MyReact;