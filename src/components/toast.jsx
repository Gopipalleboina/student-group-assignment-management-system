import { CheckCircle2, XCircle } from "lucide-react";

function Toast({ message, type = "success", onClose }) {
  if (!message) return null;

  return (
    <div className="fixed top-5 right-5 z-50 animate-in slide-in-from-right duration-300">
      <div
        className={`flex items-center gap-3 px-5 py-4 rounded-2xl shadow-lg border ${
          type === "success"
            ? "bg-green-50 border-green-200 text-green-700"
            : "bg-red-50 border-red-200 text-red-700"
        }`}
      >
        {type === "success" ? (
          <CheckCircle2 className="w-5 h-5" />
        ) : (
          <XCircle className="w-5 h-5" />
        )}

        <span className="font-medium">{message}</span>

        <button
          onClick={onClose}
          className="ml-2 hover:opacity-70"
        >
          ✕
        </button>
      </div>
    </div>
  );
}

export default Toast;