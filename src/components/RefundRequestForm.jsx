// RefundRequestForm.jsx

import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../assets/css/RefundRequestForm.css"; // Import your CSS file
import axiosClient from "../axisos";

const RefundRequestForm = (props) => {
    const [formData, setFormData] = useState({
        full_name: "Avijit",
        email: "avijitbiswasavhik@gmail.com",
        order_number: "",
        reason: "",
    });
    // const receivedData = props.location.state ? props.location.state.data : null;
    const location = useLocation();
    const receivedData = location.state ? location.state.data : null;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your logic for submitting the refund request
        axiosClient
            .post("/order/refund", formData)
            .then((response) => {
            
            })
            .catch((error) => {
                console.log(error.massage);
            });
    };

    useEffect(() => {
        setFormData({ ...formData, order_number: receivedData.order_number})
        
    },[])
    return (
        <div className="refund-form-container mt-2">
            <h2 className="refund-form-title">Refund Request Form</h2>
            <form className="refund-form" onSubmit={handleSubmit}>
                <label className="form-label">
                    Full Name
                    <input
                        type="text"
                        name="full_name"
                        value={formData.full_name}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label className="form-label">
                    Email
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label className="form-label">
                    Order Number
                    <input
                        type="text"
                        name="order_number"
                        value={formData.order_number}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label className="form-label">
                    Reason for Refund
                    <textarea
                        name="reason"
                        value={formData.reason}
                        onChange={handleChange}
                        required
                    />
                </label>
                <button type="submit" className="submit-button">
                    Submit Refund Request
                </button>
            </form>
        </div>
    );
};

export default RefundRequestForm;
