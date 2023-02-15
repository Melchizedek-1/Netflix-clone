import React, { useState } from 'react'
import { CgSpinner } from 'react-icons/cg'
import Filters from '../Components/Filters'
import Movie from '../Components/Movie'
import { Movies } from '../Data/MovieData'
import Layout from '../Layout/Layout'

const MoviesPage = () => {
    const maxPage = 10;
    const [page, setPage] = useState(maxPage);

    const handleLoadingMore = () => {
        setPage(page + maxPage);
    };

  return (
    <Layout>
        <div className='min-h-screen container mx-auto px-2 my-6'>
            <Filters />
            <p className='text-lg font-medium my-6'>
                Total <span className='font-bold text-subMain'>{Movies?.length}</span>{' '} items Found
                <div className='grid sm:mt-10 mt-6 xl:grid-cols-4 2xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 gap-6'>
                    {Movies.slice(0, page)?.map((movie, index) => (
                        <Movie key={index} movie={movie} />
                    ))}
                </div>

                <div className='w-full flex-colo md:my-20 my-10'>
                    <button onClick={handleLoadingMore} className='flex-rows gap-3 text-white py-3 px-8 rounded font-semibold border-2 border-subMain'>
                        Loading More <CgSpinner className='animate-spin' />
                    </button>
                </div>
            </p>
        </div>
    </Layout>
  )
}

export default MoviesPage