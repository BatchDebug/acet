document.body.insertAdjacentHTML('afterbegin', `<div id="ACET" style="position:fixed;top:0;left:0;right:0;background:rgba(240,240,240,0.9);padding:10px;z-index:9999;box-shadow:0 2px 5px rgba(0,0,0,0.5);font-family:sans-serif;"><h1 style="margin:0;font-size:18px;color:#333;">ACET - Advanced Code Execution Tool</h1><p style="margin:0;font-size:12px;color:#666;">The creator is not responsible for any damages. Use for ethical purposes only.</p><textarea id="codeInput" rows="3" style="width:80%;margin-top:5px;color:black;" placeholder="Enter HTML, CSS, or JavaScript here..."></textarea><div style="margin-top:5px;"><button id="runButton" style="padding:5px 10px;background:#007bff;color:white;border:none;cursor:pointer;">Run</button><button id="fetchButton" style="padding:5px 10px;margin-left:5px;background:#28a745;color:white;border:none;cursor:pointer;">Fetch</button><button id="closeButton" style="padding:5px 10px;margin-left:5px;background:red;color:white;border:none;cursor:pointer;" onclick="document.getElementById('ACET').remove();">X</button></div></div>`), document.getElementById('runButton').addEventListener('click', () => { const code = document.getElementById('codeInput').value.trim(); if (!code) return alert("Enter code to run."); if (!confirm("Run this code?")) return; setTimeout(() => { try { code.startsWith("<") ? document.body.insertAdjacentHTML('beforeend', code) : eval(code); alert("Code executed."); } catch (e) { alert("Execution error: " + e.message); } }, Math.random() * 2000 + 500); }), document.getElementById('fetchButton').addEventListener('click', async () => { const url = prompt("URL to fetch data (requires CORS support):"); if (!url) return; try { const response = await fetch(url, { method: 'GET', mode: 'cors', credentials: 'include', headers: { 'User-Agent': Math.random() > 0.5 ? "Mozilla/5.0" : "Chrome/89.0", 'X-Requested-With': Math.random() > 0.5 ? "FetchAPI" : "XMLHttpRequest" } }); if (!response.ok) throw new Error("Response error: " + response.statusText); const data = await response.json(); alert("Fetched data:\n" + JSON.stringify(data, null, 2)); } catch (e) { alert("Fetch error: " + e.message); } });
