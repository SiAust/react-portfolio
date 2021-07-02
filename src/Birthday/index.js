// import React, { useState, useEffect } from "react";
/* UUID to implement workaround for animation delay */
// import { v4 as uuid } from "uuid";

// Context
import { useBirthdayContext } from "./BirthdayContextProvider";
// Components
import BirthdayCard from "./BirthdayCard";
import AddForm from "./ModalAddForm";
import EditForm from "./ModalEditForm";
import Emoji from "../Emoji";

const Birthday = () => {
    const {
        people,
        // setPeople,
        person,
        setPerson,
        showAddForm,
        toggleAddForm,
        handleSubmit,
        showEditForm,
        toggleEditForm,
        // personToEdit,
        // submitEditForm,
        removeItem,
    } = useBirthdayContext();
    // console.log("context -" + useBirthdayContext());
    return (
        <>
            <div className="section">
                <h1 className="left-justify">
                    Birthdays <Emoji symbol="🎂" label="birthday cake" />
                </h1>
                <p className="left-justify">
                    This example app allows you to keep a list of people with a
                    countdown to their next birthday. Please use the button
                    below to add a person. <br />
                    React hooks such as <code>useState</code> and{" "}
                    <code>useContext</code> help pass around the data through
                    the component tree.
                </p>
            </div>
            <div className="section">
                <button
                    className="btn bday"
                    type="button"
                    onClick={toggleAddForm}
                >
                    New Birthday
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
