Student Group & Assignment Management System

A role-based Student, Group & Assignment Management System built using React.js and Tailwind CSS. This project was developed for the Joineazy Frontend Internship – Round 2 assignment and focuses on creating a modern, responsive UI with separate workflows for students and professors.

Features
Authentication

Login page with form validation

Register page for Student and Professor roles

Role-based dashboard redirection

LocalStorage-based mock authentication

Student Features

View enrolled courses

Open course-wise assignment dashboard

View assignment details (title, description, deadline, and Drive link)

Individual assignment acknowledgment with timestamp

Group assignment workflow

Join Group simulation

Create Group simulation

Group Leader acknowledgment

Progress tracking with completion indicators

Professor Features

View courses being taught

Assignment Management Dashboard

Create new assignments

Add assignment description

Set deadlines

Add OneDrive/Google Drive submission links

Select submission type (Individual or Group)

View submission analytics

Monitor assignment progress through progress bars

UI/UX

Responsive design for desktop and mobile

Component-based architecture

Modern dashboard layout

Clean card-based interface

Interactive buttons and hover effects

Progress bars and status badges

Confirmation modal for submissions

Technologies Used

React.js

Tailwind CSS

JavaScript (ES6+)

HTML5

Vite

LocalStorage

Lucide React Icons

Project Structure
student-group-assignment-management-system/
│
├── src/
│   ├── components/
│   │   ├── AdminForm.jsx
│   │   ├── AssignmentCard.jsx
│   │   ├── ConfirmModal.jsx
│   │   ├── Header.jsx
│   │   ├── StatsCard.jsx
│   │   └── StudentTable.jsx
│   │
│   ├── pages/
│   │   ├── LoginPage.jsx
│   │   ├── RegisterPage.jsx
│   │   ├── StudentDashboard.jsx
│   │   ├── ProfessorDashboard.jsx
│   │   ├── StudentAssignments.jsx
│   │   └── ProfessorAssignments.jsx
│   │
│   ├── data/
│   │   ├── users.js
│   │   ├── courses.js
│   │   └── assignments.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
├── vite.config.js
└── README.md
How to Run
Clone the Repository
git clone https://github.com/Gopipalleboina/student-group-assignment-management-system.git
Open the Project
cd student-group-assignment-management-system
Install Dependencies
npm install
Start Development Server
npm run dev

The application will open in your browser through the Vite development server.

Application Workflow
Student Flow

Login or Register as Student.

View enrolled courses.

Open a course.

View assignments.

Acknowledge individual submissions.

Join or create a group for group assignments.

Track submission progress.

Professor Flow

Login or Register as Professor.

View assigned courses.

Open Assignment Management.

Create new assignments.

Add Drive submission links.

Choose Individual or Group submission type.

Monitor submission analytics.

Current Status

Frontend completed

Authentication implemented using LocalStorage

Role-based dashboards completed

Student and Professor workflows implemented

Responsive UI completed

Future Improvements

JWT Authentication

Backend integration

Database support

Real-time submission updates

Group management with multiple members

Email notifications

Assignment editing and deletion improvements

Design Highlights

Clean and minimal interface

Consistent spacing and typography

Responsive Tailwind layout

Reusable React components

Role-based user experience

Interactive submission workflow

Author

Palleboina Gopi
GitHub: https://github.com/Gopipalleboina
