// import React, { Component } from "react";
import React, { useState } from "react";

const User = (props) => {
    const { first_name, set_first_name } = useState("");
    const { last_name, set_last_name } = useState("");
    const { email, set_email } = useState("");
    const { password, set_password } = useState("");
    const { confirm_password, set_confirm_password } = useState("");

    return (
        <>
            <div>
                <p>First Name: {first_name}</p>
                <p>Last Name: {last_name}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm Password: {confirm_password}</p>
            </div>
        </>
    );
};

export default User;
