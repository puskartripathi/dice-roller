import { useState } from 'react';
import './index.css';

const App=() => {
const [diceNumber, setDiceNumber]= useState(6)
const [diceNumber1, setDiceNumber1]= useState(6)


const roll=()=>{
const ranno= Math.floor(Math.random()*6)+1
setDiceNumber(ranno)
const ranno1= Math.floor(Math.random()*6)+1
setDiceNumber1(ranno1)
}
 
  return (
    <div >
     <img width={250} height={250} src={require(`./assets/${diceNumber}.png`)}> </img> 
     <img width={250} height={250} src={require(`./assets/${diceNumber1}.png`)}> </img> 

     <br/>
    <button onClick={ ()=> roll() } className='button'> Roll</button> 
     </div>
  );
}

export default App;
