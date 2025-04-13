import React, {useEffect, useState} from "react";
import TourCard from "./TourCard";
const url = "https://course-api.com/react-tours-project"; 

const Gallery = (tours, setTours, onRemove) => 
{
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    //function that'll fetch data from the link
    const fetchTours = async () =>{
    try{
        setLoading(true);
        const response = await fetch(url);
        //an error will show, if response isn't successful
        if (!response.ok) {throw new Error("Failed to fetch tours");}
        
        const data = await response.json();
        setTours(data);
        }catch (error)
        {console.log('Fetch error:', error);
        setError(true);
        }finally {
        setLoading(false);
        }};
    
    useEffect(() => {fetchTours();},[]);
        
    //will show data is still loading
    if (loading) 
    {
        return <h2>Loading...</h2>;
    }
    
    //error message will show if there's a problem with fetching data
    if (error)
    {
        return <h2>Something went wrong.</h2>;
    }
          
    //message + button will appear if there are no tours available 
    if (tours.length === 0)
    {
        return (
          <div className="no-tours">
            <h2>No tours left</h2>
            <button onClick={fetchTours}>
              Refresh
            </button>
          </div>
        );
    }
    return (
        <section className="gallery">
          {tours.map((tour) => (
            <TourCard
            //rendering each tour with a unique key
            key={tour.id}
            {...tour}
            onRemove={onRemove}
            />
          ))}
        </section>
      );
};
    
export default Gallery;