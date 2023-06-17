"use client"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Button from "./Button";
import Image from "next/image";

const MainSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: false,

  };

  return (
    <div>
      <Slider {...settings}>
        <div className="mainSlider">
          <Image
            src="/assets/images/sliders/Slider1.webp"
            width={1903}
            height={840}
            alt="slider"
            loading="eager"
            sizes="(max-width:991px) 100vw"
          />
          <div className="sliderContent slide1" aria-labelledby="learnbutton">
            <span className="sliderHeadingSpan">Banner Heading</span>
            <h1>Goes HEre</h1>
            <p className="sliderDesc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
              neque tenetur cum voluptas atque fugit, animi accusantium officia
              officiis natus illo deserunt vel! Ut eum dignissimos nisi,
              incidunt officia culpa!
            </p>
            <Button title="Click to Learn more" aria-label="Learn more" role="botton" id="learnbutton">
              Learn more
            </Button>
          </div>
        </div>
        <div className="mainSlider">
          <Image
            src="/assets/images/sliders/Slider2.webp"
            width={1903}
            height={840}
            alt="slider"
            sizes="(max-width:991px) 100vw"
          />
          <div className="sliderContent slide2" aria-labelledby="learnbutton">
            <span className="sliderHeadingSpan">Banner Heading</span>
            <h1>Goes HEre</h1>
            <p className="sliderDesc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
              neque tenetur cum voluptas atque fugit, animi accusantium officia
              officiis natus illo deserunt vel! Ut eum dignissimos nisi,
              incidunt officia culpa!
            </p>
            <Button title="Click to Learn more" aria-label="Learn more" role="botton" id="learnbutton">
            
              Learn more
            </Button>
          </div>
        </div>
        <div className="mainSlider" aria-labelledby="learnbutton">
          <Image
            src="/assets/images/sliders/Slider3.webp"
            width={1903}
            height={840}
            alt="slider"
            sizes="(max-width:991px) 100vw"
          />
          <div className="sliderContent slide3">
            <span className="sliderHeadingSpan">Banner Heading</span>
            <h1>Goes HEre</h1>
            <p className="sliderDesc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
              neque tenetur cum voluptas atque fugit, animi accusantium officia
              officiis natus illo deserunt vel! Ut eum dignissimos nisi,
              incidunt officia culpa!
            </p>
            <Button title="Click to Learn more" aria-label="Learn more" role="botton" id="learnbutton">Learn more</Button>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default MainSlider;
