import classN from 'classnames';
import styles from './Approved.module.css';
import '../Status.moule.css';

function Approved({statusText,num,ending }) {
    return(
        <span className={classN(styles.approved, 'status')}>{statusText} {num} {ending}</span>
    )
}
export default Approved