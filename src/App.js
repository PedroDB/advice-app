import React,{useState, useEffect} from 'react'
import axios from 'axios';
import './App.css';

const API_URL = 'https://api.adviceslip.com/advice';

const App = () => {

  const [advice, setAdv] = useState('Searching...');

  const adviceFetch = async() => {
    const response = await axios(API_URL);
    const {advice} = response.data.slip;

    setAdv(advice);
  }

  useEffect(() => {
    adviceFetch();
  
  }, []);
  
  return (
    <div className='app'>
      <div className ='card'>
        <h1 className='heading'>{advice}</h1>
        <button className='button' onClick={()=>{adviceFetch()}}>
          <span>GIVE ME ADVICE!</span>
        </button>
      </div>
    </div>
  )
}

export default App