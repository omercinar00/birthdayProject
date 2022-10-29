import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [persons, setPersons] = useState(data)
  return (
    <main>
      <div className="container">
        <h3>{persons.length} Birthday Today</h3>
        {persons.map((person) => (
          <List person={person} />
        ))}
        <div>
          {persons.length ? (
            <button onClick={() => setPersons([])}>Clear All</button>
          ) : (
            <button onClick={() => setPersons(data)}>Bring All</button>
          )}
        </div>
      </div>
    </main>
  );
}
export default App;
