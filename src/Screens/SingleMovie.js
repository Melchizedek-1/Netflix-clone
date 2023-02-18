import React, { useState } from 'react'
import { BsCollectionFill } from 'react-icons/bs';
import { useParams } from 'react-router-dom'
import ShareModal from '../Components/Modals/ShareModal';
import Movie from '../Components/Movie';
import MovieCasts from '../Components/Single/MovieCasts';
import MovieInfo from '../Components/Single/MovieInfo';
import MovieRates from '../Components/Single/MovieRates';
import Titles from '../Components/Titles';
import { Movies } from '../Data/MovieData';
import Layout from '../Layout/Layout'

const SingleMovie = () => {
    const { id } = useParams();
    const [modalOpen, setModalOpen] = useState(false);
    const movie = Movies.find((movie) => movie.name === id);
    const RelatedMovies = Movies.filter((m) => m.category === movie.category);

  return (
    <Layout>
        <ShareModal modalOpen={modalOpen} setModalOpen={setModalOpen} movie={movie} />
        <MovieInfo movie={movie} setModalOpen={setModalOpen} />
        <div className='container mx-auto min-h-screen px-2 my-6'>
            <MovieCasts />
            <MovieRates movie={movie} />

            <div className='my-16'>
                <Titles title="Related Movies" Icon={BsCollectionFill} />
                <div className='grid sm:mt-10 mt-6 xl:grid-cols-4 2xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 gap-6'>
                    {RelatedMovies?.map((movie, index) => (
                        <Movie key={index} movie={movie} />
                    ))}
                </div>
            </div>
        </div>
    </Layout>
  )
}

export default SingleMovie