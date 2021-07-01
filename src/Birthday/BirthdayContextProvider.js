import React, { useContext, useState } from "react";

// Data
import { data } from "./data";

/* Need to pass in "default" for some reason? */
const BirthdayContext = React.createContext();
const BirthdayContextProvider = ({ children }) => {
    const emptyPersonObj = { firstName: "", dob: "", image: "" };

    const [people, setPeople] = useState(data);
    const [person, setPerson] = useState(emptyPersonObj);
    const [personToEditID, setPersonToEditID] = useState();

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
            setPerson(emptyPersonObj);
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

    const toggleEditForm = (id) => {
        setPerson(people.filter((person) => person.id === id)[0]);

        // personToEdit = people.filter((person) => person.id === id);
        // setPersonToEditID(id);
        // console.log(people.filter((person) => person.id === id)[0]);
        // console.log(`id ${id}`);
        setShowEditForm(!showEditForm);
    };
    const submitEditForm = (e) => {
        setPeople(
            people.map((p) =>
                p.id === person.id
                    ? {
                          ...p,
                          firstName: person.firstName,
                          dob: person.dob,
                          image: person.image,
                      }
                    : p
            )
        );
        setShowEditForm(false);
    };
    // console.log(handleSubmit);
    return (
        <BirthdayContext.Provider
            value={{
                people,
                setPeople,
                person,
                setPerson,
                showAddForm,
                toggleAddForm,
                handleSubmit,
                showEditForm,
                toggleEditForm,
                // personToEditID,
                submitEditForm,
                removeItem,
            }}
        >
            {children}
        </BirthdayContext.Provider>
    );
};

/* custom hooks must have "use" prefix convention */
export const useBirthdayContext = () => {
    const con = useContext(BirthdayContext);
    if (!con) {
        throw new Error(
            "useBirthdayContext must be within a BirthdayContextProvider"
        );
    }
    // console.log("con_ " + con);
    return con;
};

export { BirthdayContext, BirthdayContextProvider };
