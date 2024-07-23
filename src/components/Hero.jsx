import Image from "next/image";
import { Inter } from "next/font/google";
import Scheenshot from "../../public/assets/Screenshot.webp";
import Meta from "../../public/assets/Meta.webp";
import Group from "../../public/assets/group.webp";

const Hero = () => {
  return (
    <div>
      <div className="bg-[#FAB534] h-10 flex justify-center items-center">
        <h1 className="text-center font-bold">
          Get Started @799/month Annual plans only 🚀
        </h1>
      </div>
      <div className="container w-[1200px] mx-auto flex mt-10">
        <div className="w-[600px]">
          <Image src={Scheenshot} alt="" />
          <h1 className="text-5xl font-semibold mt-4">
            Transform Conversations into Conversions with WhatsApp <span className="text-[#05A68B]">Commerce</span>
          </h1>
          <Image className="h-16 w-24" src={Meta} alt="" />
          <p className="text-xl font-semibold">
            Integrate effortlessly with the WhatsApp Business API. The only
            full-stack platform to offer a seamless customer experience & grow
            your business on WhatsApp.
          </p>
          <button className="bg-[#05A68B] text-white px-8 py-4 mt-4 font-bold">
            Start Free Trail
          </button>
        </div>
        <div className="w-[600px]">
          <Image src={Group} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Hero