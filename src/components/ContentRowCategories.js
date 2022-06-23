import React from 'react'
import SmallCard from './SmallCard'
import { useEffect, useState } from 'react'

function ContentRowCategories() {
  const [products, setProducts] = useState([])
  const [users, setUsers] = useState([])

  const getUsers = () => {
    fetch('http://localhost:3007/api/users')
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.data)
      })
  }
  useEffect(() => {
    getUsers()
  }, [])

  const getProducts = () => {
    fetch('http://localhost:3007/api/products')
      .then((response) => response.json())
      .then((data) => setProducts(data.data))
  }
  useEffect(() => {
    getProducts()
  }, [])

  let productCount = {
    title: 'Total de productos',
    color: 'primary',
    cuantity: products.length || "loading...",
    icon: 'fas fa-gift',
  }

  /* Cantidad de usuarios */

  let userCount = {
    title: 'Total de usuarios',
    color: 'success',
    cuantity: users.length,
    icon: 'fas fa-user',
  }

  /* Total de categorías */

  let CategoryCount = {
    title: 'Total de categorías',
    color: 'warning',
    cuantity: 3,
    icon: 'fas fa-restroom',
  }

  let cartProps = [productCount, userCount, CategoryCount]

  return (
    <div className="row">
      {cartProps.map((carts, i) => {
        return <SmallCard {...carts} key={i} />
      })}
    </div>
  )
}

export default ContentRowCategories
