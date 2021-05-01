import React from "react";
import ModalAdd from "./ModalAdd";

const AddUser = ({ peopleData, addNewPerson }) => {
  const [addOpen, setAddOpen] = React.useState(false);

  const closeHandler = (e) => {
    e.preventDefault();
    setAddOpen(false);
  };

  const addUserPreventDefault = (e) => {
    e.preventDefault();
    setAddOpen(false);
  };

  const addNewUser = (firstName, lastName, imageURL, email, password) => {
    addNewPerson(firstName, lastName, imageURL, email, password);
  };

  return (
    <div>
      <button
        type="button"
        style={{ position: "absolute", top: "20px", right: "10px" }}
        className="ui large button"
        onClick={() => {
          setAddOpen(true);
        }}
      >
        <i class="user icon"></i>
        Add User
      </button>
      <ModalAdd
        isOpen={addOpen}
        openHandler={closeHandler}
        addUserPreventDefault={addUserPreventDefault}
        addNewUser={addNewUser}
      />
    </div>
  );
};

export default AddUser;
