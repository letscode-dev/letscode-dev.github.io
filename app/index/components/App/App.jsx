import cn from 'classnames'

import styles from './App.module.css'

const App = () => {
    return (
        <div className={styles.wrapper}>
            <div className={cn(styles.container, 'section')}>
                Content
            </div>
        </div>
    )
}

export default App
