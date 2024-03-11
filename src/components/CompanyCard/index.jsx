import classN from 'classnames';
import styles from './CompanyCard.module.css';

import EdificeIcon from '../../assets/icons/Edifice';


function CompanyCard({title}) {
    return(
        <div className={classN(styles.block)} >
            <div className={classN(styles.obj_info_title)} >
                <EdificeIcon />
                <h2 className={classN(styles.obj_info_text)}>{title} (yuridik shaxs)</h2>
            </div>
            <div className={classN(styles.list)}>
                <div className={classN(styles.description)}>
                    <p className={classN(styles.name, styles.text)}>Yuridik shaxs</p>
                    <p className={classN(styles.value, styles.text)}>OOO TECHNOCORP</p>
                </div>
                <div className={classN(styles.description)}>
                    <p className={classN(styles.name, styles.text)}>STIRi</p>
                    <p className={classN(styles.value, styles.text)}>456748</p>
                </div>
                <div className={classN(styles.description)}>
                    <p className={classN(styles.name, styles.text)}>Pochta / elektron manzil</p>
                    <p className={classN(styles.value, styles.text)}>manzil@gmail.com</p>
                </div>
                <div className={classN(styles.description)}>
                    <p className={classN(styles.name, styles.text)}>Bank rekvizitlari</p>
                    <p className={classN(styles.value, styles.text)}>bank nomiraschetniy schetbank kodi(MFO) STIR</p>
                </div>
                <div className={classN(styles.description)}>
                    <p className={classN(styles.name, styles.text)}>Faoliyat amalga oshiriladigan joy manzili</p>
                    <p className={classN(styles.value, styles.text)}>Toshkent shahar, Chilonzor tumani</p>
                </div>
                <div className={classN(styles.description)}>
                    <p className={classN(styles.name, styles.text)}>Rahbarning F.I.Sh</p>
                    <p className={classN(styles.value, styles.text)}>Abdug‘aniyev Sardor Shuxrat o‘g‘li</p>
                </div>
                <div className={classN(styles.description)}>
                    <p className={classN(styles.name, styles.text)}>Pasport ma'lumoti</p>
                    <p className={classN(styles.value, styles.text)}>AB123456748</p>
                </div>
                <div className={classN(styles.description)}>
                    <p className={classN(styles.name, styles.text)}>Telefon raqami</p>
                    <p className={classN(styles.value, styles.text)}>+90 855-44-44</p>
                </div>

            </div>
        </div>
    )
}
export default CompanyCard;