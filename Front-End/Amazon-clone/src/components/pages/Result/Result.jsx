import React from 'react'
import { Layout } from '../../layout/Layout'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { ProductURL } from '../../api/ProductURL'
import { ProductsList } from '../../Products/ProductsList'
import classes from "./Result.module.css"

export const Result = () => {
    const { categoryName } = useParams()
    const [category, setCategory] = useState([]);
    useEffect(() => {
        console.log('Category Name:', categoryName);
        axios.get(`${ProductURL}/category/${categoryName}`)
        .then(res => setCategory(res.data))
        }, [categoryName])
  return (
    <Layout>
        <section>
    <h1 style={{padding:"30px"}}>Results</h1>
    <p style={{padding:"30px"}}>Category / {categoryName}</p>
    <hr />
    <div className={classes.product_container}>
        {category?.map((product) => {
            return (
                <ProductsList key={product.id} product={product} style={{padding:"30px"}} />
            )
            })}
    </div>
    </section>
    </Layout>
  )
}
