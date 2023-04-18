import React from 'react'
import { useTitle } from '../hooks/useTitle';
import {CartCard} from "../components";
import { useCart } from '../context/CartContext';

export const Cart = ({title}) => {

  const { total, cartList } = useCart();

  useTitle(title);

  // console.log(cartList);




  return (
    <main>
      <section className="cart">
        <h1>Cart Items: {cartList.length}/ ${total}</h1>
        { cartList.map((product) => (
        <CartCard key={product.id} product={product}/>
        )) }
      </section>
    </main>
  )
}
