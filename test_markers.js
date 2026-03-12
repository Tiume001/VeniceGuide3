const fs = require('fs');
const jsdom = require('/tmp/jsdom-test/node_modules/jsdom');
const { JSDOM } = jsdom;

const html = fs.readFileSync('index.html', 'utf8');

const dom = new JSDOM(html, {
    url: "file:///Users/mattiascarpa/Desktop/Hema/index.html",
    runScripts: "dangerously",
    resources: "usable"
});

// Wait for scripts to load
dom.window.document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        try {
            console.log("Map Toggle Btn:", !!dom.window.document.getElementById('map-toggle'));
            
            // Simulate Map Toggle Click
            const btn = dom.window.document.getElementById('map-toggle');
            if (btn) btn.click();

            setTimeout(() => {
                const mapKeys = dom.window.Object.keys(dom.window.map ? dom.window.map._layers || {} : {});
                console.log("Map initialized:", !!dom.window.map);
                console.log("Markers created:", dom.window.markers ? dom.window.markers.length : 0);
            }, 1000);
        } catch(e) {
            console.error(e);
        }
    }, 1000);
});
