import { useState } from 'react'

import './App.css'

function App() {
const [svgCode, setSvgCode] = useState('<svg width="200" height="200">\n\t<circle cx="100" cy="100" r="80" fill="blue" />\n</svg>');

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <textarea 
        value={svgCode} 
        onChange={(e) => setSvgCode(e.target.value)} 
        style={{ width: '100%', boxSizing: 'border-box', fontFamily: 'monospace', fontSize: '14px', padding: '10px' }} 
      />
      <div style={{ padding: '20px', background: '#f0f0f0' }}>
        <div dangerouslySetInnerHTML={{ __html: svgCode }} />
      </div>
    </div>
  );
}

export default App
