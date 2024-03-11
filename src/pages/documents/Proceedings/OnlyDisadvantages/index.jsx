
import styles from './Questionnaire.module.css';
import classN from 'classnames';

import ParticipantsCard from '../../../../components/ParticipantsCard';
import ObjectInformationCard from '../../../../components/ObjectInformationCard';
import Question from '../../../../components/Questions';

import { useContext } from 'react';
import { NavbarContext } from '../../../../context';

function Disadvantages() {
    const { setTitle, setLink, setLinkText, setLinkText2, setLinkHeader, setLink2, setSvg, setBtn } = useContext(NavbarContext);
    setLinkText('Faqat kamchiliklar')
    setLink('/documents/:id')
    setSvg(true)
    setLinkText2('To‘liq so‘rovnoma')
    setLink2('/documents/:id/complete-questionnaire')

    setTitle('Toshkent shahar, Chilonzor tumani, M39 Xalqaro Avtomobil yo‘li')
    setLinkHeader('/documents')
    setBtn(false)

    return (
        <section className={classN(styles.container)} >
            <div>
               <Question />
                <button className={classN(styles.confirmation) }>Dalolatnomani tasdiqlash</button>
            </div>
            <div className={classN(styles.block)}>
                <ObjectInformationCard
                    title={'Toshkent shahar, Chilonzor tumani, M39 Xalqaro Avtomobil yo‘li'}
                />
                <ParticipantsCard title={'Qatnashchilar'} />
            </div>
        </section>
    )
}
export default Disadvantages