import React from 'react'
import { images } from '../constants'

function Header() {
  return (
  <section>
    <header className='container mx-auto px-5 flex justify-between py-5'>
        <div>
            <img className='h-11 w-auto loading:lazy' src={images.Logo}/>
        </div>
        <div className='flex gap-x-9 text-2xl font-mono font-semibold'>
        <ul className='flex gap-x-11'>
          <li className='relative group pl-10'>
          <span className='absolute transition-all duration-500 left-0 top-0 group-hover:left-[98%]'>🏠</span>Home
           </li>
          <li className='relative group pl-10'>MNCs 
          <span className='absolute transition-all duration-500 left-0 top-0 group-hover:left-[98%]'>🏤</span>
          </li>
          <li className='flex relative group pl-10'>Telegram<img className='h-9 w-auto absolute transition-all duration-500 left-0 top-0 group-hover:left-[100%]' src={images.Telegram}/></li>
        </ul>
        </div>
    </header>
  </section>
  )
}

export default Header