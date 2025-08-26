"use client";

import { Bars3Icon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="mx-25 h-auto bg-[#4267B2] text-white rounded-b-4xl absolute inset-x-0 top-0">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center justify-center space-x-2">
          <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden">
            <Bars3Icon className="w-8 h-8 text-amber-50 flex items-center justify-center" />
          </button>
          {/* <span className="text-xl font-bold">TiketQ</span> */}
          <img src="/Original-Logo.png" alt="Logo tiketQ" className="h-auto w-25 flex items-center" />
        </div>
        <div className="flex items-center space-x-4">
          <img className="h-auto w-5 flex items-center " src="/idr.png" />
          <span className="cursor-pointer">IDR</span>
          <Link href="/login" className="hover:underline">
            Log In
          </Link>
          <Link href="/register" className="bg-blue-600 px-3 py-1 rounded hover:bg-blue-700">
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
}
