
import './App.css'
import {Routes, Route} from 'react-router-dom';

//Componentes
import Home from './Components/Home';
import Video from './Components/Video';


function App() {
  

  return (
      <div>
        <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/video" element={<Video/>}></Route>
        </Routes>
      </div>
  )
}


export default App
