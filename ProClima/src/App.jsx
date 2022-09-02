import './App.css'
import Climate from './components/Climate'

import { BsFillCloudMoonFill } from "react-icons/bs"

function App() {

  return (
    <div className="App">
      <h1 className='titulo'><i>ProClima</i> <BsFillCloudMoonFill /></h1>
      <Climate />
    </div>
  )
}

export default App
