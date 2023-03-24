import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { deletePerson, updatePerson } from "../../action/persons";
import Person from "./Person";

const Persons = ({ nameChange }) => {
  const persons = useSelector((state) => state.persons);
  const dispatch = useDispatch();
  return (
    <div>
      {persons.map((person) => (
        <Person
          key={person.id}
          fullname={person.fullname}
          deleted={() => dispatch(deletePerson(person.id))}
          changed={(e) => dispatch(updatePerson(e, person.id))}
        />
      ))}
    </div>
  );
};

export default Persons;
