import { useState } from "react";

const RatingStars = ({ initialRating = 0 }) => {
  const [rating, setRating] = useState(initialRating);
  const [hoverRating, setHoverRating] = useState(0);

  const handleClick = (starValue) => {
    if (rating === starValue) {
      setRating(0);
    } else {
      setRating(starValue);
    }
  };

  const displayRating = hoverRating || rating;

  return (
    <div className="rating-container">
      <div style={{ display: "flex", gap: "8px", cursor: "pointer" }}>
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            data-testid={`star-${star}`}
            onClick={() => handleClick(star)}
            onMouseEnter={() => setHoverRating(star)}
            onMouseLeave={() => setHoverRating(0)}
            style={{ fontSize: "40px", userSelect: "none" }}
          >
            {displayRating >= star ? "★" : "☆"}
          </span>
        ))}
      </div>
      <div data-testid="rating-text" style={{ marginTop: "10px" }}>
        {rating > 0 ? `Sua nota: ${rating}/5` : "Nenhuma avaliação"}
      </div>
    </div>
  );
};

export default RatingStars;
