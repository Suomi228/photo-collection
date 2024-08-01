import React from "react";
import Collection from "./components/Collection";
import "./index.css";

const categories = [
  { name: "Все" },
  { name: "Spain" },
  { name: "France" },
  { name: "Germany" },
  { name: "Korea" },
];
function App() {
  const [collections, setCollections] = React.useState([]);
  const [categoryId, setCategoryId] = React.useState(1);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
  setIsLoading(true);
  const fetchData = async () => {
    try {
      const response = await fetch(`
        https://66a9f428613eced4eba6f405.mockapi.io/api/v1/collections?${categoryId ? `id=${categoryId}` : ''}`);
      const data = await response.json();
      setCollections(data);
    } catch (error) {
      console.error('Error fetching photos:', error);
    } finally {
      setIsLoading(false);
    }
  };

  fetchData();
}, [categoryId]);
  return (
    <div className="app">
      <h1>Моя коллекция фото</h1>
      <div className="top">
        <ul className="tags">
          {categories.map((obj, i) => (
            <li
              onClick={() => setCategoryId(i)}
              className={categoryId === i ? "active" : ""}
              key={obj.name}
            >
              {obj.name}
            </li>
          ))}
        </ul>
      </div>
      {isLoading ? (
        <h2>Загрузка...</h2>
      ) : (
        <div className="content">
          {collections.map((obj, index) => (
            <Collection key={index} name={obj.name} images={obj.photos} />
          ))}
        </div>
      )}
      <ul className="pagination">
        <li>1</li>
        <li className="active">2</li>
        <li>3</li>
      </ul>
    </div>
  );
}

export default App;
