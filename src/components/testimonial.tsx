import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Reviews = () => {
  const data = [
    {
      name: "Jon William",
      des: "Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.",
      city: "Edusity, USA",
    },
    {
      name: "Jon William",
      des: "Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.",
      city: "Edusity, USA",
    },
    {
      name: "Jon William",
      des: "Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.",
      city: "Edusity, USA",
    },
    {
      name: "Jon William",
      des: "Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.",
      city: "Edusity, USA",
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true // Enable arrows for navigation
  };
  return (
    <>
<div className="py-10 "> 
<Slider {...settings} className="custom-slider-gap" >

{data.map((d:any, idx:number)=>(
    <section
      key={idx}
      className="bg-white rounded-2xl shadow-xl mx-4 p-6 flex flex-col gap-4 min-h-[220px] border border-gray-100 transition-transform duration-200 hover:scale-105"
    >
      <div className="flex items-center gap-4 mb-2">
        <img src="/user1.png" alt="" className="rounded-full border-4 border-blue-900 h-14 w-14 object-cover" />
        <div>
          <p className="font-bold text-blue-900">{d.name}</p>
          <p className="text-sm text-gray-400">{d.city}</p>
        </div>
      </div>
      <p className="text-gray-600 font-medium text-base leading-relaxed">{d.des}</p>
    </section>
))}
    </Slider>
    </div>
    </>
  );
};

export default Reviews;
