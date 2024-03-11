
import { Link, NavLink } from 'react-router-dom';


import BurgerIcon from "../../assets/icons/Burger";
import DocsIcon from "../../assets/icons/Docs";
import ExitIcon from "../../assets/icons/Exit";
import DocumentsIcon from "../../assets/icons/Documents";
import Docs3Icon from "../../assets/icons/Doxs3";
import SideBarComponents from './side-bar-components'


import classN from 'classnames';
import styles from "./SidePanel.module.css";

function SideBar({ state, setState, text, icon, link}) {
    const setActive = ({ isActive }) => isActive ? 'block_link_active' : classN(styles.block_link);

    return (
        <>
            <div>
                <div className={classN(styles.block)} style={{ marginBottom: "5rem" }}>
                    <button
                        // className={classN(styles.burger_button)}
                        onClick={() => setState((state) => !state)}
                    >
                        <BurgerIcon />
                    </button>
                    <Link to='/' className={classN(styles.burger_block_text)} style={{ display: state ? "none" : "block" }}>yo‘l inspeksiyasi</Link>
                </div>

                <div className={classN(styles.wrap_links)}>

                    <SideBarComponents text={'Obyektlar ro‘yhati'} icon={<DocsIcon />} link={'/'} state={state} />
                    <SideBarComponents text={'Dalolatnomalar'} icon={<DocumentsIcon />} link={'/documents'} state={state} setState={setState} />
                    <SideBarComponents text={'Ko‘rsatmalar'} icon={<Docs3Icon />} link={'/instructions'} state={state} setState={setState} />

                </div>
            </div>

            <Link to='/' className={classN(styles.exit_button)}  >
                <div className={classN(styles.icon_wrap)}>
                    <ExitIcon />
                </div>
                <p style={{ display: state ? "none" : "block" }}>Chiqish</p>
            </Link>
        </>

    )
}
export default SideBar;