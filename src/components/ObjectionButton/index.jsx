import {useState} from 'react';

import styles from './ObjectionBtn.module.css';
import classN from 'classnames';

import Img1 from '../../assets/img/Rectangle.jpg';
import ClipIcon from '../../assets/icons/Сlip';
import Button from '../../shared/ButtonBlue';
import WordSmallIcon from '../../assets/icons/WordSmallIcon';

export default function ObjectionButton() {
    const [isBlock, setBlock] = useState(false);
    const [isSubmit, setIsSubmit] = useState(false);
    return (
        <div>
            <button
                className={styles.objection_btn}
                onClick={() => setBlock(b => !b)}
                style={{display: isBlock ? "none" : "block"}}
            >
                E’tirozni bildirish
            </button>
            {
                !isSubmit ?
                    <form
                        className={classN(styles.wrap_objection)}
                        style={{display: isBlock ? "block" : "none"}}
                        onSubmit={e => e.preventDefault()}
                    >
                        <p className={classN(styles.text)}>E’tiroz izohi</p>
                        <div className={classN(styles.explanation)}>
                            <input type="text" className={classN(styles.text, styles.wrap_text)}/>
                            <button className={classN(styles.file_attachment)}>
                                <ClipIcon/>
                                <span>Fayl biriktirish</span>
                            </button>
                        </div>
                        <button
                            className={classN(styles.objection_btn)}
                            onClick={() => setIsSubmit(b => !b)}
                        >
                            E’tirozni yuborish
                        </button>
                    </form> :
                    <div
                        className={classN(styles.wrap_objection)}
                        style={{display: isSubmit ? "block" : "none",}}
                        // onSubmit={e => e.preventDefault()}
                    >
                        <p className={classN(styles.text)}>E’tiroz izohi</p>
                        <div style={{display: 'grid'}}>
                            <input type="text" className={classN(styles.text, styles.wrap_text)}/>
                        </div>
                        <Button
                            text={'etiroz_1.3punkt.pdf'}
                            icon={<WordSmallIcon/>}
                            style={{display: 'inline-block', width: '3rem'}}
                        />

                        <p className={classN(styles.text)}>E’tiroz izohi</p>
                    </div>

            }


        </div>
    )
}
