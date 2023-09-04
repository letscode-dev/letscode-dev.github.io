import { LINKS } from './data'

import styles from './LinksPage.module.css'

const LinksPage = () => {
    return (
        <div className={styles.wrapper}>
            <h1>Links</h1>
            {LINKS.map((linkItem, linkIndex) => (
                <div className={styles.listContainer} key={linkIndex}>
                    <h4 className={styles.h4}>{linkItem.name}</h4>
                    <ul className={styles.list}>
                        {linkItem.items.map((themeItem, themeIndex) => (
                            <li key={themeIndex} className={styles.listItem}>
                                <span>{themeItem.title}</span>
                                <a
                                    className={styles.listLink}
                                    href={themeItem.link}
                                    target="_blank"
                                >
                                    {themeItem.link}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    )
}

export default LinksPage
