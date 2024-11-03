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
![grafik](https://github.com/user-attachments/assets/189dd4ac-fb09-4611-be4a-4b0870a2c6bd)

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
| Provision                        | Allowed / Required                                   | Limited / Prohibited                                         |
|----------------------------------|------------------------------------------------------|--------------------------------------------------------------|
| **Open Source Requirement**      | Source code must be public and open source           | Cannot be used for closed-source projects                    |
| **Use Rights**                   | Lawful, ethical, and responsible use encouraged      | Harmful, malicious, or illegal uses discouraged              |
| **Modification Rights**          | Modifications allowed if documented and marked       | N/A                                                          |
| **Distribution Rights**          | Distribution allowed with original license and attribution | Cannot remove license; must indicate modifications        |
| **Responsible Use**              | Encourage ethical use, transparency, and accountability | Avoid harmful, privacy-invasive, or unethical applications  |
| **Security Standards**           | Follow secure coding practices in contributions      | Contributions with vulnerabilities or malicious code         |
| **Attribution Requirement**      | Must credit original creators visibly                | N/A                                                          |
| **Acknowledgment of Modifications** | Modifications must be labeled with description of changes | N/A                                                     |
| **Compliance with Third-Party Licenses** | Must follow terms of third-party libraries         | Cannot violate third-party licenses                          |
| **Termination of Rights**        | Rights terminate upon license violation              | Must cease using and distributing Software if license violated |
| **Security of Contributions**    | Secure coding practices required                     | Malicious or insecure contributions result in rights revocation |
| **License Enforcement**          | License creators may enforce terms                   | N/A                                                          |
| **Governing Law**                | Governed by creator’s jurisdiction                   | Legal disputes handled in that jurisdiction                  |
| **Future Versions**              | May use this or future OGL versions                  | Future rights do not apply retroactively                     |
| **User Responsibility**          | User responsible for lawful and ethical compliance   | Creators not liable for misuse                               |
| **Compliance with Community Standards** | Encouraged to follow responsible open-source community standards | N/A                                        |
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
#### License Update
- Updated license to OGL 2.0
