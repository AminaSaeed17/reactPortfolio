import { useState } from "react";
import { ImageCategory } from "../../assets/gallary";

export default function Gallery() {
  const [showMore, setShowMore] = useState(false);

  const visibleImages = showMore
    ? ImageCategory
    : ImageCategory.slice(0, 4);

  return (
    <>
      <div className="row g-3">
        {visibleImages.map((img, index) => (
          <div key={index} className="col-md-6">
            <img
              src={img}
              alt={`Gallery image ${index + 1}`}
              className="w-100"
              style={{
                height: "250px",
                objectFit: "cover",
              }}
            />
          </div>
        ))}
      </div>

      {!showMore && (
        <button
          className="btn btn-primary mt-4"
          onClick={() => setShowMore(true)}
        >
          Show More
        </button>
      )}
    </>
  );
}