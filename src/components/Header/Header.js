import Link from 'next/link';
import React from 'react';

const Header = () => {
    return (
        <div className='text-white bg-orange-600'>
            <nav className='container flex items-center justify-between h-20 mx-auto '>
                <div>
                    <h1 className='text-2xl font-bold'>Sabbir</h1>
                </div>
                <ul className='flex gap-5'>
                    <li className='hover:font-bold'>
                        <Link href="/">Home</Link>
                    </li>
                    <li className='hover:font-bold'>
                        <Link href="/about">About</Link>
                    </li>
                    <li className='hover:font-bold'>
                        <Link href="/service">Services</Link>
                    </li>
                    <li className='hover:font-bold'>
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;