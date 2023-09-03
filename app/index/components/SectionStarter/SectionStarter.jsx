import cn from 'classnames'
import Image from 'next/image'

import logo from './img/logo.svg'
import Chip from '../../../../ui-kit/Chip'

import styles from './SectionStarter.module.css'

const SectionStarter = () => {
    return (
        <div className={styles.wrapper}>
            <div className={cn(styles.container, 'section')}>
                <div className={styles.containerLogo}>
                    <Image
                        src={logo}
                        alt="Logo Lets Code"
                        priority
                        className={styles.logo}
                    />
                </div>
                <div className={styles.containerContent}>
                    <h1 className={styles.h1}>Школа frontend-разработки</h1>
                    <h2 className={styles.h2}>Let's Code</h2>
                    <div className={styles.containerChips}>
                        <div className={styles.categoryChips}>
                            <Chip className={styles.chip}>Школа программирования</Chip>
                            <Chip className={styles.chip}>Курсы</Chip>
                        </div>
                        <div className={styles.categoryChips}>
                            <Chip className={styles.chip}>Менторство</Chip>
                            <Chip className={styles.chip}>Подготовка к интервью</Chip>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SectionStarter
