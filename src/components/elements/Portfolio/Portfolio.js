import styles from "./Portfolio.module.scss"
import { useState, useEffect } from "react"


const Portfolio = () => {
    const [posts, setPosts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [tagFilterArray, setTagFilterArray] = useState([]);

    async function requery() {
        let response = await fetch("./base.json")
        let base = await response.json()
        setPosts(base)
        setTagFilterArray(base)
    }
    
    useEffect(() => {
        requery()
    }, [])

    // let filteredSearch = posts.filter(({title}) => {
    //     return title.toLowerCase().includes(searchTerm.toLowerCase())
    // })

    function searchFilter(e) {
        setSearchTerm(e);
        setTagFilterArray(posts.filter(({title}) => {
            return title.toLowerCase().includes(searchTerm.toLowerCase())
        }))
    }
    
    function tagFilter(status) {
        if (status === 'React') {
            let newFilterTag = [...posts].filter(post => post.tags === status)
            setTagFilterArray(newFilterTag)
            console.log(newFilterTag)
        } else if (status === 'JS') {
            let newFilterTag = [...posts].filter(post => post.tags === status)
            setTagFilterArray(newFilterTag)
            console.log(newFilterTag)
        } else if (status === 'CSS') {
            let newFilterTag = [...posts].filter(post => post.tags === status)
            setTagFilterArray(newFilterTag)
            console.log(newFilterTag)
        } 
    } 
    
    
    
    return (
        <section className={styles.portfolio}>
            <div className={styles.container}>
                <div className={styles.portfolio_title}>
                    <h2 className={styles.title_1}>Портфолио</h2>
                </div>
                <div className={styles.buttonGroup}>
                    <button className={styles.button} onClick={() => tagFilter('React')}>React</button>
                    <button className={styles.button} onClick={() => tagFilter('JS')}>JS</button>
                    <button className={styles.button} onClick={() => tagFilter('CSS')}>CSS</button>
                </div>
                <div className={styles.search}>
                    <input  className={styles.input} 
                            placeholder="Поиск по названию"
                            onChange={e => searchFilter(e.target.value)}
                            />
                </div>
                {
                tagFilterArray.map(post => (
                    <div key={post.id} className={styles.project}>
                        <img src={post.photo} alt="Фото работы" className={styles.project_img}/>
                            <h3 className={styles.project_title}><a href="#!">{post.title}</a></h3>
                                <p className={styles.contacts_content}>{post.description}</p>
                    </div>
                    ))
                }
            </div>
        </section>
        
    )
}

export default Portfolio

