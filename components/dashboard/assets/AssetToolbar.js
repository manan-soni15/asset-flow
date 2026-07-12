"use client";

import { Search, Plus } from "lucide-react";

export default function AssetToolbar({ onAddAsset }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

        {/* Search */}

        <div className="relative w-full lg:w-80">

          <Search
            className="absolute left-3 top-3 text-slate-400"
            size={18}
          />

          <input
            type="text"
            placeholder="Search assets..."
            className="w-full rounded-xl border border-slate-300 pl-10 pr-4 py-2 outline-none focus:ring-2 focus:ring-indigo-500"
          />

        </div>

        {/* Filters */}

        <div className="flex flex-wrap gap-3">

          <select className="rounded-xl border border-slate-300 px-4 py-2">
            <option>All Categories</option>
            <option>Electronics</option>
            <option>Furniture</option>
            <option>Vehicles</option>
          </select>

          <select className="rounded-xl border border-slate-300 px-4 py-2">
            <option>All Status</option>
            <option>Available</option>
            <option>Allocated</option>
            <option>Maintenance</option>
          </select>

          <button
    onClick={() => {
  console.log("Button Clicked");
  onAddAsset();
}}
    className="flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-2 text-white font-medium hover:bg-indigo-700"
>

            <Plus size={18} />

            Add Asset

          </button>

        </div>

      </div>

    </div>
  );
}