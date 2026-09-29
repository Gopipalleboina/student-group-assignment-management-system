import Header from "../components/Header";
import StatsCard from "../components/StatsCard";
import { courses } from "../data/courses";
import {
  BookOpen,
  ClipboardList,
  Users,
  TrendingUp
} from "lucide-react";

function ProfessorDashboard({ user, onLogout, onOpenCourse }) {
  return (
    <div className="min-h-screen bg-[#F5F7FA] p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        <Header />

        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold">Professor Dashboard</h2>
            <p className="text-gray-500">
              Welcome, {user.name}. Manage assignments and monitor student submissions.
            </p>
          </div>

          <button
            onClick={onLogout}
            className="px-5 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600"
          >
            Logout
          </button>
        </div>

        {/* Professor Stats */}
        <div className="grid md:grid-cols-4 gap-5">
          <StatsCard
            label="Courses"
            value={courses.length}
            icon={<BookOpen className="w-5 h-5" />}
          />

          <StatsCard
            label="Assignments"
            value="8"
            icon={<ClipboardList className="w-5 h-5" />}
          />

          <StatsCard
            label="Students"
            value="110"
            icon={<Users className="w-5 h-5" />}
          />

          <StatsCard
            label="Submission Rate"
            value="82%"
            icon={<TrendingUp className="w-5 h-5 text-green-600" />}
          />
        </div>

        {/* Course Management */}
        <div>
          <h3 className="text-2xl font-bold mb-5">Courses You Teach</h3>

          <div className="grid md:grid-cols-3 gap-6">
            {courses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-3xl p-6 border shadow-sm hover:shadow-lg transition cursor-pointer"
                onClick={() => onOpenCourse(course)}
              >
                <BookOpen className="text-blue-600 w-8 h-8" />

                <h4 className="text-xl font-bold mt-4">{course.name}</h4>

                <p className="text-gray-500">{course.code}</p>

                <div className="mt-5 text-sm text-gray-600 space-y-1">
                  <p>Students: {course.students}</p>
                  <p>Progress: {course.progress}%</p>
                </div>

                <button className="mt-5 w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700">
                  Manage Assignments
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Analytics */}
        <div className="bg-white rounded-3xl p-6 border shadow-sm">
          <h3 className="text-xl font-bold mb-4">
            Submission Analytics
          </h3>

          <div className="space-y-4">
            {courses.map((course) => (
              <div key={course.id}>
                <div className="flex justify-between text-sm mb-2">
                  <span>{course.name}</span>
                  <span>{course.progress}% Submitted</span>
                </div>

                <div className="bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-green-500 h-3 rounded-full"
                    style={{ width: `${course.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfessorDashboard;