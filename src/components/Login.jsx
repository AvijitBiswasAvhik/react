import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "../assets/css/Login.css";
import { ContextProvider, useStateContext } from "../context/ContextProvider";
import axiosClient from "../axisos";

export default function Login({ getLogin, getSignup }) {
    let [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });
    let [error, setError] = useState();
    let { styles, addToCart } = useStateContext(ContextProvider);
    let makeLogin = (e) => {
        e.preventDefault();
        setError({});
        axiosClient
            .post("/login", formData)
            .then((response) => {
                //console.log(response.data);
                let data = response.data;
                // console.log(data.token);
                if (data.token != undefined) {
                    localStorage.setItem("TOKEN", data.token);
                    localStorage.setItem("LOGIN", true);
                    getLogin(true);
                    //addToCart()
                }
            })
            .catch((error) => {
                console.log(errors);
                let errors = error.response.data.errors;
                c
                localStorage.removeItem("TOKEN");
                getLogin(false);
                // Log the errors to the console for debugging

                // Create an error object to store the error messages
                let errorObj = {};

                // Loop through the errors and store them in the error object
                for (let key in errors) {
                    errorObj[key] = errors[key][0];
                }
                // let data = errorObj.price ? JSON.parse(errorObj.price) : "";
                // errorObj = { ...errorObj, price: { ...data } };
                // Update your state with the error object
                setError(errorObj);
            });
    };
    return (
        <div id="login-form-container">
            <div id="login-form" className="p-2">
                <form
                    className="p-sm-5 p-2 "
                    id=""
                    onSubmit={(e) => {
                        makeLogin(e);
                    }}
                >
                    <button
                        type="button"
                        className="close close-login-container"
                        aria-label="Close"
                        onClick={(e) => {
                            addToCart();
                        }}
                    >
                        <span aria-hidden="true">&times;</span>
                    </button>

                    {/* <div className="form-group">
                        <label htmlFor="exampleInputName">Full Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="exampleInputName"
                            placeholder="Enter full name"
                            onChange={(e) => {
                                setFormData({
                                    ...formData,
                                    name: e.target.value,
                                });
                            }}
                        />

                        <small id="emailHelp" className="form-text text-danger">
                            {error && error.name}
                        </small>
                    </div> */}
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">
                            Email address
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Enter email"
                            onChange={(e) => {
                                setFormData({
                                    ...formData,
                                    email: e.target.value,
                                });
                            }}
                        />
                        {error ? (
                            <small
                                id="emailHelp"
                                className="form-text text-danger"
                            >
                                {error.email}
                            </small>
                        ) : (
                            <small
                                id="emailHelp"
                                className="form-text text-muted"
                            >
                                We'll never share your email with anyone else.
                            </small>
                        )}
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="exampleInputPassword1"
                            placeholder="Password"
                            onChange={(e) => {
                                setFormData({
                                    ...formData,
                                    password: e.target.value,
                                });
                            }}
                        />
                        <small className="form-text text-danger">
                            {error && error.password}
                        </small>
                    </div>
                    <div className="form-check">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="exampleCheck1"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="exampleCheck1"
                        >
                            Check me out
                        </label>
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>
                <div>
                    <p>Don't have an account? <span className="login-button btn btn-outline" onClick={()=>{getSignup(true)}}>Sign in</span></p>
                </div>
            </div>
        </div>
    );
}
