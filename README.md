# @matteob10/modal-react

Reusable React modal component built on the native HTML <dialog> element.
This component provides a simple and accessible solution to display modal dialogs in React applications.

---

## Prerequisites

Node.js >= 18
npm >= 10
React 18 or 19
react-dom 18 or 19
styled-components >= 6

---

## Installation

Install the package from npm:

npm install @matteob10/modal-react


This package uses peer dependencies. Make sure the following are installed in your project:

npm install react react-dom styled-components

---

## Example of use

```jsx
import { useState } from "react";
import { Modal } from "@matteob10/modal-react";

function Example() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>Open modal</button>

      <Modal open={open} onClose={() => setOpen(false)}>
        <p>Hello from the modal</p>
      </Modal>
    </>
  );
}

export default Example;

```
---

## Props

open (boolean)
Controls whether the modal dialog is open or closed.

onClose (function)
Callback function triggered when the modal requests to close
(Escape key press, backdrop click, or close button click).

children (ReactNode)
Content rendered inside the modal dialog.

---

## License

MIT License

---

## Author

© 2025 matteob10