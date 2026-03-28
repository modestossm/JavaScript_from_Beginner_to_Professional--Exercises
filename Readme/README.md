# 📘 JavaScript from Beginner to Professional — Exercises

> Solutions and exercises from the book **"JavaScript from Beginner to Professional"** by *Laurence Lars Svekis, Maaike van Putten & Rob Percival* (Packt Publishing, 2021).

This repository contains my personal solutions to all the exercises and chapter projects covered in the book, organized chapter by chapter.

---

## 📚 Table of Contents

- [About the Book](#-about-the-book)
- [Repository Structure](#-repository-structure)
- [Chapter Overview](#-chapter-overview)
- [Technologies Used](#-technologies-used)
- [How to Run](#-how-to-run)

---

## 📖 About the Book

**JavaScript from Beginner to Professional** is a comprehensive, hands-on guide to learning JavaScript from the ground up. It covers core language fundamentals, object-oriented programming, DOM manipulation, asynchronous programming, the HTML5 Canvas API, and modern JavaScript patterns — all through practical exercises and real-world projects.

---

## 🗂 Repository Structure

Each chapter has its own dedicated folder containing:

- **`Exercise_X.Y.js`** — Individual exercise solutions
- **`Chapter Project.js`** / **`Chapter Project_N.js`** — End-of-chapter project solutions
- **`.html`** files — HTML pages used alongside JS exercises when DOM interaction is required

```
📦 JavaScript from Beginner to Professional - Exercises
├── 📁 Chapter 2  - JavaScript Essentials
├── 📁 Chapter 3  - JavaScript Multiple Values
├── 📁 Chapter 4  - Logic Statements
├── 📁 Chapter 5  - Loops
├── 📁 Chapter 6  - Functions
├── 📁 Chapter 7  - Classes
├── 📁 Chapter 8  - Built-In JavaScript Methods
├── 📁 Chapter 9  - The Document Object Model
├── 📁 Chapter 10 - Dynamic Element Manipulation Using the DOM
├── 📁 Chapter 11 - Interactive Content and Event Listeners
├── 📁 Chapter 12 - Intermediate JavaScript
├── 📁 Chapter 13 - Concurrency
├── 📁 Chapter 14 - HTML5, Canvas, and JavaScript
└── 📁 Chapter 15 - Next Steps
```

---

## 🗺 Chapter Overview

| Chapter | Topic | Exercises | Chapter Projects |
|---------|-------|:---------:|:----------------:|
| 2 | JavaScript Essentials | 4 | 1 |
| 3 | JavaScript Multiple Values | 5 | 1 |
| 4 | Logic Statements | 5 | 1 |
| 5 | Loops | 8 | 1 |
| 6 | Functions | 8 | 1 |
| 7 | Classes | 3 | 1 |
| 8 | Built-In JavaScript Methods | 7 | 1 |
| 9 | The Document Object Model | 3 | 1 |
| 10 | Dynamic Element Manipulation Using the DOM | 10 | 3 |
| 11 | Interactive Content and Event Listeners | 11 | 4 |
| 12 | Intermediate JavaScript | 9 | 3 |
| 13 | Concurrency | 3 | 1 |
| 14 | HTML5, Canvas, and JavaScript | 7 | 3 |
| 15 | Next Steps | 1 | 2 |

### Chapter Highlights

- **Ch. 2 — JavaScript Essentials:** Variable declarations (`let`, `const`), data types, `typeof`, operators, and type coercion.
- **Ch. 3 — JavaScript Multiple Values:** Arrays and objects — creation, access, manipulation, and iteration.
- **Ch. 4 — Logic Statements:** `if/else`, `switch`, ternary operator, and logical/comparison operators.
- **Ch. 5 — Loops:** `for`, `while`, `do...while`, `for...of`, `for...in`, and `break`/`continue`.
- **Ch. 6 — Functions:** Function declarations, expressions, arrow functions, scope, closures, default parameters, and rest/spread operators.
- **Ch. 7 — Classes:** OOP with ES6 classes, constructors, inheritance, getters, and setters.
- **Ch. 8 — Built-In JavaScript Methods:** String methods, number methods, Math object, Array methods (`map`, `filter`, `reduce`, `sort`, etc.).
- **Ch. 9 — The Document Object Model:** Selecting and traversing DOM nodes, reading and writing properties, and basic DOM manipulation.
- **Ch. 10 — Dynamic Element Manipulation Using the DOM:** Creating, inserting, and removing elements; modifying styles and classes dynamically.
- **Ch. 11 — Interactive Content and Event Listeners:** `addEventListener`, event types (click, keyboard, mouse, form), event delegation, and page navigation events.
- **Ch. 12 — Intermediate JavaScript:** Destructuring, spread/rest advanced usage, generators, iterators, Symbol, `Map`, `Set`, `WeakMap`, and `WeakSet`.
- **Ch. 13 — Concurrency:** Callbacks, Promises, `async/await`, and the event loop.
- **Ch. 14 — HTML5, Canvas, and JavaScript:** Drawing on `<canvas>`: shapes, paths, gradients, images, and animations.
- **Ch. 15 — Next Steps:** Using the Fetch API, working with JSON data, and consuming external resources.

---

## 🛠 Technologies Used

![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-F7DF1E?style=flat&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-Canvas%20%26%20DOM-E34F26?style=flat&logo=html5&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-runtime-339933?style=flat&logo=node.js&logoColor=white)

- **Vanilla JavaScript (ES6+)** — core language features throughout all chapters
- **HTML5** — used alongside DOM and Canvas chapters
- **Fetch API** — used in the final chapter for consuming JSON data
- **Node.js** — used to run pure `.js` exercises directly from the terminal

---

## ▶ How to Run

### Pure JavaScript Exercises (Chapters 2–8, 13)

Run the `.js` files directly with Node.js:

```bash
node "Chapter 2 - JavaScript Essentials/Exercise_2.1.js"
```

### Browser-Based Exercises (Chapters 9–12, 14–15)

Open the corresponding `.html` file in your browser. Each `.html` file already links to its `.js` script. For exercises using `fetch()`, serve the files through a local HTTP server to avoid CORS restrictions:

```bash
# Using the VS Code Live Server extension (recommended)
# Or using Node.js's http-server package:
npx http-server .
```

Then open `http://localhost:8080` and navigate to the desired chapter folder.

---

## 📝 Notes

- Chapter 1 is a conceptual introduction without coding exercises.
- All solutions are my own, written as I progressed through the book.
- Comments at the top of each file describe the original exercise prompt.

---

*Happy coding! 🚀*