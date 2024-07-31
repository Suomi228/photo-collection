import React from "react";
import Collection from "./components/Collection";
import "./index.css";
function App() {
  const [collections, setCollections] = React.useState([]);
  const fetchPhotos = async ()=>{
    try {
        const response = await fetch(`https://66a9f428613eced4eba6f405.mockapi.io/api/v1/collections`)
        const data = await response.json()
        console.log(data)
        setCollections(data);
    } catch (error) {
      console.error('Error fetching photos:', error)
    }
  }

  React.useEffect(() => {
      fetchPhotos()
  }, [])
  return (
    <div className="app">
      <h1>Моя коллекция фото</h1>
      <div className="top">
        <ul className="tags">
          <li className="active">Все</li>
          <li>Испания</li>
          <li>Франция</li>
          <li>Германия</li>
          <li>Корея</li>
        </ul>
      </div>
      <div className="content">
        {collections.map((obj, index)=>
        <Collection key = {index} name={obj.name}
        images= {obj.photos}/>)}
      </div>
      <ul className="pagination">
        <li>1</li>
        <li className="active">2</li>
        <li>3</li>
      </ul>
    </div>
  );
}

export default App;
