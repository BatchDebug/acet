document.body.insertAdjacentHTML('afterbegin', `
<div id="A">
  <textarea id="B" placeholder="Code"></textarea>
  <button id="C">Run</button>
</div>`);

document.getElementById('C').onclick = () => {
    const code = document.getElementById('B').value.trim();
    if (!code) return alert("No code entered. Please paste code with a variable.");
    if (!code.match(/var\s+\w+|let\s+\w+|const\s+\w+/)) {
        return alert("Code must contain a variable declaration (var, let, or const).");
    }
    if (!confirm("Are you sure you want to run this code?")) return;

    try {
        (function bypassCORSandCSP() {
            const iframe = document.createElement('iframe');
            iframe.style.display = 'none';
            iframe.srcdoc = `<script>
                Object.defineProperty(document, 'cookie', { get: () => '' });
                delete window.fetch;
                window.fetch = (...args) => fetch('https://cors-anywhere.herokuapp.com/' + args[0], ...args.slice(1));
            </script>`;
            document.body.appendChild(iframe);

            const script = document.createElement('script');
            script.textContent = code;
            document.body.appendChild(script);
        })();

        (new Function(code))();
        alert("Code executed successfully.");
    } catch (error) {
        alert(`Error executing code: ${error.message}`);
    }
};
