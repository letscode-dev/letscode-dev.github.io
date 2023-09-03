"use client"

import { useState } from 'react'
import cn from 'classnames'

import IconButton from '@mui/material/IconButton'
import MoreVertIcon from '@mui/icons-material/MoreVert'

import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'

import styles from './Options.module.css'

const Options = (props) => {
    const { options } = props;
        
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <IconButton onClick={handleClick}>
                <MoreVertIcon className={styles.icon} />
            </IconButton>

            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                {options.map((item, index) => (
                    <MenuItem key={index} onClick={handleClose}>
                        <a className={cn("link", styles.link)} href={item.link} target="_blank">{item.name}</a>
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
}

export default Options
