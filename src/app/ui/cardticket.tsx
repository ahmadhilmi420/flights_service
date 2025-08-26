import Image from "next/image";

const CardTiket = () => {
  return (
    <div className="w-full max-w-4xl mx-auto rounded-2xl border border-[#1e40af]/30 bg-white flex items-center justify-between p-4 shadow-sm">
      {/* Left Section */}
      <div className="flex items-center gap-4">
        {/* Logo */}
        <div className="w-20 h-20 relative">
          <Image
            src="/21.png" // replace with actual logo path
            alt="Airline Logo"
            fill
            className="object-contain"
          />
        </div>

        {/* Info */}
        <div className="flex flex-col gap-2">
          <div className="flex gap-2 items-center">
            <span className="px-2 py-1 rounded-full border text-xs">20kg</span>
            <span className="px-3 py-1 rounded-full border border-green-600 text-green-600 text-xs bg-green-50">Reschedule</span>
          </div>
          <p className="text-xl font-semibold text-orange-600">Rp 1,920,000</p>
        </div>
      </div>

      {/* Middle Section */}
      <div className="flex flex-col items-center text-gray-700">
        <span className="text-sm">1j 35m</span>
        <span className="text-sm">Langsung</span>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-6 text-gray-700">
        <span className="text-lg font-medium">BTH</span>
        <span className="text-lg font-medium">CGK</span>
      </div>

      {/* Button */}
      <button className="ml-6 px-6 py-2 bg-orange-600 text-white rounded-xl font-medium hover:bg-orange-700 transition">Pilih</button>
    </div>
  );
};

export default CardTiket;
