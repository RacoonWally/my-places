import styles from './Header.module.scss';

export const Header = () => {
    return (
        <div className={styles.root}>
            <div className={styles.container}>
                <h1 className={styles.title}>🌍 Места для посещения</h1>
            </div>
        </div>
    );
};