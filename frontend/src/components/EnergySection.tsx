

const EnergySection = () => (
  <div className=" p-2 text-white">
    <div className="flex gap-8">
      <h2 className="text-sm font-bold mb-2">ENERGY</h2>
    <p className="text-sm text-blue-500 mb-2">Current Consumption - 12.4 kWh</p>
    </div>
    <div className="space-y-4">
      {/* Toggle 1 - Solar Panels */}
      <div className="flex items-center justify-between">
        <span>Solar Panels</span>
        <label className="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" className="sr-only peer" defaultChecked />
          <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:bg-blue-500 transition-colors"></div>
          <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform peer-checked:translate-x-5"></div>
        </label>
      </div>

      {/* Toggle 2 - Power Reserve */}
      <div className="flex items-center justify-between">
        <span>Power Reserve</span>
        <label className="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" className="sr-only peer" />
          <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:bg-blue-500 transition-colors"></div>
          <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform peer-checked:translate-x-5"></div>
        </label>
      </div>
    </div>
  </div>
);

export default EnergySection;
