import React from 'react';
import PropTypes from 'prop-types';

const UserGreetings = ({ username }) => {
  return (
    <div className="user-greetings">
      {username ? (
        <p>Welcome, {username}!</p> // Only display the welcome message if the user is logged in
      ) : null}
    </div>
  );
};

UserGreetings.propTypes = {
  username: PropTypes.string,
};

export default UserGreetings;
