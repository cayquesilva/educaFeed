import './global.css'
import styles from  './App.module.css'
import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

// info de posts
    // author: {avatar_url: "", name: "", role: "" }
    // publishedAt: Date
    // content: String


const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/cayquesilva.png',
      name: 'Cayque Silva',
      role: 'Gestor de TI'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      {type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2024-05-03 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Silva',
      role: 'CEO RocketSeat'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      {type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2024-06-03 20:00:00'),
  },
];

function App() {

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {posts.map(post => {
            return (
              // eslint-disable-next-line react/jsx-key
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}

export default App

