import React, { useRef } from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    width: "500px",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const ModalUpdate = ({
  person,
  isOpen,
  openHandler,
  updateHandler,
  updatePreventDefault,
}) => {
  const fNameRef = useRef(null);
  const lNameRef = useRef(null);
  const url = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const showModal = () => {
    if (!isOpen) {
      return null;
    } else {
      return (
        <Modal isOpen={true} ariaHideApp={false} style={customStyles}>
          <img
            className="ui small box image"
            src={person.avatar}
            alt={person.avatar}
          />
          <br />

          <form className="ui form">
            <div className="field">
              <label>Image URL</label>
              <input
                ref={url}
                defaultValue={person.avatar}
                type="text"
                name="first-name"
                placeholder="Image URL"
              />
            </div>
            <div className="field">
              <label>First Name</label>
              <input
                ref={fNameRef}
                type="text"
                defaultValue={person.first_name}
                name="first-name"
                placeholder="First Name"
              />
            </div>
            <div className="field">
              <label>Last Name</label>
              <input
                ref={lNameRef}
                type="text"
                defaultValue={person.last_name}
                name="last-name"
                placeholder="Last Name"
              />
            </div>
            <div className="field">
              <label>Email</label>
              <input
                ref={email}
                type="email"
                defaultValue={person.email}
                name="email"
                placeholder="Email"
              />
            </div>
            <div className="field">
              <label>Password</label>
              <input
                ref={password}
                type="password"
                defaultValue={person.password}
                name="password"
                placeholder="Password"
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginRight: "50px",
                marginLeft: "50px",
              }}
            >
              <button
                onClick={(e) => {
                  updatePreventDefault(e);
                  openHandler();
                  updateHandler(
                    fNameRef.current.value,
                    lNameRef.current.value,
                    url.current.value,
                    email.current.value,
                    person.id,
                    password.current.value
                  );
                }}
                className="ui button"
                type="submit"
              >
                <i class="plus icon"></i>
                Update
              </button>
              <button
                onClick={(e) => {
                  openHandler();
                }}
                className="ui button"
                type="submit"
              >
                <i class="minus icon"></i>
                Cancel
              </button>
            </div>
          </form>
        </Modal>
      );
    }
  };

  return <React.Fragment>{showModal()}</React.Fragment>;
};

export default ModalUpdate;
