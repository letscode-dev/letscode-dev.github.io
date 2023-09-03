// import Image from 'next/image'

import { CONFIG } from './roures'
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
                    <li className={styles.item} key={index}>{item}</li>
                ))}
            </ul>

            <a
                href="https://t.me/letscodedev_bot"
                title="Telegram Bot"
                target="_blank"
                className={styles.messager}
            ></a>
        </div>
    )
}

export default Header
