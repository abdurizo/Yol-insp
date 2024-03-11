

import {useState, useEffect} from 'react';
import { useNavigate} from "react-router-dom";
import Button from '../../shared/ButtonBlue/index.jsx';
import WorldIconSmall from '../../assets/icons/WordSmallIcon.jsx';
import StatusApproved from '../../shared/Status/Approved/index.jsx';
import TableConstruction from '../TableConstruction';


function TableForExecution() {

    const [news, setNews] = useState([]);
    const navigate = useNavigate()  
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch(`https://aloqamuzeyi.uz/uz/api/news`)
            .then(res => {
                return res.json()
            })
            .then(res => {
                setNews(res.results)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, []);

    const columns = [
        {
            Header: 'Bandr',
            accessor: ( index) => index + 1,
            onClick: () => navigate('/documents/:id/number-document')

        },
        {
            Header: 'Aniqlangan qoidabuzilish holatlarini bartaraf etish bo‘yicha berilgan ko‘rsatmalar',
            accessor: (data) => data ?.['title'],
            onClick: () => navigate('/documents/:id/number-document'),
            style: { maxWidth: "42.9rem" }

        },
        {
            Header: 'Ijro muhlati',
            accessor: (data) => data ?.['pub_date'],
            onClick: () => navigate('/documents/:id/number-document')

        },
        {
            Header: 'Ijro matni',
            accessor: (data) => data ?.['title'],
            onClick: () => navigate('/documents/:id/number-document'),
            style: { maxWidth: "42.9rem" }

        },
        {
            Header: 'Biriktirilgan fayl',
            accessor: () => (
                <Button
                    text={'ijro_1punkt.jpg'}
                    icon={<WorldIconSmall />}
                // setOpen={setOpen}
                />),
            onClick: () => navigate('/documents/:id/number-document')

        },
        {
            Header: 'Yuborilgan sana',
            accessor: (data) => data ?.['pub_date'],
            onClick: () => navigate('/documents/:id/number-document')

        },
        {
            Header: 'Holati',
            accessor: () => (
                <StatusApproved statusText={'Bajarildi'} />
            ),
            onClick: () => navigate('/documents/:id/number-document')

        },
    ]

    return (
        <>
            <TableConstruction columns={columns} data={news} loading={loading} />

        </>
    )
}
export default TableForExecution;