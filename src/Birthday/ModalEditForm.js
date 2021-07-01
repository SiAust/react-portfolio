import react from "react";

// Context
import { useBirthdayContext } from "./BirthdayContextProvider";

const ModalForm = () => {
    const {
        toggleEditForm,
        person,
        // personToEditID,
        // people,
        setPerson,
        submitEditForm,
    } = useBirthdayContext();

    // console.log(`personToEditID ${personToEditID}`);
    // let personToEdit = people.filter((person) => {
    //     console.log(person);
    //     if (person.id === personToEditID) {
    //         return person;
    //     }
    // })[0];
    // console.log(`personToEdit ${{ ...person }}`);
    return (
        <div className="wrapper">
            <form className="birthday-form" onSubmit={submitEditForm}>
                <button
                    type="button"
                    className="form-close-btn"
                    onClick={toggleEditForm}
                >
                    <span>&times;</span>
                </button>
                <h2>Edit Person</h2>

                <div className="form-control">
                    <label htmlFor="firstName">First name : </label>
                    <input
                        type="text"
                        id="firstName"
                        value={person.firstName}
                        onChange={(e) =>
                            setPerson(() => {
                                return {
                                    ...person,
                                    firstName: e.target.value,
                                };
                            })
                        }
                    />
                </div>

                <div className="form-control">
                    <label htmlFor="dob">DOB : </label>
                    <input
                        type="text"
                        id="dob"
                        value={person.dob}
                        placeholder="MM/DD/YYYY"
                        onChange={(e) =>
                            setPerson(() => {
                                return {
                                    ...person,
                                    dob: e.target.value,
                                };
                            })
                        }
                    />
                </div>

                <div className="form-control">
                    <label htmlFor="image">Image URL : </label>
                    <input
                        type="text"
                        id="image"
                        value={person.image}
                        onChange={(e) =>
                            setPerson(() => {
                                return {
                                    ...person,
                                    image: e.target.value,
                                };
                            })
                        }
                    />
                </div>

                <button type="submit" className="btn bday">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default ModalForm;
