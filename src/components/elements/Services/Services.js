import img_1 from "../../../images/services/02.svg"
import img_2 from "../../../images/services/01.svg"
import img_3 from "../../../images/services/03.svg"
import styles from "./Services.module.scss"

const Services = () => {
    return (
        <section className={styles.services}>
            <div className={styles.container}>
                <div className={styles.services_row}>
                    <div className={styles.service_card}>
                        <img src={img_1} alt="UI/UX Design" className={styles.service_card_img}/>
                        <h3 className={styles.service_card_title}>Frontend</h3>
                        <p>Опыт разработки веб-интерфейсов: React, React-Router, Axios, React-Redux, основы TypeScript.</p>
                    </div>
                    <div className={styles.service_card}>
                        <img src={img_2} alt="Development" className={styles.service_card_img}/>
                        <h3 className={styles.service_card_title}>CSS/SCSS</h3>
                        <p>Адаптивная кросс-браузерная верстка, согласно стандартам современной разработки. Работа с препроцессорами.</p>
                    </div>
                    <div className={styles.service_card}>
                        <img src={img_3} alt="software testing" className={styles.service_card_img}/>
                        <h3 className={styles.service_card_title}>Контроль версий</h3>
                        <p>Работа с Git, Github и Package manager - npm.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services