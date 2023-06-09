import { useContext, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isHovering, setIsHovering] = useState(false);

  console.log(user);

  const handleLogOut = () => {
    logOut()
      
      .then((result) => {
        console.log(result);
      })
      .catch((error) => console.log(error));
  };
  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const navOption = (
    <>
      <Link to={"/"}>
        <li>
          <a>Home</a>
        </li>
      </Link>
      <Link to={"/instructors"}>
        <li>
          <a>Instructors</a>
        </li>
      </Link>
      <Link to={"/classes"}>
        <li>
          <a>Classes</a>
        </li>
      </Link>
     {
      user ?  <Link to={"/dashboard"}>
      <li>
        <a>Dashboard</a>
      </li>
    </Link> : ''
     }
    </>
  );

  return (
    <div className="navbar container fixed bg-opacity-30 z-10 bg-black text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navOption}
          </ul>
        </div>
        <Link to={"/"}>
          <a className="btn btn-ghost normal-case text-xl">
            Captured Moments Institute
          </a>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navOption}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="flex gap-3">
            <button
              onClick={handleLogOut}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              LogOut
            </button>
            <div onMouseOver={handleMouseOver}>
              <img className="w-10 rounded-full" src={user?.photoURL} />
            </div>
            {isHovering && <div>{user?.displayName}</div>}
          </div>
        ) : (
          <Link to={"/login"}>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
