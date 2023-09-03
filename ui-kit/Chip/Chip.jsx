import cn from 'classnames';

import styles from './Chip.module.css';

const Chip = (props) => {
    const { children } = props;

    return (
        <span className={cn(styles.item, props.className)}>
            {children}
        </span>
    )
}

export default Chip;
