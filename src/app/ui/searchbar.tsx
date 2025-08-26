"use client";

export default function SearchBar() {
  return (
    <div className="bg-orange-500 py-18 flex justify-center rounded-b-4xl">
      <div className="bg-white rounded-3xl shadow-md px-6 py-6 flex items-center space-x-170 ">
        <div>
          <p className="font-semibold">Batam (BTH) → Bali (DPS)</p>
          <p className="text-sm text-gray-600">Sab, 19 Ags 2023 | 1 Penumpang | Premium Economy</p>
        </div>
        <button className="ml-4 text-xl text-blue-700">🔍</button>
      </div>
    </div>
  );
}
