import React from "react";
import Image from "next/image";
import IconCisco from "@/app/Assets/Image/CiscoIcon.png";
import IconMySql from "@/app/Assets/Image/IconMySql.png";
import IconLaravel from "@/app/Assets/Image/Laravelcon.png";
import IconTailwind from "@/app/Assets/Image/TailwindIcon.png";
import IconMikroTik from "@/app/Assets/Image/MikroTikIcon.png";

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
            <button className="w-36 h-10 text-blue-500 font-semibold rounded-md bg-transparent hover:scale-90 duration-500">
              Masukin
            </button>
          </div>
        </div>
        <div className="m-4 bg-white w-[300px] md:w-[400px] lg:w-[500px] rounded-xl hover:scale-110 duration-700 p-4 shadow-lg">
          <Image alt="Icon MySQL" src={IconMySql} width={64} height={64} />
          <h4 className="py-2 font-bold">MySQL</h4>
          <p className="text-sm leading-7 text-gray-500">
            MySQL adalah perangkat lunak sistem manajemen basis data (database management system) yang bersifat open source dan gratis. MySQL digunakan untuk mengakses, mengubah, dan memanipulasi data dalam skala relasional.
          </p>
          <div className="pt-4 flex justify-center">
            <button className="w-36 h-10 text-blue-500 font-semibold rounded-md bg-transparent hover:scale-90 duration-500">
            Masukin
            </button>
          </div>
        </div>
        <div className="m-4 bg-white w-[300px] md:w-[400px] lg:w-[500px] rounded-xl hover:scale-110 duration-700 p-4 shadow-lg">
          <Image alt="Icon Laravel" src={IconLaravel} width={120} height={120} />
          <h4 className="py-2 font-bold">Laravel</h4>
          <p className="text-sm leading-7 text-gray-500">
            Laravel merupakan framework PHP yang open-source dan berisi banyak modul dasar untuk mengoptimalkan kinerja PHP dalam pengembangan aplikasi web.
          </p>
          <div className="pt-4 flex justify-center">
            <button className="w-36 h-10 text-blue-500 font-semibold rounded-md bg-transparent hover:scale-90 duration-500">
            Masukin
            </button>
          </div>
        </div>
        <div className="m-4 bg-white w-[300px] md:w-[400px] lg:w-[500px] rounded-xl hover:scale-110 duration-700 p-4 shadow-lg">
          <Image alt="Icon Tailwind" src={IconTailwind} width={44} height={44} />
          <h4 className="py-2 mt-2 font-bold">Tailwind</h4>
          <p className="text-sm leading-7 text-gray-500">
            Tailwind CSS adalah framework CSS yang membantu pengembang untuk membuat tampilan website yang modern dan responsif. Tailwind CSS memiliki beberapa fitur unggulan.
          </p>
          <div className="pt-4 flex justify-center">
            <button className="w-36 h-10 text-blue-500 font-semibold rounded-md bg-transparent hover:scale-90 duration-500">
              Button
            </button>
          </div>
        </div>
        <div className="m-4 bg-white w-[300px] md:w-[400px] lg:w-[500px] rounded-xl hover:scale-110 duration-700 p-4 shadow-lg">
          <Image alt="Icon MikroTik" src={IconMikroTik} width={64} height={64} />
          <h4 className="py-2 font-bold">MikroTik</h4>
          <p className="text-sm leading-7 text-gray-500">
            MikroTik adalah perangkat lunak dan sistem operasi yang digunakan untuk mengelola jaringan komputer. MikroTik dikembangkan oleh perusahaan MikroTikls SIA yang berlokasi di Riga, Latvia.
          </p>
          <div className="pt-4 flex justify-center">
            <button className="w-36 h-10 text-blue-500 font-semibold rounded-md bg-transparent hover:scale-90 duration-500">
              Button
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
