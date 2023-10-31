import React from 'react'
import {HiArrowRight, HiArrowLeft} from 'react-icons/hi';

const Banner = () => {
 const data = [
    "https://amazonproone.vercel.app/static/media/img2.bc1bdb910ead16c65197.jpg",
    "https://amazonproone.vercel.app/static/media/img5.aa945e25375bfdee385f.jpg",
    "https://amazonproone.vercel.app/static/media/img3.c80809bb40bee5c34372.jpg",
    "https://amazonproone.vercel.app/static/media/img1.efb3d39101f7ef77d616.jpg",
  ];
  return (
    <div className='w-full h-auto overflow-x-hidden'>
      {/* contenedor de imagenes y botones */}
      <div className='w-screen h-[650px] relative'>
        {/* contenedor de imagenes del slider */}
        <div className='w-[400vw] h-full flex'>
          <img 
            className='w-screen h-full object-cover'
            src={data[0]} 
            alt='ImgOne'
            loading='priority'
          />
          <img 
            className='w-screen h-full object-cover'
            src={data[1]} 
            alt='ImgTwo'
          />
          <img 
            className='w-screen h-full object-cover'
            src={data[2]} 
            alt='ImgThree'
          />
          <img 
            className='w-screen h-full object-cover'
            src={data[3]} 
            alt='ImgFour'
          />
        </div>
        {/* fin imagenes slider */}

        {/* contenedor botones slider */}
        <div className='absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-44'>
          <div className='w-14 h-12 border-[1px] border-gray-700 flex items-center
          justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white
          active:bg-gray-900 duration-300'>
            <HiArrowLeft /> {/*flecha izquierda importada desde react-icons*/}
          </div>
          <div className='w-14 h-12 border-[1px] border-gray-700 flex items-center
          justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white
          active:bg-gray-900 duration-300'>
            <HiArrowRight /> {/*flecha derecha importada desde react-icons*/}
          </div>
        </div>
        {/* fin botones slider */}
      </div>
    </div>
  )
};

export default Banner;