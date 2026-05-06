const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 3000;
const VERSION_FILE = path.join(__dirname, "version.txt");

function getVersion() {
  try {
    return fs.readFileSync(VERSION_FILE, "utf8").trim();
  } catch {
    return "unknown";
  }
}

const server = http.createServer((req, res) => {
  const version = getVersion();
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Clumsy Golf Club CI/CD</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: sans-serif; min-height: 100vh; background: #f0f4f8;
           display: flex; flex-direction: column; align-items: center;
           justify-content: center; padding: 2rem 1rem; }
    @keyframes sway { 0%,100%{transform:rotate(-3deg)} 50%{transform:rotate(3deg)} }
    @keyframes blink { 0%,90%,100%{opacity:1} 95%{opacity:0} }
    @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-6px)} }
    @keyframes spin { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
    @keyframes wobble { 0%,100%{transform:rotate(0deg)} 25%{transform:rotate(-8deg)} 75%{transform:rotate(8deg)} }
    .sway { animation: sway 2.4s ease-in-out infinite; transform-origin: center bottom; }
    .blink { animation: blink 3s infinite; }
    .float { animation: float 3s ease-in-out infinite; }
    .spin { animation: spin 8s linear infinite; transform-origin: 50% 50%; }
    .wobble { animation: wobble 1.8s ease-in-out infinite; transform-origin: center bottom; }
    .card { background: white; border-radius: 16px; padding: 1.25rem 2rem;
            text-align: center; border: 1px solid #e2e8f0; margin-top: 1.5rem; }
    .label { font-size: 12px; color: #718096; text-transform: uppercase;
             letter-spacing: 0.05em; margin-bottom: 4px; }
    .version { font-size: 2.2rem; font-weight: 500; color: #1D9E75; line-height: 1.2; }
    .sublabel { font-size: 12px; color: #a0aec0; margin-top: 6px; }
  </style>
</head>
<body>

  <svg width="340" height="320" viewBox="0 0 340 320" style="overflow:visible;">
    <defs>
      <marker id="arr2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M2 1L8 5L2 9" fill="none" stroke="context-stroke" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </marker>
    </defs>

    <ellipse cx="170" cy="295" rx="130" ry="14" fill="#c0dd97" opacity="0.6"/>
    <line x1="290" y1="240" x2="290" y2="180" stroke="#888780" stroke-width="2"/>
    <polygon points="290,180 315,190 290,200" fill="#E24B4A"/>
    <circle cx="245" cy="286" r="10" fill="white" stroke="#D3D1C7" stroke-width="1"/>
    <circle cx="242" cy="283" r="2" fill="#D3D1C7" opacity="0.5"/>
    <circle cx="248" cy="288" r="1.5" fill="#D3D1C7" opacity="0.5"/>

    <g class="float" style="animation-delay:0.5s;">
      <rect x="58" y="210" width="28" height="32" rx="4" fill="#FAC775" stroke="#BA7517" stroke-width="1.5"/>
      <rect x="86" y="217" width="8" height="16" rx="3" fill="none" stroke="#BA7517" stroke-width="1.5"/>
      <rect x="60" y="210" width="24" height="7" rx="2" fill="white" opacity="0.7"/>
      <circle cx="67" cy="222" r="2" fill="white" opacity="0.6"/>
      <circle cx="74" cy="226" r="1.5" fill="white" opacity="0.5"/>
      <circle cx="80" cy="220" r="2" fill="white" opacity="0.6"/>
    </g>

    <g class="sway" style="transform-origin:170px 280px;">
      <line x1="155" y1="255" x2="145" y2="285" stroke="#534AB7" stroke-width="10" stroke-linecap="round"/>
      <line x1="175" y1="255" x2="182" y2="285" stroke="#534AB7" stroke-width="10" stroke-linecap="round"/>
      <ellipse cx="142" cy="288" rx="12" ry="6" fill="#2C2C2A"/>
      <ellipse cx="184" cy="288" rx="12" ry="6" fill="#2C2C2A"/>
      <rect x="140" y="185" width="55" height="72" rx="10" fill="#534AB7"/>
      <rect x="148" y="202" width="38" height="26" rx="3" fill="#2C2C2A"/>
      <rect x="150" y="204" width="34" height="20" rx="2" fill="#378ADD" opacity="0.8"/>
      <text x="153" y="212" font-size="5" fill="#5DCAA5" font-family="monospace">npm run</text>
      <text x="153" y="219" font-size="5" fill="#5DCAA5" font-family="monospace">deploy 🍺</text>
      <line x1="193" y1="200" x2="230" y2="250" stroke="#F5C4B3" stroke-width="10" stroke-linecap="round"/>
      <line x1="228" y1="248" x2="250" y2="290" stroke="#888780" stroke-width="3" stroke-linecap="round"/>
      <rect x="244" y="283" width="16" height="8" rx="2" fill="#444441"/>
      <line x1="142" y1="198" x2="112" y2="220" stroke="#F5C4B3" stroke-width="10" stroke-linecap="round"/>
      <circle cx="168" cy="165" r="32" fill="#F5C4B3"/>
      <ellipse cx="168" cy="138" rx="30" ry="12" fill="#2C2C2A"/>
      <circle cx="158" cy="162" r="8" fill="white"/>
      <circle cx="178" cy="160" r="8" fill="white"/>
      <circle cx="160" cy="164" r="4" fill="#2C2C2A" class="blink"/>
      <circle cx="180" cy="161" r="4" fill="#2C2C2A"/>
      <path d="M150 158 Q158 154 166 158" fill="#F0997B"/>
      <ellipse cx="150" cy="173" rx="8" ry="5" fill="#F09595" opacity="0.5"/>
      <ellipse cx="186" cy="171" rx="8" ry="5" fill="#F09595" opacity="0.5"/>
      <path d="M156 178 Q168 190 182 178" fill="none" stroke="#2C2C2A" stroke-width="2.5" stroke-linecap="round"/>
      <rect x="143" y="137" width="52" height="14" rx="7" fill="#EF9F27"/>
      <rect x="152" y="128" width="34" height="10" rx="5" fill="#EF9F27"/>
    </g>

    <g class="spin" style="transform-origin:169px 124px;">
      <line x1="169" y1="110" x2="169" y2="138" stroke="#BA7517" stroke-width="2"/>
      <line x1="155" y1="124" x2="183" y2="124" stroke="#BA7517" stroke-width="2"/>
    </g>

    <g class="wobble" style="animation-delay:0.3s; transform-origin:230px 140px;">
      <rect x="210" y="95" width="105" height="52" rx="10" fill="white" stroke="#D3D1C7" stroke-width="1"/>
      <polygon points="218,147 210,162 230,147" fill="white" stroke="#D3D1C7" stroke-width="1"/>
      <polygon points="220,146 211,160 231,146" fill="white"/>
      <text x="220" y="115" font-size="10" fill="#2C2C2A" font-family="sans-serif">it worksh on</text>
      <text x="220" y="129" font-size="10" fill="#2C2C2A" font-family="sans-serif">my masheen 🍺</text>
      <text x="240" y="141" font-size="9" fill="#888780" font-family="sans-serif">– dev, prob.</text>
    </g>

    <g class="float" style="animation-delay:0s;"><text x="100" y="152" font-size="14" fill="#EF9F27">★</text></g>
    <g class="float" style="animation-delay:0.7s;"><text x="120" y="138" font-size="10" fill="#F09595">★</text></g>
    <g class="float" style="animation-delay:1.4s;"><text x="108" y="168" font-size="8" fill="#5DCAA5">★</text></g>
  </svg>

  <div class="card">
    <div class="label">Clumsy Golf Club CI/CD</div>
    <div class="version">${version}</div>
    <div class="sublabel">current deployed version · still standing</div>
  </div>

</body>
</html>`;
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(html);
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT} — version ${getVersion()}`);
});
