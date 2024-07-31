import React from 'react'

function Collection() {

    const fetchPhotos = async ()=>{
      try {
          const response = await fetch(`https://66a9f428613eced4eba6f405.mockapi.io/api/v1/collections`)
          const data = await response.json()
          console.log(data)
      } catch (error) {
        console.error('Error fetching photos:', error)
      }
    }

    React.useEffect(() => {
        fetchPhotos()
    }, [])
  return (
    <div>
      <p>Hello world!</p>
    </div>
  )
}
export default Collection;
