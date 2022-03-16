import React from 'react';
import SelfStorage from "../SelfStorage/SelfStorage"
// import Viewer from "../Viewer/Viewer";
import SelfStore from "../Store/Store"
import Products from "../Products/Products";
import Signup from "../Signup/Signup";
import Cart from "../Cart/Cart";
import { Route, Switch } from "react-router-dom";
import Viewer from '../Viewer/Viewer';

const Routes = ({ 
    productItems, 
    cartItems, 
    handleAddProduct, 
    handleRemoveProduct,
    handleCartClearance
 }) => {
    return (
        <div>
            <Switch>
                <Route path="/" exact>
                    <Products 
                        productItems={productItems} 
                        handleAddProduct={handleAddProduct} 
                    />
                </Route>
                <Route path="/Viewer" exact>
                    <Viewer />
                </Route>
                <Route path="/SelfStorage" exact>
                    <SelfStorage />
                </Route>
                <Route path="/selfStore" exact>
                    <SelfStore />
                </Route>
                <Route path="/signup" exact>
                    <Signup />
                </Route>
                <Route path="/cart" exact>
                    <Cart 
                        cartItems={cartItems} 
                        handleAddProduct={handleAddProduct} 
                        handleRemoveProduct={handleRemoveProduct}
                        handleCartClearance={handleCartClearance}  
                    />
                </Route>    
            </Switch>
        </div>
    );
};

export default Routes;