import {useContext} from "react";
import {NavbarContext} from "../../../../context";
import {Link} from "react-router-dom";

import Back from "../../../../assets/icons/Back";

function ExecutionOfInstructions() {

    const {
        setTitle,
        setLinkHeader,
        setLinkText,
        setLinkText2,
        setLink,
        setLink2,
        setSvg,
        setBtn
    } = useContext(NavbarContext);
    setTitle('Ko‘rsatma 4567')
    setLinkHeader(null)
    setLinkText(null)
    setLink(null)
    setSvg(false)
    setLinkText2(null)
    setLink2(null)
    setBtn(false)

    return (
        <section className={styles.wrap}>

            <Link to={'/instructions/:reference-number'} className={styles.drafting}>
                <div><Back/></div>
                <span className={styles.text_drafting}>Ko‘rsatma ijrosi dalolatnomasini tuzish </span>
            </Link>
        </section>
    )
}

import styles from "./ExecutionOfInstructions.module.css"

export default ExecutionOfInstructions