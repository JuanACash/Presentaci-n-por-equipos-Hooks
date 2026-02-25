import { useState, useCallback } from 'react'
import Hijo from './Hijo'

function App() {
  const [count, setCount] = useState(0)

  const incrementar = useCallback(() => {
    setCount(prev => prev + 1)
  }, [])

  return (
    <>
      <h1>Ejemplo useCallback</h1>

      <button onClick={incrementar}>
        Contador: {count}
      </button>

      <Hijo onIncrementar={incrementar} />
    </>
  )
}

export default App