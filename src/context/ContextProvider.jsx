import React, {
    createContext,
    useContext,
    useState,
    useEffect,
    Children,
    addQty,
} from "react";
import axiosClient from "../axisos";
const StateContext = createContext({
    cart: {},
    setCart: () => {},
    menu: {},
    setMenu: () => {},
    addToCart: () => {},
    styles: {},
    addToTable: () => {},
    cartData: {},
    addQty: () => {},
    totalPrice: {},
    deleteCartItem: () =>{},
    verified: {},
    setVerified: () => {},
});

export function ContextProvider({ children }) {
    const [cart, setCart] = useState([]);
    const [menu, setMenu] = useState([
        "home",
        "men",
        "women",
        "bags",
        "outdoor",
        "orders",
    ]);
    const [verified, setVerified] = useState();
    let [buyerData, setBuyerData] = useState(null);
    let [styles, setStyles] = useState(false);
    let [cartData, setCartData] = useState(null);
    let [totalPrice, setTotalPrice] = useState(null);

    let addToCart = (id) => {
        if (localStorage.getItem("TOKEN") == null || styles === true) {
            setStyles(!styles);
        }
        if (localStorage.getItem("TOKEN") != null) {
            axiosClient
                .get(`add-to-cart/${id}`)
                .then((response) => {
                    setCartData(response.data);
                })
                .catch((error) => {
                    console.log(error.message);
                });
            axiosClient
                .get("/cart-data")
                .then((response) => {
                    setCartData(response.data);
                })
                .catch((error) => {
                    console.log(error.message);
                });
        }
    };
    let deleteCartItem = (id)=>{
        axiosClient
                .get(`/order/cart-item-delete/${id}`)
                .then((response) => {
                    setCartData(response.data);
                })
                .catch((error) => {
                    console.log(error.message);
                });
    };
    useEffect(() => {
        axiosClient
            .get("/cart-data")
            .then((response) => {
                setCartData(response.data);
                setVerified(true);
            })
            .catch((error) => {
                
                if (localStorage.getItem("TOKEN") == null || styles === true) {
                    setStyles(!styles);
                }
                console.log(error.response.data.error);
                if(error.response.data.error == 'unverified') {
                    setVerified(false);
                }
            });
    }, []);
    let addQty = (id, value, buyer, order) => {
        let data = { id: id, value: value, buyer: buyer, order: order };
        axiosClient
            .post(`/order/add-qty/${id}`, data)
            .then((response) => {
                setCartData(response.data)
            })
            .catch((error) => {
                console.log(error.message);
            });
    };

    useEffect(() => {
        axiosClient
            .get(`/order/total-price`)
            .then((response) => {
                setTotalPrice(response.data);
            })
            .catch((error) => {
                if (localStorage.getItem("TOKEN") == null || styles === true) {
                    setStyles(!styles);
                }
                console.log(error.message);
            });
    }, [cartData]);
    let addToTable = (id) => {};
    return (
        <StateContext.Provider
            value={{
                cart,
                setCart,
                menu,
                setMenu,
                addToCart,
                styles,
                cartData,
                addQty,
                totalPrice,
                deleteCartItem,
                verified,
            }}
        >
            {children}
        </StateContext.Provider>
    );
}

export const useStateContext = () => useContext(StateContext);
