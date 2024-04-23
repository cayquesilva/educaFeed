import { useState } from 'react'

import './global.css'
import styles from  './app.module.css'
import { Header } from './components/header'
import { Post } from './posts'
import { Sidebar } from './components/sidebar'

function App() {
  const [count, setCount] = useState(0)

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

