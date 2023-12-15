import React, { useState, useEffect } from "react";
import axiosClient from "../axisos";
import DefaultComponent from "./DefaultComponents";
import Login from "./Login";
import SignUp from "./SignUp";

export default function MainComponent() {
    const [login, setLogin] = useState(localStorage.getItem("LOGIN"));
    const [signup, setSignup] = useState(false);

    useEffect(() => {
        axiosClient
            .get("/login-or-not")
            .then((response) => {
                //console.log(response);

                localStorage.setItem("LOGIN", response.data);
                setLogin(response.data);
            })
            .catch((error) => {
                //console.log(error);

                localStorage.setItem("LOGIN", false);
                setLogin(false);
            });
    }, []); // Empty dependency array ensures that this effect runs once when the component mounts
    let getLogin = (data) => {
        setLogin(data);
    };
    let getSignup = (data)=>{
      setSignup(data);
    };

    return (
        <>
            {login && login ? (
                <DefaultComponent />
            ) : signup ? (
                <SignUp getSignup={getSignup} getLogin={getLogin}/>
            ) : (
                <Login getLogin={getLogin} getSignup={getSignup}/>
            )}
        </>
    );
}
