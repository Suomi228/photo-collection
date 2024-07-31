import React from 'react';
import Collection from './components/Collection';
import './index.css';
function App() {
  return (
    <div className="app">
        <h1>Моя коллекция фото</h1>
      <div className='top'>
        <ul className='tags'>
          <li>Испания</li>
          <li>Франция</li>
          <li>Германия</li>
          <li>Корея</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
