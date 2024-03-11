
import classN from 'classnames';
import styles from './Proceedings.module.css';

import SearchIcon from '../../../assets/icons/Search'
import Filter from '../../../shared/FilterForList';
import TableForInstructions from '../../../components/TableForInstructions/index.jsx';

import { useContext } from 'react';
import { NavbarContext } from '../../../context';

export default function Proceedings() {
    const { setTitle, setLinkHeader, setLinkText, setLinkText2, setLink, setLink2, setSvg, setBtn } = useContext(NavbarContext);
    setTitle('Tuzilgan ko‘rsatmalar')
    setLinkHeader(null)
    setLinkText('Jarayondagi dalolatnomalar')
    setLink('/instructions')
    setSvg(false)
    setLinkText2('Muddati tugagan ko‘rsatmalar')
    setLink2('null')
    setBtn(false)

    return (
        <section className={classN(styles.wrap)}>
            <div className={classN(styles.filter_block)}>
                <div>
                    <div className={classN(styles.seach_input)} >
                        <input type="text" className={classN(styles.input)} placeholder="Qidiruv" />
                        <SearchIcon />
                    </div>
                    <div className={classN(styles.seach_input)} >
                        <Filter />
                    </div>
                    <div className={classN(styles.seach_input)} >
                        <Filter />
                    </div>
                </div>
                <div>
                    <div className={classN(styles.seach_input)} >
                        <input type="date" style={{width:'15.8rem'}} />
                    </div>

                </div>
            </div>
            <TableForInstructions />

        </section>
    )
}
