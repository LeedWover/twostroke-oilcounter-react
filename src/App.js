import React, { useState, useEffect } from 'react';

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
    <div>
      <div>
        Arány: 1:<input type="number" value={rate} onChange={handleRate}/>
      </div>
      <div>
        Üzemanyag: <input type="number" value={petrol} onChange={handlePetrol}/> liter
      </div>
      <button onClick={rateCounter}>
        Kiszámol
      </button>
      <div>
        {Math.round(result)} ml
      </div>
    </div>
  )
}

export default App;
