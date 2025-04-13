
import React, { useState } from "react"; //imports tools from React

const TourCard = ({ id, name, info, image, price, onRemove }) => {
  const [readMore, setReadMore] = useState(false);
  
  return (
    <article className="tour-card">
      {/* Tour images*/}
      <img src={image} alt={name} className="tour-img" />
      
      <div className="tour-info">
        <div className="tour-header">
          {/* Tour Info: Name and Prices*/}
          <h2>{name}</h2>
          <h3 className="tour-price">${price}</h3>
        </div>
        
        {/* More Tour Information is shown*/}
        <p>
          {readMore ? info : `${info.substring(0, 150)}...`}
          {/* ShowMore Button for longer description  */}
          <button className="read-more" onClick={() => setReadMore(!readMore)}>
            {readMore ? "Show Less" : "Read More"}
          </button>
        </p>
        
        {/* Remove Button to remove tours  */}
        <button className="not-interested" onClick={() => onRemove(id)}>
          Not Interested
        </button>
      </div>
    </article>
  );
}

export default TourCard;