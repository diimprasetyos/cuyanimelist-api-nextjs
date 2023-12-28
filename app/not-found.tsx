"use client"
import { FileSearch } from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'
import React from 'react'

const notFound = () => {
  return (
    <div className='min-h-screen max-w-lg mx-auto flex justify-center items-center'>
        <div className='flex flex-col justify-center items-center gap-4'>
            <FileSearch size={64} className='text-color-accent'/>
        <h3 className='text-color-accent'>NOT FOUND</h3>
        <Link href="/" className='text-color-primary hover:text-color-accent border p-2'>Back</Link>
        </div>
    </div>
  )
}

export default notFound