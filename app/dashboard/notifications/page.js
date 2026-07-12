"use client";

import { useState } from "react";
import {
  Bell,
  CalendarClock,
  Wrench,
  Laptop,
  CheckCircle2,
  Trash2,
} from "lucide-react";

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: "Booking",
      title: "Booking Reminder",
      message: "Conference Room A starts in 15 minutes.",
      time: "5 mins ago",
      read: false,
    },
    {
      id: 2,
      type: "Maintenance",
      title: "Maintenance Completed",
      message: "Projector maintenance has been completed.",
      time: "20 mins ago",
      read: false,
    },
    {
      id: 3,
      type: "Allocation",
      title: "Asset Allocated",
      message: "Laptop Dell XPS assigned to Rahul Sharma.",
      time: "1 hour ago",
      read: true,
    },
    {
      id: 4,
      type: "System",
      title: "System Update",
      message: "Monthly asset audit has been completed successfully.",
      time: "Yesterday",
      read: true,
    },
  ]);

  const markAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, read: true }
          : item
      )
    );
  };

  const deleteNotification = (id) => {
    setNotifications((prev) =>
      prev.filter((item) => item.id !== id)
    );
  };

  const getIcon = (type) => {
    switch (type) {
      case "Booking":
        return (
          <CalendarClock
            className="text-blue-600"
            size={22}
          />
        );

      case "Maintenance":
        return (
          <Wrench
            className="text-orange-600"
            size={22}
          />
        );

      case "Allocation":
        return (
          <Laptop
            className="text-green-600"
            size={22}
          />
        );

      default:
        return (
          <Bell
            className="text-indigo-600"
            size={22}
          />
        );
    }
  };

  return (
    <div className="space-y-6">

      {/* Header */}

      <div>

        <h1 className="text-3xl font-bold text-slate-800">
          Notifications
        </h1>

        <p className="mt-1 text-slate-500">
          Stay updated with all system activities.
        </p>

      </div>

      {/* Notifications */}

      <div className="rounded-2xl border bg-white shadow-sm">

        {notifications.length > 0 ? (
          notifications.map((item) => (
            <div
              key={item.id}
              className={`flex items-start justify-between border-b p-6 transition hover:bg-slate-50 ${
                !item.read
                  ? "bg-indigo-50"
                  : ""
              }`}
            >
              <div className="flex gap-4">

                <div className="mt-1">

                  {getIcon(item.type)}

                </div>

                <div>

                  <h3 className="font-semibold text-slate-800">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-slate-600">
                    {item.message}
                  </p>

                  <p className="mt-2 text-sm text-slate-400">
                    {item.time}
                  </p>

                </div>

              </div>

              <div className="flex gap-2">

                {!item.read && (
                  <button
                    onClick={() =>
                      markAsRead(item.id)
                    }
                    className="rounded-lg bg-green-100 p-2 text-green-600 hover:bg-green-200"
                  >
                    <CheckCircle2 size={18} />
                  </button>
                )}

                <button
                  onClick={() =>
                    deleteNotification(item.id)
                  }
                  className="rounded-lg bg-red-100 p-2 text-red-600 hover:bg-red-200"
                >
                  <Trash2 size={18} />
                </button>

              </div>

            </div>
          ))
        ) : (
          <div className="py-20 text-center">

            <Bell
              size={60}
              className="mx-auto text-slate-300"
            />

            <h2 className="mt-4 text-xl font-semibold text-slate-700">
              No Notifications
            </h2>

            <p className="mt-2 text-slate-500">
              You're all caught up.
            </p>

          </div>
        )}

      </div>

    </div>
  );
}