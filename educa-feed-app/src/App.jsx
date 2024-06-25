import './global.css'
import styles from  './App.module.css'
import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

function App() {

  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <Post 
            author="Cayque Silva"
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero sit iusto eos,
             eligendi nulla alias sint nam. Repellat harum porro, similique numquam eaque, fuga ipsa distinctio temporibus unde ex enim."
          />
          <Post 
            author="Marco Paulo"
            content="Post numero 2."
          />
        </main>
      </div>
    </>
  )
}

export default App

