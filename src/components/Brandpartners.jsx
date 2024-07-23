// components/TrustedBy.jsx
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import hotstar from '../../public/assets/hotstar.webp';
import bluedart from '../../public/assets/bluedart.webp'

const logos = [
  { src: hotstar, alt: "Upstox" },
  { src: bluedart, alt: "Gshiv" },
  { src: hotstar, alt: "Blue Dart" },
  { src: bluedart, alt: "Zoop" },
  { src: hotstar, alt: "INDmoney" },
  { src: bluedart, alt: "JioMart" },
  { src: hotstar, alt: "Disney+ Hotstar" },
  { src: bluedart, alt: "Disney+ Hotstar" },
  { src: hotstar, alt: "Disney+ Hotstar" },
  { src: bluedart, alt: "Disney+ Hotstar" },
  { src: hotstar, alt: "Disney+ Hotstar" },
  { src: bluedart, alt: "Disney+ Hotstar" },
];

const Brandpartners = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 7,
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
        25,000+ Businesses Across the Globe Trust Interakt
      </h2>
      <Slider {...settings}>
        {logos.map((logo, index) => (
          <div key={index} className="flex justify-center">
            <Image src={logo.src} alt={logo.alt} />
          </div>
        ))}
      </Slider>
    </div>
    </div>
  );
};

export default Brandpartners;
