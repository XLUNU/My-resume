import { useState } from "react";
import styles from "./Header.module.scss";

const Header = () => {
    const [menuButton, setMenuButton] = useState(false);
    
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.header_nav}>
                    <a href="/" className={styles.logo}>Резюме</a>
                        <nav id="nav" className={menuButton ? styles.nav_open : styles.nav}>
                            <ul className={styles.nav_list}>
                                <li><a href="/" className={styles.nav_link}>Обо мне</a></li>
                                <li><a href="/portfolio" className={styles.nav_link}>Портфолио</a></li>
                                <li><a href="/blog" className={styles.nav_link}>Блог</a></li>
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