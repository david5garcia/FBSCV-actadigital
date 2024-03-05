import { Link, BrowserRouter as Router } from "react-router-dom";
import logo from "../assets/logo.png";
import { useState } from "react";
import { Hamburger } from "./Hamburger";
import styles from "./css/Navbar.module.scss";

const Navbar = () => {
  const [isHamburgerOpened, setIsHamburgerOpened] = useState(false);

  const onHamburgerClick = (hamburgerState: boolean) => {
    setIsHamburgerOpened(hamburgerState);
  };

  return (
    <Router>
      <nav className="bg-[#104777] mb-6">
        <div className="container mx-auto p-4">
          <div className="flex justify-between items-center">
            <Link to="/">
              <img className="w-16 rounded-full p-1" src={logo} alt="Logo" />
            </Link>
            <Hamburger handleHamburgerClick={onHamburgerClick} />
            <div
              className={`flex z-10 h-10 items-center gap-2 ${
                styles["nav-items-container"]
              } ${isHamburgerOpened ? "" : styles["hiddenClass"]}`}
            >
              <Link
                to="/"
                className={`${styles["nav-items"]} px-5 py-2 rounded-lg sm:inline`}
              >
                <span>Acta Digital</span>
              </Link>
              <Link
                to="/ayuda"
                className={`${styles["nav-items"]} px-5 py-2 rounded-lg sm:inline`}
              >
                <span>Ayuda</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </Router>
  );
};

export default Navbar;
