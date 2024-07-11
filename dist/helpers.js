export function setStyles(element, styles) {
    Object.keys(styles).map((key) => {
        element.style[key] = styles[key];
    });
    return element;
}
