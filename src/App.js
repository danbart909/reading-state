import React from 'react';
import HelloWorld from './state-drills/HelloWorld';
import Bomb from './state-drills/Bomb';
import RouletteGun from './state-drills/RouletteGun';

function App() {
  return (
    <main className='App'>
      <div className='HelloWorld'>
        <HelloWorld />
      </div>
      <div className='Bomb'>
        <Bomb />
      </div>
      <div className='RouletteGun'>
        <RouletteGun
          bulletInChamber = {8}
        />
      </div>
    </main>
  );
}

export default App;