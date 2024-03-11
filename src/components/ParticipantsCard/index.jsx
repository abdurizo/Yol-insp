import classN from 'classnames';
import styles from './ParticipantsCard.module.css';

import WordIcon from '../../assets/icons/WordIcon';

function ParticipantsCard({ title }) {
    return (
        <div className={classN(styles.block)} >
            <div className={classN(styles.obj_info_title)} >
                <WordIcon />
                <h2 className={classN(styles.obj_info_text)}>{title}</h2>
            </div>
            <div className={classN(styles.list)}>
                <div className={classN(styles.description)}>
                    <p className={classN(styles.job_title)}>Buyurtmachi (rahbar)</p>
                    <p className={classN(styles.name)}>Abdug‘aniyev Sardor
                        <p> +999 99 888 88 88</p>
                    </p>
                    <p className={classN(styles.company)}>OOO TECHNOCORP</p>
                </div>
                <div className={classN(styles.description)}>
                    <p className={classN(styles.job_title)}>Texnik nazoratchi</p>
                    <p className={classN(styles.name)}>Abdug‘aniyev Sardor
                        <p> +999 99 888 88 88</p>
                    </p>
                    <p className={classN(styles.company)}>OOO TECHNOCORP</p>
                </div>
                <div className={classN(styles.description)}>
                    <p className={classN(styles.job_title)}>Loyihachi (rahbar)</p>
                    <p className={classN(styles.name)}>Abdug‘aniyev Sardor
                        <p> +999 99 888 88 88</p>
                    </p>
                    <p className={classN(styles.company)}>OOO TECHNOCORP</p>
                </div>
                <div className={classN(styles.description)}>
                    <p className={classN(styles.job_title)}>Mualliflik nazoratchi</p>
                    <p className={classN(styles.name)}>Abdug‘aniyev Sardor
                        <p> +999 99 888 88 88</p>
                    </p>
                    <p className={classN(styles.company)}>OOO TECHNOCORP</p>
                </div>
                <div className={classN(styles.description)}>
                    <p className={classN(styles.job_title)}>Pudratchi (rahbar)</p>
                    <p className={classN(styles.name)}>Abdug‘aniyev Sardor
                        <p> +999 99 888 88 88</p>
                    </p>
                    <p className={classN(styles.company)}>OOO TECHNOCORP</p>
                </div>
                <div className={classN(styles.description)}>
                    <p className={classN(styles.job_title)}>Ish boshqaruvchi)</p>
                    <p className={classN(styles.name)}>Abdug‘aniyev Sardor
                        <p> +999 99 888 88 88</p>
                    </p>
                    <p className={classN(styles.company)}>OOO TECHNOCORP</p>
                </div>


            </div>
        </div>
    )
}
export default ParticipantsCard;