import classN from 'classnames';
import styles from './Objection.module.css';
import '../Status.moule.css';


function Objection({statusText,ending ,num}) {
    return (
        <span className={classN(styles.objection, 'status')}>{statusText}{num}{ending }</span>
    )
}
export default Objection