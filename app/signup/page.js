"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, ArrowLeft } from "lucide-react";

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50 flex items-center justify-center px-6 py-10">

      <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-10 shadow-xl">

        {/* Back Button */}

        <div className="mb-6">

          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-600 transition hover:border-indigo-600 hover:bg-indigo-50 hover:text-indigo-600"
          >
            <ArrowLeft size={18} />
            Back to Home
          </Link>

        </div>

        {/* Header */}

        <div className="text-center">

          <h1 className="text-3xl font-bold text-indigo-600">
            AssetFlow
          </h1>

          <h2 className="mt-8 text-3xl font-bold text-slate-900">
            Create Account
          </h2>

          <p className="mt-2 text-slate-500">
            Register as an Employee.
          </p>

        </div>

        {/* Signup Form */}

        <form className="mt-10 space-y-6">

          {/* Full Name */}

          <div>

            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Full Name
            </label>

            <input
              type="text"
              placeholder="John Doe"
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
            />

          </div>

          {/* Email */}

          <div>

            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Company Email
            </label>

            <input
              type="email"
              placeholder="name@company.com"
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
            />

          </div>

          {/* Employee ID */}

          <div>

            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Employee ID
            </label>

            <input
              type="text"
              placeholder="EMP001"
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
            />

          </div>

          {/* Password */}

          <div>

            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Password
            </label>

            <div className="relative">

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 pr-12 text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-indigo-600"
              >
                {showPassword ? (
                  <EyeOff size={20} />
                ) : (
                  <Eye size={20} />
                )}
              </button>

            </div>

          </div>

          {/* Confirm Password */}

          <div>

            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Confirm Password
            </label>

            <div className="relative">

              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Re-enter password"
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 pr-12 text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              />

              <button
                type="button"
                onClick={() =>
                  setShowConfirmPassword(!showConfirmPassword)
                }
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-indigo-600"
              >
                {showConfirmPassword ? (
                  <EyeOff size={20} />
                ) : (
                  <Eye size={20} />
                )}
              </button>

            </div>

          </div>

          {/* Create Account Button */}

          <button
            type="submit"
            className="w-full rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 py-3.5 font-semibold text-white shadow-lg transition hover:opacity-95 hover:shadow-xl"
          >
            Create Account
          </button>

        </form>

        {/* Note */}

        <div className="mt-8 rounded-2xl border border-indigo-100 bg-indigo-50 p-5">

          <p className="text-center text-sm leading-6 text-slate-600">

            <span className="font-semibold text-indigo-600">
              Note:
            </span>{" "}
            Every new account is registered as an <strong>Employee</strong>.
            Department assignment and elevated roles are managed later by an
            Administrator.

          </p>

        </div>

        {/* Divider */}

        <div className="my-8 flex items-center">

          <div className="h-px flex-1 bg-slate-200"></div>

          <span className="mx-4 text-sm text-slate-400">
            Already have an account?
          </span>

          <div className="h-px flex-1 bg-slate-200"></div>

        </div>

        {/* Login Button */}

        <Link
          href="/login"
          className="inline-flex w-full items-center justify-center rounded-xl border border-slate-300 bg-white py-3 font-semibold text-slate-700 transition hover:border-indigo-600 hover:bg-indigo-50 hover:text-indigo-600"
        >
          Login
        </Link>

      </div>

    </main>
  );
}