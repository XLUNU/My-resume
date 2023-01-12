import styles from "./Footer.module.scss"

const Footer = () => {
    return (
        <footer className={styles.contacts}>
        <div className={styles.container}>
            <div className={styles.contacts_title}>
                <h2 className={styles.title_1}>Контакты</h2>
            </div>
            <div className={styles.contacts_content}>
                <p>Хотите узнать обо мне больше?<br/> 
                    Жду вашего сообщения!</p>
            </div>
            <div className={styles.contacts_button}>
                <a href="https://t.me/skazkaroman" className={styles.btn} target="_blank">Отправить</a>
            </div>
            <div className={styles.contacts_footer}>
                <p>Спасибо что просмотрели<br/>мое резюме!
                </p>
            </div>
        </div>
    </footer>
    )
}

export default Footer