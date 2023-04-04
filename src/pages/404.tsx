'use client'

export default function Custom404() {
    return (
        <div className='w-full min-h-screen justify-center flex items-center bg-[#333333]'>
            <div className='ml-7'>
                <img src='/assets/error.svg' className='mb-5' alt='error' />
                <h1 className='text-2xl text-white'>A manóba!</h1>
                <p className='text-white'>Nem találjuk az oldalt!</p>
            </div>
        </div>
    )
}