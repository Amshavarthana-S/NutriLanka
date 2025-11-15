import React, { useState } from "react";
import { motion } from "framer-motion";
import { auth } from "../api";
import { useNavigate, Link } from "react-router-dom";
import { Eye, EyeOff, Mail, Lock , Atom } from "lucide-react";
import { FaFacebook } from "react-icons/fa";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [err, setErr] = useState(null);

  const nav = useNavigate();

  async function submit(e) {
    e.preventDefault();
    try {
      const res = await auth.signup({ name, email, password });

      if (res.token) {
        localStorage.setItem("token", res.token);
        localStorage.setItem("user", JSON.stringify(res.user || null));
        nav("/", { replace: true });
      } else {
        setErr(res.error || "Signup failed");
      }
    } catch (error) {
      setErr(error?.error || String(error));
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-green-200 px-4">
      {/* Signup Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8"
      >
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-center text-green-700 mb-6"
        >
          Create Your NutriLanka Account
        </motion.h2>

        {err && (
          <div className="bg-red-100 p-3 mb-4 text-sm text-red-700 rounded-md">
            {err}
          </div>
        )}

        <form onSubmit={submit} className="space-y-5">
          {/* Full Name */}
          <div className="relative">
            <User className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-400 focus:border-green-500 transition-all"
              placeholder="Full Name"
            />
          </div>

          {/* Email */}
          <div className="relative">
            <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-400 focus:border-green-500 transition-all"
              placeholder="Email Address"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <Lock className="absolute left-3 top-3 text-gray-400" size={20} />

            <input
              type={showPw ? "text" : "password"}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-10 pr-12 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-400 focus:border-green-500 transition-all"
              placeholder="Password"
            />

            {/* Show / Hide Button */}
            <button
              type="button"
              className="absolute right-3 top-3 text-gray-500"
              onClick={() => setShowPw(!showPw)}
            >
              {showPw ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {/* Signup Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-xl text-lg font-semibold shadow hover:bg-green-700 transition"
          >
            Create Account
          </motion.button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-1 h-px bg-gray-300" />
          <span className="px-4 text-gray-500 text-sm">or</span>
          <div className="flex-1 h-px bg-gray-300" />
        </div>

        {/* Social Signup */}
        <div className="space-y-3">
          <a
            href="/api/auth/google"
            className="flex items-center justify-center gap-3 border border-gray-300 py-3 rounded-xl text-gray-700 hover:bg-gray-50 transition"
          >
            <Atom size={20} /> Sign up with Google
          </a>

          <a
            href="/api/auth/facebook"
            className="flex items-center justify-center gap-3 border border-gray-300 py-3 rounded-xl text-gray-700 hover:bg-gray-50 transition"
          >
            <Facebook size={20} /> Sign up with Facebook
          </a>
        </div>

        {/* Already Have an Account? */}
        <p className="text-center mt-6 text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-green-700 font-medium hover:underline">
            Sign in
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
