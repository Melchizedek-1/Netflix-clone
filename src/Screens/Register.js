import React from 'react'
import { FiLogIn } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { Input } from '../Components/UsedInputs'
import Layout from '../Layout/Layout'

const Register = () => {
  return (
    <Layout>
        <div className='container mx-auto px-2 my-24 flex-colo'>
            <div className='w-full 2xl:w-2/5 flex-colo gap-8 p-8 sm:p-14 md:w-3/5 bg-dry rounded-lg border border-border'>
                <img 
                    src='/images/logo.png'
                    alt='logo'
                    className='w-full h-12 object-contain'
                />
                <Input 
                    label='Full Name'
                    placeholder='full name'
                    type='text'
                    bg={true}
                />
                <Input 
                    label='Email'
                    placeholder='wesonga@wesonga.com'
                    type='email'
                    bg={true}
                />
                <Input 
                    label='Password'
                    placeholder='*********'
                    type='password'
                    bg={true}
                />
                <Link to='/' className='bg-subMain transitions hover:bg-main flex-rows gap-4 text-white p-4 rounded-lg w-full'>
                    <FiLogIn /> Sign Up
                </Link>
                <p className='text-center text-border'>
                    Already have an account? {' '}
                    <Link to='/login' className='text-dryGray font-semibold ml-2'>
                        Sign In
                    </Link>
                </p>
            </div>
        </div>
    </Layout>
  )
}

export default Register