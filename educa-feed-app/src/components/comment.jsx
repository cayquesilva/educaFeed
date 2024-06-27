import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'

// eslint-disable-next-line react/prop-types
export function Comment({content, onDeleteComment}){

    function handleDeleteComment(){
        onDeleteComment(content);
    }

    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/cayquesilva.png"/>
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Cayque Silva</strong>
                            <time dateTime='2022-05-11 08:00:30' title='11 de Maio às 08:13'>Cerca de 1h atrás</time>
                        </div>
                        <button onClick={handleDeleteComment} title='Deletar comentário'>
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>{content}</p>
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