import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [rate, setRate] = useState(35)
  const [petrol, setPetrol] = useState(30)
  const [result, setResult] = useState(0)

  useEffect(() => {
    rateCounter()
  }, []);

  const rateCounter = () => {
    setResult(petrol / (rate / 1000))
  }

  const handleRate = (event) => {
    setRate(event.target.value)
  }

  const handlePetrol = (event) => {
    setPetrol(event.target.value)
  }

  return (
    <div className="container">
      <div className="left-side">
      <div>
        <p className="text">Keverési arány: </p>
        <div>
        <p className="text" style={{fontSize: '2rem', width: '10%'}}>1: </p><input style={{width: '90%'}} type="number" value={rate} onChange={handleRate}/>
        </div>
        
      </div>
      <div>
      <p className="text">Üzemanyag: </p><input type="number" value={petrol} onChange={handlePetrol}/> <p className="text"> liter</p>
      </div>
      <button className="button" onClick={rateCounter}>
        <p className="text">Kiszámol</p>
      </button>
      </div>
      
      <div className="right-side">
        <p className="result text">
          {Math.round(result)} ml
        </p>
      </div>
    </div>
  )
}

export default App;
