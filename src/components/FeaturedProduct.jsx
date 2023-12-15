import React,{useState, useEffect} from "react";
import "../assets/css/featuredProduct.css";
import { useStateContext } from "../context/ContextProvider";
import axiosClient from "../axisos";

export default function FeaturedProduct({ image }) {
    const {menu} = useStateContext();
    let [product, setProduct] = useState();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosClient.get("/feature/products");
                setProduct(response.data);
            } catch (error) {
                console.log(error.message);
            }
        };

        fetchData();
    }, []);
    return (
        <>
            <h1 className="fetured-title text-center">Featured Product</h1>
            <div className="divider"></div>
            <div className="featured-section">
                {product &&
                    product.data.map((el, i) => {
                        return(<div
                            className="featured-item"
                            key={i}
                            style={{
                                backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(http://127.0.0.1:8000/${el.image})`,
                                backgroundSize: 'cover'

                              }}
                        >{el.name}</div>)
                    })}
            </div>
        </>
    );
}
