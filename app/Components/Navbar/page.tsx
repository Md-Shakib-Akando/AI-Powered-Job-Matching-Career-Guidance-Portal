import React from 'react'
import logo from '../../../public/assets/logo.png'
import Image from 'next/image'
import Link from 'next/link'
export default function Navbar() {
    return (
        <nav className=' shadow-md pb-5'>
            <div className='xl:max-w-10/12 mx-auto pt-5'>
                <div className=' flex justify-between items-center px-2 xl:px-0'>
                    <div className='flex gap-2 items-center'>
                        <div>
                            <Image src={logo} alt="Logo" width={80} height={150} />
                        </div>

                    </div>
                    <div className='flex gap-3 md:gap-6 items-center'>
                        <Link href="/jobs">Browse Job</Link>
                        <Link href="/login">
                            Sign In
                        </Link>
                        <Link href="/login"> <button className='text-white bg-[#f46e2c] md:text-lg rounded-lg px-4 py-2'>
                            Get Started
                        </button></Link>




                    </div>
                </div>
            </div>
        </nav>
    )
}
