//JaxAtwood

import React from "react";
import api from "../utils/api";
import { Box, Fields, RegButtons } from "../styling/RegisterStyling";

export default function ConsumerRegister(props) {

const [form, setForm] = React.useState({ username: "", password: "", firstname: "", lastname: "", email: "" });

    const handleChanges = e => {
        setForm({...form, [e.target.name]: e.target.value}); 
    }

    const login = e => {
        e.preventDefault(); 
        api()
            .post("/api/customers/signup", form) 
            .then(res => {
                console.log("LOGIN", res);
                localStorage.setItem("key", res.data.payload);
                props.history.push("/login");
            })
            .catch(error => {
                console.log(error)
                setForm({ username: "", password: "", firstname: "", lastname: "", email: "" }); 
         });
    };

    return (
        <Box>
            <h2>Customer Registry</h2>
            <form onSubmit={login}>
                <Fields 
                    required
                    type="text"
                    placeholder="username"
                    name="username" 
                    onChange={handleChanges}
                    value={form.username}
                />
                <Fields 
                    required
                    type="password"
                    placeholder="password"
                    name="password" 
                    onChange={handleChanges}
                    value={form.password}
                />
                <Fields 
                    required
                    type="text"
                    placeholder="first name"
                    name="firstname" 
                    onChange={handleChanges}
                    value={form.firstname}
                />
                <Fields 
                    required
                    type="text"
                    placeholder="last name"
                    name="lastname" 
                    onChange={handleChanges}
                    value={form.lastname}
                />
                <Fields 
                    required
                    type="text"
                    placeholder="email"
                    name="email" 
                    onChange={handleChanges}
                    value={form.email}
                />
                <RegButtons>Submit</RegButtons>
            </form>
            <a href="/login">Already Have an Account?</a>
        </Box>
    )
}