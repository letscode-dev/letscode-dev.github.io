import Button from '@mui/material/Button'

import styles from './MenuButton.module.css'

export const ButtonStyles = {
    textTransform: "none",
    color: "#edeeef",
    fontFamily: "var(--font-roboto-regular)"
}

const MenuButton = (props) => {
    const { className, children } = props

    return (
        <Button
            className={className}
            size="small"
            variant="text"
            sx={ButtonStyles}
        >
            <span
                style={{ color: ButtonStyles.color }}
                className={styles.text}
            >
                {children}
            </span>
        </Button>
    )
}

export default MenuButton
