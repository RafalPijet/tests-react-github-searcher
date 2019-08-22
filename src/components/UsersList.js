import React from "react";
import PropTypes from "prop-types";
import User from "./User";

const listStyles = {
    display: "flex",
    flexWrap: "wrap"
};

const UsersList = props => (
    <div style={listStyles}>
        {props.users.map(user => (
            <User url={user.html_url} avatar={user.avatar_url}
            login={user.login} key={user.id}/>
        ))}
    </div>
);

UsersList.propTypes = {
    users: PropTypes.array.isRequired
};

export default UsersList
