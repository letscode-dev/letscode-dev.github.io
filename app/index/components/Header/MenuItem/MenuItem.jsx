"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import MenuButton from '../MenuButton';

import styles from './MenuItem.module.css';

const MenuItem = (props) => {
    const { item } = props;

    const pathname = usePathname();

    return (
        <div className={styles.item}>
            <MenuButton>
                <Link
                    href={item.path}
                    className={pathname === item.path ? styles.active : null}
                >
                    {item.title}
                </Link>
            </MenuButton>
        </div>
    )
}

export default MenuItem;
