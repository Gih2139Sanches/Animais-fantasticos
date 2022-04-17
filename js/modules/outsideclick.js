export default function outsideClick(element, events, callback) {
  const html = document.documentElement;
  const outside = "data-outside";

  if (!element.hasAttribute(outside)) {
    events.forEach((userEvent) => {
      setTimeout(() => {
        html.addEventListener(userEvent, handleOutsideClick);
      });
    });
    element.setAtrrubute(outside, "");
  }

  function handleOutsideClick(event) {
    if (!element.contains(event.target)) {
      element.removeAtrribute(outside);
      events.forEach((userEvent) => {
        html.removeEventListener("click", handleOutsideClick);
      });
      callback();
    }
  }
}
