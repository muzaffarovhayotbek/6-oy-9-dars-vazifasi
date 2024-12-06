import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import './ProductDetails.css';

function ProductDetails() {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    localStorage.setItem('productId', id);

    axios
      .get(`https://strapi-store-server.onrender.com/api/products/${id}`)
      .then((response) => {
        if (response.status === 200) {
          const productData = response.data.data;
          localStorage.setItem('productData', JSON.stringify(productData));
          setProduct(productData);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <div>
      <div className="container href">
        <NavLink to="/" className="href">
          Home
        </NavLink>
        <NavLink to="/products">Product</NavLink>
      </div>
      {product.id && (
        <>
          <div className="max-w-[1100px] w-full mx-auto py-24 flex gap-10">
            <img
              className="img"
              width={500}
              height={384}
              src={product.attributes.image}
              alt=""
            />
            <div className="">
              <h3 className="title">{product.attributes.title}</h3>
              <h3 className="company">{product.attributes.company}</h3>
              <h4 className="price">{product.attributes.price}</h4>
              <p className="desc">{product.attributes.description}</p>
              <button className="btn">ADD TO BAG</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ProductDetails;
