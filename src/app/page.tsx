import React from 'react'
import Incon from '../app/Assets/Image/incon.png'
import Image from 'next/image'
import Link from 'next/link'

export default function Example() {
  return (
    <>
    <div className="relative isolate flex items-center gap-x-6 overflow-hidden px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
      <div
        aria-hidden="true"
        className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
      >
        <div
          style={{
            clipPath:
              'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
          }}
          className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r opacity-30"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
      >
        <div
          style={{
            clipPath:
              'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
          }}
          className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r opacity-30"
        />
      </div>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <p className="text-sm/6 text-gray-900">
          <strong className="font-semibold">GeneriCon 2023</strong>
          <svg viewBox="0 0 2 2" aria-hidden="true" className="mx-2 inline size-0.5 fill-current">
            <circle r={1} cx={1} cy={1} />
          </svg>
          Join us in Denver from June 7 – 9 to see what’s coming next.
        </p>
        <a
          href="#"
          className="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
        >
          Register now <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
      <div className="flex flex-1 justify-end">
        <button type="button" className="-m-3 p-3 focus-visible:outline-offset-[-4px]">
          <span className="sr-only">Dismiss</span>
        </button>
      </div>
    </div>
    
    <Image
    src={Incon}
    alt='Icon Incubator'
    className='w-[120px] ml-[45rem] mt-[180px]'
    />

    <h1 style={{fontSize:"48px"}} className='font-bold text-center'>Selamat Datang di Incubator.</h1>
    <p className='text-center' style={{fontSize:"23px"}}>Incubator salah satu ekskul yang ada di SMK Telkom Makassar <br/> Scroll Untuk tahu lebih banyak</p>
   

<Link href='https://linktr.ee/incubator_stelkmks'>
<button className="ml-[44rem] mt-7 bg-red-950 text-red-400 border border-red-400 border-b-4 font-medium overflow-hidden relative px-9 py-3 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
  <span className="bg-red-400 shadow-red-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
  Media Sosial
</button>
</Link>


<div className="flex justify-center items-center mx-auto mt-[8rem] max-w-7xl gap-4 px-6">
  {/* Gambar Kiri */}
  <div className="flex-shrink-0 w-1/6">
    <img
      alt="Gambar Kiri"
      src="https://i.pinimg.com/236x/99/8b/91/998b916384b687613c0d8692306cf6c8.jpg"
      className="rounded-lg object-cover"
    />
  </div>
  {/* Gambar Tengah */}
  <div className="w-1/5">
    <img
      alt="Gambar Tengah"
      src="https://i.pinimg.com/236x/99/8b/91/998b916384b687613c0d8692306cf6c8.jpg"
      className="rounded-lg object-cover"
    />
  </div>
  {/* Gambar Kanan */}
  <div className="flex-shrink-0 w-1/6">
    <img
      alt="Gambar Kanan"
      src="https://i.pinimg.com/236x/99/8b/91/998b916384b687613c0d8692306cf6c8.jpg"
      className="rounded-lg object-cover"
    />
  </div>
</div>


    </>
  )
}
