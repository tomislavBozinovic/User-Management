import React from "react";

const CurrentUser = ({ currentUser }) => {
  return (
    <div
      style={{ position: "absolute", top: "20px", right: "300px" }}
      className="ui horizontal list"
    >
      <div className="item">
        <img class="ui mini circular image" src={currentUser.avatar} />
        <div className="content">
          <div className="ui sub header">{currentUser.first_name}</div>
          {currentUser.email}
        </div>
      </div>
    </div>
  );
};

export default CurrentUser;
