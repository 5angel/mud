export function createElement(id: string, tag: string = "div"): HTMLElement {
  const element = document.createElement(tag);
  element.id = id;
  return element;
}
