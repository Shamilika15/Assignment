
import { CiLock } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineWidgets } from "react-icons/md";

const Sidebar = () => {
  const items = [
    { icon: <MdOutlineWidgets /> },
    { icon: <CiLock /> },
    { icon: <IoSettingsOutline /> }
  ];

  return (
    <aside className=" h-full w-15 p-0 border-r  border-slate-500 text-white">
      <div className='border-b  border-slate-500 h-[57px]  mb-8 '>
        <div className="text-2xl p-2 pt-4  font-bold ">GS</div>
      </div>
      <ul className="flex flex-col items-center space-y-4 ">
        {items.map((item, idx) => (
          <li key={idx} className={`flex items-center rounded-sm space-x-3 hover:text-blue-400 cursor-pointer ${
              idx === 0 ? 'bg-blue-500' : ''
            } `}>
            <span className="text-lg p-1">{item.icon}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
