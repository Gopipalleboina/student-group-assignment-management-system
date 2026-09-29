import { useState, useEffect } from "react";

import LoginPage from "./pages/loginpage.jsx";
import RegisterPage from "./pages/registerpage";
import StudentDashboard from "./pages/studentdashboard";
import ProfessorDashboard from "./pages/professordashboard";
import StudentAssignments from "./pages/studentassignments";
import ProfessorAssignments from "./pages/professorassignments";

import { users as demoUsers } from "./data/users";
import { initialAssignments } from "./data/assignments";

const USERS_KEY = "joineazy_users";
const ASSIGNMENTS_KEY = "joineazy_assignments";

function App() {
  // Load users from localStorage
  const [users, setUsers] = useState(() => {
    const saved = localStorage.getItem(USERS_KEY);
    return saved ? JSON.parse(saved) : demoUsers;
  });

  // Load assignments from localStorage
  const [assignments, setAssignments] = useState(() => {
    const saved = localStorage.getItem(ASSIGNMENTS_KEY);
    return saved ? JSON.parse(saved) : initialAssignments;
  });

  const [currentUser, setCurrentUser] = useState(null);
  const [currentCourse, setCurrentCourse] = useState(null);
  const [page, setPage] = useState("login");

  // Save users
  useEffect(() => {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
  }, [users]);

  // Save assignments
  useEffect(() => {
    localStorage.setItem(
      ASSIGNMENTS_KEY,
      JSON.stringify(assignments)
    );
  }, [assignments]);

  // Register
  const handleRegister = (newUser) => {
    const user = {
      ...newUser,
      id: Date.now().toString(),
      semester: "Semester 5",
      groupId: null,
      isLeader: false,
    };

    setUsers((prev) => [...prev, user]);
    setCurrentUser(user);
  };

  // Student submission
  const handleStudentSubmit = (assignmentId) => {
    setAssignments((prev) =>
      prev.map((assignment) =>
        assignment.id === assignmentId
          ? {
              ...assignment,
              status: "Submitted",
              progress: 100,
              submittedAt: new Date().toISOString(),
            }
          : assignment
      )
    );
  };

  // Professor creates assignment
  const handleAddAssignment = (assignmentData) => {
    const newAssignment = {
      id: `assign-${Date.now()}`,
      courseId: currentCourse.id,
      title: assignmentData.title,
      description: assignmentData.description,
      subject: currentCourse.name,
      dueDate: assignmentData.dueDate,
      driveLink: assignmentData.driveLink,
      submissionType: assignmentData.submissionType,
      status: "Pending",
      progress: 0,
      submittedAt: null,
    };

    setAssignments((prev) => [newAssignment, ...prev]);
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setCurrentCourse(null);
    setPage("login");
  };

  // ---------------- LOGIN / REGISTER ----------------

  if (!currentUser) {
    if (page === "register") {
      return (
        <RegisterPage
          onRegister={handleRegister}
          goLogin={() => setPage("login")}
        />
      );
    }

    return (
      <LoginPage
        users={users}
        onLogin={setCurrentUser}
        goRegister={() => setPage("register")}
      />
    );
  }

  // ---------------- STUDENT FLOW ----------------

  if (currentUser.role === "student") {
    if (!currentCourse) {
      return (
        <StudentDashboard
          user={currentUser}
          assignments={assignments}
          onLogout={handleLogout}
          onOpenCourse={setCurrentCourse}
        />
      );
    }

    return (
      <StudentAssignments
        user={currentUser}
        course={currentCourse}
        assignments={assignments}
        onBack={() => setCurrentCourse(null)}
        onSubmit={handleStudentSubmit}
      />
    );
  }

  // ---------------- PROFESSOR FLOW ----------------

  if (!currentCourse) {
    return (
      <ProfessorDashboard
        user={currentUser}
        onLogout={handleLogout}
        onOpenCourse={setCurrentCourse}
      />
    );
  }

  return (
    <ProfessorAssignments
      user={currentUser}
      course={currentCourse}
      assignments={assignments}
      onBack={() => setCurrentCourse(null)}
      onAddAssignment={handleAddAssignment}
    />
  );
}

export default App;