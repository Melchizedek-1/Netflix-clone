import React from 'react'
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

const Table2 = ({ data, users, OnEditFunction }) => {
    const Head = "text-xs text-left text-main font-semibold px-6 py-2 uppercase";
    const Text = "text-sm text-left leading-6 whitespace-nowrap px-5 py-3";

    const Rows = (data, i, users, OnEditFunction) => {
        return (
            <tr key={i}>
                {users ? (
                    <>
                        <td className={`${Text}`}>
                            <div className='w-12 p-1 bg-dry border border-border h-12 rounded overflow-hidden'>
                                <img 
                                    className='h-full w-full object-cover'
                                    src={`/images/${data.image ? data.image : '1.jpg'}`}
                                    alt={data?.fullName}
                                />
                            </div>
                        </td>
                        <td className={`${Text} truncate`}>{data._id ? data._id : '5SFFS7'}</td>
                        <td className={`${Text}`}>{data.createdAt ? data.createdAt : '14, Feb 2076'}</td>
                        <td className={`${Text}`}>{data.fullName}</td>
                        <td className={`${Text}`}>{data.email}</td>
                        <td className={`${Text} float-right flex-rows gap-2`}>
                            <button className='bg-subMain text-white rounded flex-colo w-6 h-6'>
                                <MdDelete />
                            </button>
                        </td>
                    </>
                ) : (
                    <>
                        <td className={`${Text} truncate`}>{data._id ? data._id : '5SFFS7'}</td>
                        <td className={`${Text}`}>{data.createdAt ? data.createdAt : '14, Feb 2076'}</td>
                        <td className={`${Text}`}>{data.fullName}</td>
                        <td className={`${Text} float-right flex-rows gap-2`}>
                            <button onClick={() => OnEditFunction(data)} className='border border-border bg-dry flex-rows gap-2 text-border rounded py-1 px-2'>
                                Edit <FaEdit className='text-green-500' />
                            </button>
                            <button className='bg-subMain text-white rounded flex-colo w-6 h-6'>
                                <MdDelete />
                            </button>
                        </td>
                    </>
                )}
            </tr>
        )
    }

  return (
    <div className='overflow-x-scroll overflow-hidden relative w-full'>
        <table className='w-full table-auto border border-border divide-y divide-border'>
            <thead>
                <tr className='bg-dryGray'>
                    {users ? (
                        <>
                            <th scope="col" className={`$${Head}`}>
                                Image
                            </th>
                            <th scope="col" className={`$${Head}`}>
                                Id
                            </th>
                            <th scope="col" className={`$${Head}`}>
                                Date
                            </th>
                            <th scope="col" className={`$${Head}`}>
                                Full Name
                            </th>
                            <th scope="col" className={`$${Head}`}>
                                Email
                            </th>
                            <th scope="col" className={`$${Head}`}>
                                Hours
                            </th>
                        </>
                    ) : (
                        <>
                            <th scope="col" className={`$${Head}`}>
                                Id
                            </th>
                            <th scope="col" className={`$${Head}`}>
                                Date
                            </th>
                            <th scope="col" className={`$${Head}`}>
                                Title
                            </th>
                        </>
                    )}
                    <th scope="col" className={`$${Head} text-end`}>
                        Actions
                    </th>
                </tr>
            </thead>
            <tbody className='bg-main divide-y divide-gray-800'>
                {data.map((data, i) => Rows(data, i, users, OnEditFunction))}
            </tbody>
        </table>
    </div>
  )
}

export default Table2