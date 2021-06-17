import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ProductCarousel = () => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      showIndicators={false}
      showThumbs={false}
      interval={5000}
      className="mt-2"
    >
      <div>
        <img src="https://res.cloudinary.com/dszaezq3w/image/upload/c_scale,h_250,w_970/v1623756920/Banners/2707_wnq4ct.jpg" />
      </div>
      <div>
        <img src="https://res.cloudinary.com/dszaezq3w/image/upload/c_scale,h_250,w_970/v1623756907/Banners/1641_ipa6qw.jpg" />
      </div>
      <div>
        <img src="https://res.cloudinary.com/dszaezq3w/image/upload/c_scale,h_250,w_970/v1623756932/Banners/1259_sfrhdb.jpg" />
      </div>
    </Carousel>
  );
};

export default ProductCarousel;
