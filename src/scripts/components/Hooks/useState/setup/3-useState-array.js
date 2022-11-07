import { useState } from 'react';
import { data } from '../data/data';

const UseStateArray = () => {
  const [people, setPeople] = useState(data);
  const removeItem = (id) => {
    setPeople(people.filter((person) => person.id !== id));
  };
  return (
    <>
      <h2>People</h2>
      {people.map(({ id, name }) => {
        return (
          <div className='item' key={id}>
            <h4>{name}</h4>
            <button type='button' onClick={() => removeItem(id)}>
              clear item
            </button>
          </div>
        );
      })}
      <button
        className='button-std'
        type='button'
        onClick={() => setPeople([])}
      >
        clear items
      </button>
    </>
  );
};

export default UseStateArray;
