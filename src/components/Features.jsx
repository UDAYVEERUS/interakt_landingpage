// components/Features.jsx
import { FaCheckCircle, FaMobileAlt, FaUsers, FaCog, FaChartBar, FaLock } from 'react-icons/fa';

const features = [
  { icon: FaCheckCircle, title: "Get Green Tick Verified" },
  { icon: FaMobileAlt, title: "One time & recurring Campaigns on WhatsApp" },
  { icon: FaUsers, title: "Shared Team Inbox with auto chat assignment" },
  { icon: FaCog, title: "Build your own Workflows" },
  { icon: FaChartBar, title: "Campaign & Agent Analytics" },
  { icon: FaLock, title: "Simplicity for SMBs with Enterprise grade Scale & Security" },
];

const Features = () => {
  return (
    <div className='bg-green-100'>
    <div className="flex justify-center space-x-4 bg-green-100 p-6 w-[1200px] mx-auto">
      {features.map((feature, index) => (
        <div key={index} className="flex flex-col items-center text-center">
          <feature.icon className="text-4xl text-green-600 mb-2" />
          <p className="text-md font-semibold">{feature.title}</p>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Features;
