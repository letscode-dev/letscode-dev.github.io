"use client"

import cn from 'classnames';
import Button from '@mui/material/Button';

import { sendTelegramMessage } from '../../services/telegram';

import styles from './SectionStarter.module.css';

const SectionStarter = () => {
    return (
        <div className={styles.wrapper}>
            <div className={cn(styles.container, 'section')}>
                <h1>Let's Interview</h1>
                <div>
                    Подготовка к интервью от школы программирования
                    <a href="https://letscode-dev.github.io/" target="_blank">Let's Code</a>
                </div>

                <Button
                    size="small"
                    variant="contained"
                    onClick={() => sendTelegramMessage('O brave new world')}
                >
                    Send
                </Button>
            </div>
        </div>
    )
}

export default SectionStarter;
