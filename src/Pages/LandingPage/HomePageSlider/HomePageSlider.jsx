import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomePageSlider = () => {


    const data = [
        {
            image:'/slide1.png'
        },
        {
            image:'/slide2.png'
        },
        {
            image:'slide3.png'
        },
        {
            image:'/slide1.png'
        },
        {
            image:'/slide2.png'
        },
        {
            image:'slide3.png'
        },
    ]




  // Slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 5, // Adjust based on screen size
    slidesToScroll: 1,
    centerMode: false, // Optional, depending on desired behavior
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div style={{width:'100%', overflow:'hidden'}}> {/* Adds padding to ensure no overflow */}
      <Slider {...settings}>
        {data.map((val, index) => (
          <div key={index} style={{}}>
            <div style={{display:'flex', justifyContent:'center', alignItems:'center', marginRight:'0.5rem'}}>
            <img
              src={val.image}
              alt={`Slide ${index + 1}`}
              style={{ width: '100%', height:'20rem', }} // Ensure images scale properly
            />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HomePageSlider;
