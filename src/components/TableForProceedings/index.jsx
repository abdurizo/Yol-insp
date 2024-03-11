import { useMemo, } from 'react';
import { useNavigate } from "react-router-dom";
7
import mData from "../../Data.json";

import TableConstruction from "../TableConstruction"
import StatusNotConfirmed from "../../shared/Status/NotConfirmed/index.jsx";
import StatusApproved from "../../shared/Status/Approved/index.jsx";
import StatusObjection from "../../shared/Status/Objection/index.jsx";


function TableForProceedings() {
    const data = useMemo(() => mData, []);
    const navigate = useNavigate();
    const columns = [
        {
            Header: 'T/r',
            accessor: (data, index) => index + 1,
            onClick: () => navigate('/objects/:id')

        },
        {
            Header: 'Yuborilgan sana',
            accessor: () => '18.10.2023',
            onClick: () => navigate('/documents/:id'),
            style: { maxWidth: '37.8rem' }
        },
        {
            Header: 'Inspektor',
            accessor: () => 'N.Raxmanov',
            onClick: () => navigate('/documents/:id'),
            style: { maxWidth: '37.8rem' }
        },
        {
            Header: 'Obyekt nomi',
            accessor: () => 'Toshkent shahar, Chilonzor tumani, M39 Xalqaro Avtomobil yo‘li',
            onClick: () => navigate('/documents/:id'),
            style: { maxWidth: '37.8rem' }
        },
        {
            Header: 'Holati',
            accessor: (data) => (
                <span >
                    {
                        data.status === 'approved' ? <StatusApproved statusText={'Tasdiqlandi'} /> :
                            data.status === 'objection' ? <StatusObjection statusText={'E‘tiroz bildirildi'} /> :
                                <StatusNotConfirmed statusText={'Tasdiqlanmadi'} />
                    }
                </span>
            ),
            onClick: () => navigate('/documents/:id')
        },
    ]

    return (
        <TableConstruction columns={columns} data={data} />

    )
}

export default TableForProceedings