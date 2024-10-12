# Who Wants to Be a JavaScript Millionaire

Welcome to **Who Wants to Be a JavaScript Millionaire**, a fun command-line quiz game where you can test your JavaScript knowledge! Answer questions correctly to win, but beware—one wrong answer and it's game over!

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Questions](#questions)
- [Contributing](#contributing)

## Features

- Interactive command-line interface using [Inquirer.js](https://www.npmjs.com/package/inquirer)
- Colorful output with [Chalk](https://www.npmjs.com/package/chalk) and [Chalk Animation](https://www.npmjs.com/package/chalk-animation)
- Progress spinner with [Nanospinner](https://www.npmjs.com/package/nanospinner)
- ASCII art using [Figlet](https://www.npmjs.com/package/figlet)
- Gradient text using [Gradient-string](https://www.npmjs.com/package/gradient-string)

## Installation

To install dependencies, run:

```bash
bun install
```

## Usage

To start the game, run:

```bash
bun run index.ts
```

You will be prompted to enter your name and then face a series of JavaScript questions. Answer correctly to win!

## Questions

The game currently includes the following questions:

1. JavaScript was created in 10 days then released on _____?
   - A) May 23rd, 1995
   - B) Nov 24th, 1995
   - C) Dec 4th, 1995
   - D) Dec 17th, 1996

2. What is the output of `typeof null` in JavaScript?
   - A) object
   - B) null
   - C) undefined
   - D) error

3. Which method is used to parse a JSON string?
   - A) JSON.parse()
   - B) JSON.stringify()
   - C) JSON.toObject()
   - D) JSON.decode()

4. Which of the following is a primitive data type in JavaScript?
   - A) Array
   - B) Object
   - C) Function
   - D) String

5. What does the `bind` method do in JavaScript?
   - A) Creates a new function with a specific `this` context
   - B) Executes a function immediately
   - C) Binds an object to a variable
   - D) Merges two functions

## Contributing

Contributions are welcome! If you'd like to contribute, please fork the repository and create a pull request.

Have fun and good luck! 🎉
