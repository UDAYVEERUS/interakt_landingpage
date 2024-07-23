import Image from "next/image";
import { Inter } from "next/font/google";
import Scheenshot from "../../public/assets/1.webp";
import Group from "../../public/assets/Group-37149.webp";

const Testimonials = () => {
  return (
    <div>
      <div className="container w-[1200px] mx-auto flex mt-10">
        <div className="w-[600px]">
          <Image src={Scheenshot} className="h-20 w-24" alt="" />
          <h1 className="text-4xl font-semibold -mt-8 italic">
            We were able to increase our revenue from the first Diwali to the
            second Diwali to approximately 4× of what we did and we couldn’t
            have done this without the help of Interakt.
          </h1>
          <h2 className="text-[#05A68B] text-3xl font-bold">Yash Banage</h2>
          <h3 className="text-black text-2xl font-semibold">
            Co-founder, Bombay Sweet Shop
          </h3>
        </div>
        <div className="w-[600px]">
          <Image src={Group} alt="" />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 container w-[1200px] mx-auto mt-10">
        <div className="border-2 border-[#FAB534] p-6 rounded-xl justify-center items-center">
          <h1 className="text-5xl text-gray-800 font-bold text-center">1.56L</h1>
          <p className="text-[22px] mt-2 text-center">revenue generated in a day</p>
        </div>
        <div className="border-2 border-[#FAB534] p-6 rounded-xl justify-center items-center">
          <h1 className="text-5xl text-gray-800 font-bold text-center">40%</h1>
          <p className="text-[22px] mt-2 text-center">customer queries handled by Boondi – the bot</p>
        </div>
        <div className="border-2 border-[#FAB534] p-6 rounded-xl justify-center items-center">
          <h1 className="text-5xl text-gray-800 font-bold text-center">4X</h1>
          <p className="text-[22px] mt-2 text-center">increase in revenue since onboarding with Interakt</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
