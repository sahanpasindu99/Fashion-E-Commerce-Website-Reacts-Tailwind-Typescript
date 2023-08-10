import React from 'react';
import { navigation } from '../data';

const NavMobile = () => {
  return (
    <div className='bg-white w-full h-full shadow-2xl'>
      <ul className='text-center h-full flex flex-col items-center justify-center
      gap-y-6 '>
        {navigation.map((itme,index)=>{
          return(
            <li className='capitalize text-xl font-medium' key={index}>
              <a href={itme.href}>{itme.name}</a>
            </li>

          );
        })}

      </ul>

    </div>
  );
};

export default NavMobile;
