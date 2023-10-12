import React, { useState } from 'react';
import './App.css';

function WordCounter() {
  const [text, setText] = useState('');
  const words = text.split(/\s+/).filter(word => word !== '');

  return (
    <div>
      <textarea
        placeholder="Type or paste your text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows="5"
        cols="50"
      />
      <p>
        Word Count: {words.length} 
      </p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Responsive Word Counter</h1>
      </header>
      <main>
        <WordCounter />
      </main>
    </div>
  );
}

export default App;
