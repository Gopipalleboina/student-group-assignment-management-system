import Header from "../components/Header.jsx";
import AdminForm from "../components/AdminForm.jsx";
import StudentTable from "../components/StudentTable.jsx";
import { ArrowLeft } from "lucide-react";

function ProfessorAssignments({
  course,
  assignments,
  onBack,
  onAddAssignment
}) {

  const courseAssignments = assignments.filter(
    (assignment) => assignment.courseId === course.id
  );

  const submitted = courseAssignments.filter(
    (assignment) => assignment.status === "Submitted"
  ).length;

  const pending = courseAssignments.length - submitted;

  const completion =
    courseAssignments.length === 0
      ? 0
      : Math.round((submitted / courseAssignments.length) * 100);

  return (
    <div className="min-h-screen bg-[#F5F7FA] p-6">
      <div className="max-w-7xl mx-auto space-y-8">

        <Header />

        <button
          onClick={onBack}
          className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Dashboard
        </button>

        <div>
          <h2 className="text-3xl font-bold">{course.name}</h2>
          <p className="text-gray-500">{course.code}</p>
        </div>

        {/* Analytics */}

        <div className="grid md:grid-cols-3 gap-5">

          <div className="bg-white rounded-3xl p-6 border shadow-sm">
            <p className="text-sm text-gray-500">
              Total Assignments
            </p>

            <h3 className="text-4xl font-bold mt-2">
              {courseAssignments.length}
            </h3>
          </div>

          <div className="bg-white rounded-3xl p-6 border shadow-sm">
            <p className="text-sm text-gray-500">
              Submitted
            </p>

            <h3 className="text-4xl font-bold mt-2 text-green-600">
              {submitted}
            </h3>
          </div>

          <div className="bg-white rounded-3xl p-6 border shadow-sm">
            <p className="text-sm text-gray-500">
              Pending
            </p>

            <h3 className="text-4xl font-bold mt-2 text-yellow-600">
              {pending}
            </h3>
          </div>

        </div>

        {/* Progress */}

        <div className="bg-white rounded-3xl p-6 border shadow-sm">
          <div className="flex justify-between text-sm font-semibold mb-3">
            <span>Submission Completion</span>
            <span>{completion}%</span>
          </div>

          <div className="bg-gray-200 rounded-full h-3">
            <div
              className="bg-green-500 h-3 rounded-full transition-all"
              style={{ width: `${completion}%` }}
            />
          </div>
        </div>

        {/* Assignment Form */}

        <AdminForm onAddAssignment={onAddAssignment} />

        {/* Student Submission Overview */}

        <StudentTable assignments={courseAssignments} />

      </div>
    </div>
  );
}

export default ProfessorAssignments;