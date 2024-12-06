import React from "react";
import Image from "next/image";
import IconCisco from "@/app/Assets/Image/CiscoIcon.png";
import IconMySql from "@/app/Assets/Image/IconMySql.png";
import IconLaravel from "@/app/Assets/Image/Laravelcon.png";
import IconMikroTik from "@/app/Assets/Image/MikroTikIcon.png";
import Link from "next/link";

function Cards() {
  return (
    <>
      <div className="flex flex-wrap justify-center">
        <div className="m-4 bg-white w-[300px] md:w-[400px] lg:w-[500px] rounded-xl hover:scale-110 duration-700 p-4 shadow-lg">
          <Image alt="Icon Cisco" src={IconCisco} width={64} height={64} />
          <h4 className="py-2 font-bold">Cisco</h4>
          <p className="text-sm leading-7 text-gray-500">
            Adalah sebuah merk atau brand yang sering dipakai pada jaringan yang memiliki skala luas dan besar seperti WAN atau Wide Area Network. Memiliki kegunaan untuk mengendalikan atau melakukan pengaturan LAN yang ada.
          </p>
          <div className="pt-4 flex justify-center">
            <Link href='https://codingstudio.id/blog/belajar-cisco-untuk-pemula/'>
            <button className="w-36 h-10 text-red-600 font-semibold rounded-md bg-transparent hover:scale-90 duration-500">
              Telusuri
            </button>
            </Link>
          </div>
        </div>
        <div className="m-4 bg-white w-[300px] md:w-[400px] lg:w-[500px] rounded-xl hover:scale-110 duration-700 p-4 shadow-lg">
          <Image alt="Icon MySQL" src={IconMySql} width={64} height={64} />
          <h4 className="py-2 font-bold">MySQL</h4>
          <p className="text-sm leading-7 text-gray-500">
            MySQL adalah perangkat lunak sistem manajemen basis data (database management system) yang bersifat open source dan gratis. MySQL digunakan untuk mengakses, mengubah, dan memanipulasi data dalam skala relasional.
          </p>
          <div className="pt-4 flex justify-center">
            <Link href='https://ngodingdata.com/tutorial-mysql-untuk-pemula/'>
            <button className="w-36 h-10 text-red-600 font-semibold rounded-md bg-transparent hover:scale-90 duration-500">
            Telusuri
            </button>
            </Link>
          </div>
        </div>
        <div className="m-4 bg-white w-[300px] md:w-[400px] lg:w-[500px] rounded-xl hover:scale-110 duration-700 p-4 shadow-lg">
          <Image alt="Icon Laravel" src={IconLaravel} width={120} height={120} />
          <h4 className="py-2 font-bold">Laravel</h4>
          <p className="text-sm leading-7 text-gray-500">
            Laravel merupakan framework PHP yang open-source dan berisi banyak modul dasar untuk mengoptimalkan kinerja PHP dalam pengembangan aplikasi web.
          </p>
          <div className="pt-4 flex justify-center">
            <Link href="https://www.codepolitan.com/blog/mau-jago-laravel-belajar-dari-sini-dulu/">
            <button className="w-36 h-10 text-red-600 font-semibold rounded-md bg-transparent hover:scale-90 duration-500">
            Telusuri
            </button>
            </Link>
          </div>
        </div>
        <div className="m-4 bg-white w-[300px] md:w-[400px] lg:w-[500px] rounded-xl hover:scale-110 duration-700 p-4 shadow-lg">
          <Image alt="Icon MikroTik" src={IconMikroTik} width={64} height={64} />
          <h4 className="py-2 font-bold">MikroTik</h4>
          <p className="text-sm leading-7 text-gray-500">
            MikroTik adalah perangkat lunak dan sistem operasi yang digunakan untuk mengelola jaringan komputer. MikroTik dikembangkan oleh perusahaan MikroTikls SIA yang berlokasi di Riga, Latvia.
          </p>
          <div className="pt-4 flex justify-center">
            <Link href='https://www.idn.id/konfigurasi-dasar-mikrotik/'>
            <button className="w-36 h-10 text-red-600 font-semibold rounded-md bg-transparent hover:scale-90 duration-500">
              Telusuri
            </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
