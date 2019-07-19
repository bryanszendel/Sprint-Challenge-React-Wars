import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'
import JediCard from './components/JediCard'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [people, setPeople] = useState([])
  const [num, setNum] = useState(1)
  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios
      .get(`https://swapi.co/api/people/`)
      .then(response => {
        const jedi = response.data.results;
        console.log(jedi);
        setPeople(jedi);
      })
      .catch(error => {
        console.log('There has been an error...', error)
      })
  }, [num])

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      {people.map((num, index) => {
        return <JediCard num={num} data={people} key={index}/>
      })}
      {/* <JediCard data={people}/> */}
    </div>
  );
}

export default App;
