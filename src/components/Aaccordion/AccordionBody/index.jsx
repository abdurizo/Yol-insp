import classN from "classnames";
import styles from "./AccordionBody.module.css";
import Img1 from "../../../assets/img/Rectangle.jpg";
import * as React from "react";
import BtnObjection from "../../ObjectionButton/index.jsx";
import Typography from "@mui/material/Typography";
import AccordionDetails from "@mui/material/AccordionDetails";



function AccordionBody({ status, statetext}) {
    return (
        <>
            <AccordionDetails
                sx={{
                    background: "#F6F7FA",
                    borderRadius: '8px',
                    padding: '1.6rem  2.4rem ',
                    margin: '1.6rem 0',
                }}
            >
                <Typography>
                    <p className={classN(styles.address)}>1.1 Toshkent shahar, Chilonzor tumani, M39 Xalqaro
                        Avtomobil yo‘li?</p>
                    {
                        status === "Ha" ?
                            <div className={classN(styles.state, styles.state_yes)}>Ha</div> :

                            <div className={classN(styles.state, styles.state_not)}>Yo‘q</div>

                    }
                    <div className={classN(styles.img_wrap)}>
                        <div className={classN(styles.img)}>
                            <img src={Img1} alt="Image"/>
                        </div>
                        <div className={classN(styles.img)}>
                            <img src={Img1} alt="Image"/>
                        </div>
                        <div className={classN(styles.img)}>
                            <img src={Img1} alt="Image"/>
                        </div>
                    </div>
                    <p className={classN(styles.text)}>Izoh</p>
                    <div className={classN(styles.text, styles.wrap_text)}>
                        Toshkent shahar, Chilonzor tumani, M39 Xalqaro Avtomobil yo‘li
                    </div>
                    <div className={classN(styles.deadline)}>
                        <div className={classN(styles.picket)}>
                            <p className={classN(styles.text)}>Piketdan</p>
                            <div className={classN(styles.text, styles.wrap_text)}>15</div>
                        </div>
                        <div className={classN(styles.picket)}>
                            <p className={classN(styles.text)}>Piketgacha</p>
                            <div className={classN(styles.text, styles.wrap_text)}>21</div>
                        </div>
                        <div className={classN(styles.picket)}>
                            <p className={classN(styles.text)}>Hajm, m3</p>
                            <div className={classN(styles.text, styles.wrap_text)}>45123</div>
                        </div>
                    </div>
                    <p className={classN(styles.text)}>Bartaraf etish muddati, kun</p>
                    <div className={classN(styles.text, styles.wrap_text)}>
                        60
                    </div>
                    <BtnObjection/>
                </Typography>
            </AccordionDetails>

        </>
    )
}

export default AccordionBody;