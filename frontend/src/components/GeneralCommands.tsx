import React from 'react';
import Thermostat from './Thermostat';
import EnergySection from './EnergySection';
import RoomDropdown from './RoomDropdown';

const GeneralCommands: React.FC = () => {
  return (
    <div className="bg-[#1e293b]text-white p-1 h-full rounded-xl w-full max-w-xs">
      <h2 className="text-lg text-white font-semibold border-b  border-slate-500 pb-2 mb-2">General Commands</h2>
      <div className="flex flex-col space-y-2">
        <div className='border-b  border-slate-500'>
          <Thermostat />
        </div>
        <div className='border-b pb-4 pt-2  border-slate-500'>
          <EnergySection />
        </div> 
        <RoomDropdown />
      </div>
    </div>
  );
};

export default GeneralCommands;
