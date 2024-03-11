
import ReactPaginate from 'react-paginate';
import Select, { components } from 'react-select';
import ArrowDown from "../../assets/icons/ArrowDownPage.jsx"
import Previous from '../../shared/Pointer/Prev/index.jsx';
import Next from '../../shared/Pointer/Next/index.jsx'

import classN from 'classnames';
import styles from "./Pagination.module.css";


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

const DropdownIndicator = (props) => {
    return (
        <components.DropdownIndicator {...props}>
            <ArrowDown />
        </components.DropdownIndicator>
    );
}

function Pagination({handlePaginationChange, news, page, getValue, langSelect}) {
    return (
        <div className={classN(styles.wrap)}>
            <div className={classN(styles.page_count)}>
                <Select
                    classNamePrefix="custom-select"
                    options={options}
                    value={getValue()}
                    onChange={langSelect}
                    isSearchable={false}
                    components={{
                        DropdownIndicator
                    }}
                    styles={{
                        control: (base) => ({
                            ...base,
                            border: 0,
                            boxShadow: "0px 2px 12px 0px rgba(0, 0, 0, 0.05)",
                            borderRadius: '0.4rem',
                            padding: '1.2rem',
                            fontSize: '1.4rem',
                            fontFamily: "OpenSans-Medium",
                            lineHeight: '2.4rem',
                            cursor: 'pointer'
                        }),
                        valueContainer: (base) => ({
                            ...base,
                            padding: 0,
                        }),
                        singleValue: (base) => ({
                            ...base,
                            color: '#878787',
                            // paddingRight:'0.2rem'
                        }),
                        indicatorSeparator: (base) => ({
                            ...base,
                            display: 'none',
                        }),
                        dropdownIndicator: (base) => ({
                            ...base,
                            padding: 0,
                        }),
                        menu: (base) => ({
                            ...base,
                            fontSize: '1.4rem',
                            fontFamily: "OpenSans-Medium",
                            color: '#878787',
                            marginTop: 0,
                            padding: '0 5px'
                        }),
                        option: (base, state) => ({
                            ...base,
                            padding: '0',
                            fontSize: '1.4rem',
                        })
                    }}
                />
                <span>Umumiy {news.count} ta</span>
            </div>
            <div className={classN(styles.paginate)}>
                <ReactPaginate
                    containerClassName={classN(styles.paginate_item)}
                    pageClassName={classN(styles.page)}
                    previousClassName={classN(styles.transition)}
                    nextClassName={classN(styles.transition)}
                    activeClassName={classN(styles.page_active)}
                    breakLabel="..."
                    nextLabel={<Next/>}
                    previousLabel={<Previous/>}
                    onPageChange={handlePaginationChange}
                    pageRangeDisplayed={5}
                    pageCount={news}
                    renderOnZeroPageCount={null}
                    initialPage={
                        +page - 1
                    }

                />
            </div>
        </div>
    );
}

export default Pagination;