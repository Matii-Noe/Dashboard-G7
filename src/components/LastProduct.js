import React from 'react';
import { useState, useEffect } from 'react'

function LastProduct() {
    /* Fetch todos los productos */
    const [products, setProducts] = useState([])
    const getProducts = () => {
        fetch('http://localhost:3007/api/products')
            .then((response) => response.json())
            .then((products) => setProducts(products.data))
    }
    useEffect(() => {
        getProducts()
    }, [])
    /* Ultimo producto agregado */
    let lastProduct = products[products.length - 1]

    return (
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3 card-prodSelect" >
                    <h5 className="m-0 font-weight-bold text-gray-800">Último producto: {lastProduct?.productName || "loading..."}</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: 40 + 'rem' }} src={lastProduct?.pathImg || "loading..."} alt={lastProduct?.productName || "loading..."} />
                    </div>
                    <p>{lastProduct?.description || "loading..."}</p>
                </div>
            </div>
        </div>
    )
}

export default LastProduct;