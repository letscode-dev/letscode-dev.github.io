import Button from '@mui/material/Button';

export const ButtonStyles = {
    textTransform: "none",
    color: "#edeeef",
    fontFamily: "var(--font-roboto-regular)"
}

import styles from './MenuButton.module.css';

const MenuButton = (props) => {
    const { className } = props;

    return (
        <Button
            className={className}
            size="small"
            variant="text"
            sx={ButtonStyles}
        >
            <span
                style={{color: ButtonStyles.color}}
                className={styles.text}
            >
                {props.children}
            </span>
        </Button>
    )
}

export default MenuButton;
