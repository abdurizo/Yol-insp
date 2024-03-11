
import classN from 'classnames';
import styles from './Proceedings.module.css';

import TableForProceedings from '../../../components/TableForProceedings/index.jsx';

import {useContext} from 'react';
import {NavbarContext} from '../../../context/index.jsx';

function Input() {
    const {
        setTitle,
        setLink,
        setLinkText,
        setLinkText2,
        setLinkHeader,
        setLink2,
        setSvg,
        setBtn
    } = useContext(NavbarContext);
    setLinkText('Jarayondagi dalolatnomalar')
    setLink('/documents')

    setLinkText2('Shakllangan dalolatnomalar')
    setLink2('/documents/formed')

    setTitle('Dalolatnomalar')
    setLinkHeader(null)
    setSvg(false)
    setBtn(false)

    return (
        <section className={classN(styles.wrap)}>
            <TableForProceedings/>
        </section>
    )
}

export default Input;