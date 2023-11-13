import React from 'react';
import {useSelector} from 'react-redux';
import { cartImg } from '../assets';
import CartItem from '../components/CartItem';

const Cart = () => {
  const productData = useSelector((state) => state.bazar.productData);
  //console.log(productData);
  return (
    <div>
      <img
        className='w-full h-90 object-cover'
        src='https://img.freepik.com/fotos-premium/fondo-viernes-negro-etiqueta-ventas-viernes-negro-sobre-fondo-rojo-etiqueta-venta-inscripcion-viernes-negro-sobre-fondo-rojo_256259-3236.jpg?w=826'
        alt='CartImg'
      />
      <div>
        <CartItem />
      </div>
    </div>
  )
};

export default Cart;