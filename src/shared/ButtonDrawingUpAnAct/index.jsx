import styles from './ButtonDrawingUpAnAct.module.css';
import {Link} from "react-router-dom";

function ButtonDrawingUpAnAct ( {text} ) {
    return(

        <Link to='/instructions/:reference-number/instructions' className={styles.button}>
            {text}
        </Link>

    )
}
export default ButtonDrawingUpAnAct
;