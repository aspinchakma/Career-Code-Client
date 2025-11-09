import { Link, NavLink } from "react-router";
import Theme from "../pages/Theme/Theme";

const Header = () => {
  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
    </>
  );

  return (
    <div className="dark:bg-gray-900 dark:text-gray-100">
      <div className="drawer">
        <input id="my-drawer-1" type="checkbox" className="drawer-toggle" />

        <div className="drawer-content">
          <div className="navbar lg:w-[85%] w-[95%] mx-auto">
            <div className="navbar-start">
              <label
                htmlFor="my-drawer-1"
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </label>

              <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>

            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">{links}</ul>
            </div>

            <div className="navbar-end gap-3">
              <Link to={"/register"}>Register</Link>
              <Link to={"/signin"}>Sign in</Link>
              <Theme />
            </div>
          </div>
        </div>

        <div className="drawer-side">
          <label htmlFor="my-drawer-1" className="drawer-overlay"></label>
          <ul className="menu bg-base-200 min-h-full w-80 p-4 dark:bg-gray-900">
            {links}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
