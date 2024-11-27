import React from "react";

const UserState = ({ loggedIn, isAdmin }) => {
  if (loggedIn && isAdmin) {
    return <h1>Welcome Admin</h1>;
  } else {
    return <h1>Welcome User</h1>;
  }
};

export default UserState;
