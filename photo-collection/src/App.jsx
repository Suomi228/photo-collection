import React from "react";
import Collection from "./components/Collection";
import "./index.css";
function App() {
  return (
    <div className="app">
      <h1>Моя коллекция фото</h1>
      <div className="top">
        <ul className="tags">
          <li>Испания</li>
          <li>Франция</li>
          <li>Германия</li>
          <li>Корея</li>
        </ul>
      </div>
      <div className="content">
        <Collection
          name="Испания"
          images={[
            "https://i.natgeofe.com/k/e800ca90-2b5b-4dad-b4d7-b67a48c96c91/spain-madrid_16x9.jpg?w=1200",
            "https://images.unsplash.com/photo-1476786516785-c3ff2dac9bbf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1558642084-fd07fae5282e?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1504019347908-b45f9b0b8dd5?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          ]}
        />
      </div>
    </div>
  );
}

export default App;
