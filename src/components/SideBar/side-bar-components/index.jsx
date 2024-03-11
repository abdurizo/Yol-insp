import classN from 'classnames';
import styles from "./SideBarCompon.module.css";

import {NavLink, useLocation} from 'react-router-dom';

export default function SideBarComponents({text, icon, state, link,}) {
    const {pathname} = useLocation()
    console.log(pathname.split("/"))
    const setActive = ({isActive}) =>
        link === "/" ? (pathname.split("/")[1] === "objects" || (pathname.split("/")[1] === "" &&
            link === "/")) ? "block_link_active" : classN(styles.block_link) : isActive ? 'block_link_active' : classN(styles.block_link);
    return (
        <NavLink
            to={link}
            // end='true'
            className={setActive}
        >
            <div className={classN(styles.icon_wrap)}>
                {icon}
            </div>
            <p
                className={classN(styles.block_text)}
                style={{display: state ? "none" : "block"}}
            >
                {text}
            </p>

        </NavLink>
    )
}
