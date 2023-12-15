import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
    return (
        <div className="footer-section">
            <div className="divider-footer"></div>
            <div className="footer-items">
                <ul className="footer-menu footer-item-container">
                    <li className="footer-item">
                        <Link to="/return-policy">Return policy</Link>
                    </li>
                    <li className="footer-item">Search our store</li>
                    <li className="footer-item">Blog</li>
                    <li className="footer-item">Contact us</li>
                    <li className="footer-item">About us</li>
                </ul>
                <ul className="footer-social footer-item-container">
                    <li className="footer-item social">Facebook </li>
                    <li className="footer-item social">Pinterest </li>
                    <li className="footer-item social"> Instagram </li>
                </ul>
                <div className="footer-copyright footer-item-container">
                    <p className="copyright">
                        © 2023, Brooklyn Theme Powered by Shopify
                    </p>
                    <ul className="footer-suport ">
                        <li className="suport-item">item 1</li>
                        <li className="suport-item">item 2</li>
                        <li className="suport-item">item 3</li>
                        <li className="suport-item">item 4</li>
                        <li className="suport-item">item 5</li>
                        <li className="suport-item">item 6</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
