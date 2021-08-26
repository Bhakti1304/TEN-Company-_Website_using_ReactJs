import React from 'react';
import { CartContainer, CartWrapper, Icon, CartH2, CartP
 } from './CartElements';

const MyCart = () => {
    return (
        <>
        <CartContainer>
            <CartWrapper>
            <Icon>My Cart</Icon>
            <CartH2>Your Cart is Empty.</CartH2>
            <CartP to="/services">Continue Shopping</CartP>
            </CartWrapper>
        </CartContainer>
        </>
    )
}

export default MyCart
