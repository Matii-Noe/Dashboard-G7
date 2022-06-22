import React from 'react'
import image from '../assets/images/logo-40trip.svg'
import ContentWrapper from './ContentWrapper'
import Catalog from './Catalog'
import LastProduct from './LastProduct'
import NotFound from './NotFound'
import { Link, Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ContentRowCategories from './ContentRowCategories'
import GenresInDb from './GenresInDb'

function SideBar() {
  let [products, setProducts] = useState([])
  let [users, setUsers] = useState([])

  let getUsers = async () => {
    await fetch('http://localhost:3007/api/users')
      .then((response) => response.json())
      .then((data) => setUsers(data))
  }
  useEffect(() => {
    getUsers()
  }, [])

  let getProducts = async () => {
    await fetch('http://localhost:3007/api/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
  }
  useEffect(() => {
    getProducts()
  }, [])

  return (
    <React.Fragment>
      {/* Sidebar */}
      <ul
        className="navbar-nav  sidebar sidebar-dark accordion  fondo-sidebar"
        id="accordionSidebar"
      >
        {/* Sidebar - Brand */}
        <a
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="/"
        >
          <div className="sidebar-brand-icon">
            <img className="w-100" src={image} alt="40trip" />
          </div>
        </a>

        {/* Divider */}
        <hr className="sidebar-divider my-0" />

        {/* Nav Item - Dashboard */}
        <li className="nav-item active">
          <Link className="nav-link" to="/">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span className='dash-40trip'>Dashboard - 40trip </span>
          </Link>
        </li>

        {/* Divider */}
        <hr className="sidebar-divider" />

        {/* Heading */}
        <div className="acciones">Acciones</div>

        {/* Nav Item - Pages */}
        <li className="nav-item">
          <Link className="nav-link" to="/Catalog">
            <i className="fas fa-fw fa-folder"></i>
            <span className='font-black'>Catálogo</span>
          </Link>
        </li>

        {/* Nav Item - Gategories */}
        <li className="nav-item">
          <Link className="nav-link" to="/GenresInDb">
            <i className="fas fa-fw fa-folder"></i>
            <span className='font-black'>Categorias</span>
          </Link>
        </li>

        {/* Nav Item - Charts */}
        <li className="nav-item">
          <Link className="nav-link" to="/LastProduct">
            <i className="fas fa-fw fa-chart-area"></i>
            <span className='font-black'>Último producto</span>
          </Link>
        </li>

        {/* Nav Item - ContentRowCategories  */}
        <li className="nav-item nav-link">
          <Link className="nav-link" to="/ContentRowCategories">
            <i className="fas fa-fw fa-table"></i>
            <span className='total'>Total de productos/usuarios </span>
          </Link>
        </li>

        <hr className="sidebar-divider d-none d-md-block" />
      </ul>
      <Routes>
        <Route path="/*" element={< ContentWrapper />} />

        <Route path="/GenresInDb" element={< GenresInDb />} />
        
        <Route path="/Catalog" element={<Catalog products={products} />} />

        <Route path="/LastProduct" element={<LastProduct />} />

        <Route path="/ContentRowCategories" element={<ContentRowCategories products={products} users={users} />} />

        <Route element={NotFound} />
        
      </Routes>
    </React.Fragment>
  )
}
export default SideBar
