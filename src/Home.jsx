
import image1 from "./5.png";
import image2 from "./6.png";
import image3 from "./7.png";
import image4 from "./8.png";
import image5 from "./9.png";
import image6 from "./11.png";

function Home() {
  return (
      <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="0" className="active"></button>
          <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="2"></button>
          <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="3"></button>
          <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="4"></button>
          <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="5"></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={image1} className="d-block w-100" alt="food 1" />
            <div className="carousel-caption">
              <h1>Welcome to FoodieVerse</h1>
              <p>Explore diverse flavors from around the world</p>
            </div>
          </div>

          <div className="carousel-item">
            <img src={image2} className="d-block w-100" alt="food 2" />
          </div>

          <div className="carousel-item">
            <img src={image3} className="d-block w-100" alt="food 3" />
          </div>

          <div className="carousel-item">
            <img src={image4} className="d-block w-100" alt="food 4" />
          </div>

          <div className="carousel-item">
            <img src={image5} className="d-block w-100" alt="food 5" />
          </div>

          <div className="carousel-item">
            <img src={image6} className="d-block w-100" alt="food 6" />
          </div>
        </div>
      </div>
  );
}

export default Home;