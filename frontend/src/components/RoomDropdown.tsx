import dropdown from "../assets/dropdown.png"

const rooms = ['Kitchen', 'Living room', 'Bedrooms', 'Bath','Garden'];

const RoomDropdown = () => (
  <div className=" p-1 rounded-lg text-white mt-2">
    <h2 className="text-sm mb-4">STAYS</h2>
    <ul className="space-y-4">
  {rooms.map((room, idx) => (
    <li
      key={idx}
      className="hover:text-blue-400 pb-2 flex justify-between items-center border-b border-slate-500 cursor-pointer"
    >
      <span className="text-sm">{room}</span>
      <img src={dropdown} alt="Dropdown" className="w-4 h-4" />
    </li>
  ))}
</ul>

  </div>
);

export default RoomDropdown;
