// components/TrustedBy.jsx
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import facebook from '../../public/assets/facebook.webp';

const logos = [
  { src: facebook, alt: "Upstox" },
  { src: facebook, alt: "Gshiv" },
  { src: facebook, alt: "Blue Dart" },
  { src: facebook, alt: "Zoop" },
  { src: facebook, alt: "INDmoney" },
  { src: facebook, alt: "JioMart" },
  { src: facebook, alt: "Disney+ facebook" },
  { src: facebook, alt: "Disney+ facebook" },
  
];

const Brandpartners = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-gray-200 py-8">
    <div className=" w-[1200px] mx-auto">
      <h2 className="text-center text-4xl font-bold mb-8">
      Integrates easily with 60+ platforms
      </h2>
      <div className="grid grid-cols-8 gap-4">
        {logos.map((logo, index) => (
            <>
          <div key={index} className="justify-center">
            <Image className="w-full h-10" src={logo.src} alt={logo.alt} />
          </div>
          </>
        ))}
        
    </div>
    </div>
    </div>
  );
};

export default Brandpartners;
