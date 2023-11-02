import React from 'react';
import ProductsCard from './ProductsCard';

const  Products = ({products}) => {
  //console.log(products);
  return (
    <main className='py-10'>
      <section className='flex flex-col items-center gap-4'>
        <h1 className='text-2xl bg-black text-white py-2 w-80 text-center'>
          ¡ Ofertas siempre !
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
      <section className='max-w-screen-xl mx-auto py-10 grid grid-cols-4 gap-10'>
        {products.map((item)=> (
          <ProductsCard key={item._id} product={item} />
        ))}
      </section>
    </main>
  );
};

export default Products;