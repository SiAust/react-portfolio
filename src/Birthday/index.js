import React, { useState, useEffect } from "react";
// import { v4 as uuid } from "uuid";
// Components
import BirthdayCard from "./BirthdayCard";
// Data
import { data } from "./data";
import Modal from "./ModalForm";

const Birthday = () => {
    const [people, setPeople] = useState(data);
    const [person, setPerson] = useState({
        firstName: "",
        dob: "",
        image: "",
    });

    const [showForm, setShowForm] = useState(false);

    const toggleForm = () => setShowForm(!showForm);
    const handleSubmit = (e) => {
        e.preventDefault();
        const { firstName, dob, image } = person;
        /* If props are not falsy add new person */
        if (firstName && dob && image) {
            console.log({
                firstName,
                dob,
                image,
            });
            person.id = people[people.length - 1].id + 1;
            console.log(person);
            setPeople(() => {
                return [...people, person];
            });
            toggleForm();
            setPerson({ firstName: "", dob: "", image: "" });
        } else {
            alert("Fields not completed");
        }
    };

    console.log(handleSubmit);
    return (
        <div className="section">
            {showForm && (
                <Modal
                    toggleForm={toggleForm}
                    handleSubmit={handleSubmit}
                    person={person}
                    setPerson={setPerson}
                />
            )}
            <h1>Birthdays</h1>
            <button type="button" onClick={toggleForm}>
                Add Birthday
            </button>
            {people.map((person) => {
                return <BirthdayCard {...person} arrLength={people.length} />;
            })}
        </div>
    );
};

export default Birthday;
