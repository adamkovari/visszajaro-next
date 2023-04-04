'use client'

import Image from 'next/image'

export default function Custom404() {
    return (
        <div className='w-full min-h-screen justify-center flex items-center relative bg-[#333333]'>
            <div className='w-2/12'>
                <Image src='/assets/error.svg' className='mb-5 h-full w-full' width={1000}
                    height={700} priority={true} alt='error' />
                <h1 className='text-2xl text-white'>A manóba!</h1>
                <p className='text-white'>Nem találjuk az oldalt!</p>
            </div>
        </div>
    )
}