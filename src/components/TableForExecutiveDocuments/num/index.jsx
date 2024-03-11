import styles from './Style.module.css'

function Index({number}){
    return(
        <span className={styles.wrap}>
            {number}
        </span>
    )
}
export default Index;