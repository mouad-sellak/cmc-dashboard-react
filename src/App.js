
import React from 'react'
import transition from './data/transition.json'
function App() {
  return (
    <div className="App">
      CMC Dashboard
      {transition.map(t=>console.log(t.Titre))}
    </div>
  );
}

export default App;
