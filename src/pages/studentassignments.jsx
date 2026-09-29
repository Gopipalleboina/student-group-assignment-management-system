import { useState } from "react";
import Header from "../components/Header";
import AssignmentCard from "../components/AssignmentCard";
import ConfirmModal from "../components/ConfirmModal";
import {
  ArrowLeft,
  Users,
  User,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";

function StudentAssignments({
  user,
  course,
  assignments,
  onBack,
  onSubmit,
}) {
  const [selectedAssignment, setSelectedAssignment] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  // Local simulation for Join/Create Group
  const [student, setStudent] = useState(user);

  const courseAssignments = assignments.filter(
    (assignment) => assignment.courseId === course.id
  );

  const handleConfirm = (assignmentId) => {
    onSubmit(assignmentId);
    setModalOpen(false);
    setSelectedAssignment(null);
  };

  const handleJoinGroup = () => {
    setStudent((prev) => ({
      ...prev,
      groupId: "group-1",
      isLeader: false,
    }));
  };

  const handleCreateGroup = () => {
    setStudent((prev) => ({
      ...prev,
      groupId: `group-${Date.now()}`,
      isLeader: true,
    }));
  };

  return (
    <div className="min-h-screen bg-[#F5F7FA] p-6">
      <div className="max-w-7xl mx-auto space-y-8">

        {/* Header */}
        <Header />

        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Dashboard
        </button>

        {/* Course Info */}
        <div>
          <h2 className="text-3xl font-bold">{course.name}</h2>
          <p className="text-gray-500">{course.code}</p>
        </div>

        {/* Assignments */}
        <div className="space-y-6">
          {courseAssignments.map((assignment) => (
            <div
              key={assignment.id}
              className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6"
            >
              {/* Existing Assignment Card */}
              <AssignmentCard
                assignment={assignment}
                onMarkSubmitted={(item) => {
                  setSelectedAssignment(item);
                  setModalOpen(true);
                }}
              />

              {/* Extra Details */}
              <div className="mt-6 pt-6 border-t border-gray-100 space-y-5">

                {/* Description */}
                <div>
                  <h4 className="font-semibold text-gray-800">
                    Description
                  </h4>

                  <p className="text-gray-600 mt-2 leading-relaxed">
                    {assignment.description}
                  </p>
                </div>

                {/* Submission Type */}
                <div className="flex items-center gap-3 text-sm">
                  {assignment.submissionType === "Group" ? (
                    <>
                      <Users className="text-blue-600 w-5 h-5" />
                      <span className="font-medium">
                        Group Assignment
                      </span>
                    </>
                  ) : (
                    <>
                      <User className="text-blue-600 w-5 h-5" />
                      <span className="font-medium">
                        Individual Assignment
                      </span>
                    </>
                  )}
                </div>

                {/* Individual Assignment Success */}
                {assignment.submissionType === "Individual" &&
                  assignment.status === "Submitted" && (
                    <div className="bg-green-50 border border-green-200 rounded-xl p-4 flex items-start gap-3">
                      <CheckCircle2 className="text-green-600 w-5 h-5 mt-0.5" />

                      <div>
                        <p className="font-semibold text-green-700">
                          Acknowledged
                        </p>

                        <p className="text-sm text-green-600 mt-1">
                          Submitted at{" "}
                          {assignment.submittedAt
                            ? new Date(
                                assignment.submittedAt
                              ).toLocaleString()
                            : "Just now"}
                        </p>
                      </div>
                    </div>
                  )}

                {/* GROUP LOGIC */}

                {assignment.submissionType === "Group" &&
                  assignment.status === "Pending" && (
                    <>
                      {student.groupId ? (
                        student.isLeader ? (
                          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
                            <p className="font-semibold text-blue-700">
                              You are the Group Leader.
                            </p>

                            <p className="text-sm text-blue-600 mt-2">
                              Only the Group Leader can acknowledge submission.
                              Once confirmed, all group members will see the
                              assignment as acknowledged.
                            </p>

                            <button
                              onClick={() => {
                                setSelectedAssignment(assignment);
                                setModalOpen(true);
                              }}
                              className="mt-4 px-5 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
                            >
                              Acknowledge for Group
                            </button>
                          </div>
                        ) : (
                          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5">
                            <p className="font-semibold text-yellow-700">
                              Waiting for Group Leader
                            </p>

                            <p className="text-sm text-yellow-600 mt-2">
                              Your Group Leader must acknowledge this assignment
                              before it is marked complete.
                            </p>
                          </div>
                        )
                      ) : (
                        <div className="bg-red-50 border border-red-200 rounded-xl p-5 flex gap-3">
                          <AlertCircle className="text-red-600 w-6 h-6 mt-1" />

                          <div className="flex-1">
                            <h4 className="font-semibold text-red-700">
                              You are not part of any group.
                            </h4>

                            <p className="text-sm text-red-600 mt-2">
                              Form or join one to submit this assignment.
                            </p>

                            <div className="flex flex-wrap gap-3 mt-4">
                              <button
                                onClick={handleJoinGroup}
                                className="px-4 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition"
                              >
                                Join Group
                              </button>

                              <button
                                onClick={handleCreateGroup}
                                className="px-4 py-2 rounded-xl border border-blue-200 text-blue-700 hover:bg-blue-50 transition"
                              >
                                Create Group
                              </button>
                            </div>
                          </div>
                        </div>
                      )}
                    </>
                  )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Confirmation Modal */}
      <ConfirmModal
        isOpen={modalOpen}
        assignment={selectedAssignment}
        onClose={() => {
          setModalOpen(false);
          setSelectedAssignment(null);
        }}
        onConfirm={handleConfirm}
      />
    </div>
  );
}

export default StudentAssignments;