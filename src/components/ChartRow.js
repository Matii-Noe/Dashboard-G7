import React from 'react';


function ChartRow(props){
    return (
                <tr>
                    <td>{props.productName}</td>
                    <td>{props.categoryName}</td>
                    <td>{props.price}</td>
                </tr>
            )
    }


export default ChartRow;