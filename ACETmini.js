document.body.insertAdjacentHTML('afterbegin', `<div id="A" style="position:fixed;top:0;left:0;right:0;background:rgba(240,240,240,0.9);padding:10px;z-index:9999;box-shadow:0 2px 5px rgba(0,0,0,0.5);font-family:sans-serif;">
<h1 style="margin:0;font-size:18px;color:#333;">ACETmini</h1>
<p style="margin:0;font-size:12px;color:#666;">Creator not responsible for damages. Ethical use only.</p>
<p style="margin:0;font-size:12px;color:#666;">[!] If the code execution generates warnings or errors, switch to the default ACET version.</p>
<textarea id="B" rows="3" style="width:80%;margin-top:5px;color:black;" placeholder="Enter code..."></textarea>
<div style="margin-top:5px;">
<button id="C" style="padding:5px 10px;background:#007bff;color:white;border:none;cursor:pointer;">Run</button>
<button id="D" style="padding:5px 10px;margin-left:5px;background:#ffc107;color:black;border:none;cursor:pointer;">Test</button>
<button id="E" style="padding:5px 10px;margin-left:5px;background:#28a745;color:white;border:none;cursor:pointer;">Fetch</button>
<button id="F" style="padding:5px 10px;margin-left:5px;background:#17a2b8;color:white;border:none;cursor:pointer;">Download</button>
<button id="G" style="padding:5px 10px;margin-left:5px;background:red;color:white;border:none;cursor:pointer;">X</button>
</div></div>`);

document.getElementById('C').onclick = () => { 
    const c = document.getElementById('B').value.trim(); 
    if (!c) return alert("Enter code."); 
    if (!confirm("Run?")) return; 
    setTimeout(() => { 
        try { 
            c.startsWith("<") ? document.body.insertAdjacentHTML('beforeend', c) : (new Function(c))(); 
            alert("Code executed."); 
        } catch (e) { 
            console.error(e); 
            alert(e.message); 
        } 
    }, Math.random() * 2000 + 500); 
};

document.getElementById('D').onclick = () => { 
    const c = document.getElementById('B').value.trim(); 
    if (!c) return alert("Enter code."); 
    const w = open("", "_blank"); 
    w.document.write(`<html><body>${c}</body></html>`); 
};

document.getElementById('E').onclick = async () => { 
    const u = prompt("URL:"); 
    if (!u) return; 
    try { 
        const r = await fetch(u); 
        if (!r.ok) throw new Error(r.statusText); 
        alert(await r.text()); 
    } catch (e) { 
        console.error(e); 
        alert(e.message); 
    } 
};

document.getElementById('F').onclick = () => alert("Download feature removed for brevity.");

document.getElementById('G').onclick = () => document.getElementById('A').remove();
