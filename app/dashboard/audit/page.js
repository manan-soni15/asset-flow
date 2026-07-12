"use client";

import {
  ClipboardCheck,
  Search,
  ShieldCheck,
  AlertTriangle,
  History,
} from "lucide-react";

const auditLogs = [
  {
    id: 1,
    user: "Rahul Sharma",
    action: "Added New Asset",
    module: "Asset Management",
    date: "12 Jul 2026",
    time: "10:25 AM",
    status: "Success",
  },
  {
    id: 2,
    user: "Priya Patel",
    action: "Allocated Laptop",
    module: "Asset Allocation",
    date: "12 Jul 2026",
    time: "11:15 AM",
    status: "Success",
  },
  {
    id: 3,
    user: "Amit Singh",
    action: "Deleted Asset",
    module: "Asset Management",
    date: "11 Jul 2026",
    time: "03:40 PM",
    status: "Warning",
  },
  {
    id: 4,
    user: "Admin",
    action: "Updated Organization",
    module: "Organization",
    date: "10 Jul 2026",
    time: "09:00 AM",
    status: "Success",
  },
];

export default function AuditPage() {
  return (
    <div className="space-y-6">

      {/* Header */}

      <div>

        <h1 className="text-3xl font-bold text-slate-800">
          Audit Logs
        </h1>

        <p className="mt-1 text-slate-500">
          Monitor all activities performed across the system.
        </p>

      </div>

      {/* Statistics */}

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">

        <div className="rounded-2xl border bg-white p-6 shadow-sm">

          <History className="mb-3 text-indigo-600" />

          <p className="text-slate-500">
            Total Logs
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            245
          </h2>

        </div>

        <div className="rounded-2xl border bg-white p-6 shadow-sm">

          <ShieldCheck className="mb-3 text-green-600" />

          <p className="text-slate-500">
            Successful
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            231
          </h2>

        </div>

        <div className="rounded-2xl border bg-white p-6 shadow-sm">

          <AlertTriangle className="mb-3 text-red-600" />

          <p className="text-slate-500">
            Warnings
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            14
          </h2>

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
            placeholder="Search audit logs..."
            className="w-full rounded-xl border border-slate-300 py-2 pl-10 pr-4 outline-none focus:ring-2 focus:ring-indigo-500"
          />

        </div>

      </div>

      {/* Table */}

      <div className="overflow-hidden rounded-2xl border bg-white shadow-sm">

        <table className="w-full">

          <thead className="bg-slate-50">

            <tr>

              <th className="p-4 text-left">User</th>
              <th className="p-4 text-left">Action</th>
              <th className="p-4 text-left">Module</th>
              <th className="p-4 text-left">Date</th>
              <th className="p-4 text-left">Time</th>
              <th className="p-4 text-left">Status</th>

            </tr>

          </thead>

          <tbody>

            {auditLogs.map((log) => (

              <tr
                key={log.id}
                className="border-t hover:bg-slate-50"
              >

                <td className="p-4 font-medium">
                  {log.user}
                </td>

                <td className="p-4">
                  {log.action}
                </td>

                <td className="p-4">
                  {log.module}
                </td>

                <td className="p-4">
                  {log.date}
                </td>

                <td className="p-4">
                  {log.time}
                </td>

                <td className="p-4">

                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      log.status === "Success"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {log.status}
                  </span>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}