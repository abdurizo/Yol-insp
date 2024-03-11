// import { Link, } from 'react-router-dom';
import classN from 'classnames';
import styles from './Table.module.css';

import React, {useState, useEffect} from 'react';
import {useSearchParams} from "react-router-dom";

import ReactPaginate from 'react-paginate';
import TableBody from './TableBody.jsx';
import paginationStyles from "../Pagination/Pagination.module.css";
import Select from "react-select";
import Next from "../../shared/Pointer/Next/index.jsx";
import Previous from "../../shared/Pointer/Prev/index.jsx";




function TableExecutiveDocuments() {
    const [searchParams, setSearchParams] = useSearchParams()
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)
    const [news, setNews] = useState({results: [],})

    useEffect(() => {
        setLoading(true)
        fetch(`https://aloqamuzeyi.uz/uz/api/news`)
            .then(res => {
                return res.json()
            })
            .then(res => {
                setNews({
                    results: res.results,
                })
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, []);

    const handlePaginationChange = ({selected}) => {
        setPage(selected + 1)
    }
    return (
        <>
            <div className={classN(styles.table_wrap)}>
                <div className={classN(styles.columns, styles.colums_title)}>
                    <span style={{width: "3rem"}}>T/r</span>
                    <span style={{width: "37.8rem"}}>Ijro dalolatnomasi raqami</span>
                    <span style={{width: "37.8rem"}}>Yuborilgan sanai</span>
                    <span style={{width: "37.8rem"}}>Ma’lumot berilgan bandlar </span>
                    <span style={{width: "37.8rem"}}>Ijro dalolatnomasi fayli </span>
                </div>

                {
                    loading ?
                        <div className="loading_wrap">
                            <h1 className="loading">Ma'lumotlar yuklanmoqda...</h1>
                        </div> :
                        news.results.map((info, index) => {
                            return (
                                <TableBody {...info} key={index} index={index + 1}/>
                            )
                        })
                }

            </div>

        </>
    )
}
export default TableExecutiveDocuments;