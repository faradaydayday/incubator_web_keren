import { SetStateAction, useState } from 'react';
import Image from 'next/image';
import Web from '@/app/Assets/Image/web2.jpg';
import Network from '@/app/Assets/Image/NetworkEkskul.jpg';
import RPL from "@/app/Assets/svgs/code-svgrepo-com.svg"
import TKJ from "@/app/Assets/svgs/wifi-svgrepo-com.svg"

const AboutSection = () => {
  // State untuk menyimpan tab aktif
  const [activeTab, setActiveTab] = useState(1);

  // Fungsi untuk mengubah gambar ketika tombol diklik
  const handleTabClick = (tabIndex: SetStateAction<number>) => {
    setActiveTab(tabIndex);
  };

  return (
    
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto ">
      
      <div className="relative p-6 md:p-16 ">
        {/* Grid */}
        <div className="relative z-10 lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center ">
          <div className="mb-10 lg:mb-0 lg:col-span-6 lg:col-start-8 lg:order-2">
            <h2 className="text-2xl text-gray-800 font-bold sm:text-3xl dark:text-neutral-200 ">
              Foto Kegiatan Ekstrakurikuler Incubator SMK Telkom Makassar : 
            </h2>

            {/* Tab Navs */}
            <nav
              className="grid gap-4 mt-5 md:mt-10"
              aria-label="Tabs"
              role="tablist"
              aria-orientation="vertical"
            >
              <button
                type="button"
                className={`hs-tab-active:bg-white hs-tab-active:shadow-md  hs-tab-active:hover:border-transparent text-start hover:bg-gray-200 focus:outline-none focus:bg-gray-200 p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-neutral-700 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 ${
                  activeTab === 1 ? 'hs-tab-active:text-blue-600' : 'text-gray-800'
                }`}
                onClick={() => handleTabClick(1)}
              >
                <span className="flex gap-x-6">
                  <Image
                  alt='RPL'
                  src={RPL}
                  width={35}
                  height={35}
                  />
                  <span className="grow">
                    <span className="block text-lg font-semibold">Divisi Web Developer</span>
                    <span className="block mt-1 text-gray-800">
                     Dokumentasi Pembelajaran Ekskul Incubator Divisi Web Developer
                    </span>
                  </span>
                </span>
              </button>
              <button
                type="button"
                className={`hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start hover:bg-gray-200 focus:outline-none focus:bg-gray-200 p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-neutral-700 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 ${
                  activeTab === 2 ? 'hs-tab-active:text-blue-600' : 'text-gray-800'
                }`}
                onClick={() => handleTabClick(2)}
              >
                <span className="flex gap-x-6">
                <Image
                  alt='TKJ'
                  src={TKJ}
                  width={35}
                  height={35}
                  />
                  <span className="grow">
                    <span className="block text-lg font-semibold">Divisi Networking</span>
                    <span className="block mt-1 text-gray-800">
                     Dokumentasi Pembelajaran Ekskul Incubator Divisi Network 
                    </span>
                  </span>
                </span>
              </button>
            </nav>
          </div>

          {/* Image Area */}
          
          <div className="lg:col-span-6">
            <div className="relative">
              {/* Tab Content */}
              <div>
                {activeTab === 1 && (
                  <Image
                    className="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/20"
                    src={Web}
                    alt="Web Image"
                    width={560}
                    height={720}
                  />
                )}
                {activeTab === 2 && (
                  <Image
                    className="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/20"
                    src={Network}
                    alt="Network Image"
                    width={560}
                    height={720}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
