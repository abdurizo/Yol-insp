import classN from 'classnames';
import styles from './ReferNum.module.css';

import FileIcon from '../../../assets/icons/File';
import TableExecutive from '../../../components/TableForExecution/index.jsx';

import { useContext } from 'react';
import { NavbarContext } from '../../../context';
import Approved from "../../../shared/Status/Approved";
import Confirmed from "../../../shared/Status/NotConfirmed";
import Objection from "../../../shared/Status/Objection";
import BtnAct from "../../../shared/ButtonDrawingUpAnAct";
import TableExecutiveDocuments from "../../../components/TableForExecutiveDocuments/index.jsx";

export default function ReferenceNumber() {

    const { setTitle, setLinkHeader, setLinkText, setLinkText2, setLink, setLink2, setSvg, setBtn } = useContext(NavbarContext);
    setTitle('Ko‘rsatma 4567')
    setLinkHeader('/instructions')
    setLinkText(null)
    setLink(null)
    setSvg(true)
    setLinkText2(null)
    setLink2(null)
    setBtn(true)
    return (
        <>
            <section className={classN(styles.wrap)}>
                <div className={classN(styles.basic_inf)}>
                    <div className={classN(styles.basic_icon_title)}>
                        <FileIcon/>
                        <h2 className={classN(styles.basic_info_text)}>Asosiy ma’lumotlar</h2>
                    </div>
                    <div className={classN(styles.basic_info_text)}>
                        <div style={{padding: '1rem 1.6rem'}}>
                            <div className={classN(styles.description)}>
                                <p className={classN(styles.text, styles.name)}>Tuzilgan sana</p>
                                <p className={classN(styles.text)}>20.11.2023</p>

                            </div>
                            <div className={classN(styles.description)}>
                                <p className={classN(styles.text, styles.name)}>Ijro muhlati</p>
                                <p className={classN(styles.text)}>20.11.2023</p>

                            </div>
                            <div className={classN(styles.description)}>
                                <p className={classN(styles.text, styles.name)}>Obyekt nomi</p>
                                <p className={classN(styles.text)}>Toshkent shahar, Chilonzor tumani, M39 Xalqaro
                                    Avtomobil yo‘li</p>
                            </div>
                        </div>
                        <div style={{padding: '1rem 1.6rem'}}>
                            <div className={classN(styles.description)}>
                                <p className={classN(styles.text, styles.name)}>Ijro muhlati</p>
                                <p className={classN(styles.text)}>20.11.2023</p>

                            </div>
                            <div className={classN(styles.description)}>
                                <p className={classN(styles.text, styles.name)}>Obyekt nomi</p>
                                <p className={classN(styles.text)}>Toshkent shahar, Chilonzor tumani, M39 Xalqaro
                                    Avtomobil yo‘li</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classN(styles.instructions)}>
                    <h3 className={classN(styles.h3)}>Ko‘rsatma ijrosi</h3>

                    <div className={classN(styles.status)}>
                        <Approved status_text={'Bajarildi'} num={4} ending={'ta'}/>
                        <Confirmed status_text={'Jarayonda 2 ta'}/>
                        <Objection status_text={'Bajarilmadi'} num={2} ending={'ta'}/>
                    </div>
                </div>
                <TableExecutive/>
                <BtnAct text={'Ijro dalolatnomasini tuzish'}/>

                <div className={classN(styles.instructions)}>
                    <h3 className={classN(styles.h3)}>Ijro dalolatnomalari</h3>
                </div>
                <TableExecutiveDocuments/>
            </section>
        </>
    )
}



