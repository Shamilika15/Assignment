import { CiSearch } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";

const Header = () => (
  <header className="flex justify-between items-center p-1 pl-5 text-white">
    <div className="relative w-[80%] max-w-xs">
      <input
        type="text"
        placeholder="Search..."
        className="bg-[#253150] text-white pl-10 pr-4 py-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white text-xl" />
    </div>
    <div >
      <FaRegUserCircle />
    </div>
  </header>
);

export default Header;
