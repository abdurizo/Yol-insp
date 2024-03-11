import classN from 'classnames';
import styles from './ListOfObj.module.css';

import SearchIcon from '../../assets/icons/Search'
import Filter from '../../shared/FilterForList';
import Table from '../../components/Table/index.jsx';
import {useContext, useState} from 'react';
import {NavbarContext} from '../../context';


function ListOfObjects() {
    const [search, setSearch] = useState( )
    // console.log(search)
    const {
        setTitle,
        setLinkHeader,
        setLinkText,
        setLinkText2,
        setLink,
        setLink2,
        setSvg,
        setBtn
    } = useContext(NavbarContext);
    setTitle('Obyektlar ro‘yhat')
    setLinkHeader(null)
    setLinkText(null)
    setLinkText2(null)
    setLink(null)
    setLink2(null)
    setSvg(false)
    setBtn(false)


    return (
        <section className={classN(styles.wrap)}>
            <div className={classN(styles.filter_block)}>
                <div>
                    <div className={classN(styles.seach_input)}>
                        <input type="text"
                               className={classN(styles.input)}
                               placeholder="Qidiruv"
                               onChange={(e) => setSearch(e.target.value)}
                        />
                        <SearchIcon/>
                    </div>
                    <div className={classN(styles.seach_input)}>
                        <Filter search={setSearch}/>

                    </div>
                    <div className={classN(styles.seach_input)}>
                        <Filter/>

                    </div>
                    <div className={classN(styles.seach_input)}>
                        <Filter/>

                    </div>
                    <div className={classN(styles.seach_input)}>
                        <Filter/>

                    </div>
                </div>
                <div>
                    <div className={classN(styles.seach_input)}>
                        <input type="date"/>
                    </div>
                </div>
            </div>
            <Table search={search}/>

        </section>
    )
}

export default ListOfObjects;



{/* <table >
    <thead>
        <tr>
            <th id="numbr" className={classN(styles.table_title)} >#</th>
            <th id="obj_id" className={classN(styles.table_title)}>Obyekt ID</th>
            <th id="prog_name" className={classN(styles.table_title)}>Dastur nomi</th>
            <th id="obj_name" className={classN(styles.table_title)}>Obyekt nomi</th>
            <th id="obj_type" className={classN(styles.table_title)}>Obyekt turi</th>
            <th id="constr_type" className={classN(styles.table_title)}>Qurilish turi</th>
            <th id="confirmed_date" className={classN(styles.table_title)}>Tasdiqlangan sana</th>
            <th id="term" className={classN(styles.table_title)}>Muddat</th>
            <th id="inspector" className={classN(styles.table_title)}>Inspektor</th>
            <th id="technical" className={classN(styles.table_title)}>Texnik nazoratchi</th>
            <th id="head " className={classN(styles.table_title)}>Mualliflik nazoratchi</th>
        </tr>
    </thead>
    <tbody>
        <tr >
            <td headers='numbr' className={classN(styles.table_title)}>1</td>
            <td headers="obj_id" className={classN(styles.table_title)}>OID5812</td>
            <td headers='prog_name' className={classN(styles.table_title)}>PQ-465</td>
            <td headers='obj_name' className={classN(styles.table_title)}>
                4R148 “4R115 avtomoibl yo‘li-Yangiqadam q.-Uchuy q.-Oltiariq sh.-Chimyon q.” avtomobil yo‘lining 41-46 km rekonstruksiya qilish
                            </td>
            <td headers='obj_type' className={classN(styles.table_title)}>Yo'l</td>
            <td headers='constr_type' className={classN(styles.table_title)}>Rekonstruksiya qilish</td>
            <td headers='confirmed_date' className={classN(styles.table_title)}>18.10.2023</td>
            <td headers='term' className={classN(styles.table_title)}>2023-2024 yy.</td>
            <td headers='inspector' className={classN(styles.table_title)}>N.Raxmanov</td>
            <td headers='technical' className={classN(styles.table_title)} >
                <span>“Yo‘l loyha buyrosi” МChJ</span>
                <p>N.D.Mavlanov</p>
            </td>
            <td headers='head' className={classN(styles.table_title)}>
                <span>Sirdaryo KFUK</span>
                <p>Sh.Oʻralov</p>
            </td>
        </tr>
    </tbody>
</table> */
}