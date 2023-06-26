import Container from "../../Container/Container";
import me from "../../assets/me1.png"
import "./Navbar.css"
const Navbar = () => {
    const navItems = (
      <>
        <li>
          <a className="hover:text-blue-500">Home</a>
        </li>
        <li>
          <a className="hover:text-blue-500">Features</a>
         
        </li>
        <li>
          <a className="hover:text-blue-500">Projects</a>
        </li>
        <li>
          <a className="hover:text-blue-500">Skills</a>
        </li>
        <li>
          <a className="hover:text-blue-500">About me</a>
        </li>
        <li>
          <a className="hover:text-blue-500">Contact with me</a>
        </li>
        
      </>
    );
    return (
      <Container>
        <div>
          <div className="fixed z-10 top-0 max-w-[1800px] shadow-md rounded-full shadow-slate-400  navbar bg-base-100 mt-5">
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
                  className="text-white menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                  {navItems}
                </ul>
              </div>
              <div className="flex items-center gap-2">
                <img
                  src={me}
                  className="rounded-full border border-blue-500 border-4"
                  alt="Zarif photo"
                />
                <p className="normal-case text-3xl text-blue-500 font-semibold shadowed-text">
                  Mostofa Fatin
                </p>
              </div>
            </div>
            <div className="navbar-end hidden lg:flex">
              <ul className="menu menu-horizontal px-1 text-white text-lg font-semibold ">
                {navItems}
                <button className="rounded-full btn btn-outline text-blue-500 hover:text-blue-700">
                  Hire Me
                </button>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    );
};

export default Navbar;