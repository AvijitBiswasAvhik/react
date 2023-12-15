import { useState, useEffect } from "react";
import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBars,
    faCartShopping,
    faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import "../assets/css/DefaultComponent/DefaultComponent.css";
import { useStateContext } from "../context/ContextProvider";
import MenuBar from "./MenuBar";
import Cart from "./Cart";
import Footer from "./Footer";
import Login from "./Login";
import { Helmet } from "react-helmet";

const DefaultComponent = () => {
    const location = useLocation();
    const [showSideBar, setShowSideBar] = useState(false);
    const [showCart, setShowCart] = useState(false);
    const { menu, styles, verified } = useStateContext();
    const navigate = useNavigate();
    useEffect(() => {
        if (verified == false) {
            navigate("/verify");
        }
    }, [verified]);
    //else if(verified == true){
    //     history.goBack();
    // }
    function sideBar() {
        setShowSideBar(!showSideBar);
    }
    function cart() {
        setShowCart(!showCart);
    }
    let style = {};
    if (location.pathname == "/") {
        style = {
            color: "white",
        };
    } else {
        style = {
            color: "black",
        };
    }
    const websiteName = window.location.hostname;
    return (
        <>
            <Helmet>
                <title>{websiteName}</title>
                <meta
                    name="description"
                    content="This is the checkout page of our website."
                />
                <meta
                    name="keywords"
                    content="checkout, payment, online shopping"
                />
                {/* Add any other meta tags as needed */}
                <link
                    rel="icon"
                    href="https://upload.wikimedia.org/wikipedia/commons/7/70/Logo_Apple.inc.gif"
                />
            </Helmet>
            <div className="px-3" id="nav" style={style}>
                <button className="nav-toogle" onClick={sideBar} style={style}>
                    <FontAwesomeIcon
                        icon={faBars}
                        className="nav-toogle-icon"
                    />
                </button>
                <div className="barand-image">
                    <h5>
                        <Link to={"/"} style={style}>
                            LPbrand
                        </Link>
                    </h5>
                </div>
                <div className="nav-links">
                    <ul className="nav-items">
                        {menu &&
                            menu.map((el) => {
                                return (
                                    <li
                                        className="navigation-link text-decoration-none"
                                        key={el}
                                    >
                                        <Link
                                            to={
                                                el == "orders"
                                                    ? "orders"
                                                    : `product/${el}`
                                            }
                                        >
                                            {el}
                                        </Link>
                                    </li>
                                );
                            })}
                        <li className="navigation-search">
                            <FontAwesomeIcon
                                icon={faMagnifyingGlass}
                                className="search-icon"
                            />
                        </li>
                        <li onClick={cart} id="cart-count-container">
                            <FontAwesomeIcon
                                icon={faCartShopping}
                                className="shoping-cart"
                            />
                            <span id="cart-count">1</span>
                        </li>
                    </ul>
                </div>
            </div>
            {showSideBar && <MenuBar menu={menu} sideBar={sideBar} />}
            {showCart && <Cart cart={cart} />}
            <Outlet />
            <Footer />
        </>
    );
};
export default DefaultComponent;
