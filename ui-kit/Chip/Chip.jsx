import cn from 'classnames';

import styles from './Chip.module.css';

const Chip = (props) => {
    return (
        <span className={cn(styles.item, props.className)}>
            {props.children}
        </span>
    )
}

export default Chip;
