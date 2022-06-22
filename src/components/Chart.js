import React from 'react';
import ChartRow from './ChartRow';
import { useState, useEffect } from 'react'

function Chart() {
    const [products, setProducts] = useState([])
    const getProducts = async () => {
        await fetch('http://localhost:3007/api/products')
            .then((response) => response.json())
            .then((data) => setProducts(data.data))
    }
    useEffect(() => {
        getProducts()
    }, [])

    return (

        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Nombre del producto</th>
                                <th>Categoría</th>
                                <th>Precio</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                products.map((row, i) => {
                                    return <ChartRow {...row} key={i} />
                                })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default Chart;