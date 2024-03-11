
import {useState, useEffect} from 'react';
import { useSearchParams, useNavigate } from "react-router-dom";


import TableConstruction from '../TableConstruction';
import Pagination from '../Pagination';
import Status from '../../shared/Status/Approved/index.jsx';
import Button from '../../shared/ButtonBlue/index.jsx';
import WorldIconSmall from '../../assets/icons/WordSmallIcon.jsx';



const options = [
    {
        value: '5',
        label: '5'
    },
    {
        value: '10',
        label: '10'
    },
    {
        value: '20',
        label: '20'
    },
]

function TableForFormed() {
    const [searchParams, setSearchParams] = useSearchParams()
    const navigate = useNavigate();
    const [amountOfElements, setAmountOfElements] = useState(searchParams.get("count") ?? "10");
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)
    const [news, setNews] = useState({
            results: [],
            numPages: 0,
        }
    )

    const columns = [
        {
            Header: "T/r",
            accessor: (index) => index + 1,
            // style: { width: "3rem" },
            onClick: () => navigate('/documents/:id/number-document')
        },
        {
            Header: "Dalolatnoma raqami",
            accessor: () => "OID5812",
            // style: { width: "18rem", },
            onClick: () => navigate('/documents/:id/number-document')
        },
        {
            Header: "Tuzilgan sana",
            accessor: (data) => data?.['pub_date'],
            //  style: { maxWidth: "18rem", },
            onClick: () => navigate('/documents/:id/number-document')
        },
        {
            Header: "Obyekt nomi",
            accessor: (data) => data?.['title'],
            style: { maxWidth: "34rem", },
            onClick: () => navigate('/documents/:id/number-document')
        },
        {
            Header: "Holati",
            accessor: () => (
                <Status statusText={'Tasdiqlandi'} />
            ),
            // style: { width: "18rem", },
            onClick: () => navigate('/documents/:id/number-document')
        },
        {
            Header: "Inspektor",
            accessor: () => "Tashxodjayev Ashrabxan Aripxanovich",
            // style: { width: "34rem", },
            onClick: () => navigate('/documents/:id/number-document')
        },
        {
            Header: "Dalolatnoma fayli",
            accessor: () => (
                <Button
                    text={'dalolatnoma123.pdf'}
                    icon={<WorldIconSmall />}
                // setOpen={setOpen}
                />
            ),
            style: { width: "16rem", }
        },
    ]

    useEffect(() => {
        setLoading(true)
        fetch(`https://aloqamuzeyi.uz/uz/api/news?p=${searchParams.get(page) ?? 1}&page_size=12`)
            .then(res => {
                return res.json()
            })
            .then(res => {
                setNews({
                    numPages: res.num_pages,
                    results: res.results,
                    // count: res.data.count
                })
            })
            .catch(error =>{
                console.log(error)
            })
            .finally(() =>{
                setLoading(false)
            })
    }, []);

    const handlePaginationChange = ({selected}) => {
        setSearchParams({
            count: amountOfElements,
            page: selected + 1
        })
        setPage(selected + 1)
    }

    const getValue = () => {
        return amountOfElements ? options.find(c => c.value === amountOfElements) : ''
    }

    const langSelect = (newValue) => {
        setSearchParams({
            count: newValue.value
        })
        setAmountOfElements(newValue.value)
    }

    return (
        <>
            <TableConstruction columns={columns} data={news.results} loading={loading} />

            <Pagination
                handlePaginationChange={handlePaginationChange}
                news={news.numPages}
                page={page}
                langSelect={langSelect}
                getValue={getValue}
            />

        </>
    )
}
export default TableForFormed;
