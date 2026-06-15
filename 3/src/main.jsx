import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

function App() {
  return (
    <main className="app">
      <section className="panel">
        <span className="badge">Build required</span>
        <h1>Unbuilt React app</h1>
        <p>This fixture needs compute build mode before it can publish dist.</p>
      </section>
    </main>
  );
}

createRoot(document.querySelector('#root')).render(<App />);
