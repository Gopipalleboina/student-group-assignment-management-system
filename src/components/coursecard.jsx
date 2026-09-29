
import { BookOpen, ArrowRight } from "lucide-react";

function CourseCard({ course, onOpen }) {
  return (
    <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition">
      <BookOpen className="text-blue-600 w-8 h-8" />

      <h3 className="text-xl font-bold mt-4">{course.name}</h3>

      <p className="text-gray-500">{course.semester}</p>

      <div className="mt-5">
        <div className="flex justify-between text-sm mb-2">
          <span>Progress</span>
          <span>{course.progress}%</span>
        </div>

        <div className="bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-600 h-2 rounded-full"
            style={{ width: `${course.progress}%` }}
          />
        </div>
      </div>

      <button
        onClick={() => onOpen(course.id)}
        className="mt-5 flex items-center gap-2 text-blue-600 font-semibold"
      >
        Open Course <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
}

export default CourseCard;