import cn from 'classnames';

import styles from './TypographyH2.module.css';

const TypographyH2 = (props) => {
    return (
        <h2 className={cn(styles.h2)}>
            <span>{props.children}</span>
        </h2>
    )
}

export default TypographyH2;
