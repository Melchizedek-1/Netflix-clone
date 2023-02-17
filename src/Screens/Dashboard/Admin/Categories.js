import React from 'react';
import { HiPlusCircle } from 'react-icons/hi';
import Table2 from '../../../Components/Table2';
import { Movies } from '../../../Data/MovieData';
import SideBar from '../SideBar';

const Categories = () => {
  return (
    <SideBar>
        <div className='flex flex-col gap-6'>
            <div className='flex-btn gap-2'>
                <h2 className='text-xl font-bold'>Categories</h2>
                <button className='bg-subMain flex-rows gap-4 font-medium transitions hover:bg-subMain border border-subMain text-white py-2 px-4 rounded'>
                    <HiPlusCircle /> Create
                </button>
            </div>

            <Table2 data={Movies} users={false} />
        </div>
    </SideBar>
  )
}

export default Categories