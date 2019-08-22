import React from "react";
import PropTypes from "prop-types";
const boxStyles = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: "70px",
    maxWidth: "110px",
    padding: "10px"
};


const User = props => (
    <div style={boxStyles}>
        <img src={props.avatar} alt={props.login} style={{maxWidth: "100px", maxHeight: "100px"}}/>
        <a href={props.url} target="_blank" rel="noopener noreferrer">{props.login}</a>
    </div>
);

User.propTypes = {
    avatar: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired
};

export default User;
