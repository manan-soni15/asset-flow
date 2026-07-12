"use client";

import { useState } from "react";
import {
  Bell,
  Search,
  UserCircle2,
  Settings,
  LogOut,
  User,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function TopBar() {
  const router = useRouter();

  const [search, setSearch] = useState("");

  const [showNotifications, setShowNotifications] = useState(false);

  const [showProfile, setShowProfile] = useState(false);

  const notifications = [
    {
      id: 1,
      title: "Booking Reminder",
      message: "Conference Room A starts in 15 minutes.",
    },
    {
      id: 2,
      title: "Maintenance",
      message: "Projector maintenance completed.",
    },
    {
      id: 3,
      title: "Allocation",
      message: "Laptop assigned to Rahul Sharma.",
    },
  ];

  return (
    <header className="relative flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-6 py-4 shadow-sm">

      {/* Left */}

      <div>

        <h1 className="text-2xl font-bold text-slate-800">
          Dashboard
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Welcome back! Here's today's overview.
        </p>

      </div>

      {/* Right */}

      <div className="flex items-center gap-4">

        {/* Search */}

        <div className="hidden items-center gap-2 rounded-xl border bg-slate-50 px-4 py-2 md:flex">

          <Search
            size={18}
            className="text-slate-400"
          />

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search assets..."
            className="w-52 bg-transparent text-sm outline-none"
          />

        </div>

        {/* Notification */}

        <div className="relative">

          <button
            onClick={() =>
              setShowNotifications(!showNotifications)
            }
            className="relative rounded-xl border border-slate-200 p-2 hover:bg-slate-100"
          >

            <Bell size={20} />

            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] text-white">
              {notifications.length}
            </span>

          </button>

          {showNotifications && (

            <div className="absolute right-0 mt-3 w-80 rounded-xl border bg-white shadow-xl">

              <div className="border-b p-4 font-semibold">

                Notifications

              </div>

              {notifications.map((item) => (

                <div
                  key={item.id}
                  className="cursor-pointer border-b p-4 hover:bg-slate-50"
                >

                  <p className="font-medium">
                    {item.title}
                  </p>

                  <p className="mt-1 text-sm text-slate-500">
                    {item.message}
                  </p>

                </div>

              ))}

              <button
                className="w-full p-3 text-sm font-medium text-indigo-600 hover:bg-slate-50"
              >
                View All
              </button>

            </div>

          )}

        </div>

        {/* Profile */}

        <div className="relative">

          <button
            onClick={() => setShowProfile(!showProfile)}
            className="flex items-center gap-3 rounded-xl px-2 py-1 hover:bg-slate-100"
          >

            <UserCircle2
              size={38}
              className="text-indigo-600"
            />

            <div className="hidden text-left md:block">

              <p className="font-semibold">
                Manan
              </p>

              <p className="text-sm text-slate-500">
                Asset Manager
              </p>

            </div>

          </button>

          {showProfile && (

            <div className="absolute right-0 mt-3 w-56 rounded-xl border bg-white shadow-xl">

              <button
                onClick={() =>
                  router.push("/dashboard/profile")
                }
                className="flex w-full items-center gap-3 px-4 py-3 hover:bg-slate-50"
              >
                <User size={18} />
                Profile
              </button>

              <button
                onClick={() =>
                  router.push("/dashboard/settings")
                }
                className="flex w-full items-center gap-3 px-4 py-3 hover:bg-slate-50"
              >
                <Settings size={18} />
                Settings
              </button>

              <button
                onClick={() =>
                  router.push("/login")
                }
                className="flex w-full items-center gap-3 border-t px-4 py-3 text-red-600 hover:bg-red-50"
              >
                <LogOut size={18} />
                Logout
              </button>

            </div>

          )}

        </div>

      </div>

    </header>
  );
}