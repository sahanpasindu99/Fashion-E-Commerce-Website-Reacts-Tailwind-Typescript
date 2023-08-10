import React,{useEffect,useState} from 'react';
import Logo from '../assets/img/logo.svg'
import {CgMenuRight,CgClose} from 'react-icons/cg'
import { navigation } from '../data';
import NavMobile from './NavMobile';

const Header = () => {
  const [bg,setBg] =useState(false);
  const[mobileNav,setMobileNav]=useState(false);

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      return window.scrollY>60 ? setBg(true):setBg(false);
    });
  }
  );

  return(
    <header className={`${bg ?' bg-white shadow-md text-black  py-3.5 lg:py-6' : 'bg-none text-white'} 
    fixed left-0 w-full py-8 z-10  transition-all duration-200 ` }>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          <a className='text-shadow-lg font-bold text-3xl' href="#">
            {/* <img className='h-6 lg:h-8' src={Logo} alt=''/> */}
           Sahan's
          </a>
          <div onClick={()=> setMobileNav(!mobileNav)} className='text-2xl text-shadow-lg font-bold text-white text-3xl md:hidden cursor-pointer lg:text-3xl'>
               {mobileNav ? <CgClose/> :<CgMenuRight/>}
          </div>
          <nav className='hidden md:flex'>
              <ul className='md:flex md:gap-x-12'>
                {navigation.map((item,index)=>{
                  return(
                    <li key={index}>
                      <a className='capitalize   hover:border-b
                      transition-all' href={item.href}>{item.name}</a>

                    </li>
                  );
                })}
              </ul>
             </nav>
             <div className={`${mobileNav ? 'left-0' : '-left-full'} md:hidden fixed bottom-0
             w-full max-w-xs h-screen transition-all `}>
              <NavMobile/>
             </div>

        </div>
      </div>

    </header>

      
  );
};

export default Header;
