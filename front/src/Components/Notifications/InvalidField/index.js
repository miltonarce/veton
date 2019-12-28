import React from "react";

const InvalidField = ({ errors, field }) => {
    const style = {
        color: "red"
    }
    const showError = errors && errors[field];
    if (showError) {
        const [msg] = errors[field];
        return <p style={style}>{msg}</p>
    }
    return null;
}

export default InvalidField;