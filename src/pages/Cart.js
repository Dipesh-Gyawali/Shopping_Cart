import React from 'react'
import { useTitle } from '../hooks/useTitle';
import {CartCard} from "../components";
import { useCart } from '../context/CartContext';

export const Cart = ({title}) => {
  const { total } = useCart();

  useTitle(title);

  const products = [
    {"id": 1, "name": "Sony Wh-Ch510 Bluetooth Wireless", "price": 149, "image": "src/assets/images/book.jpg"},
    {"id": 2, "name": "boAt Rockerz 450", "price": 49, "image": "src/assets/images/headphones.jpg"},
  ]

  return (
    <main>
      <section className="cart">
        <h1>Cart Items: {products.length}/ ${total}</h1>
        { products.map((product) => (
        <CartCard key={product.id} product={product}/>
        )) }
      </section>
    </main>
  )
}
