"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  LayoutDashboard,
  Building2,
  Boxes,
  Repeat,
  CalendarDays,
  Wrench,
  ClipboardCheck,
  BarChart3,
  Bell,
  Settings,
  ChevronRight,
} from "lucide-react";

const menuItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Organization",
    href: "/dashboard/organization",
    icon: Building2,
  },
  {
    title: "Asset Management",
    href: "/dashboard/assets",
    icon: Boxes,
  },
  {
    title: "Allocation",
    href: "/dashboard/allocation",
    icon: Repeat,
  },
  {
    title: "Resource Booking",
    href: "/dashboard/booking",
    icon: CalendarDays,
  },
  {
    title: "Maintenance",
    href: "/dashboard/maintenance",
    icon: Wrench,
  },
  {
    title: "Audit",
    href: "/dashboard/audit",
    icon: ClipboardCheck,
  },
  {
    title: "Reports",
    href: "/dashboard/reports",
    icon: BarChart3,
  },
  {
    title: "Notifications",
    href: "/dashboard/notifications",
    icon: Bell,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-screen w-72 flex-col border-r border-slate-200 bg-white">

      {/* Logo */}

      <div className="border-b border-slate-200 px-6 py-6">

        <h1 className="text-3xl font-bold text-indigo-600">
          AssetFlow
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Enterprise Asset ERP
        </p>

      </div>

      {/* Navigation */}

      <nav className="flex-1 overflow-y-auto p-4 space-y-2">

        {menuItems.map((item) => {

          const Icon = item.icon;

          const active = pathname === item.href;

          return (

            <Link
              key={item.title}
              href={item.href}
              className={`group flex items-center justify-between rounded-xl px-4 py-3 transition-all duration-200

              ${
                active
                  ? "bg-indigo-600 text-white shadow-md"
                  : "text-slate-600 hover:bg-slate-100"
              }`}
            >

              <div className="flex items-center gap-3">

                <Icon size={20} />

                <span className="font-medium">
                  {item.title}
                </span>

              </div>

              <ChevronRight
                size={16}
                className={`${
                  active
                    ? "opacity-100"
                    : "opacity-0 group-hover:opacity-100"
                }`}
              />

            </Link>

          );
        })}

      </nav>

      {/* Footer */}

      <div className="border-t border-slate-200 p-4">

        <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-slate-600 transition hover:bg-slate-100">

          <Settings size={20} />

          <span className="font-medium">
            Settings
          </span>

        </button>

      </div>

    </aside>
  );
}