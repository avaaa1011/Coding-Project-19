import React, {useEffect, useState} from "react";
import TourCard from "./TourCard";

const Gallery = (tours, setTours, onRemove) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    //function that'll fetch data from the link
    const fetchTours = async () => 
    {
        try 
        {
            const response = await fetch("https://course-api.com/react-tours-project");
            if (!response.ok) { throw new Error("Failed to fetch tours");}
            const data = await response.json();

            setTours(data); 
        } catch (error) {
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    //Calling the API
    useEffect(() => 
    {
        fetchTours();
    }, []); 

    //Rendering loading state
    if (loading) {
        return <h2>Loading...</h2>;
    }

    //Rendering error state
    if (error) {
        return <h2>Something went wrong...</h2>;
    }

    //Rendering if there are no tours 
    if (tours.length === 0) {
        return (
            <div className="no-tours">
                <h2>No Tours Available</h2>
                <button onClick={fetchTours()} className="refresh-btn">Refresh</button>
            </div>
        );
    }

     //Rendering tour lists
     return (
        <section className="tour-list">
            {tours.map((tour) => {
                return (
                    <TourCard
                        key={tour.id} 
                        {...tour} 
                        onRemove={onRemove} />
                );
            })}
        </section>
    );
};

export default Gallery;