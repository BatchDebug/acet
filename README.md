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


## Installation

To use ACET, simply paste the following code snippet into your browser's console (With F12): [https://github.com/BatchDebug/acet/blob/main/ACET.js](https://raw.githubusercontent.com/BatchDebug/acet/refs/heads/main/ACET.js)
