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
        <button id="deleteAllTracesButton" style="padding:5px 10px;margin-left:5px;background:#ff3333;color:white;border:none;cursor:pointer;">Delete All Traces</button>
    </div>
</div>`);

document.getElementById('runButton').addEventListener('click', () => {
    const code = document.getElementById('codeInput').value.trim();
    if (!code) return alert("Enter code to run.");
    if (!confirm("Run this code?")) return;
    setTimeout(() => {
        try {
            code.startsWith("<") ? document.body.insertAdjacentHTML('beforeend', code) : (new Function(code))();
            alert("Code executed.");
        } catch (e) {
            console.error("Execution error:", e);
            alert("Execution error: " + e.message);
        }
    }, Math.random() * 2000 + 500);
});

document.getElementById('testButton').addEventListener('click', () => {
    const code = document.getElementById('codeInput').value.trim();
    if (!code) return alert("Enter code to test.");
    const newWindow = window.open("", "_blank");
    newWindow.document.open();
    newWindow.document.write(`<html><head><title>Test Code</title></head><body>${code}</body></html>`);
    newWindow.document.close();
});

document.getElementById('fetchButton').addEventListener('click', async () => {
    const url = prompt("URL to fetch data:");
    if (!url) return;
    try {
        const response = await fetch(url, {
            method: 'GET',
            mode: 'cors',
            credentials: 'omit',
            headers: {
                'User-Agent': Math.random() > 0.5 ? "Mozilla/5.0" : "Chrome/89.0",
                'X-Requested-With': Math.random() > 0.5 ? "FetchAPI" : "XMLHttpRequest"
            }
        });
        if (!response.ok) throw new Error(`Response error: ${response.status} ${response.statusText}`);
        const data = await response.text();
        alert("Fetched text data:\n" + data);
    } catch (e) {
        console.error("Fetch error:", e);
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
        const acediv = document.getElementById('ACET');
        if (acediv) acediv.remove();

        const htmlContent = document.documentElement.outerHTML;
        zip.file("index.html", htmlContent);

        function isValidUrl(url) {
            try {
                new URL(url);
                return true;
            } catch (e) {
                return false;
            }
        }

        async function fetchAndAddFile(url, fileName) {
            try {
                if (!isValidUrl(url)) return;
                const response = await fetch(url, { mode: 'cors' });
                if (response.ok) {
                    const blob = await response.blob();
                    zip.file(fileName, blob);
                }
            } catch (error) {}
        }

        const assets = [];
        const images = Array.from(document.querySelectorAll('img')).map(img => img.src).filter(isValidUrl);
        assets.push(...images);

        const stylesheets = Array.from(document.querySelectorAll('link[rel="stylesheet"]')).map(link => link.href).filter(isValidUrl);
        assets.push(...stylesheets);

        const scripts = Array.from(document.querySelectorAll('script[src]')).map(script => script.src).filter(src => src !== script.src).filter(isValidUrl);
        assets.push(...scripts);

        const videos = Array.from(document.querySelectorAll('video source')).map(video => video.src).filter(isValidUrl);
        assets.push(...videos);

        const audio = Array.from(document.querySelectorAll('audio source')).map(audio => audio.src).filter(isValidUrl);
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
            })
            .catch(e => {
                console.error("Download error:", e);
                alert("Error creating zip file: " + e.message);
            });

        document.body.appendChild(acediv);
    };
});

document.getElementById('closeButton').addEventListener('click', () => {
    document.getElementById('ACET').remove();
});

document.getElementById('deleteAllTracesButton').addEventListener('click', () => {
    document.getElementById('ACET').remove();
    const insertedScripts = document.querySelectorAll('script[src*="jszip"]');
    insertedScripts.forEach(script => script.remove());
    const insertedStyles = document.querySelectorAll('link[rel="stylesheet"]');
    insertedStyles.forEach(style => style.remove());
    const insertedAssets = document.querySelectorAll('img[src], video source, audio source');
    insertedAssets.forEach(asset => asset.remove());
    alert("All ACET traces have been deleted.");
});
