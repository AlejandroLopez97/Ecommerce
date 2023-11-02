import React from 'react';
import {ImGithub} from 'react-icons/im'
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaHome,
} from 'react-icons/fa';
import {MdLocationOn} from 'react-icons/md';
import {BsPersonFill, BsPaypal} from 'react-icons/bs';
import { PaypalLogo, logoLight, paymentLogo2} from '../assets';

function Footer() {
  return (
    <main className='bg-black text-[#949494] py-20 font-titleFont'>
      <section className='max-w-screen-xl mx-auto grid grid-cols-4'>
        {/* LogoIcon Aqui */}
        <div className='flex flex-col gap-7'>
          <img className='w-10' src={logoLight} alt='logoLight' />
          <p className='text-white text-sm tracking-wide'>© AlejoDev 2023</p>
          <div className='flex gap-5'>
            <img className='w-6' src={PaypalLogo} alt='paymentLogo' />
            <img className='w-9' src={paymentLogo2} alt='paymentLogo' />
          </div>
          <div className='flex gap-5 text-lg text-gray-400'>
            <ImGithub className='hover:text-white duration-300 cursor-pointer'/>
            <FaYoutube className='hover:text-white duration-300 cursor-pointer'/>
            <FaFacebook className='hover:text-white duration-300 cursor-pointer'/>
            <FaTwitter className='hover:text-white duration-300 cursor-pointer'/>
            <FaInstagram className='hover:text-white duration-300 cursor-pointer'/>
          </div>
        </div>
        {/* Ubicacion */}
        <div>
          <h2 className='text-2xl font-semibold text-white mb-4'>Ubicanos</h2>
          <div className='text-base flex flex-col gap-2'>
            <p>CO,Ant, Medellín - Laureles</p>
            <p>Cel: 313 678 45 68</p>
            <p>Telefono: 604 444 65 87</p>
            <p>Correo: bazzar.ecommerce@bz.com</p>
          </div>
        </div>
        {/* perfil */}
        <div>
          <h2 className='text-2xl font-semibold text-white mb-4'>Perfil</h2>
          <div className='flex flex-col gap-2 text-base'>
            <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'>
              <span><BsPersonFill/></span>
              Mi cuenta
            </p>
            <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'>
              <span><BsPaypal/></span>
              Pagar
            </p>
            <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'>
              <span><FaHome/></span>
              Rastrear pedido
            </p>
            <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'>
              <span><MdLocationOn/></span>
              Solicita ayuda
            </p>
          </div>
        </div>
        {/* suscribirse */}
        <div className='flex flex-col justify-center'>
          <input className='bg-transparent border px-4 py-2 text-sm' placeholder='e-mail'
           type="text" />
          <button className='text-sm border text-white border-t-0 hover:bg-gray-900
          active:bg-white active:text-black'>
            Suscribirme
          </button>
        </div>
      </section>
      
    </main>
  )
};

export default Footer