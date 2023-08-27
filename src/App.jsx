import Board from './Components/Board'
import Nav from './Components/Nav'
import { CloseProvider } from './assets/useContext'

function App() {

  return (
    <CloseProvider>
       <div >
      <Board />
    </div>
    </CloseProvider>
   
  )
}

export default App
