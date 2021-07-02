// import React, { useState, useEffect } from "react";
/* UUID to implement workaround for animation delay */
// import { v4 as uuid } from "uuid";

// Context
import { useBirthdayContext } from "./BirthdayContextProvider";
// Components
import BirthdayCard from "./BirthdayCard";
import AddForm from "./ModalAddForm";
import EditForm from "./ModalEditForm";
import Intro from "../Components/Intro";

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

    const info = () => {
        return (
            <>
                This example app allows you to keep a list of people with a
                countdown to their next birthday. Please use the button below to
                add a person. <br />
                React hooks such as <code>useState</code> and{" "}
                <code>useContext</code> help pass around the data through the
                component tree.
            </>
        );
    };
    return (
        <>
            <Intro
                projectName="Birthdays"
                projectSymbol="🎂"
                projectLabel="birthday cake"
                projectInfoText={info()}
            />
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
