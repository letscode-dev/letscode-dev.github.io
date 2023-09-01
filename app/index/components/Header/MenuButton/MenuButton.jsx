import Button from '@mui/material/Button';

export const ButtonStyles = {
    textTransform: "none",
    color: "#fff",
    fontFamily: "var(--font-roboto-regular)"
}

const MenuButton = (props) => {
    const { className } = props;

    return (
        <Button
            className={className}
            size="small"
            variant="text"
            sx={ButtonStyles}
        >
            {props.children}
        </Button>
    )
}

export default MenuButton;
