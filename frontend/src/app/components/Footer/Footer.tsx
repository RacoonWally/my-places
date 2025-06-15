import styles from './Footer.module.scss'

export const Footer = () => {
    return (
        <div className={styles.root}>
            <div className={styles.container}>
                <p>© 2025 — Pet-проект на Next.js + Express</p>
            </div>
        </div>
    )
}