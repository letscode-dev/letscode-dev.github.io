// import Image from 'next/image'
import cn from 'classnames'

import { CONFIG } from '../../routes/rouresConfig'
// import logo from './img/logo.svg'

import styles from './Header.module.css'

const Header = () => {
    return (
        <div className={styles.container}>
            {/* <Image
                src={logo}
                alt="Logo Lets Code"
                priority
                className={styles.logo}
            /> */}

            <ul className={styles.list}>
                {CONFIG.filter(item => item.isVisible).map((item, index) => (
                    <li className={styles.listItem} key={index}>
                        {item.component}
                    </li>
                ))}
            </ul>

            <ul className={cn(styles.list, styles.listMobile)}>
                {CONFIG.filter(item => item.isVisible && item.isMobile).map((item, index) => (
                    <li className={styles.listItem} key={index}>
                        {item.component}
                    </li>
                ))}
            </ul>

            {/* <a
                href="https://t.me/letscodedev_bot"
                title="Telegram Bot"
                target="_blank"
                className={styles.messenger}
            ></a> */}
        </div>
    )
}

export default Header
