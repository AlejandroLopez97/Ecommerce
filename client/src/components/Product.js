import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Product = () => {
  const [details, setDetails] = useState({});
  const location = useLocation();
  useEffect(()=>{
    setDetails(location.state.item);
  },[]);
  return (
    <main>
      <section className='max-w-screen-xl mx-auto my-10 flex gap-10'>
        <div className='w-2/5 relative'>
          <img 
            className='w-full h-[550px] object-cover'
            src={details.image}
            alt='productImg'
          />
          <div className='absolute top-4 right-0'>
            {details.isNew && (
              <p className='bg-black text-white font-semibold font-titleFont px-8 py-1'>
                Oferta
              </p>
            )}
          </div>
        </div>
        <div className='w-3/5'>
          <div>
            <h2 className='text-4xl font-semibold'>{details.title}</h2>
            <div>
              <p className='line-through font-base text-gray-500'>
                ${details.oldPrice}
              </p>
              <p className='text-2xl font-medium text-gray-900'>
                ${details.price}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Product;