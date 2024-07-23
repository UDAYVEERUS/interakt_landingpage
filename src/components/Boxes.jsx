import React from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import Industry from '../../public/assets/industy.webp'

const Boxslider = () => {
  const industries = [
    {
      title: 'Marketing Agencies',
      description: [
        'Generate more leads and sales for your clients',
        'Enable 24X7 customer support on WhatsApp',
        'Send personalized notifications to drive purchase interest',
      ],
      image: Industry,
    },
    {
      title: 'Automotive Industry',
      description: [
        'Promote your offering with WhatsApp broadcast',
        'Support your customers 24×7 at scale',
        'Showcase your products on WhatsApp storefront',
      ],
      image: Industry,
    },
    {
      title: 'Real Estate',
      description: [
        'Schedule property visits & send automated reminders',
        'Automate FAQs for fast-tracking property deals',
        'Share property details catalog via PDF files',
      ],
      image: Industry,
    },
    {
      title: 'Real Estate',
      description: [
        'Schedule property visits & send automated reminders',
        'Automate FAQs for fast-tracking property deals',
        'Share property details catalog via PDF files',
      ],
      image: Industry,
    },
    {
      title: 'Real Estate',
      description: [
        'Schedule property visits & send automated reminders',
        'Automate FAQs for fast-tracking property deals',
        'Share property details catalog via PDF files',
      ],
      image: Industry,
    },
    {
      title: 'Real Estate',
      description: [
        'Schedule property visits & send automated reminders',
        'Automate FAQs for fast-tracking property deals',
        'Share property details catalog via PDF files',
      ],
      image: Industry,
    },
    {
      title: 'Real Estate',
      description: [
        'Schedule property visits & send automated reminders',
        'Automate FAQs for fast-tracking property deals',
        'Share property details catalog via PDF files',
      ],
      image: Industry,
    },
    {
      title: 'Real Estate',
      description: [
        'Schedule property visits & send automated reminders',
        'Automate FAQs for fast-tracking property deals',
        'Share property details catalog via PDF files',
      ],
      image: Industry,
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
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
    <div className="bg-gray-100 py-10">
      <h2 className="text-3xl font-bold text-center mb-10">Built for any Industry</h2>
      <div className="max-w-6xl mx-auto">
        <Slider {...settings}>
          {industries.map((industry, index) => (
            <div key={index} className="px-2 grid grid-cols-3 w-[1200px] mx-auto">
              <div className="bg-[#D3F4E8] p-2 rounded-2xl shadow-md h-[500px]">
                <div className="justify-center mb-4">
                  <Image src={industry.image} alt={industry.title} className="w-full object-cover" />
                </div>
                <h3 className="text-2xl font-semibold text-left mb-4">{industry.title}</h3>
                <ul className="list-disc list-inside space-y-2">
                  {industry.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                {industry.stats && (
                  <p className="mt-4 text-sm text-gray-700 text-center">{industry.stats}</p>
                )}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Boxslider;
