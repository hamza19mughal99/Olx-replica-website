import React from 'react';
import { useParams } from "react-router-dom";
import OlxDetails from "./OlxDetails";
import MaterialDetails from "./MaterialDetails";
import MaterialDetails2 from "./MaterialDetails2";
import "./Product.css";

function ProductsDetails() {

    const { id } = useParams();
    const olx = OlxDetails[id];
    console.log(olx);

    if (!olx)
        return <h2>product not found</h2>

    return (
        <section id="Common">
            <div className="container-fluid ">
                <div className="row">
                    <div className="col-md-10 mx-auto">
                        <div className="row details-div">
                            <div className="col-lg-6 pt-5 order-2 order-lg-1 main-Common">
                                <img src={olx.pic} alt={olx.name} />
                            </div>
                            <div className="col-lg-6 pt-5 mt-5 order-1 order-lg-2">
                                <MaterialDetails name={olx.name}
                                                 price={olx.price}
                                                 date={olx.date}
                                />
                                 <MaterialDetails2   />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProductsDetails;