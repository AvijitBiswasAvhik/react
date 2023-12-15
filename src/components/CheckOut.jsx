import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../assets/css/checkout.css";
import BkashPayment from "../bkash/BkashPayment";
import axiosClient from "../axisos";
import { Helmet } from "react-helmet";

export default function CheckOut() {
    let { state } = useLocation();
    let navigate = useNavigate();
    //let {cartData} = location;
    // console.log(state);
    // let BkashPaymentInstance = new BkashPayment(
    //     "01969691847",
    //     "%TyCtOB>[3h",
    //     "FNmZbC5Heyk0RDRax4WNSNEPtc",
    //     "Tc8fSFbdUUY1dLl3Z6PDmLv9v7nKOAn0M4HjBNPoGk85oBF7Zs89"
    // );
    const websiteName = window.location.hostname;
    let createPayment = () => {
        if (state.totalPrice != undefined) {
            axiosClient
                .get(`/gran-token/${state.totalPrice.total_price}`)
                .then((response) => {
                    //
                    //console.log(response.data);
                    let bkashURL = response.data.bkashURL;
                    //console.log(response.data)
                    //navigate(`/${bkashURL}`);
                    window.location.href = bkashURL;
                })
                .catch((error) => {
                    console.log(error);
                });
        }
        // console.log(BkashPaymentInstance.granToken());
    };
    let cartData =
        state != null
            ? state.cartData.map((el, i) => {
                  return (
                      <tr key={el.name}>
                          <th scope="row">{i + 1}</th>
                          <td>{el.name}</td>
                          <td>{el.category}</td>
                          <td>{el.prices.discount_price}</td>
                          <td>{el.pivot.qty}</td>
                          <td>{el.prices.totalPrice}</td>
                      </tr>
                  );
              })
            : null;
    let totalPrice = state != null ? state.totalPrice : null;
    return (
        <div className="container mt-2">
            <Helmet>
                <title>Checkout - {websiteName}</title>
                <meta
                    name="description"
                    content="This is the checkout page of our website."
                />
                <meta
                    name="keywords"
                    content="checkout, payment, online shopping"
                />
                {/* Add any other meta tags as needed */}
            </Helmet>
            <div className="row">
                <div className="col-md-6 text-center">
                    <h3>Product Information</h3>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Category</th>
                                <th scope="col">Price</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartData && cartData}
                            <tr>
                                <th scope="row"></th>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>Subtotal</td>
                                <td>{totalPrice && totalPrice.total_price}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="col-md-6">
                    <ul className="payment-options">
                        <li className="payment-method" onClick={createPayment}>
                            <img src="/BKash_logo.svg.png" alt="" />
                        </li>
                        <li className="payment-method" onClick={createPayment}>
                            <img src="/BKash_logo.svg.png" alt="" />
                        </li>
                        <li className="payment-method" onClick={createPayment}>
                            <img src="/BKash_logo.svg.png" alt="" />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
