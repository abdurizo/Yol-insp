
import classN from 'classnames';
import styles from './BasicInformation.module.css';


import FileIcon from '../../../assets/icons/File';
import UserIcon from '../../../assets/icons/User';
// import ArrorLeft from '../../../assets/icons/ArrorLeft';

// import Participants from '../participants/Participants';

import { useContext } from 'react';
import { NavbarContext } from '../../../context';

function BasicInformation() {
    const { setTitle, setLink, setLinkText, setLinkText2, setLinkHeader, setLink2, setSvg,setBtn } = useContext(NavbarContext);
    setLinkText('Asosiy ma’lumotlar')
    setLink('/objects/:id')
    setSvg(true)
    setBtn(false)
    setLinkText2('Qatnashchilar')
    setLink2('/objects/:id/participants')

    setTitle('Obyekt ID AA112')
    setLinkHeader('objects')

    return (
        <>
            <section className={classN(styles.wrap)} >
                <div className={classN(styles.block)} >
                    <div className={classN(styles.obj_info_title)} >
                        <FileIcon />
                        <h2 className={classN(styles.obj_info_text)}>Obyekt ma’lumotlari</h2>
                    </div>
                    <div className={classN(styles.list)}>
                        <div className={classN(styles.description)}>
                            <p className={classN(styles.name, styles.text)}>Obyekt ID</p>
                            <p className={classN(styles.value, styles.text)}>456748</p>
                        </div>
                        <div className={classN(styles.description)}>
                            <p className={classN(styles.name, styles.text)}>Obyekt nomi</p>
                            <p className={classN(styles.value, styles.text)}>Toshkent shahar, Chilonzor tumani, M39 Xalqaro Avtomobil yo‘li</p>
                        </div>
                        <div className={classN(styles.description)}>
                            <p className={classN(styles.name, styles.text)}>Obyekt turi</p>
                            <p className={classN(styles.value, styles.text)}>Sun’iy inshoat</p>
                        </div>
                        <div className={classN(styles.description)}>
                            <p className={classN(styles.name, styles.text)}>Dastur nomi</p>
                            <p className={classN(styles.value, styles.text)}>Vazirlar mahkamasi</p>
                        </div>
                        <div className={classN(styles.description)}>
                            <p className={classN(styles.name, styles.text)}>Qurilish turi</p>
                            <p className={classN(styles.value, styles.text)}>Mukammal ta’mir</p>
                        </div>
                        <div className={classN(styles.description)}>
                            <p className={classN(styles.name, styles.text)}>Obyekt hududi</p>
                            <p className={classN(styles.value, styles.text)}>Toshkent shahri</p>
                        </div>
                        <div className={classN(styles.description)}>
                            <p className={classN(styles.name, styles.text)}>Obyekt manzili</p>
                            <p className={classN(styles.value, styles.text)}>Toshkent shahar, Chilonzor tumani</p>
                        </div>
                        <div className={classN(styles.description)}>
                            <p className={classN(styles.name, styles.text)}>Obyekt uzunligi</p>
                            <p className={classN(styles.value, styles.text)}>2km</p>
                        </div>
                        <div className={classN(styles.description)}>
                            <p className={classN(styles.name, styles.text)}>Qo‘shilgan sana</p>
                            <p className={classN(styles.value, styles.text)}>20.11.2023</p>
                        </div>
                        <div className={classN(styles.description)}>
                            <p className={classN(styles.name, styles.text)}>Ekspertiza raqami</p>
                            <p className={classN(styles.value, styles.text)}>456748</p>
                        </div>
                        <div className={classN(styles.description)}>
                            <p className={classN(styles.name, styles.text)}>Qiymati (prognoz)</p>
                            <p className={classN(styles.value, styles.text)}>200 mln so‘m</p>
                        </div>
                    </div>
                </div>

                <div className={classN(styles.block)} >
                    <div className={classN(styles.obj_info_title)} >
                        <UserIcon />
                        <h2 className={classN(styles.obj_info_text)}>Obyekt ma’lumotlari</h2>
                    </div>
                    <div className={classN(styles.list)}>
                        <div className={classN(styles.description)}>
                            <p className={classN(styles.name, styles.text)}>F. I. Sh.</p>
                            <p className={classN(styles.value, styles.text)}>Abdug‘aniyev Sardor Shuxrat o‘g‘li</p>
                        </div>
                        <div className={classN(styles.description)}>
                            <p className={classN(styles.name, styles.text)}>Faoliyat hududi</p>
                            <p className={classN(styles.value, styles.text)}>Toshkent shahar</p>
                        </div>
                        <div className={classN(styles.description)}>
                            <p className={classN(styles.name, styles.text)}>Biriktirilgan hududi</p>
                            <p className={classN(styles.value, styles.text)}>Toshkent shahri</p>
                        </div>
                        <div className={classN(styles.description)}>
                            <p className={classN(styles.name, styles.text)}>Bo‘limi</p>
                            <p className={classN(styles.value, styles.text)}>Bo‘lim nomi</p>
                        </div>
                        <div className={classN(styles.description)}>
                            <p className={classN(styles.name, styles.text)}>Lavozimii</p>
                            <p className={classN(styles.value, styles.text)}>Yetakchi inspektor</p>
                        </div>
                        <div className={classN(styles.description)}>
                            <p className={classN(styles.name, styles.text)}>Telefon</p>
                            <p className={classN(styles.value, styles.text)}>+998 90 945 31 56</p>
                        </div>
                        <div className={classN(styles.description)}>
                            <p className={classN(styles.name, styles.text)}>Obyektlari soni</p>
                            <p className={classN(styles.value, styles.text)}>100</p>
                        </div>
                        <div className={classN(styles.description)}>
                            <p className={classN(styles.name, styles.text)}>Biriktirilgan sana</p>
                            <p className={classN(styles.value, styles.text)}>20.11.2023</p>
                        </div>
                        <div className={classN(styles.description)}>
                            <p className={classN(styles.name, styles.text)}>Oxirgi aktivlik</p>
                            <p className={classN(styles.value, styles.text)}>21.11.2023</p>
                        </div>

                    </div>
                </div>
            </section>
            {/* <Participants /> */}
        </>
    )
}
export default BasicInformation