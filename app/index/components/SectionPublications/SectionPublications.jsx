import cn from 'classnames'

import Button from '@mui/material/Button'
import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined'

import { PUBLICATIONS } from './data'
import TypographyH2 from '../../../../ui-kit/TypographyH2'
import Chip from '../../../../ui-kit/Chip'

import styles from './SectionPublications.module.css'

const SectionPublications = () => {
    return (
        <div className={styles.wrapper} id="publications">
            <div className={cn(styles.container, 'section')}>
                <TypographyH2>Публикации</TypographyH2>

                <div className={styles.publicationContainer}>
                    {PUBLICATIONS.map((itemPublication, indexPublication) => (
                        <div key={indexPublication} className={styles.publication}>
                            <h3 className={cn(styles.h3, 'textGradient')}>
                                {itemPublication.title}
                            </h3>

                            <div className={styles.tagsContainer}>
                                {itemPublication.tags.map((itemTag, indexTag) => (
                                    <Chip key={indexTag} className={styles.chip}>
                                        {itemTag}
                                    </Chip>
                                ))}
                            </div>

                            <div className={styles.description}>
                                {itemPublication.description}
                            </div>
                            <a
                                className={cn(styles.link, 'link')}
                                href={itemPublication.link}
                                target='_blank'
                            >
                                <Button
                                    variant="outlined"
                                    color="inherit"
                                    size="small"
                                    endIcon={<OpenInNewOutlinedIcon />}
                                    sx={{
                                        textTransform: 'none',
                                        backgroundColor: '#fff'
                                    }}
                                >
                                    Читать статью
                                </Button>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SectionPublications
