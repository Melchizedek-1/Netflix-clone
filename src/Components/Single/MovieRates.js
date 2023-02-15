import React, { useState } from 'react'
import { BsBookmarkStarFill } from 'react-icons/bs'
import { UsersData } from '../../Data/MovieData'
import Rating from '../Rating'
import Titles from '../Titles'
import { Message, Select } from '../UsedInputs'

const MovieRates = ({ movie }) => {
    const Ratings = [
        {
            title: "1 - Fair",
            value: 1,
        },
        {
            title: "2 - Good",
            value: 2,
        },
        {
            title: "3 - Very Good",
            value: 3,
        },
        {
            title: "4 - Excellent",
            value: 4,
        },
        {
            title: "5 - Masterpiece",
            value: 5,
        },
    ];

    const [rating, setRating] = useState('');

  return (
    <div className='my-12'>
        <Titles title="Revies" Icon={BsBookmarkStarFill} />
        <div className='mt-10 xl:grid flex-colo grid-cols-5 gap-12 bg-dry xs:p-10 px-2 sm:p-20 rounded'>
            <div className='xl:col-span-2 w-full flex flex-col gap-8'>
                <h3 className='text-xl text-text font-semibold'>
                    Review "{movie?.name}"
                </h3>
                <p className='text-sm leading-7 font-medium text-border'>
                    Write a review for this movie. It will be posted on this oage. lorem ipsum dolod hvgdhg ggfd gfd fdrd ffd cfdt ftfs gfstf
                </p>
                <div className='text-sm w-full'>
                    <Select 
                        label="Select Rating" 
                        options={Ratings} 
                        onChange={(e) => setRating(e.target.value)}
                    />
                    <div className='flex mt-4 text-lg gap-2 text-star'>
                        <Rating value={rating} />
                    </div>
                </div>
                <Message 
                    label="Message"
                    placeholder="Make it shogv ghysgh..."
                />
                <button className='bg-subMain text-white py-3 w-full flex-colo rounded'>
                    Submit
                </button>
            </div>
            <div className='col-span-3 flex flex-colo gap-6'>
                <h3 className='text-xl text-text font-semibold'>
                    Reviews (56)
                </h3>
                <div className='w-full flex flex-col bg-main gap-6 rounded-lg md:p-12 p-6 h-header overflow-y-scroll'>
                    {UsersData.map((user, i) => (
                        <div className='md:grid flex flex-col w-full grid-cols-12 gap-6 bg-dry p-4 border border-gray-800 rounded-lg'>
                            <div className='col-span-2 bg-main hidden md:block'>
                                <img 
                                    src={`/images/${user ? user.image : "1.jpg"}`}
                                    alt={user.fullName}
                                    className="w-full h-24 rounded-lg object-cover"
                                />
                            </div>
                            <div className='col-span-7 flex flex-col gap-2'>
                                <h2>{user?.fullName}</h2>
                                <p className='text-xs leading-6 font-medium text-text'>
                                    {user?.message}
                                </p>
                            </div>
                            <div className='col-span-3 flex-rows bordr-l border-border text-xs gap-1 text-star'></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default MovieRates