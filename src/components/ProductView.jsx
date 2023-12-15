import React, { useState, useEffect } from "react";
import "../assets/css/productview/ProductView.css";
import { useParams, Link, useLocation } from "react-router-dom";
import axiosClient from "../axisos";
import { useStateContext } from "../context/ContextProvider";
import { Helmet } from "react-helmet";

export default function ProductView() {
    const { category } = useParams();
    let [product, setProduct] = useState();
    let { addToCart } = useStateContext();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const paymentStatus = queryParams.get("payment");

    // Now 'paymentStatus' contains the value of the 'payment' parameter
    console.log(paymentStatus);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosClient.get(
                    `/feature/products/${category}`
                );
                setProduct(response.data);
            } catch (error) {
                console.log(error.message);
            }
        };
        if (category) {
            fetchData();
        }
    }, [category]);
    function wordCount(word) {
        const words = word.split(" ");
        const first20Words = words.slice(0, 12);
        const result = first20Words.join(" ");
        return result + "...";
    }
    let buyer = () => {
        axiosClient
            .get(`/attach`)
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error.message);
            });
    };
    return (
        <div className="product-view-container text-center">
            <Helmet>
                <title>{category} - {window.location.hostname}</title>
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
            <button
                type="submit"
                className="btn btn-primary"
                onClick={() => {
                    buyer();
                }}
            >
                Submit
            </button>
            <div className="containert">
                <div className="row mt-5">
                    <div className="col-12">
                        <h1 className="product-view-title text-center text-capitalize">
                            {category && category}
                        </h1>
                        <div className="divider"></div>
                    </div>
                    <div className="col-12">
                        <div className="filter-dropdown">
                            <label htmlFor="sortBy">Sort by</label>
                            <select
                                name=""
                                id="sortBy"
                                className="filter-dropdown-select"
                            >
                                <option value="manual">Featured</option>
                                <option value="best-selling">
                                    Best selling
                                </option>
                                <option value="title-ascending">
                                    Alphabetically, Z-A
                                </option>
                                <option value="price-ascending">
                                    Price, low to high
                                </option>
                                <option value="price-descending">
                                    Price, high to low
                                </option>
                                <option value="created-ascending">
                                    Date, old to new
                                </option>
                                <option value="created-descending">
                                    Date, new to old
                                </option>
                            </select>
                        </div>
                    </div>
                    <div className="divider mt-3"></div>
                    <div className="col-12">
                        <ul className="product-view-category">
                            <li className="product-category">ALL</li>
                            <li className="product-category">SHIRT</li>
                            <li className="product-category">SWEATER</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="product-view-section">
                {product &&
                    product.data.map((el, i) => {
                        return (
                            <div className="product-view" key={el.barcode}>
                                <div className="card">
                                    <img
                                        src={`http://127.0.0.1:8000/${el.image}`}
                                        className="card-img-top"
                                        alt="..."
                                    />
                                    <div className="card-body">
                                        <Link
                                            to={`/product/single/${el.id}`}
                                            className="text text-decoration-none"
                                        >
                                            <h5 className="card-title ">
                                                {el.name}
                                            </h5>
                                            <p className="card-text">
                                                {wordCount(el.description)}
                                            </p>
                                        </Link>
                                        <div className="price-section">
                                            <del className="card-title">
                                                ${el.price.price}
                                            </del>
                                            <h6>${el.price.discount_price}</h6>
                                        </div>
                                        <button
                                            className="btn btn-primary"
                                            onClick={() => {
                                                addToCart(el.id);
                                            }}
                                        >
                                            ADD TO CART
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}

                <div className="product-view">item 1</div>
            </div>
        </div>
    );
}
