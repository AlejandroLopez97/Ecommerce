import React from 'react';
import {logoDark} from "../assets/index";

const Header = () => {
  return (
    <div className='w-full h-20 bg-white border-b-[1px] border-b-gray-800'>

      <div className='max-w-screen-xl h-full mx-auto flex items-center justify-between'>
        <section>
          <img className='w-28' src={logoDark} alt='logoDark'></img>
        </section>

        <section>
        <ul>
          <li>Inicio</li>
          <li>Paginas</li>
          <li>Tienda</li>
          <li>Elementos</li>
          <li>Blog</li>
        </ul>
        </section>        
      </div>
     
    </div>
  );
};

export default Header;