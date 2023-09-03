import styles from './TypographyH2.module.css'

const TypographyH2 = (props) => {
    const { children } = props

    return (
        <h2 className={styles.h2}>
            <span className={styles.text}>
                {children}
            </span>
        </h2>
    )
}

export default TypographyH2
