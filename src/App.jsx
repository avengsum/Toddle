import { Provider } from 'react-redux'
import Board from './Components/Board'
import Posts from './Components/Posts'
import { CloseProvider } from './assets/useContext'
import store from './assets/store'
import Bookmark from './Components/Bookmark'
import { Route , Routes } from 'react-router-dom'

function App() {

  return (
    <Provider store={store}> 
    <CloseProvider>
      <Routes>
        <Route path='/' element={<Board />} />
        <Route path='/post' element={<Posts />} />
        <Route path='/post/:id' element={<Posts />} />
        <Route path='/bookmark' element={<Bookmark /> } />
        <Route path='*' element={<h1>Error</h1>} />
      </Routes>
    </CloseProvider>
    </Provider>
   
  )
}

export default App
