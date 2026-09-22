import { useState } from "react";
import { ImageCategory } from "../../assets/gallary";
import galleryStyle from "./Gallery.module.css";
import { Link } from "react-router-dom";


export default function Gallery() {
  const [showMore, setShowMore] = useState(false);

  const visibleImages = showMore ? ImageCategory : ImageCategory.slice(0, 4);

  return (
    <>
      <div className="row g-3">
        {visibleImages.map((img, index) => (
          <div key={index} className ="col-md-6">
            <div
              className={galleryStyle.card}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={img}
                alt={`Gallery image ${index + 1}`}
                className={`w-100 ${galleryStyle.cardImg}`}
                style={{ height: "400px", objectFit: "cover" }}
              />

              <div className={`${galleryStyle.overlay}`}>
                <div className={galleryStyle.overlayText}>
                  <div className={`${galleryStyle.overlayUpText} font-secondary`}>
                    <Link to={'#'}>Work 02</Link>
                    <p>Animation</p>
                  </div>
                  <div className={galleryStyle.overlayLinks}>
                    <Link to={'#'}><i class="fa-solid fa-share-nodes"></i></Link>
                    <Link to={'#'}><i class="fa-regular fa-eye"></i>100</Link>
                    <Link to={'#'}><i class="fa-regular fa-heart"></i>45</Link>
                  </div>
                  
                </div>
              </div>
            </div>
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