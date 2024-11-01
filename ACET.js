document.body.insertAdjacentHTML('afterbegin', `
<div id="ACET" style="position:fixed;top:0;left:0;right:0;background:rgba(240,240,240,0.9);padding:10px;z-index:9999;box-shadow:0 2px 5px rgba(0,0,0,0.5);font-family:sans-serif;">
    <h1 style="margin:0;font-size:18px;color:#333;">ACET - Advanced Code Execution Tool</h1>
    <p style="margin:0;font-size:12px;color:#666;">The creator is not responsible for any damages. Use for ethical purposes only.</p>
    <textarea id="codeInput" rows="3" style="width:80%;margin-top:5px;color:black;" placeholder="Enter HTML, CSS, or JavaScript here..."></textarea>
    <div style="margin-top:5px;">
        <button id="runButton" style="padding:5px 10px;background:#007bff;color:white;border:none;cursor:pointer;">Run</button>
        <button id="testButton" style="padding:5px 10px;margin-left:5px;background:#ffc107;color:black;border:none;cursor:pointer;">Test Code</button>
        <button id="fetchButton" style="padding:5px 10px;margin-left:5px;background:#28a745;color:white;border:none;cursor:pointer;">Fetch</button>
        <button id="downloadButton" style="padding:5px 10px;margin-left:5px;background:#17a2b8;color:white;border:none;cursor:pointer;">Download Assets</button>
        <button id="closeButton" style="padding:5px 10px;margin-left:5px;background:red;color:white;border:none;cursor:pointer;">X</button>
    </div>
</div>`);

document.getElementById('runButton').addEventListener('click', () => {
    const code = document.getElementById('codeInput').value.trim();
    if (!code) return alert("Enter code to run.");
    if (!confirm("Run this code?")) return;
    setTimeout(() => {
        try {
            code.startsWith("<") ? document.body.insertAdjacentHTML('beforeend', code) : eval(code);
            alert("Code executed.");
        } catch (e) {
            alert("Execution error: " + e.message);
        }
    }, Math.random() * 2000 + 500);
});

document.getElementById('testButton').addEventListener('click', () => {
    const code = document.getElementById('codeInput').value.trim();
    if (!code) return alert("Enter code to test.");
    const testWindow = window.open('', 'TestWindow', 'width=800,height=600');
    testWindow.document.write(`<html><head><title>Test Code</title></head><body>${code}</body></html>`);
    testWindow.document.close();
});

document.getElementById('fetchButton').addEventListener('click', async () => {
    const url = prompt("URL to fetch data:");
    if (!url) return;
    try {
        const response = await fetch(url, {
            method: 'GET',
            mode: 'no-cors',
            headers: {
                'User-Agent': Math.random() > 0.5 ? "Mozilla/5.0" : "Chrome/89.0",
                'X-Requested-With': Math.random() > 0.5 ? "FetchAPI" : "XMLHttpRequest"
            }
        });
        if (!response.ok) throw new Error("Response error: " + response.statusText);
        const data = await response.text();
        alert("Fetched text data:\n" + data);
    } catch (e) {
        alert("Fetch error: " + e.message);
    }
});

document.getElementById('downloadButton').addEventListener('click', async () => {
    alert("This may take a while, depending on the size of the website and the number of assets.");

    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js';
    document.body.appendChild(script);

    script.onload = async function() {
        const zip = new JSZip();
        
        const htmlContent = document.documentElement.outerHTML;
        zip.file("index.html", htmlContent);

        async function fetchAndAddFile(url, fileName) {
            try {
                const response = await fetch(url);
                if (response.ok) {
                    const blob = await response.blob();
                    zip.file(fileName, blob);
                } else {
                    console.warn(`Failed to fetch ${url}: Status ${response.status}`);
                }
            } catch (error) {
                console.error(`Could not fetch ${url}:`, error);
            }
        }

        const assets = [];
        
        const images = Array.from(document.querySelectorAll('img')).map(img => img.src);
        assets.push(...images);

        const stylesheets = Array.from(document.querySelectorAll('link[rel="stylesheet"]')).map(link => link.href);
        assets.push(...stylesheets);

        const scripts = Array.from(document.querySelectorAll('script[src]')).map(script => script.src);
        assets.push(...scripts);

        const videos = Array.from(document.querySelectorAll('video source')).map(video => video.src);
        assets.push(...videos);

        const audio = Array.from(document.querySelectorAll('audio source')).map(audio => audio.src);
        assets.push(...audio);

        for (const assetUrl of assets) {
            const fileName = assetUrl.split('/').pop();
            await fetchAndAddFile(assetUrl, `assets/${fileName}`);
        }

        zip.generateAsync({ type: "blob" })
            .then(function(content) {
                const url = URL.createObjectURL(content);
                const a = document.createElement('a');
                a.href = url;
                a.download = 'website.zip';
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                URL.revokeObjectURL(url);
            });
    };
});

document.getElementById('closeButton').addEventListener('click', () => {
    document.getElementById('ACET').remove();
});
