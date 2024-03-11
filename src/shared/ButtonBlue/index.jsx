import classN from 'classnames';
import styles from './Button.module.css';
import * as React from 'react';
import WorldIcon from '../../assets/icons/WordIcon'
import { useState } from 'react';


import Modal from '../../components/Modal';

export default function Button({ text, icon }) {

    const [open, setOpen] = React.useState(false);
    const handelClick = (event) => {
        event.preventDefault()
        setOpen(!open)
    }
    return (
        <div
            className={classN(styles.wrap)}
            onClick={handelClick}
        >
            {icon}
            <span className={classN(styles.text)} >{text}</span>
            <Modal open={open} setOpen={setOpen}/>
        </div>
    )
}
