import React from 'react';
import Image from 'next/image';
import Cisco from '@/app/Assets/Image/CiscoIcon.png'
import sql from '@/app/Assets/Image/IconMySql.png'
import Laravel from '@/app/Assets/Image/Laravelcon.png'
import Tailwind from '@/app/Assets/Image/Tailwind_CSS_logo.svg.png'
import Mikrotik from '@/app/Assets/Image/MikroText.png'

export default function LogoClouds() {
  return (
    <div className="bg-white py-24 sm:py-32 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg/8 font-semibold text-gray-900">
          Alat yang di gunakan di Incubator :
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <Image
            alt="Cisco"
            src={Cisco}
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          />
          <Image
            alt="Mysql"
            src={sql}
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          />
          <Image
            alt="Laravel"
            src={Laravel}
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          />
          <Image
            alt="Tailwind"
            src={Tailwind}
            width={158}
            height={48}
            className="col-span-2 max-h-64 object-contain sm:col-start-2 lg:col-span-1"
          />
          <Image
            alt="Mikrotik"
            src={Mikrotik}
            width={158}
            height={48}
            className="col-span-2 col-start-2 max-h-12 w-32 object-contain sm:col-start-auto lg:col-span-1"
          />
        </div>
      </div>
    </div>
  );
}
