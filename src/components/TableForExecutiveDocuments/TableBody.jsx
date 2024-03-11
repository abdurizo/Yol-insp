import {Link,} from 'react-router-dom';
import classN from 'classnames';
import styles from './Table.module.css';
import * as React from 'react';
import Index from '../../shared/Status/Approved/index.jsx';
import Button from '../../shared/ButtonBlue/index.jsx';
import WorldIconSmall from '../../assets/icons/WordSmallIcon.jsx';
import Num from './num/index.jsx'


function TableBody({index, title, id, pub_date}) {
    // const [open, setOpen] = React.useState(false);

    return (<>
        <Link  className={classN(styles.columns, styles.colums_sub_title)}>
            <span style={{width: "3rem"}}>{index ? index : '1'}</span>
            <span
                style={{width: "37.8rem"}}>
                    11.1
                </span>
            <span style={{width: "37.8rem"}}>{pub_date ? pub_date : '12.11.2.23'} </span>
            <span style={{width: "37.8rem"}}>
                3 ta
                <span className={styles.num}>
                    <Num num={ 1 }/>
                    <Num num={ 2 }/>
                    <Num num={ 3 }/>
                </span>
            </span>
            <span style={{width: "37.8rem"}}>
                    <Button
                        text={'ijro_1punkt.jpg'}
                        icon={<WorldIconSmall/>}
                    />
                </span>
        </Link>

    </>)
}

export default TableBody;