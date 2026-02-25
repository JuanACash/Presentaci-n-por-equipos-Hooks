import { useState, useCallback } from 'react'
import Hijo from './components/Hijo'

function App() {
  const [count, setCount] = useState(0)

  const incrementar = useCallback(() => {
    setCount(prev => prev + 1)
  }, [])

  return (
    <>
      <button onClick={incrementar}>
        Contador: {count}
      </button>
      <Hijo onIncrementar={incrementar} />
    </>
  )
}

export default App