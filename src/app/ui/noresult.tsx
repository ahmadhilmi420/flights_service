"use client";

export default function NoResult() {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <img src="/Noresult.png" alt="Airplane" className="w-100 h-90" />
      <h2 className="text-xl font-bold mt-6">Penerbangan Tidak Tersedia</h2>
      <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded flex items-center space-x-2">
        <span>Ganti Pencarian</span> <span>🔍</span>
      </button>
    </div>
  );
}
