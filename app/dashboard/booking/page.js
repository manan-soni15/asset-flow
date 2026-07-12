"use client";

import { useState } from "react";
import {
  CalendarDays,
  Calendar,
  Clock,
  CheckCircle,
  Plus,
  Search,
  Filter,
  Pencil,
  XCircle,
} from "lucide-react";

// ---------------- Dummy Data ----------------

const initialBookings = [
  {
    id: 1,
    resource: "Conference Room A",
    bookedBy: "Rahul Sharma",
    department: "IT",
    date: "2026-07-12",
    startTime: "10:00",
    endTime: "11:30",
    status: "Upcoming",
  },
  {
    id: 2,
    resource: "Projector",
    bookedBy: "Priya Patel",
    department: "HR",
    date: "2026-07-13",
    startTime: "14:00",
    endTime: "16:00",
    status: "Ongoing",
  },
  {
    id: 3,
    resource: "Meeting Room B",
    bookedBy: "Amit Singh",
    department: "Finance",
    date: "2026-07-14",
    startTime: "11:00",
    endTime: "12:00",
    status: "Completed",
  },
  {
    id: 4,
    resource: "Training Hall",
    bookedBy: "Neha Verma",
    department: "Admin",
    date: "2026-07-15",
    startTime: "09:00",
    endTime: "13:00",
    status: "Cancelled",
  },
];

export default function BookingPage() {
  // ---------------- States ----------------

  const [bookingList, setBookingList] = useState(initialBookings);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [showModal, setShowModal] = useState(false);
  const [editingBooking, setEditingBooking] = useState(null);

  const [formData, setFormData] = useState({
    resource: "",
    bookedBy: "",
    department: "",
    date: "",
    startTime: "",
    endTime: "",
  });

  // ---------------- Helpers ----------------

  const resetForm = () => {
    setFormData({
      resource: "",
      bookedBy: "",
      department: "",
      date: "",
      startTime: "",
      endTime: "",
    });
    setEditingBooking(null);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Upcoming":
        return "bg-blue-100 text-blue-700";
      case "Ongoing":
        return "bg-green-100 text-green-700";
      case "Completed":
        return "bg-slate-200 text-slate-700";
      case "Cancelled":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  // ---------------- Overlap Validation ----------------

  const hasOverlap = () => {
    return bookingList.some((booking) => {
      if (editingBooking && booking.id === editingBooking.id) return false;

      if (
        booking.resource !== formData.resource ||
        booking.date !== formData.date
      )
        return false;

      return (
        formData.startTime < booking.endTime &&
        formData.endTime > booking.startTime
      );
    });
  };

  // ---------------- Save Booking ----------------

  const saveBooking = () => {
    if (
      !formData.resource ||
      !formData.bookedBy ||
      !formData.department ||
      !formData.date ||
      !formData.startTime ||
      !formData.endTime
    ) {
      alert("Please fill all fields.");
      return;
    }

    if (hasOverlap()) {
      alert("Time slot already booked.");
      return;
    }

    const booking = {
      id: editingBooking ? editingBooking.id : Date.now(),
      ...formData,
      status: "Upcoming",
    };

    if (editingBooking) {
      setBookingList((prev) =>
        prev.map((b) => (b.id === editingBooking.id ? booking : b))
      );
    } else {
      setBookingList((prev) => [...prev, booking]);
    }

    resetForm();
    setShowModal(false);
  };

  // ---------------- Cancel Booking ----------------

  const handleCancel = (id) => {
    setBookingList((prev) =>
      prev.map((booking) =>
        booking.id === id ? { ...booking, status: "Cancelled" } : booking
      )
    );
  };

  // ---------------- Edit Booking ----------------

  const handleReschedule = (booking) => {
    setEditingBooking(booking);

    setFormData({
      resource: booking.resource,
      bookedBy: booking.bookedBy,
      department: booking.department,
      date: booking.date,
      startTime: booking.startTime,
      endTime: booking.endTime,
    });

    setShowModal(true);
  };

  // ---------------- Search ----------------

  const filteredBookings = bookingList.filter((booking) => {
    const matchesSearch =
      booking.resource.toLowerCase().includes(search.toLowerCase()) ||
      booking.bookedBy.toLowerCase().includes(search.toLowerCase());

    const matchesStatus =
      statusFilter === "All" || booking.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      {/* ================= Header ================= */}

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">
            Resource Booking
          </h1>

          <p className="mt-1 text-slate-500">
            Reserve meeting rooms and shared organizational resources.
          </p>
        </div>

        <button
          onClick={() => {
            resetForm();
            setShowModal(true);
          }}
          className="flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 font-medium text-white transition hover:bg-indigo-700"
        >
          <Plus size={18} />
          New Booking
        </button>
      </div>

      {/* ================= Statistics ================= */}

      <div className="grid grid-cols-1 gap-5 md:grid-cols-4">
        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <CalendarDays className="mb-3 text-indigo-600" />
          <p className="text-slate-500">Total Resources</p>
          <h2 className="mt-2 text-3xl font-bold">24</h2>
        </div>

        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <CheckCircle className="mb-3 text-green-600" />
          <p className="text-slate-500">Active Bookings</p>
          <h2 className="mt-2 text-3xl font-bold">
            {bookingList.filter((b) => b.status !== "Cancelled").length}
          </h2>
        </div>

        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <Clock className="mb-3 text-orange-500" />
          <p className="text-slate-500">Available Resources</p>
          <h2 className="mt-2 text-3xl font-bold">
            {24 - bookingList.filter((b) => b.status !== "Cancelled").length}
          </h2>
        </div>

        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <Calendar className="mb-3 text-purple-600" />
          <p className="text-slate-500">Today's Bookings</p>
          <h2 className="mt-2 text-3xl font-bold">
            {
              bookingList.filter(
                (b) => b.date === new Date().toISOString().split("T")[0]
              ).length
            }
          </h2>
        </div>
      </div>

      {/* ================= Search & Filter ================= */}

      <div className="rounded-2xl border bg-white p-5 shadow-sm">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="relative w-full md:w-96">
            <Search size={18} className="absolute left-3 top-3 text-slate-400" />

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search resource or employee..."
              className="w-full rounded-xl border border-slate-300 py-2 pl-10 pr-4 outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="flex items-center gap-3">
            <Filter size={18} className="text-slate-500" />

            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="rounded-xl border border-slate-300 px-4 py-2 outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option>All</option>
              <option>Upcoming</option>
              <option>Ongoing</option>
              <option>Completed</option>
              <option>Cancelled</option>
            </select>
          </div>
        </div>
      </div>

      {/* ================= Booking Table ================= */}

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
              <th className="p-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredBookings.length > 0 ? (
              filteredBookings.map((booking) => (
                <tr
                  key={booking.id}
                  className="border-t transition hover:bg-slate-50"
                >
                  <td className="p-4 font-medium text-slate-800">
                    {booking.resource}
                  </td>

                  <td className="p-4">{booking.bookedBy}</td>

                  <td className="p-4">{booking.department}</td>

                  <td className="p-4">{booking.date}</td>

                  <td className="p-4">
                    {booking.startTime} - {booking.endTime}
                  </td>

                  <td className="p-4">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${getStatusColor(
                        booking.status
                      )}`}
                    >
                      {booking.status}
                    </span>
                  </td>

                  <td className="p-4">
                    <div className="flex justify-center gap-2">
                      <button
                        onClick={() => handleReschedule(booking)}
                        className="flex items-center gap-1 rounded-lg border border-indigo-200 bg-indigo-50 px-3 py-2 text-sm text-indigo-600 transition hover:bg-indigo-100"
                      >
                        <Pencil size={15} />
                        Reschedule
                      </button>

                      <button
                        onClick={() => handleCancel(booking.id)}
                        disabled={booking.status === "Cancelled"}
                        className={`flex items-center gap-1 rounded-lg border px-3 py-2 text-sm transition ${
                          booking.status === "Cancelled"
                            ? "cursor-not-allowed border-gray-200 bg-gray-100 text-gray-400"
                            : "border-red-200 bg-red-50 text-red-600 hover:bg-red-100"
                        }`}
                      >
                        <XCircle size={15} />
                        Cancel
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7} className="py-16 text-center">
                  <div className="flex flex-col items-center">
                    <CalendarDays size={50} className="mb-4 text-slate-300" />

                    <h3 className="text-lg font-semibold text-slate-700">
                      No bookings found
                    </h3>

                    <p className="mt-2 text-slate-500">
                      Try changing the search or filter.
                    </p>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* ================= Calendar Preview ================= */}

      <div className="rounded-2xl border bg-white p-6 shadow-sm">
        <div className="mb-5 flex items-center gap-2">
          <Calendar className="text-indigo-600" />
          <h2 className="text-xl font-semibold text-slate-800">
            Today's Resource Schedule
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {bookingList.slice(0, 4).map((booking) => (
            <div
              key={booking.id}
              className="rounded-xl border p-4 hover:shadow-md transition"
            >
              <h3 className="font-semibold text-slate-800">
                {booking.resource}
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                {booking.startTime} - {booking.endTime}
              </p>

              <p className="mt-1 text-sm text-slate-500">{booking.bookedBy}</p>

              <span
                className={`mt-4 inline-block rounded-full px-3 py-1 text-xs font-semibold ${getStatusColor(
                  booking.status
                )}`}
              >
                {booking.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ================= New Booking Modal ================= */}

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-2xl rounded-2xl bg-white p-6 shadow-2xl">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-slate-800">
                {editingBooking ? "Reschedule Booking" : "New Booking"}
              </h2>

              <button
                onClick={() => {
                  setShowModal(false);
                  resetForm();
                }}
                className="rounded-lg p-2 hover:bg-slate-100"
              >
                <XCircle size={22} />
              </button>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Resource
                </label>

                <select
                  value={formData.resource}
                  onChange={(e) =>
                    setFormData({ ...formData, resource: e.target.value })
                  }
                  className="w-full rounded-xl border p-3"
                >
                  <option value="">Select Resource</option>
                  <option>Conference Room A</option>
                  <option>Meeting Room B</option>
                  <option>Training Hall</option>
                  <option>Projector</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Booked By
                </label>

                <input
                  type="text"
                  value={formData.bookedBy}
                  onChange={(e) =>
                    setFormData({ ...formData, bookedBy: e.target.value })
                  }
                  className="w-full rounded-xl border p-3"
                  placeholder="Employee Name"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Department
                </label>

                <input
                  type="text"
                  value={formData.department}
                  onChange={(e) =>
                    setFormData({ ...formData, department: e.target.value })
                  }
                  className="w-full rounded-xl border p-3"
                  placeholder="Department"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Booking Date
                </label>

                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) =>
                    setFormData({ ...formData, date: e.target.value })
                  }
                  className="w-full rounded-xl border p-3"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Start Time
                </label>

                <input
                  type="time"
                  value={formData.startTime}
                  onChange={(e) =>
                    setFormData({ ...formData, startTime: e.target.value })
                  }
                  className="w-full rounded-xl border p-3"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  End Time
                </label>

                <input
                  type="time"
                  value={formData.endTime}
                  onChange={(e) =>
                    setFormData({ ...formData, endTime: e.target.value })
                  }
                  className="w-full rounded-xl border p-3"
                />
              </div>
            </div>

            <div className="mt-8 flex justify-end gap-3">
              <button
                onClick={() => {
                  setShowModal(false);
                  resetForm();
                }}
                className="rounded-xl border px-5 py-2 hover:bg-slate-50"
              >
                Cancel
              </button>

              <button
                onClick={saveBooking}
                className="rounded-xl bg-indigo-600 px-6 py-2 text-white hover:bg-indigo-700"
              >
                {editingBooking ? "Save Changes" : "Create Booking"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}