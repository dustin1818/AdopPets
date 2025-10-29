import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div className="w-full shadow-md !py-8 sticky top-0 z-50">
      <div className="max-w-7xl !mx-auto flex justify-between items-center">
        <div className="logo">
          <h1 className="text-3xl font-extrabold">
            Adop<span className=" text-blue-400">Pets</span>
          </h1>
        </div>
        <div className="nav">
          <ul className="flex gap-8">
            <li className="hover:text-blue-400"><Link to="/welcome"> Home</Link></li>
            <li className="hover:text-blue-400"><Link to="/Adopt"> Adopt</Link></li>
            <li className="hover:text-blue-400"><Link to="/Donate">Donate</Link></li>
            <li className="hover:text-blue-400"><Link to="/About">About</Link></li>
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
