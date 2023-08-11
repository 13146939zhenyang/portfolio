'use client'
import { useRef, useEffect, useState } from 'react'

export default function Home() {
  return (
    <main className='w-full h-full relative'>
      <div className='bg-black bg-opacity-30 backdrop-filter backdrop-blur-lg w-full h-full absolute top-0 left-0 z-20'></div>
      <div className='absolute top-0 left-0 w-full h-full overflow-hidden'>
        <video autoPlay muted loop className="w-full h-full object-cover">
          <source src="/water.mp4" type="video/mp4" />
        </video>
      </div>
    </main>
  )
}
