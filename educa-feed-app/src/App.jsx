import { useState } from 'react'

import './styles.css'
import { Header } from './components/header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
    </>
  )
}

export default App
