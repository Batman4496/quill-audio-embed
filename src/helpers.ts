export function setStyles(element: HTMLElement, styles: {
  [key: string]: string
}) {
  Object.keys(styles).map((key: any) => {
    element.style[key] = styles[key];
  });

  return element;
}