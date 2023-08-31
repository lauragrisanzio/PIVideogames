import { Link } from "react-router-dom";

import styles from "./navbar.module.css"

const NavBar = () => {
   return (
     <div className={styles.NavBar}>
       <Link to="/home"> HOME </Link>
       <Link to="/form"> FORM </Link>
     </div>
   );
};

export default NavBar;