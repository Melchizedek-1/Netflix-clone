import React from 'react'
import Uploader from '../../Components/Uploader'
import { Input } from '../../Components/UsedInputs'
import SideBar from './SideBar'

const Profile = () => {
  return (
    <SideBar>
        <div className='flex flex-col gap-6'>
            <h2 className='text-xl font-bold'>Profile</h2>
            <Uploader />
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
            <div className='flex gap-2 flex-wrap flex-col-reverse sm:flex-row justify-between items-center my-4'>
                <div className='bg-subMain transitions hover:bg-main border border-subMain text-white py-3 px-6 rounded w-full sm:w-auto'>
                    Delete Account
                </div>
                <div className='bg-main transitions hover:bg-subMain border border-subMain text-white py-3 px-6 rounded w-full sm:w-auto'>
                    Upload Profile
                </div>
            </div>
        </div>
    </SideBar>
  )
}

export default Profile