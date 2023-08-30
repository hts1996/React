import React from "react";
import {Link} from "react-router-dom";
import styles from './Navbar.module.css';

function Navbar(){
    return (
        <div className={styles.navbar}>
            <Link className={styles.navbarMenu} to={'/'}>Home</Link>
        </div>
    )
}
export default Navbar;