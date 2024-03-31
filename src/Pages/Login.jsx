import React, { useContext, useState } from 'react'
import { Authcontext } from '../Context/AuthContextProvider';
import { Navigate } from 'react-router-dom';

export default function Login() {
    const {isAuth, login} = useContext(Authcontext);
    const [user, setUser]= useState({email: "",password:""});

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch("https://reqres.in/api/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user)
        })
            .then((res) => res.json())
            .then((res) => user.email === "sudesh@gmail.com" && user.password === "sudesh" && login(res))
    }

    if(isAuth){
     return   <Navigate to="/"/>
    }

    return (
        <div>
            <form className = "auth_form" onSubmit={(e)=> handleSubmit(e)} >
                <input
                    style = {{padding:"5px", margin: "10px", width: 200}}
                    type = "email"
                    className = "email"
                    placeholder = "Enter Email"
                    onChange={(e)=> setUser({...user, email: e.target.value})}
                />
                <br />
                <input
                    style = {{padding:"5px", margin: "10px", width: 200}}
                    type = "password"
                    className = "password"
                    placeholder = "Enter password"
                    onChange={(e)=> setUser({...user, password: e.target.value})}
                />
                <br />
                <input className = "submit" type = "submit"/>

            </form>  
                          
        </div>
    )
}