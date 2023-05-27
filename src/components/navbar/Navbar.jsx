import React from 'react'
import NavbarLeft from './navbarItem/NavbarLeft'
import NavbarRight from './navbarItem/NavbarRight'

export default function Navbar() {
  return (
    <div className='flex items-center justify-between py-5'>
        <NavbarLeft/>
        <NavbarRight/>
    </div>
  )
}
