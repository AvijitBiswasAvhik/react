import React, { Component } from "react";
import axios from "axios";
class BkashPayment extends Component {
    constructor(username, password, app_key, app_secret) {
        super();
        //this.id_token = id_token;
        this.username = username;
        this.password = password;
        this.app_key = app_key;
        this.app_secret = app_secret;
    }

    granToken() {
        let body = {
            app_key: this.app_key,
            app_secret: this.app_secret,
        };
        let header = {
            "Content-Type": "application/json",
            Accept: "application/json",
            username: this.username,
            password: this.password,
        };
        axios.post(
            "https://tokenized.pay.bka.sh/v1.2.0-beta/tokenized/checkout/token/grant",
            JSON.stringify(body),
            {
                headers: header,
            }
        );
    }
}

export default BkashPayment;
