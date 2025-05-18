

const Thermostat = () => (
  <div className=" p-2 mb-3 rounded-lg text-white">
    <h2 className="text-sm mb-2">THERMOSTAT</h2>
    <div className="flex justify-spacebetween gap-3">
      <div className="flex items-center w-[45%] flex-col border p-2  border-slate-500 rounded-md ">
       <span className="text-3xl">25°C</span>
       <span className="text-3xl text-gray-400">19°C</span>
      </div>
      <div className="flex items-center gap-5 w-[45%] flex-col ">
        <div className="flex gap-5">
          <button className="border px-3 py-1 rounded">+</button>
          <button className="border px-3 py-1 rounded">-</button>
        </div>
        <div className="flex gap-2 ml-6">
          <div>
            <label className="relative inline-flex items-center cursor-pointer">
           <input type="checkbox" className="sr-only peer" defaultChecked />
           <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:bg-blue-500 transition-colors"></div>
           <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform peer-checked:translate-x-5"></div>
          </label>
           </div>
          <span className="text-sm">Automatic <br/> regulation</span>
        </div>
      </div>
    </div>
  </div>
);

export default Thermostat;
