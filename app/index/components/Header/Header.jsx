// import Image from 'next/image'
import cn from 'classnames'

import { CONFIG, CONFIG_MOBILE } from './roures'
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
                {CONFIG.map((item, index) => (
                    <li className={styles.listItem} key={index}>
                        {item}
                    </li>
                ))}
            </ul>

            <ul className={cn(styles.list, styles.listMobile)}>
                {CONFIG_MOBILE.map((item, index) => (
                    <li className={styles.listItem} key={index}>
                        {item}
                    </li>
                ))}
            </ul>

            <a
                href="https://t.me/letscodedev_bot"
                title="Telegram Bot"
                target="_blank"
                className={styles.messenger}
            ></a>
        </div>
    )
}

export default Header
