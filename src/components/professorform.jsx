import { useState } from "react";
import {
  PlusCircle,
  Calendar,
  Link as LinkIcon,
  FileText,
  Users
} from "lucide-react";

function ProfessorForm({ onAddAssignment }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [driveLink, setDriveLink] = useState("");
  const [submissionType, setSubmissionType] =
    useState("Individual");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !title ||
      !description ||
      !dueDate ||
      !driveLink
    )
      return;

    onAddAssignment({
      title,
      description,
      dueDate,
      driveLink,
      submissionType
    });

    setTitle("");
    setDescription("");
    setDueDate("");
    setDriveLink("");
    setSubmissionType("Individual");
  };

  return (
    <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8">
      <h2 className="text-2xl font-bold mb-2">
        Create Assignment
      </h2>

      <p className="text-gray-500 mb-6">
        Create and publish new coursework.
      </p>

      <form
        onSubmit={handleSubmit}
        className="space-y-5"
      >
        <div className="relative">
          <FileText className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" />

          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Assignment Title"
            className="w-full pl-10 py-3 border rounded-xl"
          />
        </div>

        <textarea
          rows={4}
          value={description}
          onChange={(e) =>
            setDescription(e.target.value)
          }
          placeholder="Assignment Description"
          className="w-full p-3 border rounded-xl"
        />

        <div className="relative">
          <Calendar className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" />

          <input
            type="date"
            value={dueDate}
            onChange={(e) =>
              setDueDate(e.target.value)
            }
            className="w-full pl-10 py-3 border rounded-xl"
          />
        </div>

        <div className="relative">
          <LinkIcon className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" />

          <input
            type="url"
            value={driveLink}
            onChange={(e) =>
              setDriveLink(e.target.value)
            }
            placeholder="OneDrive / Google Drive Link"
            className="w-full pl-10 py-3 border rounded-xl"
          />
        </div>

        <div className="relative">
          <Users className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" />

          <select
            value={submissionType}
            onChange={(e) =>
              setSubmissionType(e.target.value)
            }
            className="w-full pl-10 py-3 border rounded-xl"
          >
            <option>Individual</option>
            <option>Group</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold flex items-center justify-center gap-2"
        >
          <PlusCircle className="w-5 h-5" />
          Publish Assignment
        </button>
      </form>
    </div>
  );
}

export default ProfessorForm;