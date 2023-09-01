// import Image from 'next/image';

import { ROUTES, LINKS } from './roures';
// import logo from './img/logo.svg';

import MenuSelected from './MenuSelected'
import MenuItem from './MenuItem';
import MenuButton from './MenuButton';

import styles from './Header.module.css';

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
                {ROUTES.map((item, index) => (
                    <li className={styles.item} key={index}>
                        <MenuItem item={item} />
                    </li>
                ))}

                <li className={styles.item}>
                    <MenuButton>
                        <a href="#cources">Курсы</a>
                    </MenuButton>
                </li>

                <li className={styles.item}>
                    <MenuButton>
                        <a href="#publications">Публикации</a>
                    </MenuButton>
                </li>

                <li className={styles.item}>
                    <MenuSelected
                        title={LINKS.community.title}
                        items={LINKS.community.items}
                    />
                </li>

                <li className={styles.item}>
                    <MenuSelected
                        title={LINKS.learn.title}
                        items={LINKS.learn.items}
                    />
                </li>
            </ul>

            <a
                href="https://t.me/letscodedev_bot"
                title="Telegram Bot"
                target='_blank'
                className={styles.messager}
            ></a>
        </div>
    )
}

export default Header;
