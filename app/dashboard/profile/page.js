"use client";

import {
  UserCircle2,
  Mail,
  Building2,
  ShieldCheck,
  KeyRound,
  Save,
} from "lucide-react";
import { useState } from "react";

export default function ProfilePage() {
  const [user, setUser] = useState({
    name: "Manan",
    email: "manan@assetflow.com",
    department: "IT Department",
    role: "Asset Manager",
    phone: "+91 9876543210",
  });

  return (
    <div className="space-y-6">

      {/* Header */}

      <div>

        <h1 className="text-3xl font-bold text-slate-800">
          My Profile
        </h1>

        <p className="mt-1 text-slate-500">
          View and update your personal information.
        </p>

      </div>

      {/* Profile Card */}

      <div className="rounded-2xl border bg-white p-8 shadow-sm">

        <div className="flex flex-col items-center">

          <UserCircle2
            size={110}
            className="text-indigo-600"
          />

          <h2 className="mt-4 text-2xl font-bold">
            {user.name}
          </h2>

          <p className="text-slate-500">
            {user.role}
          </p>

        </div>

      </div>

      {/* Personal Information */}

      <div className="rounded-2xl border bg-white p-8 shadow-sm">

        <h2 className="mb-6 text-xl font-semibold">
          Personal Information
        </h2>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

          <div>

            <label className="mb-2 block text-sm font-medium">
              Full Name
            </label>

            <input
              value={user.name}
              onChange={(e) =>
                setUser({
                  ...user,
                  name: e.target.value,
                })
              }
              className="w-full rounded-xl border p-3"
            />

          </div>

          <div>

            <label className="mb-2 block text-sm font-medium">
              Email
            </label>

            <div className="flex items-center rounded-xl border px-3">

              <Mail
                size={18}
                className="text-slate-400"
              />

              <input
                value={user.email}
                onChange={(e) =>
                  setUser({
                    ...user,
                    email: e.target.value,
                  })
                }
                className="w-full p-3 outline-none"
              />

            </div>

          </div>

          <div>

            <label className="mb-2 block text-sm font-medium">
              Department
            </label>

            <div className="flex items-center rounded-xl border px-3">

              <Building2
                size={18}
                className="text-slate-400"
              />

              <input
                value={user.department}
                onChange={(e) =>
                  setUser({
                    ...user,
                    department: e.target.value,
                  })
                }
                className="w-full p-3 outline-none"
              />

            </div>

          </div>

          <div>

            <label className="mb-2 block text-sm font-medium">
              Role
            </label>

            <div className="flex items-center rounded-xl border px-3">

              <ShieldCheck
                size={18}
                className="text-slate-400"
              />

              <input
                value={user.role}
                readOnly
                className="w-full p-3 bg-white outline-none"
              />

            </div>

          </div>

          <div>

            <label className="mb-2 block text-sm font-medium">
              Phone Number
            </label>

            <input
              value={user.phone}
              onChange={(e) =>
                setUser({
                  ...user,
                  phone: e.target.value,
                })
              }
              className="w-full rounded-xl border p-3"
            />

          </div>

        </div>

      </div>

      {/* Change Password */}

      <div className="rounded-2xl border bg-white p-8 shadow-sm">

        <h2 className="mb-6 text-xl font-semibold">
          Change Password
        </h2>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">

          <div>

            <label className="mb-2 block text-sm font-medium">
              Current Password
            </label>

            <div className="flex items-center rounded-xl border px-3">

              <KeyRound
                size={18}
                className="text-slate-400"
              />

              <input
                type="password"
                className="w-full p-3 outline-none"
              />

            </div>

          </div>

          <div>

            <label className="mb-2 block text-sm font-medium">
              New Password
            </label>

            <div className="flex items-center rounded-xl border px-3">

              <KeyRound
                size={18}
                className="text-slate-400"
              />

              <input
                type="password"
                className="w-full p-3 outline-none"
              />

            </div>

          </div>

          <div>

            <label className="mb-2 block text-sm font-medium">
              Confirm Password
            </label>

            <div className="flex items-center rounded-xl border px-3">

              <KeyRound
                size={18}
                className="text-slate-400"
              />

              <input
                type="password"
                className="w-full p-3 outline-none"
              />

            </div>

          </div>

        </div>

      </div>

      {/* Save Button */}

      <div className="flex justify-end">

        <button
          className="flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 font-medium text-white hover:bg-indigo-700"
        >
          <Save size={18} />
          Save Changes
        </button>

      </div>

    </div>
  );
}