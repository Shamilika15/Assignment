import React from 'react';
import {
  FiHome,
  FiSun,
  FiCamera,
  FiWifi,
  FiCpu,
  FiThermometer,
} from 'react-icons/fi';

const devices = [
  { icon: <FiHome />, label: 'House exterior' },
  { icon: <FiSun />, label: 'Lights' },
  { icon: <FiCamera />, label: 'Cams' },
  { icon: <FiWifi />, label: 'Router' },
  { icon: <FiCpu />, label: 'Home appliances' },
  { icon: <FiThermometer />, label: 'Air conditioning' },
];

const Devices: React.FC = () => {
  return (
    <div className="bg-[#101e37] width-full h-full text-white w-[80%%] p-4 rounded-xl ">
      <h2 className="text-lg font-semibold mb-4 uppercase">Devices</h2>
      <ul className="space-y-2">
        {devices.map((device, index) => (
          <li
            key={index}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-blue-500 border  border-slate-500 cursor-pointer ${
              index === 0 ? 'bg-blue-500' : ''
            }`}
          >
            <span className="text-xl">{device.icon}</span>
            <span className="text-sm">{device.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Devices;
