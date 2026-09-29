import Header from "../components/Header";
import StatsCard from "../components/StatsCard";
import { courses } from "../data/courses";
import { BookOpen, CheckCircle2, Clock } from "lucide-react";

function StudentDashboard({
  user,
  assignments,
  onLogout,
  onOpenCourse,
}) {
  // Calculate stats dynamically
  const totalCourses = courses.length;
  const completedAssignments = assignments.filter(
    (assignment) => assignment.status === "Submitted"
  ).length;
  const pendingAssignments = assignments.filter(
    (assignment) => assignment.status === "Pending"
  ).length;

  return (
    <div className="min-h-screen bg-[#F5F7FA] p-6">
      <div className="max-w-7xl mx-auto space-y-8">

        <Header />

        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold">Student Dashboard</h2>
            <p className="text-gray-500">
              Welcome, {user.name}. Here are your enrolled courses.
            </p>
          </div>

          <button
            onClick={onLogout}
            className="px-5 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600"
          >
            Logout
          </button>
        </div>

        {/* Dynamic Stats */}
        <div className="grid md:grid-cols-3 gap-5">
          <StatsCard
            label="Enrolled Courses"
            value={totalCourses}
            icon={<BookOpen className="w-5 h-5" />}
          />

          <StatsCard
            label="Completed"
            value={completedAssignments}
            icon={<CheckCircle2 className="w-5 h-5 text-green-600" />}
          />

          <StatsCard
            label="Pending"
            value={pendingAssignments}
            icon={<Clock className="w-5 h-5 text-yellow-600" />}
          />
        </div>

        {/* Courses */}
        <div>
          <h3 className="text-2xl font-bold mb-5">My Courses</h3>

          <div className="grid md:grid-cols-3 gap-6">
            {courses.map((course) => {
              const courseAssignments = assignments.filter(
                (assignment) => assignment.courseId === course.id
              );

              const submitted = courseAssignments.filter(
                (assignment) => assignment.status === "Submitted"
              ).length;

              const progress =
                courseAssignments.length === 0
                  ? 0
                  : Math.round(
                      (submitted / courseAssignments.length) * 100
                    );

              return (
                <div
                  key={course.id}
                  className="bg-white rounded-3xl p-6 border shadow-sm hover:shadow-lg transition cursor-pointer"
                  onClick={() => onOpenCourse(course)}
                >
                  <BookOpen className="text-blue-600 w-8 h-8" />

                  <h4 className="text-xl font-bold mt-4">
                    {course.name}
                  </h4>

                  <p className="text-gray-500">{course.code}</p>

                  <div className="mt-5">
                    <div className="flex justify-between text-sm mb-2">
                      <span>Progress</span>
                      <span>{progress}%</span>
                    </div>

                    <div className="bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  </div>

                  <button className="mt-5 w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700">
                    View Assignments
                  </button>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}

export default StudentDashboard;