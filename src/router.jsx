import React,{ReactDOM} from "react";
import {createBrowserRouter} from 'react-router-dom';
import DefaultComponent from "./components/DefaultComponents";
import LandingPage from "./view/LandingPage";
import ProductView from "./components/ProductView";
import SingleProductView from "./components/SingleProductView";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Verify from "./components/Verify";
import CheckOut from "./components/CheckOut";
import MainComponent from "./components/MainComponent";
import RefundPolicyPage from "./components/ReturnPolcy";
import RefundRequestForm from "./components/RefundRequestForm";
import Orders from "./components/Orders";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainComponent />,
        children: [
            {
                path: '/',
                element: <LandingPage />,
            },
            {
                path: 'product/:category',
                element: <ProductView />,
            },
            {
                path: 'product/',
                element: <ProductView />,
            },
            {
                path: 'orders/',
                element: <Orders />,
            },
            {
                path: 'product/single/:id',
                element: <SingleProductView />,
            },
            {
                path: '/verify',
                element: <Verify />,
            },
            {
                path: '/checkout',
                element: <CheckOut/>,
            },
            {
                path: '/return-policy',
                element: <RefundPolicyPage />,
            },
            {
                path: '/return-policy/submit',
                element: <RefundRequestForm />,
            },
        ]
    }
]);

export default router;