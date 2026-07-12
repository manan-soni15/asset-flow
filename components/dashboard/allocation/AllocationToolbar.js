"use client";

import { Search, Plus } from "lucide-react";

export default function AllocationToolbar({
  onAddAllocation,
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

        {/* Search */}

        <div className="relative w-full lg:w-96">

          <Search
            size={18}
            className="absolute left-3 top-3 text-slate-400"
          />

          <input
            type="text"
            placeholder="Search allocations..."
            className="w-full rounded-xl border border-slate-300 py-2 pl-10 pr-4 outline-none focus:ring-2 focus:ring-indigo-500"
          />

        </div>

        {/* Right Section */}

        <div className="flex flex-wrap gap-3">

          <select className="rounded-xl border border-slate-300 px-4 py-2">

            <option>All Status</option>
            <option>Allocated</option>
            <option>Pending</option>
            <option>Returned</option>

          </select>

          <button
            onClick={onAddAllocation}
            className="flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-2 font-medium text-white hover:bg-indigo-700"
          >

            <Plus size={18} />

            New Allocation

          </button>

        </div>

      </div>

    </div>
  );
}