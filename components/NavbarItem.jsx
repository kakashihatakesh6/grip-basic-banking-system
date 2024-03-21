import React from 'react'

const NavbarItem = ({
    label
}) => {
  return (
    <div className='text-white cursor-pointer  rounded-md
     hover:bg-gray-400 hover:text-white px-2 py-2 transition'>
        {label}
    </div>
  )
}

export default NavbarItem