import React from 'react'
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
