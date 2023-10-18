## Introduction

- A novice attempt in trying to apply basic React form knowledge to build a basic Lorem-ipsum generator project with local data in data.js file

- Lorem Ipsum: https://react-vite-lorem-ipsum.netlify.app/

## Steps

- npm install
- npm run dev

#### Array.slice()

array.slice is a method in JavaScript that returns a shallow copy of a portion of an array into a new array object. The slice() method takes two arguments: the starting index and the ending index of the portion of the array that you want to copy. The starting index is inclusive, meaning the element at the starting index is included in the copied portion, and the ending index is exclusive, meaning the element at the ending index is not included in the copied portion.

#### nanoid

nanoid is a small, fast, and secure library for generating unique IDs in JavaScript. It is designed to be as compact as possible while still providing a unique, unpredictable, and collision-resistant identifier.

The library generates random IDs that consist of a combination of uppercase and lowercase letters, as well as numbers. The default ID length is 21 characters, but this can be changed by passing a different length as an argument.

Here's an example of how to use nanoid to generate a unique ID:

```sh
npm i nanoid
```

```js
import { nanoid } from "nanoid";

const id = nanoid(); // Generates a 21-character random ID

console.log(id); // Output: "Uakgb_J5m9g-0JDMbcJqL"
```
