import React from 'react';
import CartItem from '../components/CartItem';

const Cart = () => {
  return (
    <div>
      <img
        className='w-full h-85 object-cover'
        src='https://img.freepik.com/fotos-premium/fondo-viernes-negro-etiqueta-ventas-viernes-negro-sobre-fondo-rojo-etiqueta-venta-inscripcion-viernes-negro-sobre-fondo-rojo_256259-3236.jpg?w=826'
        alt='CartImg'
      />
      <div className='max-w-screen-xl mx-auto py-20 flex'>
        <CartItem />
        <div className='w-1/3 bg-[#fafafa] py-6 px-4'>
          <div className='flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6'>
            <h2 className='text-2xl font-medium'>Total de compra</h2>
            <p className='flex items-center gap-4 text-base'>
              Subtotal{" "}
              <span className='font-titleFont font-bold text-lg'>
                $ 200
              </span>
            </p>
            <p className='flex items-start gap-4 text-base'>
              Envio{" "}
              <span>
                Lorem, ipsum dolor sit anet consectetur adipisicing elit. Quos,
                veritatis.
              </span>
            </p>
          </div>
          <p className='font-titleFont font-semibold flex justify-between mt-6'>
            {" "}
            Total <span className='text-xl font-bold'>$</span>
          </p>
          <button className='text-base bg-black text-white w-full py-3 mt-6 hover:bg-gray-800 duration-300'>Proceder con el pago</button>
        </div>
      </div>
    </div>
  )
};

export default Cart;