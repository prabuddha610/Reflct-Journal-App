import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Header = () => {
  return <header className='container mx-auto'>
    <nav className='py-6 px-4 flex justify-between items-center'>
        <Link href={"/"}>
            <Image src={"/logo.png"} alt="Reflct logo" width={200} height={60} className='h-10 w-auto object-contain'/>
        </Link>
    </nav>
  </header>

}

export default Header;