import { SetStateAction, useState } from 'react';
import Image from 'next/image';
import Web from '@/app/Assets/Image/WebEkskul.jpg';
import Network from '@/app/Assets/Image/NetworkEkskul.jpg';

const AboutSection = () => {
  // State untuk menyimpan tab aktif
  const [activeTab, setActiveTab] = useState(1);

  // Fungsi untuk mengubah gambar ketika tombol diklik
  const handleTabClick = (tabIndex: SetStateAction<number>) => {
    setActiveTab(tabIndex);
  };

  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="relative p-6 md:p-16">
        {/* Grid */}
        <div className="relative z-10 lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
          <div className="mb-10 lg:mb-0 lg:col-span-6 lg:col-start-8 lg:order-2">
            <h2 className="text-2xl text-gray-800 font-bold sm:text-3xl dark:text-neutral-200">
              Fully customizable rules to match your unique needs
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
                className={`hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start hover:bg-gray-200 focus:outline-none focus:bg-gray-200 p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-neutral-700 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 ${
                  activeTab === 1 ? 'hs-tab-active:text-blue-600' : 'text-gray-800'
                }`}
                onClick={() => handleTabClick(1)}
              >
                <span className="flex gap-x-6">
                  <svg
                    className="shrink-0 mt-2 size-6 md:size-7"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
                    <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
                    <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
                    <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
                    <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
                  </svg>
                  <span className="grow">
                    <span className="block text-lg font-semibold">Advanced tools</span>
                    <span className="block mt-1 text-gray-800">
                      Use Preline thoroughly thought and automated libraries to manage your businesses.
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
                  <svg
                    className="shrink-0 mt-2 size-6 md:size-7"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
                    <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
                    <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
                    <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
                    <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
                  </svg>
                  <span className="grow">
                    <span className="block text-lg font-semibold">Advanced tools</span>
                    <span className="block mt-1 text-gray-800">
                      Use Preline thoroughly thought and automated libraries to manage your businesses.
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
