import React from "react";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Postranní menu */}
      <aside className="w-64 bg-gray-900 text-white p-4">
        <h1 className="text-2xl font-bold mb-6">Správce financí</h1>
        <nav className="flex flex-col gap-3">
          <a href="#" className="hover:bg-gray-700 p-2 rounded">Přehled</a>
          <a href="#" className="hover:bg-gray-700 p-2 rounded">Transakce</a>
          <a href="#" className="hover:bg-gray-700 p-2 rounded">Kategorie</a>
          <a href="#" className="hover:bg-gray-700 p-2 rounded">Nastavení</a>
        </nav>
      </aside>

      {/* Hlavní obsah */}
      <main className="flex-1 p-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-semibold">Vítejte zpět</h2>
          <a href="#" className="text-blue-600 hover:underline">Odhlásit se</a>
        </div>

        <Outlet />
      </main>
    </div>
  );
}
