"use client";

import { useState } from "react";

export default function Header() {
  const [from, setFrom] = useState("BATAM (BTH)");
  const [to, setTo] = useState("JAKARTA (CGK)");
  const [date, setDate] = useState("2023-08-14");

  return (
    <header
      className="bg-cover bg-center h-100 flex items-center justify-center -mt-10 "
      style={{
        backgroundImage: "url('/Intersection.png')",
      }}
    >
      <div className="bg-white rounded-md shadow-md p-4 flex flex-wrap items-center space-x-2">
        <input type="text" value={from} onChange={(e) => setFrom(e.target.value)} className="border p-2 rounded w-40" />
        <input type="text" value={to} onChange={(e) => setTo(e.target.value)} className="border p-2 rounded w-40" />
        <select className="border p-2 rounded w-48">
          <option>1 Adult, 0 Child, 0 Infant</option>
        </select>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="border p-2 rounded" />
        <select className="border p-2 rounded w-32">
          <option>Economy</option>
        </select>
        <button className="bg-orange-500 px-3 py-2 rounded text-white">🔍</button>
      </div>
    </header>
  );
}
