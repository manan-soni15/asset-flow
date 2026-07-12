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
} from "lucide-react";

const menuItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Organization Setup",
    href: "/dashboard/organization",
    icon: Building2,
  },
  {
    title: "Assets",
    href: "/dashboard/assets",
    icon: Boxes,
  },
  {
    title: "Allocation & Transfer",
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
    <aside className="w-72 border-r border-slate-200 bg-white h-screen sticky top-0">

      {/* Logo */}

      <div className="border-b border-slate-200 px-6 py-6">

        <h1 className="text-2xl font-bold text-indigo-600">
          AssetFlow
        </h1>

        <p className="text-sm text-slate-500">
          Enterprise ERP
        </p>

      </div>

      {/* Navigation */}

      <nav className="p-4 space-y-2">

        {menuItems.map((item) => {

          const Icon = item.icon;

          const active = pathname === item.href;

          return (

            <Link
              key={item.title}
              href={item.href}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 transition-colors

                ${
                  active
                    ? "bg-indigo-50 text-indigo-700 font-semibold"
                    : "text-slate-600 hover:bg-slate-100"
                }
              `}
            >
              <Icon size={20} />

              <span>{item.title}</span>

            </Link>

          );
        })}

      </nav>

    </aside>
  );
}