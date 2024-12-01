# Task List

This project is a **task list website** that allows you to add itemized text to a list stored in browser's local storage. Data stored is persistent within a browser of a device it was input.

## Features

- Add tasks to a list.
- The tasks will be there when you open the website again.
- Delete the task when you've completed it.
- A nice user interface.


## Usage

1. **Clone the repository**:
   ```bash
   git clone https://github.com/kacpermajkowski/task-list.git
   cd task-list
   ```

2. **Install TypeScript compiler using NPM**
   ```
   npm i -g typescript
   ```

    You can download Node.js along with NPM [here](https://nodejs.org/en) if you don't already have it installed.

3. **Compile the TypeScript files**
   ```
    tsc -t es2022 script.ts tasklist.ts
   ```
   
4. **Copy all `.html`, `.css` and compiled `.js` files into location of choice**
   
   After which you can open `index.html` in a browser or enter an adress of a web server you hosted the files **and enjoy :)**

5. **License**

   This project is open-source and available under the MIT License.