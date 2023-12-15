import React, { useState, useEffect } from "react";
import "../assets/css/SingleProductView.css";
import axiosClient from "../axisos";
import { useParams } from "react-router-dom";
import { useStateContext } from "../context/ContextProvider";

export default function SingleProductView() {
    let [product, setProduct] = useState();
    let { addToCart } = useStateContext();
    let { id } = useParams();
    console.log(id);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosClient.get(
                    `/single-product-get/${id}`
                );
                setProduct(response.data);
                console.log(response.data.id);
            } catch (error) {
                console.log(error.message);
            }
        };

        fetchData();
    }, []);
    console.log(product);
    return (
        <div className="single-product-view">
            {product ? (
                <>
                    <div className="single-view">
                        <div
                            id="carouselExampleIndicators"
                            className="carousel slide"
                            data-bs-ride="carousel"
                        >
                            <div className="carousel-indicators">
                                <button
                                    type="button"
                                    data-bs-target="#carouselExampleIndicators"
                                    data-bs-slide-to="0"
                                    className="active background-indicator"
                                    aria-current="true"
                                    aria-label="Slide 1"
                                    style={{
                                        backgroundImage: `url("http://127.0.0.1:8000/${product.image}")`,
                                    }}
                                ></button>

                                <button
                                    type="button"
                                    data-bs-target="#carouselExampleIndicators"
                                    data-bs-slide-to="1"
                                    aria-label="Slide 2"
                                    className="background-indicator"
                                    style={{
                                        backgroundImage: `url("https://assets.orvis.com/is/image/orvisprd/3CT309WF23F_W?wid=1024&src=is($object$:1-1)")`,
                                    }}
                                ></button>
                                <button
                                    type="button"
                                    data-bs-target="#carouselExampleIndicators"
                                    data-bs-slide-to="2"
                                    aria-label="Slide 3"
                                    className="background-indicator"
                                    style={{
                                        backgroundImage: `url("https://m.media-amazon.com/images/I/91XYNN3S4+L._UX569_.jpg"`,
                                    }}
                                ></button>
                                <button
                                    type="button"
                                    data-bs-target="#carouselExampleIndicators"
                                    data-bs-slide-to="3"
                                    aria-label="Slide 4"
                                    className="background-indicator"
                                    style={{
                                        backgroundImage: `url("https://assets.orvis.com/is/image/orvisprd/3CT309WF23F_W?wid=1024&src=is($object$:1-1)")`,
                                    }}
                                ></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img
                                        src={`http://127.0.0.1:8000/${product.image}`}
                                        className="d-block w-100"
                                        alt="Slide 1"
                                    />
                                </div>
                                <div className="carousel-item">
                                    <img
                                        src="https://assets.orvis.com/is/image/orvisprd/3CT309WF23F_W?wid=1024&src=is($object$:1-1)"
                                        className="d-block w-100"
                                        alt="Slide 2"
                                    />
                                </div>
                                <div className="carousel-item">
                                    <img
                                        src="https://m.media-amazon.com/images/I/91XYNN3S4+L._UX569_.jpg"
                                        className="d-block w-100"
                                        alt="Slide 3"
                                    />
                                </div>
                                <div className="carousel-item">
                                    <img
                                        src="https://assets.orvis.com/is/image/orvisprd/3CT309WF23F_W?wid=1024&src=is($object$:1-1)"
                                        className="d-block w-100"
                                        alt="Slide 4"
                                    />
                                </div>
                            </div>
                            <button
                                className="carousel-control-prev"
                                type="button"
                                data-bs-target="#carouselExampleIndicators"
                                data-bs-slide="prev"
                            >
                                <span
                                    className="carousel-control-prev-icon"
                                    aria-hidden="true"
                                ></span>
                                <span className="visually-hidden">
                                    Previous
                                </span>
                            </button>
                            <button
                                className="carousel-control-next"
                                type="button"
                                data-bs-target="#carouselExampleIndicators"
                                data-bs-slide="next"
                            >
                                <span
                                    className="carousel-control-next-icon"
                                    aria-hidden="true"
                                ></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                    <div className="single-view">
                        <div className="single-product-details">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12">
                                        <h2 className="single-product-title">
                                           {product.name}
                                        </h2>
                                    </div>
                                    <div className="col-12">
                                        <h5 className="single-product-price">
                                            ${product.price.price}
                                        </h5>
                                        <div className="divider"></div>
                                    </div>
                                    <div className="col-12">
                                        <div className="single-product-varient">
                                            <div className="single-product-size-title">
                                                <p>size</p>
                                            </div>
                                            <ul className="single-product-sizes">
                                                <li className="single-product-size">
                                                    S
                                                </li>
                                                <li className="single-product-size">
                                                    M
                                                </li>
                                                <li className="single-product-size">
                                                    L
                                                </li>
                                                <li className="single-product-size">
                                                    XL
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="single-product-buttons">
                                            <button className="single-add-cart" onClick={()=>{addToCart(product.id)}}>
                                                ADD TO CART
                                            </button>
                                            <button className="single-buy">
                                                BUY IT NOW
                                            </button>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="single-product-description">
                                            <p>
                                                <em>
                                                    {product.description}
                                                </em>
                                            </p>
                                            <p>
                                                Buttons are fussy. Sometimes you
                                                just want to roll out of bed,
                                                put on the pull over and get to
                                                the days work. Julie is 5'8" and
                                                wearing a size small.
                                            </p>
                                            <ul className="description-list">
                                                <li>
                                                    100% Wool, Heavy 4 gauge
                                                    thickness
                                                </li>
                                                <li>Handmade in Nepal.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                ""
            )}
        </div>
    );
}
