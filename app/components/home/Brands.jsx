"use client"
import Image from 'next/image';
import Slider from 'react-slick'

const Brands = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 5000,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className='brands'>
      <Slider {...settings}>
        <div className='brand link'>
          <Image width={300} height={300} src="/assets/images/brands/Barret.png" alt='brand' loading="eager" />
        </div>
        <div className='brand link'>
          <Image width={300} height={300} src="/assets/images/brands/battle.png" alt='brand' />
        </div>
        <div className='brand link'>
          <Image width={300} height={300} src="/assets/images/brands/beretta.png" alt='brand' />
        </div>
        <div className='brand link'>
          <Image width={300} height={300} src="/assets/images/brands/browning.png" alt='brand' />
        </div>
        <div className='brand link'>
          <Image width={300} height={300} src="/assets/images/brands/Glock.png" alt='brand' />
        </div>
        <div className='brand link'>
          <Image width={300} height={300} src="/assets/images/brands/henry.png" alt='brand' />
        </div>
        <div className='brand link'>
          <Image width={300} height={300} src="/assets/images/brands/hk.png" alt='brand' />
        </div>
        <div className='brand link'>
          <Image width={300} height={300} src="/assets/images/brands/magpul.png" alt='brand' />
        </div>
        <div className='brand link'>
          <Image width={300} height={300} src="/assets/images/brands/rock-island.png" alt='brand' />
        </div>
      </Slider>
    </div>
  )
}

export default Brands