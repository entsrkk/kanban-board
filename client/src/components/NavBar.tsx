import React from "react";


const NavBar = () => {
  return (
    <div className="navbar h-16 bg-base-200">
      <div className="flex-1">
        <a className="btn btn-ghost hover:bg-transparent text-xl ">KanBan Board</a>
      </div>
      <div className="flex-none gap-2">
        <div>
          <a href="/add" className="btn btn-ghost font-semibold">New Task</a>
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a href="/signin">Login</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
