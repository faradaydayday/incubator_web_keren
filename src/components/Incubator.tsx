import React from "react";
import Image from "next/image";
import SpiderManImage from "@/app/Assets/Image/WebEkskul.jpg";
import Tekaje from "@/app/Assets/Image/NetworkEkskul2.jpg";

function MovieCard() {
  return (
    <div>
      {/* Divisi Web Developer Card */}
      <div className="flex flex-col sm:flex-row items-center bg-white h-auto sm:h-80 w-auto rounded-lg overflow-hidden mx-8 mt-10 shadow-[0_4px_10px_rgba(0,0,0,0.25)]">
        <div className="w-full sm:w-[40%]">
          <Image
            src={SpiderManImage}
            alt="Spider-Man"
            layout="responsive"
            width={100}
            height={100}
            className="object-contain"
          />
        </div>
        <div className="w-full sm:w-1/2 p-6 mt-[-10px]">
          <h2 className="text-lg font-semibold text-gray-800">
            Divisi Web Developer
          </h2>
          <p className="mt-2 text-gray-600">
            Web developer adalah profesi yang berfokus pada pengembangan aplikasi berbasis web, mencakup berbagai keterampilan dalam pemrograman, desain, dan pengelolaan sistem. Di dalam lingkup pendidikan seperti di SMK Telkom Makassar, web developer menjadi bidang yang sangat relevan karena berkaitan erat dengan dunia teknologi, khususnya untuk Jurusan Rekayasa Perangkat Lunak yang menjadi salah satu jurusan yang ada di SMK Telkom Makassar.
          </p>
        </div>
      </div>

      {/* Divisi Networking Card */}
      <div className="flex flex-col sm:flex-row items-center bg-white h-auto sm:h-80 w-auto rounded-lg overflow-hidden mx-8 mt-10 shadow-[0_4px_10px_rgba(0,0,0,0.25)]">
        <div className="w-full sm:w-[40%]">
          <Image
            src={Tekaje}
            alt="Tekaje"
            layout="responsive"
            width={100}
            height={100}
            className="object-contain"
          />
        </div>
        <div className="w-full sm:w-1/2 p-6 mt-[-10px]">
          <h2 className="text-lg font-semibold text-gray-800">
            Divisi Networking
          </h2>
          <p className="mt-2 text-gray-600">
            Networking adalah proses menghubungkan perangkat dan sistem komputer untuk memungkinkan komunikasi dan pertukaran data. Di SMK Telkom Makassar terdapat Jurusan Teknik Jaringan Komputer yang berfokus pada keterampilan teknis untuk merancang, mengelola, dan memelihara jaringan komputer. Ini mencakup pemahaman tentang protokol jaringan, perangkat keras (seperti router dan switch), serta keamanan jaringan.
          </p>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
