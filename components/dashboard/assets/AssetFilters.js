"use client";

import { Search } from "lucide-react";

export default function AssetFilters() {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">

      <div className="flex flex-col lg:flex-row gap-4 justify-between">

        {/* Search */}

        <div className="relative w-full lg:w-80">

          <Search
            className="absolute left-3 top-3 text-slate-400"
            size={18}
          />

          <input
            type="text"
            placeholder="Search assets..."
            className="w-full border rounded-xl pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

        </div>

        <div className="flex flex-wrap gap-3">

          <select className="border rounded-xl px-4 py-2">
            <option>All Categories</option>
            <option>Electronics</option>
            <option>Furniture</option>
            <option>Vehicles</option>
          </select>

          <select className="border rounded-xl px-4 py-2">
            <option>All Status</option>
            <option>Available</option>
            <option>Allocated</option>
            <option>Maintenance</option>
          </select>

          <select className="border rounded-xl px-4 py-2">
            <option>All Locations</option>
            <option>IT Office</option>
            <option>HR</option>
            <option>Meeting Room</option>
          </select>

        </div>

      </div>

    </div>
  );
}