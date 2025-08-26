// components/DetailTiket.tsx
import Image from "next/image";

const DetailTiket = () => {
  return (
    <div className="w-full max-w-5xl mx-auto rounded-2xl border border-[#1e40af]/30 bg-white flex flex-col p-6 shadow-md">
      {/* Top Section */}
      <div className="flex items-center justify-between">
        {/* Left Info */}
        <div className="flex items-center gap-4">
          {/* Logo */}
          <div className="w-16 h-16 relative">
            <Image
              src="/21.png" // replace with real airline logo
              alt="Airline Logo"
              fill
              className="object-contain"
            />
          </div>

          {/* Baggage + Price */}
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 items-center">
              <span className="px-2 py-1 rounded-full border text-xs">20kg</span>
              <span className="px-3 py-1 rounded-full border border-green-600 text-green-600 text-xs bg-green-50">Reschedule</span>
            </div>
            <p className="text-2xl font-semibold text-orange-600">Rp 1,920,000</p>
          </div>
        </div>

        {/* Middle Duration */}
        <div className="flex flex-col items-center text-gray-700">
          <span className="text-sm">1j 35m</span>
          <span className="text-sm">Langsung</span>
        </div>

        {/* Right Button */}
        <button className="px-8 py-3 bg-orange-600 text-white rounded-xl font-medium hover:bg-orange-700 transition">Pilih</button>
      </div>

      {/* Divider */}
      <div className="my-4 border-t border-gray-200"></div>

      {/* Flight Route Section */}
      <div className="grid grid-cols-3 gap-6 items-center">
        {/* Departure */}
        <div className="flex flex-col text-left">
          <span className="text-xl font-semibold text-gray-800">BTH</span>
          <span className="text-gray-600">Hang Nadim</span>
        </div>

        {/* Duration in middle again */}
        <div className="flex flex-col items-center text-gray-600">
          <span>1j 35m</span>
        </div>

        {/* Arrival */}
        <div className="flex flex-col text-right">
          <span className="text-xl font-semibold text-gray-800">CGK</span>
          <span className="text-gray-600">Soekarno Hatta International Airport</span>
        </div>
      </div>

      {/* Class Dropdown */}
      <div className="flex justify-end mt-6">
        <select className="px-4 py-2 rounded-xl border border-gray-300">
          <option>Economy</option>
          <option>Business</option>
          <option>First Class</option>
        </select>
      </div>
    </div>
  );
};

export default DetailTiket;
