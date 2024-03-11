import PageArrowDown from '../../../assets/icons/PageArrorLeft';
import styles from '../Pointer.module.css'

export default function Prev() {
    return (
        <div className={styles.wrap_label} >
            <PageArrowDown />
            <span className='text' >Oldingisi</span>
        </div>
    )
}
