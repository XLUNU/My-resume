import styles from "./Blog.module.scss"
import { useState, useEffect } from "react"


const Blog = () => {
    const [posts, setPosts] = useState([]);

    async function requery() {
        let response = await fetch("./blog.json")
        let base = await response.json()
        setPosts(base)
    }
    
    useEffect(() => {
        requery()
    }, [])
    
    return (
        <section className={styles.portfolio}>
            <div className={styles.container}>
                <div className={styles.portfolio_title}>
                    <h2 className={styles.title_1}>Блог</h2>
                </div>
                {
                posts.map(post => (
                    <div key={post.id} className={styles.project}>
                        <div className={styles.project_content}>
                            <h3 className={styles.project_title}>{post.title}</h3>
                            <img src={post.photo} alt="Фото блога" className={styles.project_img}/>
                            <p className={styles.contacts_content}>{post.description}</p>
                            <p>{post.time}</p>
                        </div>
                    </div>
                    ))
                }
            </div>
        </section>
        
    )
}

export default Blog



