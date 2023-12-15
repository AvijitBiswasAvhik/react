import React, { useEffect } from "react";
import "../assets/css/FeaturedCollection.css";
import { Link } from "react-router-dom";

export default function FeaturedCollection(props) {
    let collection =
        props.image !== undefined
            ? props.image.data.map((el, i) => {
                  return (
                      <div className="featured-collection-item" key={i}>
                          <div className="featured-collection-image-container">
                              <Link to={`product/single/${el.id}`}>
                                  <img
                                      src={`http://127.0.0.1:8000/${el.image}`}
                                      alt=""
                                  />
                              </Link>
                          </div>
                          <a href="#" className="grid-product__meta">
                              <span className="grid-product__title">
                                  {el.name}
                              </span>
                              <span className="grid-product__price-wrap">
                                  -${el.price.price}
                              </span>
                          </a>
                      </div>
                  );
              })
            : "";

    return (
        <div className="featured-collection-container">
            <h1 className="featured-collection-title">Featured Collection</h1>
            <div className="divider"></div>
            <div className="featured-collection">{collection}</div>
        </div>
    );
}
