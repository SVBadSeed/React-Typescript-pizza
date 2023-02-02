import React from 'react'
import styles from './NotFoundBlock.module.scss'

const NotFoundBlock: React.FC = () => {
    return (
        <div className={styles.root}>
            <h1>
                <span>&#128546;</span>
                <br/>
                Ничего не найдено
            </h1>
            <p className={styles.description}>К сожалению, эта страница отсутствует в нашем интернет-магазине</p>
        </div>
    )
}

export default NotFoundBlock