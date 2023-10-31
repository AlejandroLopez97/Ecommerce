import React from 'react';
import ProductsCard from './ProductsCard';

function Products() {
  return (
    <main className='py-10'>
      <section className='flex flex-col items-center gap-4'>
        <h1 className='text-2x1 bg-black text-white py-2 w-80 text-center'>
          Compra siempre
        </h1>
        <span className='w-20 h-[3px] bg-black'></span>
        <p className='max-w-[700px] text-gray-600 text-center'>
          Lorem ipsum dolor sit amet consectetur adipiscing elit velit vehicula, 
          ante himenaeos mauris sollicitudin auctor sed est et tempor aenean, 
          dis rhoncus suscipit sem ullamcorper massa venenatis euismod. 
          Nostra suspendisse dictum primis conubia vel tellus, convallis massa 
          suscipit morbi penatibus nullam, consequat porta nisi odio montes.
        </p>
      </section>
      <section className='max-w-screen-xl mx-auto'>
        <ProductsCard />
      </section>
    </main>
  );
};

export default Products;