import react, { useState } from "react";

const ModalForm = ({ toggleForm, handleSubmit, person, setPerson }) => {
    return (
        <div className="wrapper">
            <form className="birthday-form" onSubmit={handleSubmit}>
                <button
                    type="button"
                    className="form-close-btn"
                    onClick={toggleForm}
                >
                    <span>&times;</span>
                </button>
                <h2>Add Person</h2>

                <div className="form-control">
                    <label htmlFor="firstName">First name : </label>
                    <input
                        type="text"
                        id="firstName"
                        value={person.firstName}
                        onChange={(e) =>
                            setPerson(() => {
                                return { ...person, firstName: e.target.value };
                            })
                        }
                    />
                </div>

                <div className="form-control">
                    <label htmlFor="dob">DOB (MM/DD/YYYY): </label>
                    <input
                        type="text"
                        id="dob"
                        value={person.dob}
                        onChange={(e) =>
                            setPerson(() => {
                                return { ...person, dob: e.target.value };
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
                                return { ...person, image: e.target.value };
                            })
                        }
                    />
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ModalForm;
