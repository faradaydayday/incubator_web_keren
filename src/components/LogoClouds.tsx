import React from 'react';

export default function LogoClouds() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg/8 font-semibold text-gray-900">
          Alat yang di gunakan di Incubator :
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <img
            alt="Cisco"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/640px-Cisco_logo_blue_2016.svg.png"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          />
          <img
            alt="Mysql"
            src="https://upload.wikimedia.org/wikipedia/id/a/a9/MySQL.png"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          />
          <img
            alt="Laravel"
            src="https://media.licdn.com/dms/image/D5612AQEyCRvreWUotw/article-cover_image-shrink_720_1280/0/1720673132873?e=2147483647&v=beta&t=YwdsSM3kTOasWYz20ENBLtOGU2cUAcmg9OyUjg42jDU"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          />
          <img
            alt="Tailwind"
            src="https://picperf.io/https://laravelnews.s3.amazonaws.com/images/tailwindcss-1633184775.jpg"
            width={158}
            height={48}
            className="col-span-2 max-h-64 w-full object-contain sm:col-start-2 lg:col-span-1"
          />
          <img
            alt="Mikrotik"
            src="https://logonoid.com/images/mikrotik-logo.png"
            width={158}
            height={48}
            className="col-span-2 col-start-2 max-h-12 w-32 object-contain sm:col-start-auto lg:col-span-1"
          />
        </div>
      </div>
    </div>
  );
}
