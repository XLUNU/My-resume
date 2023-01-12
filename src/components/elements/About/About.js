import img from "../../../images/Avatar/Avatar.png"
import imgMobile from "../../../images/Avatar/Avatar-mobile.png"
import styles from "./About.module.scss"
import Services from "../Services/Services"

const About = () => {
    return (
        <div>
            <div className={styles.header}>
                <div className={styles.container}>
                    <div className={styles.header_row}>
                        <div className={styles.header_content}>
                            <h1 className={styles.header_heading}>Кравченко Роман<br></br><span>Frontend-Разработчик</span></h1>
                            <p>Мне 27 лет, проживаю в Москве. Интересуюсь IT-технологиями и иностранными языками.</p>
                        </div>
                        <div className={styles.header_image}>
                            <picture>
                                <source media="(max-width: 799px)" srcset={imgMobile}/>
                                <img src={img} alt="Аватар"/>
                            </picture>
                        </div>
                    </div>
                </div>
            </div>
            <Services/>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css" integrity="sha512-1cK78a1o+ht2JcaW6g8OXYwqpev9+6GqOkz9xmBN9iUUhIndKtxwILGWYOSibOKjLsEdjyjZvYDq/cZwNeak0w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        </div>
    )
}

export default About