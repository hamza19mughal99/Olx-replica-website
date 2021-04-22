import React from 'react';
import {Link} from "react-router-dom";
import OlxDetails from "./OlxDetails";
import MaterialProduct from "./MaterialProduct";
import "./Product.css";


function Products() {    
    return (
        <>
        <div className="product-heading">
            <h3>Fresh Recommendations</h3> </div>
      
        <div className="product-div">
             {Object.keys(OlxDetails).map(KeyName =>{
                 const olx = OlxDetails[KeyName]
                 return(
                     <Link key={KeyName} 
                     className="product-div1"
                     to={`./product/${KeyName}`}> 
                         <MaterialProduct 
                         name={olx.name}
                         img = {olx.pic}
                         price={olx.price}
                         date={olx.date}
                           />
                     </Link>
                     
                 )
             })}
        </div>
        </>
    );
}

export default Products;