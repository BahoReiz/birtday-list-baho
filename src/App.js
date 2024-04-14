import React, { useState } from 'react';
import data  from './data';
import List from './List';

function getDate() {
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  return `${month}/${date}/${year}`; 
}

function App() {
  const [people, setPeople] = useState(data)
  const [currentDate, setCurrentDate] = useState(getDate());
  return (
  <main>
    <section className="container">
      <h1>Welcome Bahadir! <br></br>
      Today is ...
      </h1>
      <h3>{currentDate}</h3>
      <List people={people}/>       
      <button onClick={() => setPeople([])}>
        Clear all
      </button>
    </section>
  </main>
)}

export default App;