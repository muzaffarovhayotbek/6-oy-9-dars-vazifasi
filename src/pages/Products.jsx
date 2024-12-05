
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Products.css'

function Products() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  useEffect(function () {
    axios.get("https://strapi-store-server.onrender.com/api/products")
      .then(response => {
        if (response.status == 200) {
          setProducts(response.data.data)
        }
      })
      .catch(error => {
        console.log(error);

      })
  }, [])


  function handleRedirect(id) {
    navigate(`/products/${id}`)

  }
  return (
    <div className='container mx-auto mt-6 flex flex-wrap gap-3'>
      {
        products.length > 0 && products.map(function (product, index) {
          return (
            <div key={index} className=' container w-1/3 border-2 rounded-md p' onClick={() => { handleRedirect(product.id) }} >
              <img className='w-full h-[400px] object-cover' src={product.attributes.image} alt="" />
              <h3 className='capitalize font-medium text-[20px]'>{product.attributes.title}</h3>
              <p className='text-[#846eaa]'>{product.attributes.price}</p>
            </div>
          )

        })
      }
    </div>
  )
}

export default Products
