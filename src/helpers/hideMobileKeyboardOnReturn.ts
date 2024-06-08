/**
 * Hide the mobile keyboard when the user press the return key
 * @param element The input element
 */
export const hideMobileKeyboardOnReturn = (element: HTMLInputElement) => {
  element.addEventListener("keyup", (e: KeyboardEvent) => {
    // Change the type of the event parameter
    const key = e.key || e.keyCode;
    if (key === "Enter" || key === 13) {
      element.blur();
    }
  });
};
