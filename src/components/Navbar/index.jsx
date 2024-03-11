
import classN from 'classnames';
import styles from './Navbar.module.css';

import BellIcon from '../../assets/icons/Bell'
import ProfilIcon from '../../assets/icons/Profil'
import Language from '../LanguageSelect/index.jsx'
import ArrowDown from "../../assets/icons/ArrowDownName"
import Back from "../../assets/icons/Back"
import BtnPdf from "../../shared/ButtonBlue"
import DownloadIcon from "../../assets/icons/Download"

import { Link, NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { NavbarContext } from '../../context';

function Navbar() {
    const setActive = ({ isActive }) => isActive ? 'active_nav' : classN(styles.navlink);

    const { title, link, linkText, linkText2, linkHeader, link2, svg, btn, } = useContext(NavbarContext)


    return (
        <header className={classN(styles.wrapper)}>
            <nav className={classN(styles.nav)}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Link to={linkHeader} className={classN(styles.title)}>
                        {
                            svg ? <div className={styles.back_icon} > <Back /> </div> : null
                        }
                        {title}
                    </Link >
                    {
                        !!linkText ? <NavLink end='true' className={setActive} to={link} >{linkText}</NavLink> : null
                    }
                    {
                        !!linkText2 ? <NavLink end='true' to={link2} className={setActive} >{linkText2}</NavLink> : null
                    }
                    {
                        btn ? <BtnPdf text={'dalolatnoma123.pdf'} icon={<DownloadIcon/>}/> : null
                        
                    }

                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div className={classN(styles.bloc_icon)}>
                        <div className={classN(styles.icon)}>
                            <BellIcon />
                        </div>
                        <Language />
                    </div>

                    <div className={classN(styles.icon_prof)}>
                        <ProfilIcon />
                    </div>

                    <div>
                        <p className={classN(styles.supervisor)}>
                            Ikrom Qobilov <ArrowDown />
                        </p>
                        <p className={classN(styles.supervisor_name)}> Ish boshqaruvchi </p>
                    </div>
                </div>

            </nav>
        </header>
    )
}
export default Navbar