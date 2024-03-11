import {Link,} from 'react-router-dom';
import classN from 'classnames';
import styles from './Table.module.css';


function TableBody({ id, first_name, program_name,object_ID,object_type,construction_type,body,title}) {

    return (
        <Link to='/objects/:id' className={classN(styles.columns, styles.colums_sub_title)}>
            <span style={{width: "3rem"}}>{id ? id : '1'}</span>
            <span style={{width: "8rem"}}>{object_ID ? object_ID : 'OID5812'} </span>
            <span style={{width: "12rem"}}>{program_name ? program_name : 'PQ-465'}</span>
            <span style={{width: "28rem"}}>
                {body ? body : '4R148 “4R115 avtomoibl yo‘li-Yangiqadam q.-Uchuy q.-Oltiariq sh.-Chimyon q.” avtomobil yo‘lining 41-46 km rekonstruksiya qilish'}
             </span>
            <span style={{width: "12rem"}}>{object_type ? object_type : 'Yol'}</span>
            <span style={{width: "12rem"}}>{construction_type ? construction_type : 'Rekonstruksiya qilish'}</span>
            <span style={{width: "12rem"}}>18.10.2023</span>
            <span style={{width: "12rem"}}>2023-2024 yy.</span>
            <span style={{width: "16rem"}}>{first_name ? first_name : 'N.Raxmanov'}</span>
            <span style={{width: "16rem"}}>
                <div>
                    <p className={classN(styles.company)}>“Yo‘l loyha buyrosi” МChJ</p>
                    N.D.Mavlanov
                    </div>
            </span>
            <span style={{width: "16rem"}}>
                <div>
                    <p className={classN(styles.company)}>Sirdaryo KFUK</p>
                    Sh.Oʻralov
                </div>
            </span>
        </Link>
    )
}

export default TableBody;