"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, ArrowLeft } from "lucide-react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

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
            Welcome Back
          </h2>

          <p className="mt-2 text-slate-500">
            Sign in to continue to your workspace.
          </p>

        </div>

        {/* Login Form */}

        <form className="mt-10 space-y-6">

          {/* Email */}

          <div>

            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Email
            </label>

            <input
              type="email"
              placeholder="name@company.com"
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
            />

          </div>

          {/* Password */}

          <div>

            <div className="mb-2 flex items-center justify-between">

              <label className="text-sm font-semibold text-slate-700">
                Password
              </label>

              <Link
                href="/forgot-password"
                className="text-sm font-medium text-indigo-600 hover:underline"
              >
                Forgot Password?
              </Link>

            </div>

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

          {/* Login Button */}

          <button
            type="submit"
            className="w-full rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 py-3.5 font-semibold text-white shadow-lg transition hover:opacity-95 hover:shadow-xl"
          >
            Login
          </button>

        </form>

        {/* Divider */}

        <div className="my-8 flex items-center">

          <div className="h-px flex-1 bg-slate-200"></div>

          <span className="mx-4 text-sm text-slate-400">
            New here?
          </span>

          <div className="h-px flex-1 bg-slate-200"></div>

        </div>

        {/* Signup Section */}

        <div className="text-center">

          <p className="text-sm leading-6 text-slate-500">
            Create an Employee account to access AssetFlow.
            <br />
            Administrator roles are assigned later.
          </p>

          <Link
            href="/signup"
            className="mt-6 inline-flex w-full items-center justify-center rounded-xl border border-slate-300 bg-white py-3 font-semibold text-slate-700 transition hover:border-indigo-600 hover:bg-indigo-50 hover:text-indigo-600"
          >
            Create Account
          </Link>

        </div>

      </div>

    </main>
  );
}