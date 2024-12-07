import React from 'react'
import Image from 'next/image'
import barcode from '@/app/Assets/Image/qrincu.jpg'
function Barcode() {
  return (
    <>
      <div className='flex justify-center  '>
        <Image src={barcode} className='size-96 ' alt='qrcode' />
      </div>
    </>
  )
}

export default Barcode