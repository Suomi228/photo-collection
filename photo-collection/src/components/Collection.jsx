import React from 'react'
import './Collection.css'
function Collection({name, images}) {


  const [photos, setPhotos] = React.useState([]);

    // const fetchPhotos = async ()=>{
    //   try {
    //       const response = await fetch(`https://66a9f428613eced4eba6f405.mockapi.io/api/v1/collections`)
    //       const data = await response.json()
    //       console.log(data)
    //       setPhotos(data);
    //   } catch (error) {
    //     console.error('Error fetching photos:', error)
    //   }
    // }

    // React.useEffect(() => {
    //     fetchPhotos()
    // }, [])
  return (
    <div className="collection">
      <img className="collection__big" src={images[0]} alt="Item" />
      <div className="collection__bottom">
        <img className="collection__mini" src={images[1]} alt="Item" />
        <img className="collection__mini" src={images[2]} alt="Item" />
        <img className="collection__mini" src={images[3]} alt="Item" />
      </div>
      <h4>{name}</h4>
    </div>
  )
}
export default Collection;
