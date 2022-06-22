import React from 'react'

function Catalog({ products = [] }) {
  return (
    <div className=" contenedor-catalog">
      {Array.isArray(products.data) &&
        products.data.map((product, index) => (
          <div className="card-catalog">
            <h5 className="card-title">{product.productName}</h5>
            <img
              src={product.pathImg}
              className="card-img-top"
              alt={product.productName}
            />
            <div className="card-body">
              
              <p className="card-text">
                <strong>Categoría:</strong> $ {product.categoryName}
              </p>

              <p className="card-text">
                <strong>Precio:</strong> $ {product.price}
              </p>

            </div>

          </div>
        ))}
    </div>
  )
}

export default Catalog