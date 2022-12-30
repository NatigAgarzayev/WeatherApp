import axios from 'axios';
import { useState, useRef } from 'react';
import './App.css';
import Modal from './component/Modal';

import SearchIcon from "./images/search.svg"
import MainImage from "./images/main.svg"

function App() {

  let inputValid = useRef();

  function getLocation(){
    navigator.geolocation.getCurrentPosition(function(position) {
      setData([]);
      getAxios(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=9dfc2d2bba04c16af5ca8af9c77558c8`);
      setVisible(true);
    });
  }

  const [input, setInput] = useState('');
  const [data, setData] = useState([]);
  const [visible, setVisible] = useState(false);

  async function getData(url){
    setData([]);
    if(input.trim() === '') return;
    getAxios(url);
  }

  async function getAxios(url){
    await axios.get(url)
      .then(response => {
        let dataObj = {
          name: response.data.name,
          feelsLike: Math.floor(response.data.main.feels_like - 273),
          humidity: response.data.main.humidity,
          imageURL: response.data.weather[0]?.icon,
          description: response.data.weather[0]?.description,
          temprature: Math.floor(response.data.main.temp - 273)
        }
        setData([dataObj]);
      })
      .then(() => {
        inputValid.current.classList.remove('invalid');
        setVisible(true);
      })
      .catch(error => {
        if(error.response.status === 404){
          inputValid.current.classList.add('invalid');
          setVisible(false);
        }
      })
    }

  return (
    <div className="App">
        <img src={MainImage} alt="123"/>
        <div>
          <h1 className='AppName'>Weather App</h1>
          <div className='AppWrapper'>
            <input className='AppInput' ref={inputValid} value={input} onChange={e => setInput(e.target.value)} type="text" placeholder="Enter city name" maxLength='20'/>
            <button className='AppInputBtn' onClick={() => getData(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=9dfc2d2bba04c16af5ca8af9c77558c8`)} type="submit" value="search">
              <img width='20' height='20' src={SearchIcon} alt='123'/>
            </button>
          </div>
          <div className='AppOr'>or</div>
          <div className='AppLocation' onClick={getLocation}>Use device location</div>
        </div>
      {
        visible && <Modal data={data} visible={visible} setVisible={setVisible}/>
      }
    </div>
  );
}

export default App;
