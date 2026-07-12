import KPICard from "@/components/dashboard/KPICard";

import {
  Boxes,
  UserCheck,
  Wrench,
  CalendarDays,
  Repeat,
  Clock3,
} from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="space-y-8">

      <div>

        <h2 className="text-2xl font-bold text-slate-800">
          Today's Overview
        </h2>

        <p className="text-slate-500 mt-1">
          Monitor assets, bookings and maintenance activities.
        </p>

      </div>

      {/* KPI Cards */}

      <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2">

        <KPICard
          title="Available Assets"
          value="128"
          icon={Boxes}
          color="indigo"
        />

        <KPICard
          title="Allocated Assets"
          value="76"
          icon={UserCheck}
          color="blue"
        />

        <KPICard
          title="Under Maintenance"
          value="4"
          icon={Wrench}
          color="amber"
        />

        <KPICard
          title="Active Bookings"
          value="9"
          icon={CalendarDays}
          color="emerald"
        />

        <KPICard
          title="Pending Transfers"
          value="3"
          icon={Repeat}
          color="purple"
        />

        <KPICard
          title="Upcoming Returns"
          value="12"
          icon={Clock3}
          color="red"
        />

      </div>

    </div>
  );
}