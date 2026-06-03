import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between items-center  shadow-md bg-white">
      <div className="flex items-center gap-3">
        <img className="h-20 w-56" src="/logo/fsbm.jpeg"/>
      </div>
      <ul className="hidden md:flex gap-8 font-medium text-gray-700">
        <li  className="cursor-pointer hover:text-blue-600"><Link to="/">Accueil</Link></li>
        <li  className="cursor-pointer hover:text-blue-600"><Link to="/pages/about">À propos</Link></li>
        <li className="cursor-pointer hover:text-blue-600" ><Link to="/events">Evenements</Link></li>
        <li className="cursor-pointer hover:text-blue-600"><Link to="Footer/">Contact</Link></li>
      </ul>
      <div>
        <img
          src="/logo/cik.png"
            className="h-25 w-auto"
        />
      </div>
    </nav>
  );
}

export default Navbar; 



