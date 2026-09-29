import { useState } from "react";
import {
  PlusCircle,
  Link as LinkIcon,
  Calendar,
  BookOpen,
  FileText,
  Users,
} from "lucide-react";

function AdminForm({ onAddAssignment }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [subject, setSubject] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [driveLink, setDriveLink] = useState("");
  const [submissionType, setSubmissionType] = useState("Individual");

  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");
    setSuccessMsg("");

    if (!title.trim()) {
      setError("Please enter an assignment title.");
      return;
    }

    if (!description.trim()) {
      setError("Please enter an assignment description.");
      return;
    }

    if (!subject.trim()) {
      setError("Please enter a subject.");
      return;
    }

    if (!dueDate) {
      setError("Please select a deadline.");
      return;
    }

    if (!driveLink.trim()) {
      setError("Please provide a OneDrive / Google Drive link.");
      return;
    }

    onAddAssignment({
      title: title.trim(),
      description: description.trim(),
      subject: subject.trim(),
      dueDate,
      driveLink: driveLink.trim(),
      submissionType,
    });

    setTitle("");
    setDescription("");
    setSubject("");
    setDueDate("");
    setDriveLink("");
    setSubmissionType("Individual");

    setSuccessMsg("Assignment created successfully!");

    setTimeout(() => {
      setSuccessMsg("");
    }, 3000);
  };

  return (
    <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 md:p-8">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-gray-900">
          Create Assignment
        </h3>

        <p className="text-gray-500 mt-1">
          Publish assignments for students.
        </p>
      </div>

      {error && (
        <div className="mb-5 bg-red-50 border border-red-200 text-red-700 rounded-xl p-3 text-sm">
          {error}
        </div>
      )}

      {successMsg && (
        <div className="mb-5 bg-green-50 border border-green-200 text-green-700 rounded-xl p-3 text-sm">
          {successMsg}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">

        {/* Assignment Title */}

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Assignment Title
          </label>

          <div className="relative">
            <FileText className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" />

            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Responsive Dashboard"
              className="w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-200 outline-none"
            />
          </div>
        </div>

        {/* Description */}

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Description
          </label>

          <textarea
            rows="4"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe the assignment..."
            className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-200 outline-none resize-none"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-5">

          {/* Subject */}

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Subject
            </label>

            <div className="relative">
              <BookOpen className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" />

              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Frontend Development"
                className="w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-200 outline-none"
              />
            </div>
          </div>

          {/* Deadline */}

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Deadline
            </label>

            <div className="relative">
              <Calendar className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" />

              <input
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-200 outline-none"
              />
            </div>
          </div>
        </div>

        {/* OneDrive Link */}

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            OneDrive / Google Drive Link
          </label>

          <div className="relative">
            <LinkIcon className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" />

            <input
              type="url"
              value={driveLink}
              onChange={(e) => setDriveLink(e.target.value)}
              placeholder="https://drive.google.com/..."
              className="w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-200 outline-none"
            />
          </div>
        </div>

        {/* Submission Type */}

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Submission Type
          </label>

          <div className="relative">
            <Users className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" />

            <select
              value={submissionType}
              onChange={(e) => setSubmissionType(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-200 outline-none appearance-none bg-white"
            >
              <option value="Individual">Individual</option>
              <option value="Group">Group</option>
            </select>
          </div>
        </div>

        {/* Button */}

        <button
          type="submit"
          className="w-full md:w-auto px-8 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold flex items-center justify-center gap-2 transition"
        >
          <PlusCircle className="w-5 h-5" />
          Create Assignment
        </button>

      </form>
    </div>
  );
}

export default AdminForm;