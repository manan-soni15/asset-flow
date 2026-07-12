"use client";

import { Bell, Search, UserCircle2 } from "lucide-react";

export default function TopBar() {
  return (
    <header className="flex items-center justify-between bg-white border border-slate-200 rounded-2xl px-6 py-4 shadow-sm">

      {/* Left */}

      <div>
        <h1 className="text-2xl font-bold text-slate-800">
          Dashboard
        </h1>

        <p className="text-sm text-slate-500 mt-1">
          Welcome back! Here's today's overview.
        </p>
      </div>

      {/* Right */}

      <div className="flex items-center gap-4">

        {/* Search */}

        <div className="hidden md:flex items-center gap-2 border rounded-xl px-4 py-2 bg-slate-50">

          <Search size={18} className="text-slate-400" />

          <input
            type="text"
            placeholder="Search assets..."
            className="bg-transparent outline-none text-sm w-52"
          />

        </div>

        {/* Notification */}

        <button className="relative rounded-xl border border-slate-200 p-2 hover:bg-slate-100">

          <Bell size={20} />

          <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] text-white">
            3
          </span>

        </button>

        {/* User */}

        <div className="flex items-center gap-3">

          <UserCircle2
            size={38}
            className="text-indigo-600"
          />

          <div className="hidden md:block">

            <p className="font-semibold">
              
            </p>

            <p className="text-sm text-slate-500">
              Asset Manager
            </p>

          </div>

        </div>

      </div>

    </header>
  );
}