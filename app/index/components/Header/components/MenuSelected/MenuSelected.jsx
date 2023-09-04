"use client"

import { useState } from 'react'

// import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import Button from '@mui/material/Button'

import { ButtonStyles } from '../MenuButton/MenuButton'

import styles from './MenuSelected.module.css'

const MenuSelected = (props) => {
    const { item } = props

    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <>
            <Button
                size="small"
                variant="text"
                onClick={handleClick}
                endIcon={<KeyboardArrowDownIcon />}
                sx={ButtonStyles}
            >
                {item.title}
            </Button>

            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                {item.items.map((itemMenu, indexMenu) => (
                    <MenuItem
                        key={indexMenu}
                        onClick={handleClose}
                        sx={{
                            padding: 0,
                            margin: 0,
                            minHeight: 'auto'
                        }}
                    >
                        <a
                            className={styles.link}
                            href={itemMenu.href}
                            target="_blank"
                        >
                            <Button
                                size="small"
                                fullWidth
                                variant="text"
                                // endIcon={<OpenInNewOutlinedIcon className={styles.icon} />}
                                sx={{
                                    textTransform: "none",
                                    color: "#2b2b2b",
                                    justifyContent: "start",
                                    padding: "5px 10px",
                                    fontFamily: "var(--font-roboto-light)"
                                }}
                            >
                                {itemMenu.title}
                            </Button>
                        </a>
                    </MenuItem>
                ))}
            </Menu>
        </>
    )
}

export default MenuSelected
