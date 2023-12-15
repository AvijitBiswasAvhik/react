import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosClient from "../axisos";
import RefundRequestForm from "./RefundRequestForm";

export default function Orders() {
    let [orders, setOrder] = useState([]);
    let navigate = useNavigate();
    useEffect(() => {
        axiosClient
            .get("/orders")
            .then((response) => {
                
                setOrder(response.data);
            })
            .catch((error) => {
                console.log(error.message);
            });
    }, []);

    let go = (el) => {
        navigate("/return-policy/submit", { state: { data: el } });
    };
    let content = orders.map((el, i) => {
        return (
            <tr key={el.payment.trxId}>
                <th scope="row">{i + 1}</th>
                <td>{el.full_name}</td>
                <td>{el.email}</td>
                <td>{el.payment.trxId}...</td>
                <td>
                    <button className="btn btn-outline-primary mx-2">
                        Cancle
                    </button>
                    <button
                        className="btn btn-outline-danger"
                        onClick={() => {
                            go(el)
                        }}
                    >
                        Refund Request
                    </button>
                </td>
            </tr>
        );
    });
    let refundRequest = () => {};
    return (
        <>
            <h3 className="text-center mt-2">Orders</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">trxID</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>{content && content}</tbody>
            </table>
        </>
    );
}
