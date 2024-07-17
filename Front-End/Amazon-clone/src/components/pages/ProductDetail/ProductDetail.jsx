import React, { useState } from 'react'
import { Layout } from '../../layout/Layout'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'
import { ProductURL } from '../../api/ProductURL'
import { ProductsList } from '../../Products/ProductsList'

export const ProductDetail = () => {
    const { productID } = useParams()
    const [product, setProduct] = useState({})
    useEffect(()=>{
        axios.get(`${ProductURL}/products/${productID}`)
        .then(res => setProduct(res.data))
        },[productID])
  return (
    <Layout>
       <ProductsList product={product}/>
    </Layout>
  )
}
