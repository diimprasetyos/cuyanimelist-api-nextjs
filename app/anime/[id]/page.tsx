import { getAnimeResponse } from '@/app/libs/api-libs'
import Image from 'next/image'
import React from 'react'


const Page = async ({params: {id}}) => {
    const anime = await getAnimeResponse(`anime/${id}`)
  return (
    <>
    <div className='pt-4 px-4'>
        <h3 className='text-color-primary text-lg'>{anime.data.title} - {anime.data.year}</h3>
    </div>
    <div className='pt-4 px-4 flex gap-2 text-color-primary overflow-x-auto'>
        <div className='w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2'>
            <h3>Peringkat</h3>
            <p>{anime.data.rank}</p>
        </div>
        <div className='w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2'>
            <h3>Skor</h3>
            <p>{anime.data.score}</p>
        </div>
        <div className='w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2'>
            <h3>Episode</h3>
            <p>{anime.data.episodes}</p>
        </div>
    </div>
    <div className='pt-4 px-4 flex gap-2 text-color-primary sm:flex-nowrap flex-wrap'>
        <Image src={anime.data.images.webp.image_url} width={250} height={250} className='w-full rounded object-cover'/>        
        <p className=''>{anime.data.synopsis}</p>
    </div>
   

    </>
  )
}

export default Page