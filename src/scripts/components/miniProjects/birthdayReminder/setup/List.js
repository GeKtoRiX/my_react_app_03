import React from 'react';

const List = ({ people, deletePerson }) => {
  return (
    <>
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <article className={'person'} key={id}>
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
            </div>
            <button onClick={() => deletePerson(id)}>clear</button>
          </article>
        );
      })}
    </>
  );
};

export default List;
