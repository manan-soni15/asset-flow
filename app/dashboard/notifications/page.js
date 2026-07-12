"use client";

import {
  Bell,
  CheckCircle,
  AlertTriangle,
  Clock,
  Mail,
} from "lucide-react";

const notifications = [
  {
    id: 1,
    title: "Asset Allocated",
    message: "Dell Latitude 7420 has been allocated to Rahul Sharma.",
    time: "2 mins ago",
    type: "success",
  },
  {
    id: 2,
    title: "Maintenance Due",
    message: "Conference Projector requires scheduled maintenance.",
    time: "1 hour ago",
    type: "warning",
  },
  {
    id: 3,
    title: "Resource Booking",
    message: "Meeting Room A booked by Priya Patel.",
    time: "Today • 10:30 AM",
    type: "info",
  },
  {
    id: 4,
    title: "Audit Alert",
    message: "An asset record was modified by Admin.",
    time: "Yesterday",
    type: "warning",
  },
  {
    id: 5,
    title: "New Asset Added",
    message: "HP EliteBook has been added successfully.",
    time: "Yesterday",
    type: "success",
  },
];

export default function NotificationsPage() {
  return (
    <div className="space-y-6">

      {/* Header */}

      <div>

        <h1 className="text-3xl font-bold text-slate-800">
          Notifications
        </h1>

        <p className="mt-1 text-slate-500">
          Stay updated with all system activities and alerts.
        </p>

      </div>

      {/* Statistics */}

      <div className="grid grid-cols-1 gap-5 md:grid-cols-4">

        <div className="rounded-2xl border bg-white p-6 shadow-sm">

          <Bell className="mb-3 text-indigo-600" />

          <p className="text-slate-500">
            Total Notifications
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            42
          </h2>

        </div>

        <div className="rounded-2xl border bg-white p-6 shadow-sm">

          <CheckCircle className="mb-3 text-green-600" />

          <p className="text-slate-500">
            Completed
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            28
          </h2>

        </div>

        <div className="rounded-2xl border bg-white p-6 shadow-sm">

          <AlertTriangle className="mb-3 text-orange-500" />

          <p className="text-slate-500">
            Alerts
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            9
          </h2>

        </div>

        <div className="rounded-2xl border bg-white p-6 shadow-sm">

          <Mail className="mb-3 text-blue-600" />

          <p className="text-slate-500">
            Unread
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            5
          </h2>

        </div>

      </div>

      {/* Notification List */}

      <div className="space-y-4">

        {notifications.map((notification) => (

          <div
            key={notification.id}
            className="rounded-2xl border bg-white p-5 shadow-sm hover:shadow-md transition"
          >

            <div className="flex justify-between items-start">

              <div className="flex gap-4">

                <div
                  className={`rounded-full p-3 ${
                    notification.type === "success"
                      ? "bg-green-100"
                      : notification.type === "warning"
                      ? "bg-orange-100"
                      : "bg-indigo-100"
                  }`}
                >

                  {notification.type === "success" ? (
                    <CheckCircle className="text-green-600" size={20} />
                  ) : notification.type === "warning" ? (
                    <AlertTriangle className="text-orange-600" size={20} />
                  ) : (
                    <Bell className="text-indigo-600" size={20} />
                  )}

                </div>

                <div>

                  <h3 className="font-semibold text-slate-800">
                    {notification.title}
                  </h3>

                  <p className="mt-1 text-slate-500">
                    {notification.message}
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-2 text-sm text-slate-400">

                <Clock size={15} />

                {notification.time}

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}