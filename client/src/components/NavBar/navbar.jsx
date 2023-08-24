import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/searchBar";

const NavBar = () => {
    return (
      <div>
        <Link to="/home"> HOME </Link>
        <Link to="/form"> FORM </Link>
        <Link to="/home/:id"> DETAIL</Link>
        <SearchBar/>
      </div>
    );
};

export default NavBar;