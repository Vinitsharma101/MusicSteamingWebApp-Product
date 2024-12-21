import { useState } from "react";
import { Link } from "react-router-dom";
import {  FaHome, FaListUl, FaUser } from "react-icons/fa";
import UserMenu from "./UserMenu";
// import {SearchBar} from "./SearchBar";

const Navbar = () => {

  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-800 bg-opacity-25 backdrop-blur-xl text-white p-4 z-10">
      {" "}
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-xl font-bold select-none">Music</div>

        {/* <SearchBar /> */}
        <div className="flex items-center space-x-4 select-none">
          <div className="flex gap-5 content-center">
            <Link to="/home" className="hover:text-blue-400 flex items-center">
              <FaHome size={20} className="mr-1" />
              <span className="hidden md:inline">Home</span>
            </Link>
            <Link
              to="/playlists"
              className="hover:text-blue-400 flex items-center"
            >
              <FaListUl size={20} className="mr-1" />
              <span className="hidden md:inline">Playlists</span>
            </Link>
          </div>
          <div className="relative">
            <div
              className="w-8 h-8 bg-gray-600 rounded-full overflow-hidden cursor-pointer"
              onClick={toggleMenu}
            >
              <FaUser className="w-full h-full p-1 text-white" />
            </div>

            {showMenu && <UserMenu />}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
