import cn from 'classnames'

import { COURCES } from './data/cources'
import TypographyH2 from '../../../../ui-kit/TypographyH2'
import Options from './components/Options'

import styles from './SectionCources.module.css'

const SectionCources = () => {
    return (
        <div className={styles.wrapper} id="cources">
            <div className={cn(styles.container, "section")}>
                <TypographyH2>Бесплатные курсы</TypographyH2>

                <div className={styles.coursesContainer}>
                    {COURCES.map((itemCources, indexCources) => (
                        <div className={styles.courseContainer} key={indexCources}>
                            <a
                                href={itemCources.youtube}
                                className={styles.logo}
                                style={{
                                    backgroundImage: `url(${itemCources.img.src})`,
                                }}
                                target="_blank"
                            >
                            </a>
                            <div className={styles.contentContainer}>
                                <h3 className={styles.h3}>
                                    {itemCources.stack}
                                </h3>
                                <div className={styles.description}>
                                    {itemCources.title}
                                </div>
                                <div className={styles.options} title="Ссылки">
                                    <Options options={itemCources.links} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SectionCources
