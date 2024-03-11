import classN from 'classnames';
import styles from './NotConfirmed.module.css';
import  '../Status.moule.css';


function NotConfirmed({statusText, num, ending }) {
    return(
        <span className={classN(styles.not_confirmed, 'status')}> {statusText} {num}     {ending }</span>
    )
}
export default NotConfirmed