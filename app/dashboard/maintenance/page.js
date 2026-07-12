"use client";

import {
  Wrench,
  Plus,
  Search,
  CheckCircle,
  Clock,
  AlertTriangle,
} from "lucide-react";

const maintenanceData = [
  {
    id: 1,
    asset: "Dell Latitude 7420",
    issue: "Screen Flickering",
    engineer: "Rahul Sharma",
    priority: "High",
    status: "In Progress",
    date: "12 Jul 2026",
  },
  {
    id: 2,
    asset: "HP EliteBook",
    issue: "Battery Replacement",
    engineer: "Priya Patel",
    priority: "Medium",
    status: "Completed",
    date: "10 Jul 2026",
  },
  {
    id: 3,
    asset: "Conference Projector",
    issue: "HDMI Port Fault",
    engineer: "Amit Singh",
    priority: "High",
    status: "Pending",
    date: "15 Jul 2026",
  },
  {
    id: 4,
    asset: "Office Printer",
    issue: "Paper Jam",
    engineer: "Vikas Kumar",
    priority: "Low",
    status: "Completed",
    date: "09 Jul 2026",
  },
];

export default function MaintenancePage() {
  return (
    <div className="space-y-6">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div>

          <h1 className="text-3xl font-bold text-slate-800">
            Maintenance
          </h1>

          <p className="mt-1 text-slate-500">
            Monitor and manage maintenance requests.
          </p>

        </div>

        <button className="flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-white hover:bg-indigo-700">
          <Plus size={18} />
          New Ticket
        </button>

      </div>

      {/* Stats */}

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">

        <div className="rounded-2xl border bg-white p-6 shadow-sm">

          <Clock className="mb-3 text-orange-500" />

          <p className="text-slate-500">In Progress</p>

          <h2 className="mt-2 text-3xl font-bold">08</h2>

        </div>

        <div className="rounded-2xl border bg-white p-6 shadow-sm">

          <CheckCircle className="mb-3 text-green-600" />

          <p className="text-slate-500">Completed</p>

          <h2 className="mt-2 text-3xl font-bold">24</h2>

        </div>

        <div className="rounded-2xl border bg-white p-6 shadow-sm">

          <AlertTriangle className="mb-3 text-red-500" />

          <p className="text-slate-500">Pending</p>

          <h2 className="mt-2 text-3xl font-bold">05</h2>

        </div>

      </div>

      {/* Search */}

      <div className="rounded-2xl border bg-white p-5 shadow-sm">

        <div className="relative w-full md:w-96">

          <Search
            size={18}
            className="absolute left-3 top-3 text-slate-400"
          />

          <input
            placeholder="Search maintenance..."
            className="w-full rounded-xl border border-slate-300 py-2 pl-10 pr-4 outline-none focus:ring-2 focus:ring-indigo-500"
          />

        </div>

      </div>

      {/* Table */}

      <div className="overflow-hidden rounded-2xl border bg-white shadow-sm">

        <table className="w-full">

          <thead className="bg-slate-50">

            <tr>

              <th className="p-4 text-left">Asset</th>
              <th className="p-4 text-left">Issue</th>
              <th className="p-4 text-left">Engineer</th>
              <th className="p-4 text-left">Priority</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left">Date</th>

            </tr>

          </thead>

          <tbody>

            {maintenanceData.map((item) => (

              <tr
                key={item.id}
                className="border-t hover:bg-slate-50"
              >

                <td className="p-4 font-medium">
                  {item.asset}
                </td>

                <td className="p-4">
                  {item.issue}
                </td>

                <td className="p-4">
                  {item.engineer}
                </td>

                <td className="p-4">

                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      item.priority === "High"
                        ? "bg-red-100 text-red-700"
                        : item.priority === "Medium"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-green-100 text-green-700"
                    }`}
                  >
                    {item.priority}
                  </span>

                </td>

                <td className="p-4">

                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      item.status === "Completed"
                        ? "bg-green-100 text-green-700"
                        : item.status === "Pending"
                        ? "bg-red-100 text-red-700"
                        : "bg-orange-100 text-orange-700"
                    }`}
                  >
                    {item.status}
                  </span>

                </td>

                <td className="p-4">
                  {item.date}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}