import { useState } from "react";
import {
  User,
  Lock,
  Mail,
  GraduationCap
} from "lucide-react";

function RegisterPage({ onRegister, goLogin }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "student"
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      id: Date.now().toString(),
      ...form,
      semester: "Semester 5",
      groupId: null,
      isLeader: false
    };

    onRegister(newUser);
  };

  return (
    <div className="min-h-screen bg-[#F5F7FA] flex items-center justify-center p-6">
      <div className="bg-white w-full max-w-md rounded-3xl shadow-lg border border-gray-100 p-8">
        <div className="text-center mb-8">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-blue-50 flex items-center justify-center">
            <GraduationCap className="text-blue-600 w-8 h-8" />
          </div>

          <h1 className="text-3xl font-bold mt-4">
            Create Account
          </h1>

          <p className="text-gray-500 mt-2">
            Join the Assignment Portal.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="relative">
            <User className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" />

            <input
              required
              placeholder="Full Name"
              className="w-full pl-10 py-3 border rounded-xl"
              onChange={(e) =>
                setForm({
                  ...form,
                  name: e.target.value
                })
              }
            />
          </div>

          <div className="relative">
            <Mail className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" />

            <input
              type="email"
              required
              placeholder="Email"
              className="w-full pl-10 py-3 border rounded-xl"
              onChange={(e) =>
                setForm({
                  ...form,
                  email: e.target.value
                })
              }
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" />

            <input
              type="password"
              required
              placeholder="Password"
              className="w-full pl-10 py-3 border rounded-xl"
              onChange={(e) =>
                setForm({
                  ...form,
                  password: e.target.value
                })
              }
            />
          </div>

          <select
            className="w-full p-3 border rounded-xl"
            onChange={(e) =>
              setForm({
                ...form,
                role: e.target.value
              })
            }
          >
            <option value="student">Student</option>
            <option value="professor">Professor</option>
          </select>

          <button className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-xl text-white font-semibold">
            Register
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account?{" "}
          <button
            onClick={goLogin}
            className="text-blue-600 font-semibold hover:underline"
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );
}

export default RegisterPage;