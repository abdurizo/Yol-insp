import classN from 'classnames';
import styles from './ObjectInformationCard.module.css.module.css';

import WordIcon from '../../assets/icons/WordIcon';


function ObjectInformationCard({ title }) {
    return (
        <div className={classN(styles.block)} >
            <div className={classN(styles.obj_info_title)} >
                <div className={classN(styles.icon_wrap)}>
                    <WordIcon />
                </div>
                <h2 className={classN(styles.obj_info_text)}>{title} </h2>
            </div>
            <div className={classN(styles.list)}>
                <div className={classN(styles.description)}>
                    <p className={classN(styles.name, styles.text)}>Obyekt ID</p>
                    <p className={classN(styles.value, styles.text)}>123456</p>
                </div>
                <div className={classN(styles.description)}>
                    <p className={classN(styles.name, styles.text)}>Obyekt nomi</p>
                    <p className={classN(styles.value, styles.text)}>Toshkent shahar, Chilonzor tumani, M39 Xalqaro Avtomobil yo‘li</p>
                </div>
                <div className={classN(styles.description)}>
                    <p className={classN(styles.name, styles.text)}>Obyekt turi</p>
                    <p className={classN(styles.value, styles.text)}>Sun’iy inshoat</p>
                </div>
                <div className={classN(styles.description)}>
                    <p className={classN(styles.name, styles.text)}>Qurilish turi</p>
                    <p className={classN(styles.value, styles.text)}>Mukammal ta’mir</p>
                </div>
                <div className={classN(styles.description)}>
                    <p className={classN(styles.name, styles.text)}>Obyekt hududi</p>
                    <p className={classN(styles.value, styles.text)}>Toshkent shahri</p>
                </div>
                <div className={classN(styles.description)}>
                    <p className={classN(styles.name, styles.text)}>Obyekt manzili</p>
                    <p className={classN(styles.value, styles.text)}>Toshkent sh., Chilonzor tumani, 25-mavze, Yorqin ko‘chasi</p>
                </div>

            </div>
        </div>
    )
}
export default ObjectInformationCard;