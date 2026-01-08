import { useState } from 'react'

import './App.css'

const defaultSvg = `<svg width="200" height="200">
\t<circle cx="100" cy="100" r="80" fill="blue" />
</svg>`;

function App() {
  const [svgCode, setSvgCode] = useState(() => {
    return localStorage.getItem('svgCode') || defaultSvg;
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setSvgCode(value);
    localStorage.setItem('svgCode', value);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <textarea 
        value={svgCode} 
        onChange={handleChange} 
        style={{ width: '100%', boxSizing: 'border-box', fontFamily: 'monospace', fontSize: '14px', padding: '10px' }} 
      />
      <div style={{ padding: '20px', background: '#f0f0f0' }}>
        <div dangerouslySetInnerHTML={{ __html: svgCode }} />
      </div>
    </div>
  );
}

export default App
