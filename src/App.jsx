import { useState } from 'react'
import Gallery from './components/Gallery'
import './styles/styles.css'

function App() 
{
  const [tours, setTours] = useState([])

  const onRemove = (id) => {
    setTours((prevTours) => prevTours.filter((tour) => tour.id !== id))
  }

  return (
    <>
      <h1>Tour App</h1>
      <Gallery tours={tours} setTours={setTours} onRemove={onRemove} />
    </>
  )
}

export default App
