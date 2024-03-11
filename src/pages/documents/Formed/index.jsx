
import classN from 'classnames';
import styles from './Formed.module.css';


import SearchIcon from '../../../assets/icons/Search'
import Filter from '../../../shared/FilterForList';
import TableForFormed from '../../../components/TableForFormed/index.jsx';


import { useContext } from 'react';
import { NavbarContext } from '../../../context';


function ListOfObjects() {
    const { setTitle, setLinkHeader, setLinkText, setLinkText2, setLink, setLink2, setSvg, setBtn } = useContext(NavbarContext);
    setTitle('Dalolatnomalar')
    setLinkHeader(null)
    setLinkText('Jarayondagi dalolatnomalar')
    setLink('/documents')
    setSvg(false)
    setLinkText2('Shakllangan dalolatnomalar')
    setLink2('/documents/formed' )
    setBtn(false)
    return (
        <section className={classN(styles.wrap)}>
            <div className={classN(styles.filter_block)}>
                <div>
                    <div className={classN(styles.seach_input)} >
                        <input type="text" className={classN(styles.input)} placeholder="Qidiruv" />
                        <SearchIcon />
                    </div>
                </div>
                <div>
                    <div className={classN(styles.seach_input)} >
                        <Filter />
                    </div>
                    <div className={classN(styles.seach_input)} >
                        <Filter />
                    </div>
                </div>
            </div>
            <TableForFormed />

        </section>
    )
}
export default ListOfObjects;



