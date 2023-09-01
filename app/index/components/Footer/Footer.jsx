import cn from 'classnames';
import Image from 'next/image';

import logo from './img/logo.svg';

import styles from './Footer.module.css';

const Footer = () => {
    return (
        <div className={styles.wrapper}>
            <div className={cn(styles.container, 'section')}>
                <Image
                    src={logo}
                    alt="Logo Lets Code"
                    priority
                    className={styles.logo}
                />

                Школа Frontend-разработки "Let's Code"
            </div>
        </div>
    )
}

export default Footer;
