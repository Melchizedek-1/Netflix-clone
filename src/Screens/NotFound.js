import React from 'react'
import { CgHomeAlt } from 'react-icons/cg'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='flex-colo w-full min-h-screen text-white bg-main lg:py-20 py-10 px-6'>
      <img 
        src='/images/404.svg'
        className='w-full h-96 object-contain'
        alt='not found'
      />
      <h1 className='lg:text-4xl font-bold'>
        Page Not Found
      </h1>
      <p className='font-medium text-border italic leading-6'>
        The page yu are looking for does nt exist. sghfts vgs
      </p>
      <Link to='/' className='bg-subMain transitions text-white flex-rows gap-4 font-medium py-3 px-6 hover:text-main'>
        <CgHomeAlt /> Back Home
      </Link>
    </div>
  )
}
 
export default NotFound