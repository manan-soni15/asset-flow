"use client";

import { useState } from "react";
import {
  Building2,
  Bell,
  ShieldCheck,
  Moon,
  Sun,
  Save,
} from "lucide-react";

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    organization: "AssetFlow Pvt. Ltd.",
    emailNotifications: true,
    maintenanceAlerts: true,
    bookingReminders: true,
    darkMode: false,
    role: "Asset Manager",
  });

  return (
    <div className="space-y-6">

      {/* Header */}

      <div>

        <h1 className="text-3xl font-bold text-slate-800">
          Settings
        </h1>

        <p className="mt-1 text-slate-500">
          Configure your AssetFlow preferences and organization settings.
        </p>

      </div>

      {/* Organization */}

      <div className="rounded-2xl border bg-white p-8 shadow-sm">

        <div className="mb-6 flex items-center gap-3">

          <Building2 className="text-indigo-600" />

          <h2 className="text-xl font-semibold">
            Organization
          </h2>

        </div>

        <label className="mb-2 block text-sm font-medium">
          Organization Name
        </label>

        <input
          value={settings.organization}
          onChange={(e) =>
            setSettings({
              ...settings,
              organization: e.target.value,
            })
          }
          className="w-full rounded-xl border p-3"
        />

      </div>

      {/* Notifications */}

      <div className="rounded-2xl border bg-white p-8 shadow-sm">

        <div className="mb-6 flex items-center gap-3">

          <Bell className="text-indigo-600" />

          <h2 className="text-xl font-semibold">
            Notifications
          </h2>

        </div>

        <div className="space-y-5">

          <label className="flex items-center justify-between">

            <span>Email Notifications</span>

            <input
              type="checkbox"
              checked={settings.emailNotifications}
              onChange={() =>
                setSettings({
                  ...settings,
                  emailNotifications:
                    !settings.emailNotifications,
                })
              }
            />

          </label>

          <label className="flex items-center justify-between">

            <span>Maintenance Alerts</span>

            <input
              type="checkbox"
              checked={settings.maintenanceAlerts}
              onChange={() =>
                setSettings({
                  ...settings,
                  maintenanceAlerts:
                    !settings.maintenanceAlerts,
                })
              }
            />

          </label>

          <label className="flex items-center justify-between">

            <span>Booking Reminders</span>

            <input
              type="checkbox"
              checked={settings.bookingReminders}
              onChange={() =>
                setSettings({
                  ...settings,
                  bookingReminders:
                    !settings.bookingReminders,
                })
              }
            />

          </label>

        </div>

      </div>

      {/* Appearance */}

      <div className="rounded-2xl border bg-white p-8 shadow-sm">

        <div className="mb-6 flex items-center gap-3">

          {settings.darkMode ? (
            <Moon className="text-indigo-600" />
          ) : (
            <Sun className="text-yellow-500" />
          )}

          <h2 className="text-xl font-semibold">
            Appearance
          </h2>

        </div>

        <label className="flex items-center justify-between">

          <span>Enable Dark Mode</span>

          <input
            type="checkbox"
            checked={settings.darkMode}
            onChange={() =>
              setSettings({
                ...settings,
                darkMode: !settings.darkMode,
              })
            }
          />

        </label>

      </div>

      {/* Permissions */}

      <div className="rounded-2xl border bg-white p-8 shadow-sm">

        <div className="mb-6 flex items-center gap-3">

          <ShieldCheck className="text-indigo-600" />

          <h2 className="text-xl font-semibold">
            User Role
          </h2>

        </div>

        <input
          value={settings.role}
          readOnly
          className="w-full rounded-xl border bg-slate-100 p-3"
        />

      </div>

      {/* Save */}

      <div className="flex justify-end">

        <button className="flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 font-medium text-white hover:bg-indigo-700">

          <Save size={18} />

          Save Settings

        </button>

      </div>

    </div>
  );
}