import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import { useStateContext } from "../context/ContextProvider";
import axiosClient from "../axisos";

export default function Verify() {
    let [verificationCode, setVerificationCode] = useState({value: ''});
    const navigate = useNavigate();
    let { verified } = useStateContext();
    if (verified == true) {
        navigate(-1);
    }
    // http://127.0.0.1:8000/api/verify-email/36/w2IbrWYIoXP9si1jnfLmPbo9C3PstJ8ax9ehSQ7G
    let verifyEmail = (e)=>{
        e.preventDefault();
        axiosClient.get('/resend-mail')
        .then((response)=>{
            console.log(response);
        })
        .catch((error)=>{
            console.log(error);
        })
    }
    return (
        <div className="m-5">
            <p>If you did,nt receve thje link click here</p>
                <button type="submit" className="btn btn-outline-primary mt-2" onClick={(e)=>{verifyEmail(e)}}>Send</button>
            
        </div>
    );
}
