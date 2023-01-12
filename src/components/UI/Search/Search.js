import styles from "./Search.module.scss";

const Search = () => {
    return (
        <div className={styles.search}>      
            <input placeholder="Введите название"></input>
        </div>
    )
}

export default Search