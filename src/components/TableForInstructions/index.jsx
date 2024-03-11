
import {useSearchParams, useNavigate} from 'react-router-dom';
import {useState, useEffect} from 'react';
import axios from "axios";

import Pagination from '../Pagination';
import TableConstruction from '../TableConstruction';
import Button from '../../shared/ButtonBlue/index.jsx';
import Download from '../../assets/icons/Download.jsx';

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

function TableForInstructions() {

    const [searchParams, setSearchParams] = useSearchParams()
    const navigate = useNavigate();
    const [amountOfElements, setAmountOfElements] = useState(searchParams.get("count") ?? "10");
    const [isLoading, setIsLoading] = useState(false)
    const [page, setPage] = useState(searchParams.get('page') ?? 1) // текущая страница
    const [news, setNews] = useState({
        numPages: 0,
        results: [],
        count: 0
    }) // получаемая страница

    useEffect(() => {
        setIsLoading(true)
        axios.get(`https://aloqamuzeyi.uz/uz/api/exhibits/`, {
            params: {
                p: searchParams.get('page') ?? 1,
                // p: page,
                page_size: amountOfElements,
            }
        })
            .then(res => {
                // console.log(res)
                setNews({
                    numPages: res.data.num_pages,
                    results: res.data.results,
                    count: res.data.count
                })
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setIsLoading(false)
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [amountOfElements,page])

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

    const columns = [
        {
            Header: 'T/r',
            accessor: (index) => index + 1,
            onClick: () => navigate('/instructions/:reference-number')

        },
        {
            Header: 'Ko‘rsatma raqami',
            accessor: (data) => data?.['slug'],
            onClick: () => navigate('/instructions/:reference-number')

        },
        {
            Header: 'Tuzilgan sana',
            accessor: (data) => data?.['name'],
            onClick: () => navigate('/instructions/:reference-number')

        },
        {
            Header: 'Ijro muhlati',
            accessor: () => '12.11.2023',
            onClick: () => navigate('/instructions/:reference-number')

        },
        {
            Header: 'Obyekt nomi',
            accessor: () => 'Toshkent shahar, Chilonzor tumani, M39 Xalqaro Avtomobil yo‘li',
            onClick: () => navigate('/instructions/:reference-number')

        },
        {
            Header: 'Inspektor',
            accessor: () => 'Sardor Abdug‘aniyev Shuxrat o‘g‘li',
            onClick: () => navigate('/instructions/:reference-number')

        },
        {
            Header: 'Ko‘rsatma fayli',
            accessor: () => (
                <Button
                    text={'ko‘rsatma123.pdf'}
                    icon={<Download />}
                />
            ),


        },
    ]

    return (
        <>

            <TableConstruction data={news.results} columns={columns} loading={isLoading} />

            <Pagination handlePaginationChange={handlePaginationChange} news={news.numPages} langSelect={langSelect} getValue={getValue}/>

        </>
    )

}

export default TableForInstructions;