import { Mail, Lock, LogIn } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-50 via-white to-indigo-100 flex items-center justify-center px-4">

      {/* Login Card */}
      <div className="w-full max-w-md rounded-2xl border-2 border-blue-200 bg-white p-8 shadow-2xl flex flex-col gap-6">

        {/* Header */}
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 shadow-lg">
            <LogIn className="h-6 w-6 text-white" />
          </div>

          <h1 className="text-3xl font-bold text-gray-900">
            Welcome Back
          </h1>

          <p className="mt-2 text-gray-500">
            Login to your account
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5">

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Email
            </label>

            <div className="relative">
              <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />

              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-lg border border-gray-300 bg-white py-3 pl-10 pr-4 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Password
            </label>

            <div className="relative">
              <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />

              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="w-full rounded-lg border border-gray-300 bg-white py-3 pl-10 pr-4 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />
            </div>
          </div>

          {/* Remember / Forgot */}
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 text-sm text-gray-600">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-200"
              />

              Remember me
            </label>

            <a
              href="#"
              className="text-sm font-medium text-blue-600 hover:underline"
            >
              Forgot password?
            </a>
          </div>

          {/* Login */}
          <button
            type="submit"
            className="w-full rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 py-3 font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:from-blue-700 hover:to-indigo-700 hover:shadow-xl"
          >
            Login
          </button>
        </form>

        {/* Sign Up */}
        <p className="mt-6 text-center text-sm text-gray-500">
          Don't have an account?{" "}

          <a
            href="#"
            className="font-semibold text-blue-600 hover:underline"
          >
            Sign up
          </a>
        </p>

      </div>
    </div>
  );
}