
import classN from 'classnames';
import styles from './Table.module.css';
import { useMemo } from 'react';
import { useNavigate } from "react-router-dom";

import mData from "../../Data.json";
import TableConstruction from '../TableConstruction';



function Table() {
    const data = useMemo(() => mData, [])
    const navigate = useNavigate()
    const columns = [
        {
            Header: '#',
            accessor: (data) => data.id,
            onClick: () => navigate('/objects/:id')
            // style:{width:"3rem"},
        },
        {
            Header: 'Obyekt ID',
            accessor: (data) => data.object_ID,
            onClick: () => navigate('/objects/:id')
            // style: { width: "8rem" },
        },
        {
            Header: 'Dastur nomi',
            accessor: (data) => data.program_name,
            onClick: () => navigate('/objects/:id')
        },
        {
            Header: 'Obyekt nomi',
            accessor: () => '4R148 4R115 avtomoibl yo‘li-Yangiqadam q.-Uchuy q.-Oltiariq sh.-Chimyon q avtomobil yo‘lining 41-46 km rekonstruksiya qilish',
            style: { maxWidth: "28rem" },
            onClick: () => navigate('/objects/:id')
        },
        {
            Header: 'Obyekt turi',
            accessor: (data) => data.object_type,
            onClick: () => navigate('/objects/:id')
        },
        {
            Header: 'Qurilish turi',
            accessor: (data) => data.construction_type,
            onClick: () => navigate('/objects/:id')
        },
        {
            Header: 'Tasdiqlangan sana',
            accessor: () => "18.10.2023",
            onClick: () => navigate('/objects/:id')
        },
        {
            Header: 'Muddat',
            accessor: () => "2023-2024 yy.",
            onClick: () => navigate('/objects/:id')
        },
        {
            Header: 'Inspektor',
            accessor: (data) => data.first_name,
            onClick: () => navigate('/objects/:id')
        },
        {
            Header: 'Texnik nazoratchi',
            accessor: () => (
                <div>
                    <p className={classN(styles.company)}>“Yo‘l loyha buyrosi” МChJ</p>
                    N.D.Mavlanov
                </div>
            ),
            onClick: () => navigate('/documents')
        },
        {
            Header: 'Mualliflik nazoratchi',
            accessor: () => (
                <div >
                    <p className={classN(styles.company)}>Sirdaryo KFUK</p>
                    Sh.Oʻralov
                </div>
            ),
        },
    ]

    return (
        <TableConstruction columns={columns} data={data} />

    )
}
export default Table;