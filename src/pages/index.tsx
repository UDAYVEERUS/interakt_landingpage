import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from '../components/Hero'
import Features from '../components/Features'
import Brandpartners from '../components/Brandpartners'
import Formtrail from '../components/Formtrail'
import Boxslider from '../components/Boxes'
import Plateform from '../components/Plateform'

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
   <div>
    <Hero />
    <Features />
    <Brandpartners />
    <Formtrail />
    <Boxslider />
    <Plateform />
   </div>
  );
}
