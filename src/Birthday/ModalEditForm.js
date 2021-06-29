import react from "react";

const ModalForm = ({ toggleForm, personToEdit, setPerson, submitEditForm }) => {
    console.log({ personToEdit });
    return (
        <div className="wrapper">
            <form className="birthday-form" onSubmit={submitEditForm}>
                <button
                    type="button"
                    className="form-close-btn"
                    onClick={toggleForm}
                >
                    <span>&times;</span>
                </button>
                <h2>Edit Person</h2>

                <div className="form-control">
                    <label htmlFor="firstName">First name : </label>
                    <input
                        type="text"
                        id="firstName"
                        value={personToEdit.firstName}
                        onChange={(e) =>
                            setPerson(() => {
                                return {
                                    ...personToEdit,
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
                        value={personToEdit.dob}
                        placeholder="MM/DD/YYYY"
                    />
                </div>

                <div className="form-control">
                    <label htmlFor="image">Image URL : </label>
                    <input type="text" id="image" value={personToEdit.image} />
                </div>

                <button type="submit" className="btn bday">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default ModalForm;
