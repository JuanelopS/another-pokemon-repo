import { Link } from "react-router-dom";
import Search from "../Search";

const Header = () => {
  return (
    <header>
      <h1>
        <Link to="/">Pokemon</Link>
      </h1>
      <nav>
        <Search />
      </nav>
    </header>
  );
};

export default Header;
