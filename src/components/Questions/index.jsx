import classN from "classnames";
import styles from "./Question.module.css";
import WordIcon from "../../assets/icons/WordIcon";
import Accordion from "../Aaccordion";


function Questions ({status}){
    return (
        <div className={classN(styles.wrap_of_questions)}>
            <div className={classN(styles.title_block)}>
                <WordIcon/>
                <h1>Savolnoma</h1>
            </div>
            <Accordion status={status}/>
            <Accordion status={status}/>
        </div>
    )
}

export default Questions;