import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './comment.module.css'

export function Comment(){
    return(
        <div className={styles.comment}>
            <img src="https://github.com/cayquesilva.png"/>
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Cayque Silva</strong>
                            <time dateTime='2022-05-11 08:00:30' title='11 de Maio às 08:13'>Cerca de 1h atrás</time>
                        </div>
                        <button title='Deletar comentário'>
                            <Trash size={20}/>
                        </button>
                    </header>
                    <p>Muito bom Devon, parabéns!! 👋👋</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp/>
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}