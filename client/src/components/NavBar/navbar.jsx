import { Link } from "react-router-dom";

import styles from "./navbar.module.css"

const NavBar = () => {
   return (
     <div className={styles.NavBar}>
       <Link className={styles.link} to="/home"> HOME </Link>
       <Link className={styles.link} to="/form"> FORM </Link>
     </div>
   );
};

export default NavBar;