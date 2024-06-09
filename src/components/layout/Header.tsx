import { Link } from "react-router-dom";
import Search from "../Search";
import logo from "/logo.png";

const Header = () => {
  return (
    <header>
      <div className="div-logo">
        <Link to="/"><img className="logo" src={logo}/></Link>
      </div>
      <nav>
        <Search />
      </nav>
    </header>
  );
};

export default Header;
