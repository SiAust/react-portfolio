import React, { useState, useEffect } from "react";
// import { v4 as uuid } from "uuid";
// Components
import BirthdayCard from "./BirthdayCard";
// Data
import { data } from "./data";
import AddForm from "./ModalAddForm";
import EditForm from "./ModalEditForm";

const Birthday = () => {
    const emptyPersonObj = { firstName: "", dob: "", image: "" };

    const [people, setPeople] = useState(data);
    const [person, setPerson] = useState(emptyPersonObj);

    const [showAddForm, setShowAddForm] = useState(false);
    const [showEditForm, setShowEditForm] = useState(false);

    const toggleAddForm = () => setShowAddForm(!showAddForm);
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
            toggleAddForm();
            setPerson({ firstName: "", dob: "", image: "" });
        } else {
            alert("Fields not completed");
        }
    };

    /* Remove a item from the list */
    const removeItem = (id) => {
        console.log("id_ " + id);
        setPeople((people) => {
            const filtered = people.filter((person) => person.id !== id);
            return filtered;
        });
    };

    let personToEdit = { ...emptyPersonObj };
    const toggleEditForm = (id) => {
        personToEdit = people.filter((person) => person.id === id);
        console.log({ personToEdit });
        console.log(people.filter((person) => person.id === id));
        console.log(`id ${id}`);
        setShowEditForm(!showEditForm);
    };
    const submitEditForm = (e) => {
        console.log(e);
        toggleAddForm();
    };
    console.log(handleSubmit);
    return (
        <>
            <div className="section flex-row">
                <h1>Birthdays</h1>
                <p className="left-justify">
                    This example app allows you to keep a list of people with a
                    countdown to their next birthday. Please use the button
                    below to add a person.
                </p>
            </div>
            <div className="section">
                <button
                    className="btn bday"
                    type="button"
                    onClick={toggleAddForm}
                >
                    Add Birthday
                </button>
            </div>
            <div className="section grid">
                {showAddForm && (
                    <AddForm
                        toggleForm={toggleAddForm}
                        handleSubmit={handleSubmit}
                        person={person}
                        setPerson={setPerson}
                    />
                )}

                {showEditForm && (
                    <EditForm
                        toggleForm={toggleEditForm}
                        personToEdit={personToEdit}
                        submitEditForm={submitEditForm}
                        setPerson={setPerson}
                    />
                )}

                {people.map((person) => {
                    return (
                        <BirthdayCard
                            {...person}
                            arrLength={people.length}
                            removeItem={removeItem}
                            toggleEdit={toggleEditForm}
                        />
                    );
                })}
            </div>
        </>
    );
};

export default Birthday;
