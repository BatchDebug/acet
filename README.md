# ACET - Advanced Code Execution Tool
![grafik](https://github.com/user-attachments/assets/35ec3c0c-4fc0-415a-bb65-38b817f58edf)

ACET (Advanced Code Execution Tool) is a simple, browser-based utility for running HTML, CSS, and JavaScript snippets directly in the DOM of any web page. Created for quick testing and experimentation, ACET provides an interface at the top of the page where users can input and execute code. With additional functionality for fetching JSON data, ACET is especially useful for developers looking to test ideas in a controlled, in-browser environment.

## DISCLAIMER
The creator is not responsible for any damages. Use for ethical purposes only.

## Key Features

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
![grafik](https://github.com/user-attachments/assets/53714437-f204-4f5b-bde7-6d7e320b0691)

Example output: (at the bottom of webpage)
![grafik](https://github.com/user-attachments/assets/0b5e6e9e-f77b-4604-90c7-946dfd3b701a)

## How to use
### Video Tutorial:
![How to install ACET](https://github.com/user-attachments/assets/add7665b-7ab8-4628-8e33-780ae133893c)

### Step 1: Open the Console
Access your browser's developer tools by right-clicking on the page and selecting "Inspect" or by pressing Ctrl + Shift + I (or Cmd + Option + I on Mac).

### Step 2: Paste in the ACET Code
To get started, visit our GitHub repository to find the ACETauto.js code. Copy the code snippet from there and paste it into your browser's console. To automatically 

### Step 3: Execute Your Code
After pasting the ACET code into the console, you can enter your HTML, CSS, or JavaScript code into the provided textarea and click the "Run" button. You can also fetch data from an external source by clicking the "Fetch" button.

## License info
| Provision                       | Allowed                                    | Limited / Prohibited                                   |
|---------------------------------|--------------------------------------------|-------------------------------------------------------|
| **Trademark Use**               | Not explicitly covered                     | N/A                                                   |
| **Open Source Requirement**     | Software must be open source               | Cannot use license for closed-source projects         |
| **Use Rights**                  | Allowed for any lawful, open-source use    | Cannot use for military, destructive, or illegal uses |
| **Modification Rights**         | Modifications allowed if documented        | Must clearly mark and attribute modifications         |
| **Distribution Rights**         | Allowed with original license and attributions | Must retain license and acknowledge modifications    |
| **Warranty Disclaimer**         | No warranty provided; "AS IS" condition    | All risks and liabilities fall on the user            |
| **Liability Limitation**        | Not liable for damages or losses           | N/A                                                   |
| **Attribution Requirement**     | Proper credit to original creator required | Must display attribution prominently                  |
| **Termination of Rights**       | Rights terminate upon violation of terms   | Must stop using software if license is violated       |
| **Security of Contributions**   | Best security practices for contributions  | Malicious contributions lead to right revocation      |
| **Governing Law**               | License governed by creator's jurisdiction | Legal disputes handled in that jurisdiction           |
| **Future Versions**             | Can use this or future OGL versions        | Future rights do not apply retroactively              |
## Changelog
### Version 1.1
- Added X button
### Version 1.2
- Added Code Testing
- Improved Fetching
### Version 1.3
- Added ACETauto.js to make updating automated and fetch the code from the repo.
#### Version 1.3 (2)
- Removed useless message detail.
### Version 1.4
- Added some Bypasses
- Improved Fetching (again)
### Version 1.5
- Added Asset downloading
- Improved code structure
- Improved ACETauto.js
#### Version 1.5 (2)
- More Bypasses
