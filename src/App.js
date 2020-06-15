import React, { useState, useEffect } from 'react';
import './App.css';

import Header from './components/Header';

const App = () => {
  const [rate, setRate] = useState(50)
  const [petrol, setPetrol] = useState(10)
  const [result, setResult] = useState(0)
  const [savedList, setSavedList] = useState(JSON.parse(localStorage.getItem('items')) || [])

  useEffect(() => {
    rateCounter()
  }, [rate, petrol]);

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(savedList));
  }, [savedList]);

  const rateCounter = () => {
    setResult(petrol / (rate / 1000))
  }

  const handleRate = (event) => {
    setRate(event.target.value)
  }

  const handlePetrol = (event) => {
    setPetrol(event.target.value)
  }

  const save = () => {
    setSavedList([...savedList, {
      rate,
      petrol,
      result
    }])
  };

  const removeItem = (result) => {
    const filteredArray = savedList.filter(item => item.result !== result)
    setSavedList(filteredArray)
  }

  return (
    <div>
      <Header/>
      <div style={{marginTop: '60px'}} className="container">
        <div className="calculator">
          <div className="left-side">
            <div>
              <p className="text">Keverési arány: </p>
              <div>
                <p className="text" style={{fontSize: '2rem', width: '15%'}}>1: </p>
                <input style={{width: '85%'}} type="number" value={rate} onChange={handleRate}/>
              </div>
            </div>
            <div>
            <p className="text">Üzemanyag: </p>
            <div>
              <input style={{width: '75%'}} type="number" value={petrol} onChange={handlePetrol}/>
              <p style={{width: '25%'}} className="text"> liter</p>
            </div>
            </div>
          </div>
          <div className="right-side">
            <p className="result text">
              {Math.round(result)} ml
            </p>
            <div>
              <button className="button" onClick={save}>Mentés</button> 
            </div>
          </div>
        </div>
        <hr/>
        <div className="text">Mentett előzmények:</div>
        <div className="result-list">
          {savedList && savedList.map((item, index) => (
            <div key={index} className="list-item">
              <span>Arány: 1:{item.rate}</span>
              <span>Benzin: {item.petrol} l</span>
              <span>Olaj: {Math.round(item.result)} ml</span>
              <span><button onClick={() => removeItem(item.result)}>x</button></span>
          </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App;
