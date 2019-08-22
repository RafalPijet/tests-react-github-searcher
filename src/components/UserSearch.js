import React from "react";
import PropTypes from "prop-types";
const formStyles = {
    display: "flex",
    justifyContent: "center",
    marginTop: "50px"
};

const UserSearch = props => (
    <form style={formStyles} onSubmit={event => props.onSubmit(event)}>
        <label htmlFor="searchName">{props.description.toUpperCase()}</label>
        <input
            type="text"
            id="searchName"
            onChange={event => props.searchHandling(event)}
            style={{fontSize: "18px", marginLeft: "20px"}}
        />
    </form>
);

UserSearch.propTypes = {
    searchHandling: PropTypes.func,
    onSubmit: PropTypes.func,
    description: PropTypes.string.isRequired
};

export default UserSearch;
