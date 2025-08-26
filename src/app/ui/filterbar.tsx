"use client";

export default function FilterBar() {
  return (
    <div className="container mx-auto px-6 py-6 space-x-60 flex justify-center items-center">
      <div className="flex items-center space-x-4">
        <span className="font-medium">Filter :</span>
        <select className="border px-3 py-1 rounded">
          <option>Harga Terendah</option>
        </select>
        <select className="border px-3 py-1 rounded">
          <option>Maskapai</option>
        </select>
        <select className="border px-3 py-1 rounded">
          <option>Langsung</option>
        </select>
        <select className="border px-3 py-1 rounded">
          <option>Bagasi</option>
        </select>
        <button className="bg-blue-700 text-white px-4 py-1 rounded">Search</button>
      </div>
    </div>
  );
}
