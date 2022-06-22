import React from 'react'

import { useState, useEffect, useRef } from 'react'

function SearchProducts() {
  const [products, setproducts] = useState([])
  let keyword = useRef()

  useEffect(() => {
    fetch('http://localhost:3007/api/products/')
      .then((res) => res.json())
      .then((res) => { })
  })

  function sumbitForm(e) {
    e.preventDefault()

    fetch(
      'http://localhost:3007/api/products/search?keyword=' +
        keyword.current.value,
    )
      .then((res) => res.json())
      .then((res) => {
        setproducts(res.data)
      })
  }

  return (
    <div className="container-fluid">
      {
        <>
          <div className="row my-4">
            <div className="col-12 col-md-6">
              {/* Buscador */}
              <form method="GET" onSubmit={sumbitForm}>
                <div className="form-group">
                  <label htmlFor="">Buscar por nombre:</label>
                  <input
                    type="text"
                    className="form-control"
                    ref={keyword}
                    placeholder="Ej: Buenos Aires"
                  />
                </div>
                <button className="btn btn-info">Buscar</button>
              </form>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <h2>Resultados:</h2>
            </div>
            {/* Listado de películas */}
            {Array.isArray(products) &&
              products.map((product, i) => {
                
                return (
                  <div className="col-sm-12 col-md-6 my-4" key={i}>
                    <div className="card shadow mb-4">
                      <div className="card-header py-3">
                        <h5 className="m-0 font-weight-bold text-gray-800">
                          {product.productName}
                        </h5>
                      </div>
                      <div className="card-body">
                        <div className="text-center">
                          <img
                            className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                            src={product.pathImg}
                            alt={product.productName}
                            style={{
                              width: '90%',
                              height: '400px',
                              objectFit: 'cover',
                            }}
                          />
                        </div>
                        <p>${product.price}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
          </div>
          {Array.isArray(products) && products.length === 0 && (
            <div className="alert alert-warning text-center">
              No se ha encontrado el producto
            </div>
          )}
        </>
      }
    </div>
  )
}

export default SearchProducts
