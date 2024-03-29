import React from 'react';
import { Input } from '../../Components/UsedInputs';
import SideBar from './SideBar';

const Password = () => {
  return (
    <SideBar>
        <div className='flex flex-col gap-6'>
            <h2 className='text-xl font-bold'>Change Password</h2>
            <Input 
                label='Previous Passowrd'
                placeholder='*********'
                type='password'
                bg={true}
            />
            <Input 
                label='New Passowrd'
                placeholder='*********'
                type='password'
                bg={true}
            />
            <Input 
                label='Confirm Password'
                placeholder='**********'
                type='password'
                bg={true}
            />
            <div className='flex justify-end items-center my-4'>
                <div className='bg-main transitions hover:bg-subMain border border-subMain text-white py-3 px-6 rounded w-full sm:w-auto'>
                    Change Password
                </div>
            </div>
        </div>
    </SideBar>
  )
}

export default Password