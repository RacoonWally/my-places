import classNames from 'classnames';

import styles from './page.module.scss';

export default function HomePage() {
    return (
        <main className={styles.main}>
            <h1 className={classNames(styles.title)}>Добро пожаловать</h1>
        </main>
    );
}