import { Link } from "react-router-dom";

const UserMenu = () => {
  return (
    <div className="absolute top-12 right-4 bg-gray-800 text-white rounded-lg w-56 shadow-lg ">
      <ul className="p-2 space-y-2">
        <li className="hover:bg-gray-700 rounded-lg p-2 flex items-center">
          <span className="mr-2">🔧</span>
          <Link to="/gpts">My GPTs</Link>
        </li>
        <li className="hover:bg-gray-700 rounded-lg p-2 flex items-center">
          <span className="mr-2">⚙️</span>
          <Link to="/customize">Customize ChatGPT</Link>
        </li>
        <li className="hover:bg-gray-700 rounded-lg p-2 flex items-center">
          <span className="mr-2">🔒</span>
          <Link to="/settings">Settings</Link>
        </li>
        <li className="hover:bg-gray-700 rounded-lg p-2 flex items-center">
          <span className="mr-2">🚀</span>
          <Link to="/upgrade">Upgrade Plan</Link>
        </li>
        <li className="hover:bg-gray-700 rounded-lg p-2 flex items-center">
          <span className="mr-2">⬅️</span>
          <Link to="/logout">Log out</Link>
        </li>
      </ul>
    </div>
  );
};

export default UserMenu;
