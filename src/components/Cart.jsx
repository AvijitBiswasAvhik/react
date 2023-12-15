import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/DefaultComponent/cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useStateContext } from "../context/ContextProvider";

export default function Cart({ cart }) {
    let { cartData, addQty,totalPrice, deleteCartItem } = useStateContext();
    
    return (
        <div id="cart">
            <div className="cartHandle" onClick={cart}>
                <FontAwesomeIcon icon={faX} />
            </div>
            <div className="container p-3">
                <div className="row p-3">
                    <div className="col-12 text-dark shadow-lg d-flex align-items-center justify-content-around">
                        <p className="mt-2">
                            Sub Total: <b>${totalPrice && totalPrice.total_price}</b>
                        </p>
                        <button
                            type="button"
                            className="btn btn-outline-success"
                        >
                           <Link to="/checkout" className="text-decoration-none" state={{cartData,totalPrice}}> CheckOut </Link>
                        </button>
                    </div>
                </div>
                <div className="row p-2">
                    {cartData &&
                        cartData.map((el, i) => {
                            return (
                                <div className="col-12 shadow-lg p-3" key={i}>
                                    <div className="row">
                                        <div className="col-6 cart-card-item">
                                            <h6 className="">{el.name}</h6>
                                            <div className="cart-image-container">
                                                <img
                                                    src={`http://127.0.0.1:8000/${el.image}`}
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                        <div className="col cart-price p-0">
                                            <table className="table">
                                                <tbody>
                                                    <tr>
                                                        <td className="scope-1">
                                                            Unit:
                                                        </td>
                                                        <td>
                                                            $
                                                            {
                                                                el.prices
                                                                    .discount_price
                                                            }
                                                        </td>
                                                        <td>Total:</td>
                                                        <td>
                                                            $
                                                            {
                                                                el.prices
                                                                    .totalPrice
                                                            }
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="col-12 d-flex justify-content-around">
                                            <div className="quantity">
                                                <select
                                                    className="form-select"
                                                    aria-label="Default select example"
                                                    name="example"
                                                    defaultValue={el.pivot.qty}
                                                    onChange={(e) => {
                                                        addQty(
                                                            el.id,
                                                            e.target.value,
                                                            el.pivot.buyer_id,
                                                            el.pivot.id
                                                        );
                                                    }}
                                                    style={{
                                                        cursor: "pointer",
                                                    }}
                                                >
                                                    {Array.from(
                                                        { length: 20 },
                                                        (_, i) => (
                                                            <option
                                                                key={i}
                                                                value={i + 1}
                                                            >
                                                                {i + 1}
                                                            </option>
                                                        )
                                                    )}
                                                </select>
                                            </div>
                                            <button className="cart-item-delete" onClick={()=>{deleteCartItem(el.pivot.id)}}>
                                                <FontAwesomeIcon
                                                    icon={faTrash}
                                                />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                </div>
            </div>
        </div>
    );
}
