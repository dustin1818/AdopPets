import { Link, useLocation } from "react-router-dom";

function Navigation() {
  const location = useLocation();

  return (
    <div className="w-full shadow-md !py-8 sticky top-0 z-50 bg-white">
      <div className="max-w-7xl !mx-auto flex justify-between items-center">
        <div className="logo">
          <h1 className="text-3xl font-extrabold">
            Adop<span className=" text-blue-400">Pets</span>
          </h1>
        </div>
        <div className="nav">
          <ul className="flex gap-8">
            <li className={location.pathname === "/welcome" ? "text-blue-400 font-bold !list-none" : "hover:text-blue-400 !list-none"}>
              <Link to="/welcome">Home</Link>
            </li>
            <li className={location.pathname === "/Adopt" ? "text-blue-400 font-bold !list-none" : "hover:text-blue-400 !list-none"}>
              <Link to="/Adopt">Adopt</Link>
            </li>
            <li className={location.pathname === "/Donate" ? "text-blue-400 font-bold !list-none"  : "hover:text-blue-400 !list-none"}>
              <Link to="/Donate">Donate</Link>
            </li>
            <li className={location.pathname === "/Contact" ? "text-blue-400 font-bold !list-none" : "hover:text-blue-400 !list-none"}>
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="icons flex gap-5">
          <i className="fa-brands fa-facebook hover:text-blue-400 text-xl "></i>
          <i className="fa-brands fa-twitter hover:text-blue-400 text-xl "></i>
          <i className="fa-brands fa-instagram hover:text-blue-400 text-xl "></i>
        </div>
      </div>
    </div>
  );
}

export default Navigation;