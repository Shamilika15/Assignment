import {
  LuCctv,
} from 'react-icons/lu';
import { CiShop } from 'react-icons/ci';
import { GiHomeGarage } from "react-icons/gi";
import { BsUmbrella } from "react-icons/bs";
import { IoMdFlashlight } from "react-icons/io";
import DeviceCard from '../components/DeviceCard';
import Devices from '../components/Devices';
import GeneralCommands from '../components/GeneralCommands';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';


const Dashboard = () => {
  const devices = [
    { label: 'Entrance camera', status: 'Active', icon: <LuCctv /> },
    { label: 'Living room lights', status: 'Active', icon: <LuCctv /> },
    { label: 'Stairs camera', status: 'Deactivated at 22:47', icon: <CiShop /> },
    { label: 'Kitchen lights', status: 'Active', icon: <IoMdFlashlight /> },
    { label: 'Canopies', status: 'Deactivated at 21:00', icon: <BsUmbrella /> },
    { label: 'Garage door', status: 'Deactivated at 23:51', icon: <GiHomeGarage /> },
  ];

  return (
    <div className="flex h-screen bg-[#0f172a]">
      {/* Sidebar */}
      <Sidebar />
      {/* Main content area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="p-1 border-b  border-slate-500">
          <Header />
        </div>

        {/* Below header: Content + GeneralCommands side by side */}
        <div className="flex flex-1 overflow-hidden">
          {/* Main Content */}
          <div className="p-6 w-[75%] space-y-6 overflow-y-auto">
            <div className="flex items-center">
              <h1 className="text-2xl text-white font-semibold">Domestic Assistant</h1>
              <button className="bg-blue-500 text-white px-4 py-2 ml-4 rounded">+ Add Device</button>
            </div>
            <div className="flex gap-[7%] ">
              {/* Left: Devices */}
              <div className="w-[320px]">
                <Devices />
              </div>
              {/* Center: Device Cards */}
              <div className="grid grid-cols-2 p-4 gap-4 border border-white rounded-lg h-[500px] w-[600px] overflow-y-auto">                
                {devices.map((device, i) => (
                  <DeviceCard key={i} label={device.label} status={device.status} icon={device.icon} />
                ))}
              </div>
            </div>
          </div>
          {/* Right: GeneralCommands touching top-bottom-right */}
          <div className="w-[25%] bg-[#1e293b] p-4 overflow-y-auto ">
            <GeneralCommands />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
