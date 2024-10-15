import './App.css';
import WeatherApp from './componentes/weatherApp';

import github from '../src/imagenes/github.png'

function App() {
  return (
    <div className='cont'>
      <WeatherApp />
    
      <div className='cont-author'>
            <a className='author' href='https://github.com/eric31t30' target='_blank'>eric31t30</a>
            <img src={github} alt="" className='github-icon'/>
        </div>
    </div>
  )
}

export default App;
