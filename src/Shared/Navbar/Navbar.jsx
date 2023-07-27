import {   NavLink } from "react-router-dom";
import Container from "../../Container/Container";
import me from "../../assets/dev.gif"
import "./Navbar.css"
const Navbar = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href =
      "https://drive.google.com/uc?export=download&id=1Oo544_Fo3rA0Ji_zr8zJ4JHQMDb8JhVF";
    link.download = "resume.pdf";
    link.click();
  };
    const navItems = (
      <>
        <li>
          <NavLink
            exact
            to="/"
            className="hover:text-blue-300 navItems"
            activeClassName="active"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/features"
            className="hover:text-blue-300 navItems"
            activeClassName="active"
          >
            Features
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            className="hover:text-blue-300 navItems"
            activeClassName="active"
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/skills"
            className="hover:text-blue-300 navItems"
            activeClassName="active"
          >
            Skills
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about-me"
            className="hover:text-blue-300 navItems"
            activeClassName="active"
          >
            About me
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact-with-me"
            className="hover:text-blue-300 navItems"
            activeClassName="active"
          >
            Contact with me
          </NavLink>
        </li>
      </>
    );
    return (
      <Container>
        <div>
          <div className="pc-menu fixed z-10 top-0 max-w-[1800px] shadow-md rounded-full shadow-black navbar bg-base-100 mt-5">
            <div className="navbar-start">
              <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-white"
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
                  className="block bg-slate-600 text-white menu menu-sm dropdown-content mt-3 z-[1] p-2   rounded-box w-52"
                >
                  {navItems}
                </ul>
              </div>
              <div className="flex items-center gap-2">
                <img
                  src={me}
                  className="rounded-full lg:w-[90px] w-[50px] border-blue-500 border-4"
                  alt="Zarif photo"
                />

                <div className="flex gap-4">
                  <p className="normal-case lg:text-3xl text-xl text-blue-500 font-semibold shadowed-text">
                    Mostofa Fatin
                  </p>
                </div>
                <button
                  className="btn block lg:hidden btn-outline rounded-3xl ml-4 text-blue-500 hover:text-blue-500 hover:shadow-md hover:shadow-slate-300"
                  onClick={handleDownload}
                >
                  Resume
                </button>
              </div>
              <section className=""></section>
            </div>
            <div className="navbar-end hidden lg:flex">
              <ul className=" flex items-center gap-10 menu-horizontal px-1 text-white text-lg font-semibold ">
                {navItems}
                <button
                  className="btn btn-outline rounded-3xl text-blue-500 hover:text-blue-500 hover:shadow-md hover:shadow-slate-300"
                  onClick={handleDownload}
                >
                  Resume
                </button>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    );
};

export default Navbar;