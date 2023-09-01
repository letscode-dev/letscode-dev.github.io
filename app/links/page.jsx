import { LINKS } from './data';

import styles from './LinksPage.module.css';

const LinksPage = () => {
    return (
        <div className={styles.wrapper}>
            {LINKS.map((linkItem, linkIndex) => (
                <div key={linkIndex}>
                    <h4 className={styles.subtitle}>{linkItem.name}</h4>
                    <ul className={styles.ul}>
                        {linkItem.items.map((themeItem, themeIndex) => (
                            <li key={themeIndex}>
                                <div className={styles.listContainer}>
                                    <span className={styles.listTitle}>{themeItem.title}</span>
                                    <a
                                        className={styles.listLink}
                                        href={themeItem.link}
                                        target="_blank"
                                    >
                                        {themeItem.link}
                                    </a>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    )
}

export default LinksPage;
