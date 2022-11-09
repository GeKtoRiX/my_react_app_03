import { useState } from 'react';
import List from './setup/List';
import data from './data/data';

const BirthdayReminder = () => {
  const [people, setPeople] = useState(data);
  const deletePersonHandler = (id) => {
    setPeople(people.filter((person) => person.id !== id));
  };
  return (
    <main className='birthday-main'>
      <section className='birthday-container'>
        <h3>{people.length} birthdays today</h3>
        <List people={people} deletePerson={deletePersonHandler} />
        {!people.length ? (
          <button onClick={() => setPeople(data)}>reset all</button>
        ) : (
          <button onClick={() => setPeople([])}>clear all</button>
        )}
      </section>
    </main>
  );
};

export default BirthdayReminder;
