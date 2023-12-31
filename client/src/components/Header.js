import React from 'react';
import {cartImg, logoDark, userLogo} from "../assets/index";
import { useSelector } from 'react-redux';
import {ToastContainer, toast} from 'react-toastify';
import { Link } from 'react-router-dom';
//import { cartImg, logoDark} from '../assets/index';

const Header = () => {
  const productData = useSelector((state) => state.bazar.productData);
  console.log(productData);
  return (
    <div className='w-full h-20 bg-white border-b-[1px] border-b-gray-800 font-titleFont sticky top-0 z-50'>

      <div className='max-w-screen-xl h-full mx-auto flex items-center justify-between'>
        <Link to="/">
          <section>
            <img className='w-20' src={logoDark} alt='logoDark'></img>
          </section>
        </Link>

        <section className='flex items-center gap-8'>
          <ul className='flex items-center gap-8'>
            <li className='text-base text-black font-bold hover:text-orange-900 
              hover:underline underline-offset-2 decoration-[10x] cursor-pointer
              duration-300'>
             <Link to="/">Inicio</Link> 
            </li>
            <li className='text-base text-black font-bold hover:text-orange-900 
              hover:underline underline-offset-2 decoration-[10x] cursor-pointer
              duration-300'>
              Paginas
            </li>
            <li className='text-base text-black font-bold hover:text-orange-900 
              hover:underline underline-offset-2 decoration-[10x] cursor-pointer
              duration-300'>
              <Link to="/Cart">Tienda</Link> 
            </li>
            <li className='text-base text-black font-bold hover:text-orange-900 
              hover:underline underline-offset-2 decoration-[10x] cursor-pointer
              duration-300'>
              Elementos
            </li>
            <li className='text-base text-black font-bold hover:text-orange-900 
              hover:underline underline-offset-2 decoration-[10x] cursor-pointer
              duration-300'>
              Blog
            </li>
          </ul>
          <Link to="/cart">
            <section className='relative'>
              <img className='w-11' src={cartImg} alt='cartImg'></img>
              <span className='absolute w-6 top-3 left-1 text-sm flex items-center
                justify-center font-semibold'>
                {productData.length}
              </span>
            </section>
          </Link>
          <img className='w-10 h-10'
            src={userLogo} alt='userLogo'
          />
        </section>        
      </div>
      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
       />
     
    </div>
  );
};

export default Header;