
import classN from 'classnames';
import styles from './Participants.module.css';

import EdificeIcon from '../../../assets/icons/Edifice';
import UserIcon from '../../../assets/icons/User';
import CompanyCard from '../../../components/CompanyCard';
import PersonalCard from '../../../components/PersonalCard';

import { useContext } from 'react';
import { NavbarContext } from '../../../context';

function Participants() {
    const { setTitle, setLink, setLinkText, setLinkText2, setLinkHeader, setLink2, setSvg, setBtn } = useContext(NavbarContext);
    setLinkText('Asosiy ma’lumotlar')
    setLink('/objects/:id')
    
    setLinkText2('Qatnashchilar')
    setLink2('/objects/:id/participants')
    setSvg(true)
    setTitle('Obyekt ID AA112')
    setLinkHeader('objects')
    setBtn(false)

    return (
        <section className={classN(styles.wrap)} >

            <CompanyCard title={'Buyurtmachi'} />
            <CompanyCard title={'Loyihachi'} />
            <CompanyCard title={'Pudratchi'} />

            <PersonalCard title={'Texnik nazoratchi'}/>
            <PersonalCard title={'Mualliflik nazoratchi'}/>
            <PersonalCard title={'Ish boshqaruvchi'}/>
        </section>
    )
}
export default Participants;