import React from 'react'
import {Categoryjson} from "./CategoryJSON"
import { CategoryList } from './CategoryList'

export const Category = () => {
  return (
    <>
    Categoryjson.map((info) => {
        <CategoryList data = {info} />
    })
    </>
  )
}
