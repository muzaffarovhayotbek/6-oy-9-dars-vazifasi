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
              <div className="mt-6">
                <h4 className="text-md font-medium tracking-wider capitalize color">
                  color
                </h4>
                <div className="mt-2"></div>
                <button className="btn-colors badge w-6 h-6 mr-2 border-2 border-secondary"></button>
                <button className="btn-green badge w-6 h-6 mr-2 false"></button>
                <button className="blues badge w-6 h-6 mr-2 false"></button>
              </div>
              <div className="selects">
                <h2>Amount</h2>
                <select className='select'>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>
                </select>
              </div>
              <button className="btn">ADD TO BAG</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ProductDetails;
