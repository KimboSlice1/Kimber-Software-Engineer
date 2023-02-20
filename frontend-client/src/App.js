import React, {useEffect} from 'react'
import './App.css';

const kimberURL= 'http://localhost:8000/kimber'

function App() {

    useEffect( () => {
      fetch(kimberURL)
      .then(r=>r.json())
      .then(kimberDataArray => console.log(kimberDataArray))
    })

  return (
    <div className="App">
      <header className="App-header">
        
      </header>
    </div>
  );
}

export default App;
