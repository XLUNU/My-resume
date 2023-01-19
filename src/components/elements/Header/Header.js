import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

const Header = () => {
    const [menuButton, setMenuButton] = useState(false);
    
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.header_nav}>
                    <Link to="/" className={styles.logo}>Резюме</Link>
                        <nav id="nav" className={menuButton ? styles.nav_open : styles.nav}>
                            <ul className={styles.nav_list}>
                                <li><Link to="/" className={styles.nav_link} onClick={() => setMenuButton(!menuButton)}>Обо мне</Link></li>
                                <li><Link to="/portfolio" className={styles.nav_link} onClick={() => setMenuButton(!menuButton)}>Портфолио</Link></li>
                                <li><Link to="/blog" className={styles.nav_link} onClick={() => setMenuButton(!menuButton)}>Блог</Link></li>
                            </ul>
                            <button id="nav-btn" class={styles.nav_button}>
                                <img 
                                    id="nav-btn-img" 
                                    src="./images/icons/nav-open.svg" 
                                    alt="Nav button"
                                    onClick={() => setMenuButton(!menuButton)}
                                    />
                            </button>
                        </nav>
                </div>
                <div className={styles.header_row}>
            
                </div>
            </div>
        </header>
    )
}

export default Header