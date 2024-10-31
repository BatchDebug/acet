# ACET - Advanced Code Execution Tool

ACET (Advanced Code Execution Tool) is a simple, browser-based utility for running HTML, CSS, and JavaScript snippets directly in the DOM of any web page. Created for quick testing and experimentation, ACET provides an interface at the top of the page where users can input and execute code. With additional functionality for fetching JSON data, ACET is especially useful for developers looking to test ideas in a controlled, in-browser environment.

## DISCLAIMER
The creator is not responsible for any damages. Use for ethical purposes only.

## Features

- **Run Code Directly in the DOM**  
  ACET allows users to input HTML, CSS, or JavaScript and run it in the document context. If the input code starts with HTML tags, the tool inserts it directly into the DOM; otherwise, JavaScript is evaluated. A confirmation dialog ensures that users are aware of the potential effects of running code.

- **Fetch Remote JSON Data**  
  Users can input a URL to fetch JSON data (requires CORS support). The data is displayed in a formatted alert dialog. ACET randomizes certain headers (like User-Agent and X-Requested-With) to simulate various client request types, useful for testing server responses under different conditions.

- **User Interface**  
  The ACET interface is minimal, with a fixed-position banner at the top of the page. It contains:
  - A disclaimer, encouraging ethical and responsible use
  - An input box for HTML/CSS/JavaScript code
  - Buttons for "Run" and "Fetch" operations

- **Random Delay**  
  To add realism, ACET includes a random delay (between 500ms and 2500ms) before executing code. This delay mimics real-world response times, helping test how timing affects JavaScript execution within a browser.
## Screenshots
Interface:
![grafik](https://github.com/user-attachments/assets/8229c15a-e60b-47b3-8c0e-15f161f0be15)

Example output: (at the bottom of webpage)
![grafik](https://github.com/user-attachments/assets/0b5e6e9e-f77b-4604-90c7-946dfd3b701a)

## How to use
### Step 1: Open the Console
Access your browser's developer tools by right-clicking on the page and selecting "Inspect" or by pressing Ctrl + Shift + I (or Cmd + Option + I on Mac).

### Step 2: Paste in the ACET Code
To get started, visit our GitHub repository to find the ACET code. Copy the code snippet from there and paste it into your browser's console.

### Step 3: Execute Your Code
After pasting the ACET code into the console, you can enter your HTML, CSS, or JavaScript code into the provided textarea and click the "Run" button. You can also fetch data from an external source by clicking the "Fetch" button.

## Changelog
### Version 1.1
- Added X button
