import Board from './Components/Board'
import Nav from './Components/Nav'
import Posts from './Components/Posts'
import { CloseProvider } from './assets/useContext'

function App() {

  return (
    <CloseProvider>
       <div >
      <Posts />
    </div>
    </CloseProvider>
   
  )
}

export default App
