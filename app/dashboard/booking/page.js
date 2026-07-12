"use client";

import {
  CalendarDays,
  Plus,
  Search,
  Clock,
  CheckCircle,
} from "lucide-react";

const bookings = [
  {
    id: 1,
    resource: "Conference Room A",
    bookedBy: "Rahul Sharma",
    department: "IT",
    date: "12 Jul 2026",
    time: "10:00 AM - 11:30 AM",
    status: "Booked",
  },
  {
    id: 2,
    resource: "Projector",
    bookedBy: "Priya Patel",
    department: "HR",
    date: "13 Jul 2026",
    time: "02:00 PM - 04:00 PM",
    status: "Available",
  },
  {
    id: 3,
    resource: "Meeting Room B",
    bookedBy: "Amit Singh",
    department: "Finance",
    date: "14 Jul 2026",
    time: "11:00 AM - 12:00 PM",
    status: "Booked",
  },
  {
    id: 4,
    resource: "Training Hall",
    bookedBy: "Neha Verma",
    department: "Admin",
    date: "15 Jul 2026",
    time: "09:00 AM - 01:00 PM",
    status: "Booked",
  },
];

export default function BookingPage() {
  return (
    <div className="space-y-6">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div>

          <h1 className="text-3xl font-bold text-slate-800">
            Resource Booking
          </h1>

          <p className="mt-1 text-slate-500">
            Reserve meeting rooms and shared organizational resources.
          </p>

        </div>

        <button className="flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-white hover:bg-indigo-700">

          <Plus size={18} />

          New Booking

        </button>

      </div>

      {/* Statistics */}

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">

        <div className="rounded-2xl border bg-white p-6 shadow-sm">

          <CalendarDays className="mb-3 text-indigo-600" />

          <p className="text-slate-500">
            Total Resources
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            24
          </h2>

        </div>

        <div className="rounded-2xl border bg-white p-6 shadow-sm">

          <CheckCircle className="mb-3 text-green-600" />

          <p className="text-slate-500">
            Active Bookings
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            12
          </h2>

        </div>

        <div className="rounded-2xl border bg-white p-6 shadow-sm">

          <Clock className="mb-3 text-orange-500" />

          <p className="text-slate-500">
            Available Resources
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            12
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
            placeholder="Search bookings..."
            className="w-full rounded-xl border border-slate-300 py-2 pl-10 pr-4 outline-none focus:ring-2 focus:ring-indigo-500"
          />

        </div>

      </div>

      {/* Table */}

      <div className="overflow-hidden rounded-2xl border bg-white shadow-sm">

        <table className="w-full">

          <thead className="bg-slate-50">

            <tr>

              <th className="p-4 text-left">Resource</th>
              <th className="p-4 text-left">Booked By</th>
              <th className="p-4 text-left">Department</th>
              <th className="p-4 text-left">Date</th>
              <th className="p-4 text-left">Time</th>
              <th className="p-4 text-left">Status</th>

            </tr>

          </thead>

          <tbody>

            {bookings.map((booking) => (

              <tr
                key={booking.id}
                className="border-t hover:bg-slate-50"
              >

                <td className="p-4 font-medium">
                  {booking.resource}
                </td>

                <td className="p-4">
                  {booking.bookedBy}
                </td>

                <td className="p-4">
                  {booking.department}
                </td>

                <td className="p-4">
                  {booking.date}
                </td>

                <td className="p-4">
                  {booking.time}
                </td>

                <td className="p-4">

                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      booking.status === "Booked"
                        ? "bg-indigo-100 text-indigo-700"
                        : "bg-green-100 text-green-700"
                    }`}
                  >
                    {booking.status}
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