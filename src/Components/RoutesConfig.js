import React from 'react';
import { BrowserRouter as Routes, Route, Switch } from "react-router-dom";
import Home from "./Home/Home";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import ProductDetails from "./Products/ProductsDetails";
import NotFound from "./NotFound";



function RoutesConfig() {
    return (
        <div>
            <Routes>
                <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/product/:id" component={ProductDetails} /> 
                    <Route exact path="*" component={NotFound} />
                </Switch>
                <Footer />
            </Routes>
        </div>
    );
}

export default RoutesConfig;