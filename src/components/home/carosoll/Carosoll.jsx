
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import slider from '../../../assets/image/slider.webp'
import slider1 from '../../../assets/image/slider1.webp'
import slider2 from '../../../assets/image/slider2.webp'
import slider3 from '../../../assets/image/slider3.webp'
import slider4 from '../../../assets/image/slider4.webp'



const Carosoll = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000, // adjust the speed as needed
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          }
        ]
      };
    
      return (
        <div>
          <h2>Responsive Carousel</h2>
          <Slider {...settings}>
            <div>
              <img src="image1.jpg" alt="Slide 1" />
            </div>
            <div>
              <img src="image2.jpg" alt="Slide 2" />
            </div>
            <div>
              <img src="image3.jpg" alt="Slide 3" />
            </div>
            {/* Add more slides as needed */}
          </Slider>
        </div>
      );
    };
    
export default Carosoll;