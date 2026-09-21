import { Carousel } from "bootstrap/dist/js/bootstrap.bundle.min";
import { useEffect } from "react";
import carouselImg1 from "../../assets/img_bg_1-PzvG2r05.jpg";
import carouselImg2 from "../../assets/img_bg_2-DzCs5o-0.jpg";
import { Link } from "react-router-dom";
import homeStyle from "./Home.module.css";

export default function Home() {
  useEffect(() => {
    const element = document.querySelector("#carouselExampleFade");

    const carousel = new Carousel(element, {
      interval: 3000,
      ride: "carousel",
      pause: false,
    });

    carousel.cycle();

    return () => {
      carousel.dispose();
    };
  }, []);
  return (
    <>
      <div id="carouselExampleFade" className="carousel slide carousel-fade">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={carouselImg1}
              className={`d-block w-100 ${homeStyle.carousel_img}`}
              alt="Slide 1"
              style={{
                height: "100vh",
                objectPosition: "center 97%",
                objectFit: "cover",
              }}
            />
            <div className={`position-absolute container d-flex flex-column justify-content-center ${homeStyle.carousel_content}`}>
              <div className={`${homeStyle.carousel_h} font-primary`}>
                <p className="mb-0">Hi!</p>
                <p>Im Jackson</p>
              </div>
              <p className={`font-secondary ${homeStyle.content_description}`}>
                100% html5 bootstrap templates Made By <Link>Colorlib.com</Link>
              </p>
              <button className="btn btn-outline-dark text-uppercase font-secondary align-self-start">Download cv <i className="fa-solid fa-download"></i></button>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src={carouselImg2}
              className="d-block w-100 position-relative"
              alt="Slide 2"
              style={{
                height: "100vh",
                objectPosition: "center 97%",
                objectFit: "cover",
              }}
            />
            <div className={`position-absolute container d-flex flex-column justify-content-center ${homeStyle.carousel_content}`}>
              <div className={`${homeStyle.carousel_h} font-primary`}>
                <p className="mb-0">I am</p>
                <p>a Designer</p>
              </div>
              <p className={`font-secondary ${homeStyle.content_description}`}>
                100% html5 bootstrap templates Made By <Link>Colorlib.com</Link>
              </p>
              <button className="btn btn-outline-dark text-uppercase font-secondary align-self-start">View Portfolio <i className="fa-solid fa-briefcase"></i></button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
