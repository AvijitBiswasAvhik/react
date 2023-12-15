import { useState, useEffect } from "react";
import "../assets/css/LandingPage.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import FeaturedProduct from "../components/FeaturedProduct";
import FeaturedCollection from "../components/FeaturedCollection";
import axiosClient from "../axisos";

const LandingPage = () => {
    const [index, setIndex] = useState(0);
    //let index = 0;
    let [data, setData] = useState();
    let images = [
        {
            src: "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?w=900&t=st=1693705994~exp=1693706594~hmac=2fc5dfe67a69ff434e2d42ece68b9f082b8b8d04db4fd14646df4d49747fc045",
            content: {
                title: "Americas Finest",
                description: "Rugged Outerwer",
                btn: "shop mens",
            },
        },
        {
            src: "https://img.freepik.com/free-photo/lone-tree_181624-46361.jpg?w=900&t=st=1693706042~exp=1693706642~hmac=7fcafa6242ef6076f6da09a95ac00def0bcc5225fbb462f5aef75b791c5cdc26",
            content: {
                title: "fress start",
                description: "Spring Collection",
                btn: "shop womens",
            },
        },
        {
            src: "https://c4.wallpaperflare.com/wallpaper/843/543/748/turtle-shell-legs-head-wallpaper-preview.jpg",
            content: {
                title: "Every Monson",
                description: "Shop What Need",
                btn: "Everything",
            },
        },
        {
            src: "https://img.freepik.com/free-photo/lone-tree_181624-46361.jpg?w=900&t=st=1693706042~exp=1693706642~hmac=7fcafa6242ef6076f6da09a95ac00def0bcc5225fbb462f5aef75b791c5cdc26",
            content: {
                title: "fress start",
                description: "Spring Collection",
                btn: "shop womens",
            },
        },
        {
            src: "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?w=900&t=st=1693705994~exp=1693706594~hmac=2fc5dfe67a69ff434e2d42ece68b9f082b8b8d04db4fd14646df4d49747fc045",
            content: {
                title: "Americas Finest",
                description: "Rugged Outerwer",
                btn: "shop mens",
            },
        },
    ];
    setTimeout(() => {
        if (index < 2) {
            setIndex(index + 1); // Use index + 1 to increment the state
            //index = index + 1;
        } else {
            setIndex(0);
            //index = 0;
        }
    }, 8000);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosClient.get("/feature/products");
                setData(response.data);
            } catch (error) {
               console.log(error.message);
            }
        };

        fetchData();
    }, []);
    return (
        <>
            <div className="slide-container">
                <div
                    className="slider"
                    style={{
                        backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${images[index].src})`,
                    }}
                >
                    <div className="slider-content">
                        <h5>{images[index].content.title}</h5>
                        <h1>{images[index].content.description}</h1>
                        <button className="shopping-btn">
                            {images[index].content.btn}
                        </button>
                    </div>
                </div>
            </div>
            <div className="index-section container">
                <div className="index-content row">
                    <p className="index-paragraph col-md-6 offset-md-3">
                        <em>
                            Our products are inspired by the people and world
                            around us. Beautiful, high quality goods that are
                            designed especially for you. Discover our story and
                            meet the people that make our brand what it is.
                        </em>
                    </p>
                </div>
            </div>
            <FeaturedProduct image={images} />
            <FeaturedCollection image={data} />
            <div className="news-letter-section">
                <div className="letter-content">
                    <h3 className="letter-content-title">
                        Subscribe To Our Newsletter
                    </h3>
                    <p className="letter-description">
                        Sign up to stay in the loop. Receive updates, access to
                        exclusive deals, and more.
                    </p>
                    <div className="divider"></div>
                </div>
                <form action="" className="letter-form">
                    <input
                        type="email"
                        name="mail"
                        className="letter-mail"
                        placeholder="Your email"
                    />
                    <button className="letter-mail-button">send</button>
                </form>
            </div>
        </>
    );
};
export default LandingPage;
