import {useState} from 'react';

import ArrowDownIcon from '../../assets/icons/ArrowAccow.jsx';

import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import Body from './AccordionBody/index.jsx';

export default function Accordions({status}) {
    const [isBlock, setBlock] = useState(false)


    const [expanded, setExpanded] = React.useState(false);
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div style={{marginBottom: '2rem'}}>
            <Accordion
                expanded={expanded === 'panel1'}
                onChange={handleChange('panel1')}
                square={true}
                disableGutters={true}
                style={{
                    margin: '1.2rem 1.6rem -1.2rem',
                    // padding: '1.2rem 1.6rem',
                    background: '#fff',
                    boxShadow: 'none',
                    borderBottom: 'solid 1px #DDE2F1',
                }}>

                <AccordionSummary
                    expandIcon={<ArrowDownIcon/>}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                    sx={{padding: '0', margin: '0',}}
                >
                    <Typography sx={{width: '33%', flexShrink: 0, fontSize: '1.8rem', margin: '0'}}>
                        1. Asosiy savollar
                    </Typography>
                </AccordionSummary>

                <Body status={status}/>
                <Body />

            </Accordion>


        </div>
    );
}


