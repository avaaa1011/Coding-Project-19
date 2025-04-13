import {useState} from 'react';

const TourCard = ({id, name, info, price, image, onRemove}) =>
{
    const [isReadMore, setIsReadMore] = useState(false);
 
    return 
    (
        <article className="tour-card">
            {/* Tour Info */}
            <h3>{name}</h3>
            <img src={image} alt={name} className="tour-image" />
            <p className="tour-price">${price}</p>

            <p className="tour-info">
                {isReadMore ? info : `${info.substring(0, 50)}...`}
                <button onClick={() => setIsReadMore(!isReadMore)} className="read-more-btn">
                    {isReadMore ? "Show Less" : "Read More"}
                </button>
            </p>

            {/* Button to remove the tour card */}
            <button onClick={() => onRemove(id)} className="remove-btn">
                Not Interested
            </button>
        </article>
    )
}
export default TourCard; 