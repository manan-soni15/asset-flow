import Link from "next/link";
import {
  Boxes,
  CalendarDays,
  Wrench,
  ShieldCheck,
  BarChart3,
  Users,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const features = [
  {
    icon: Boxes,
    title: "Asset Tracking",
    desc: "Register, categorize and track every asset across its complete lifecycle.",
  },
  {
    icon: CalendarDays,
    title: "Resource Booking",
    desc: "Book meeting rooms, vehicles and equipment without scheduling conflicts.",
  },
  {
    icon: Wrench,
    title: "Maintenance",
    desc: "Approve requests and monitor maintenance from start to resolution.",
  },
  {
    icon: ShieldCheck,
    title: "Audit Management",
    desc: "Conduct audit cycles and automatically generate discrepancy reports.",
  },
  {
    icon: BarChart3,
    title: "Analytics",
    desc: "Gain operational insights through dashboards and utilization reports.",
  },
  {
    icon: Users,
    title: "Role Based Access",
    desc: "Secure access for Admins, Asset Managers, Department Heads and Employees.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">

      {/* ================= NAVBAR ================= */}

      <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

          <div>
            <h1 className="text-2xl font-bold text-indigo-600">
              AssetFlow
            </h1>

            <p className="text-xs text-slate-500">
              Enterprise Asset Management
            </p>
          </div>

          <div className="flex items-center gap-3">

            <Link
              href="/login"
              className="rounded-lg border border-slate-300 px-5 py-2 text-sm font-medium hover:bg-slate-100"
            >
              Login
            </Link>

            <Link
              href="/signup"
              className="rounded-lg bg-gradient-to-r from-indigo-600 to-violet-600 px-5 py-2 text-sm font-medium text-white shadow hover:opacity-95"
            >
              Get Started
            </Link>

          </div>

        </div>
      </header>

      {/* ================= HERO ================= */}

      <section className="mx-auto flex max-w-7xl flex-col items-center px-6 py-20 lg:flex-row lg:justify-between">

        {/* Left */}

        <div className="max-w-xl">

          <span className="rounded-full border bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-700">
            Enterprise ERP Platform
          </span>

          <h1 className="mt-8 text-5xl font-extrabold leading-tight lg:text-6xl">

            Enterprise Asset
            <br />

            <span className="text-indigo-600">
              & Resource Management
            </span>

          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Track assets, manage bookings, automate maintenance workflows,
            perform audits and gain complete visibility over organizational
            resources from one centralized platform.
          </p>

          <div className="mt-8 flex gap-4">

            <Link
              href="/signup"
              className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-6 py-3 font-semibold text-white shadow-lg"
            >
              Launch Platform
              <ArrowRight size={18} />
            </Link>

            <Link
              href="#features"
              className="rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold hover:bg-slate-100"
            >
              Learn More
            </Link>

          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 text-sm text-slate-600">

            <div className="flex items-center gap-2">
              <CheckCircle2 size={18} className="text-green-600" />
              Asset Lifecycle Tracking
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle2 size={18} className="text-green-600" />
              Resource Booking
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle2 size={18} className="text-green-600" />
              Maintenance Workflow
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle2 size={18} className="text-green-600" />
              Role Based Access
            </div>

          </div>

        </div>

        {/* Right Dashboard Mockup */}

        <div className="mt-16 w-full max-w-xl rounded-3xl border bg-white p-6 shadow-xl lg:mt-0">

          <div className="mb-6 flex items-center justify-between">

            <div>

              <h3 className="font-semibold">
                Dashboard Overview
              </h3>

              <p className="text-sm text-slate-500">
                Organization Summary
              </p>

            </div>

            <div className="rounded-lg bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
              Live
            </div>

          </div>

          <div className="grid grid-cols-2 gap-4">

            {[
              ["542", "Assets"],
              ["41", "Bookings"],
              ["19", "Maintenance"],
              ["12", "Departments"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="rounded-xl border bg-slate-50 p-5"
              >
                <h2 className="text-3xl font-bold">
                  {value}
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  {label}
                </p>

              </div>
            ))}

          </div>

          <div className="mt-6 rounded-xl border bg-slate-50 p-5">

            <h4 className="font-semibold">
              Recent Activity
            </h4>

            <ul className="mt-4 space-y-3 text-sm text-slate-600">

              <li>• Laptop AF-0102 allocated to Rahul.</li>

              <li>• Meeting Room B2 booked for 2:00 PM.</li>

              <li>• Printer maintenance request approved.</li>

              <li>• Audit cycle completed successfully.</li>

            </ul>

          </div>

        </div>

      </section>

      {/* ================= STATS ================= */}

      <section className="mx-auto max-w-7xl px-6">

        <div className="grid gap-6 md:grid-cols-4">

          {[
            ["500+", "Assets Managed"],
            ["25+", "Departments"],
            ["1200+", "Bookings"],
            ["98%", "Availability"],
          ].map(([value, label]) => (

            <div
              key={label}
              className="rounded-2xl border bg-white p-8 shadow-sm"
            >
              <h2 className="text-4xl font-bold text-indigo-600">
                {value}
              </h2>

              <p className="mt-2 text-slate-600">
                {label}
              </p>

            </div>

          ))}

        </div>

      </section>

      {/* ================= FEATURES ================= */}

      <section
        id="features"
        className="mx-auto max-w-7xl px-6 py-24"
      >

        <div className="mb-14 text-center">

          <h2 className="text-4xl font-bold">
            Everything You Need
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            Built for organizations that need complete control over their
            assets and shared resources.
          </p>

        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {features.map((feature) => {

            const Icon = feature.icon;

            return (

              <div
                key={feature.title}
                className="rounded-2xl border bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
              >

                <div className="mb-5 inline-flex rounded-xl bg-indigo-100 p-3">

                  <Icon
                    size={28}
                    className="text-indigo-600"
                  />

                </div>

                <h3 className="text-xl font-semibold">
                  {feature.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {feature.desc}
                </p>

              </div>

            );
          })}

        </div>

      </section>

      {/* ================= CTA ================= */}

      <section className="mx-auto max-w-7xl px-6 pb-20">

        <div className="rounded-3xl bg-gradient-to-r from-indigo-600 to-violet-600 px-10 py-16 text-center text-white">

          <h2 className="text-4xl font-bold">
            Ready to Manage Assets Smarter?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-indigo-100">
            Simplify asset tracking, maintenance, resource booking and audits
            through a single enterprise platform.
          </p>

          <Link
            href="/signup"
            className="mt-8 inline-flex rounded-xl bg-white px-7 py-3 font-semibold text-indigo-700"
          >
            Get Started
          </Link>

        </div>

      </section>

      {/* ================= FOOTER ================= */}

      <footer className="border-t bg-white py-8">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 text-sm text-slate-500 md:flex-row">

          <p>
            © {new Date().getFullYear()} AssetFlow. All rights reserved.
          </p>

          <p>
            Enterprise Asset & Resource Management System
          </p>

        </div>

      </footer>

    </main>
  );
}