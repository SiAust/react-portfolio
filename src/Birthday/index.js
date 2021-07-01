import React, { useState, useEffect } from "react";

/* UUID to implement workaround for animation delay */
// import { v4 as uuid } from "uuid";

// Context
import { useBirthdayContext } from "./BirthdayContextProvider";
// Components
import BirthdayCard from "./BirthdayCard";
import AddForm from "./ModalAddForm";
import EditForm from "./ModalEditForm";

const Birthday = () => {
    const {
        people,
        setPeople,
        person,
        setPerson,
        showAddForm,
        toggleAddForm,
        handleSubmit,
        showEditForm,
        toggleEditForm,
        personToEdit,
        submitEditForm,
        removeItem,
    } = useBirthdayContext();
    // console.log("context -" + useBirthdayContext());
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

                {showEditForm && <EditForm />}

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
