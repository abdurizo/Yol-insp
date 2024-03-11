import classN from 'classnames';
import styles from './PersonalCard.module.css';

import UserIcon from '../../assets/icons/User';

function PersonalCard({title}) {
    return(
        <div className={classN(styles.block)} >
            <div className={classN(styles.obj_info_title)} >
                <UserIcon />
                <h2 className={classN(styles.obj_info_text)}>{title} (jismoniy shaxs)</h2>
            </div>
            <div className={classN(styles.list)}>
                <div className={classN(styles.description)}>
                    <p className={classN(styles.name, styles.text)}>F. I. Sh.</p>
                    <p className={classN(styles.value, styles.text)}>Abdug‘aniyev Sardor Shuxrat o‘g‘li</p>
                </div>
                <div className={classN(styles.description)}>
                    <p className={classN(styles.name, styles.text)}>JShShIR</p>
                    <p className={classN(styles.value, styles.text)}>45454</p>
                </div>
                <div className={classN(styles.description)}>
                    <p className={classN(styles.name, styles.text)}>Telefon raqami</p>
                    <p className={classN(styles.value, styles.text)}>4455511</p>
                </div>
                <div className={classN(styles.description)}>
                    <p className={classN(styles.name, styles.text)}>Elektron manzil</p>
                    <p className={classN(styles.value, styles.text)}>454545</p>
                </div>
                <div className={classN(styles.description)}>
                    <p className={classN(styles.name, styles.text)}>Tayinlanganligi to‘g‘risida buyrug‘i</p>
                    <p className={classN(styles.value, styles.text)}>447777</p>
                </div>

            </div>
        </div>
    )
}
export default PersonalCard