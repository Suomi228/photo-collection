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
  const [page, setPage] = React.useState(0);
  React.useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      const category = categoryId ? `category=${categoryId}` : "";
      const url = `https://66a9f428613eced4eba6f405.mockapi.io/api/v1/collection?page=`;
      try {
        const response = await fetch(`${url}${page}&limit=3&${category}`);
        const data = await response.json();
        setCollections(data);
      } catch (error) {
        console.error("Error fetching photos:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [categoryId, page]);
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
        {[...Array(5)].map((_, i) => (
          <li
            key={i}
            className={i + 1 === page ? "active" : ""}
            onClick={() => setPage(i + 1)}
          >
            {i + 1}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
