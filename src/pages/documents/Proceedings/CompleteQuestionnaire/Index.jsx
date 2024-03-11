import styles from './CompleteQuestionnaire.module.css';
import classN from 'classnames';

import ParticipantsCard from '../../../../components/ParticipantsCard';
import ObjectInformationCard from '../../../../components/ObjectInformationCard';
import Question from '../../../../components/Questions';

import { useContext } from 'react';
import { NavbarContext } from '../../../../context';

export default function CompleteQuestionnaire({status}) {
    const { setTitle, setLink, setLinkText, setLinkText2, setLinkHeader, setLink2, setSvg,setBtn } = useContext(NavbarContext);
    setLinkText('Faqat kamchiliklar')
    setLink('/documents/:id ')

    setLinkText2('To‘liq so‘rovnoma')
    setLink2('/documents/:id/complete-questionnaire')

    setTitle('Toshkent shahar, Chilonzor tumani, M39 Xalqaro Avtomobil yo‘li')
    setLinkHeader('/documents')
    setSvg(true)
    setBtn(false)

    return (
        <section className={classN(styles.container)} >
            <div>
                <Question status={'Ha'}/>
            </div>

            <div className={classN(styles.block)}>
                <ObjectInformationCard
                    title={'Toshkent shahar, Chilonzor tumani, M39 Xalqaro Avtomobil yo‘li'}
                    style={{ marginBottom: '2rem', color: 'red' }}
                />
                <ParticipantsCard title={'Qatnashchilar'} />
            </div>

        </section>
    )
}
