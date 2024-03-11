
import styles from './Number.module.css';
import classN from 'classnames';

import ParticipantsCard from '../../../../components/ParticipantsCard';
import ObjectInformationCard from '../../../../components/ObjectInformationCard';
import Question from '../../../../components/Questions';

import { useContext } from 'react';
import { NavbarContext } from '../../../../context';

function Questionnaire() {
    const { setTitle, setLink, setLinkText, setLinkText2, setLinkHeader, setLink2, setSvg, setBtn } = useContext(NavbarContext);
    setLinkText(null)
    setLink(null)
    setSvg(true)
    setLinkText2(null)
    setLink2(null)
    setBtn(true)
    setTitle('Dalolatnoma raqami №4567')
    setLinkHeader('/documents/formed')

    return (
        <section className={classN(styles.container)} >
            <div >
                <Question/>
                <Question/>
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
export default Questionnaire