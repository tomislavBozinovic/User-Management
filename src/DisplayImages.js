import React from "react";
import ModalUpdate from "./ModalUpdate";

const DisplayImages = ({ people, deleteHandler, updateHandler }) => {
  const [open, setOpen] = React.useState(false);
  const [person, setPerson] = React.useState(null);

  const openHandler = () => {
    setOpen(false);
  };

  const updatePreventDefault = (e) => {
    e.preventDefault();
  };

  const renderedList = people.map((person) => {
    return (
      <div className="card" key={person.id}>
        <div className="content">
          <img
            className="right floated small ui image"
            src={person.avatar}
            alt="Avatar"
            style={{ width: "150px" }}
          />
          <div className="header">{person.first_name}</div>
          <div className="header">{person.last_name}</div>
          <div className="description">{person.email}</div>
        </div>
        <div className="extra content">
          <div className="ui two buttons">
            <div
              onClick={() => {
                setPerson(person);
                setOpen(true);
              }}
              className="ui basic green button"
            >
              <i class="sync alternate icon"></i>
              Update
            </div>
            <div
              onClick={() => deleteHandler(person.id)}
              className="ui basic red button"
            >
              <i class="eraser icon"></i>
              Delete
            </div>
          </div>
        </div>
      </div>
    );
  });
  return (
    <React.Fragment>
      <div className="ui cards" style={{ margin: "0 auto" }}>
        {renderedList}
      </div>
      <ModalUpdate
        isOpen={open}
        person={person}
        openHandler={openHandler}
        updateHandler={updateHandler}
        updatePreventDefault={updatePreventDefault}
      />
    </React.Fragment>
  );
};

export default DisplayImages;
