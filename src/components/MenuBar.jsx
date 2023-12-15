import React from "react";
import "../assets/css/DefaultComponent/menuBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function MenuBar({ menu, sideBar }) {
    return (
        <div className="menuBar">
            <ul className="menuBarLi">
                {menu &&
                    menu.map((el, i) => {
                        return (
                            <li key={i} className="sideBarMenue">
                                <Link
                                    to={
                                        el == "orders"
                                            ? "orders"
                                            : `product/${el}`
                                    }
                                    style={{
                                        textDecoration: "none",
                                        color: "white",
                                        textTransform: "capitalize",
                                    }}
                                >
                                    {el}
                                </Link>
                            </li>
                        );
                    })}
            </ul>
            <div
                className="menuHide"
                onClick={sideBar}
                style={{ cursor: "pointer" }}
            >
                <FontAwesomeIcon icon={faX} />
            </div>
        </div>
    );
}
