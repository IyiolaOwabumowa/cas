import React, { useState } from "react";
import "./App.css";
import { Segment, Sidebar } from "semantic-ui-react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import Login from "./components/auth/Login";
import VerticalSidebar from "./components/VerticalSidebar";
import AddCourse from "./components/userActions/courses/AddCourse";
import ManageCourses from "./components/userActions/courses/ManageCourses";
import EnrollStudent from "./components/userActions/students/EnrollStudent";
import ManageStudents from "./components/userActions/students/ManageStudents";
import AddLecturer from "./components/userActions/lecturers/AddLecturer";
import ManageLecturers from "./components/userActions/lecturers/ManageLecturers";
import Grading from "./components/userActions/grading/Grading";
import Reports from "./components/userActions/reports/Reports";
import Class from "./components/userActions/class";
import EnrollNonTeachingStaff from "./components/userActions/ntstaff/EnrollNonTeachingStaff";
import ManageNonTeachingStaff from "./components/userActions/ntstaff/ManageNonTeachingStaff";
import NTAttendanceControl from "./components/userActions/nt-attendance";
import AttendanceControl from "./components/userActions/class";
import AddNTDepartment from "./components/userActions/nt-department/AddNTDepartment";
import ManageNTDepartment from "./components/userActions/nt-department/ManageNTDepartment";
import ClassAttendanceControl from "./components/userActions/class-attendance";
import AddStudentDepartment from "./components/userActions/student-department/AddStudentDepartment";
import ManageStudentDepartment from "./components/userActions/student-department/ManageStudentDepartments";

function App() {
  return (
    <>
      {0 == 1 ? (
        <>
          <Switch>
            <Route path="/" component={Login} exact />
          </Switch>
        </>
      ) : (
        <>
          <VerticalSidebar />
          <Sidebar.Pusher className="sidebar-pusher">
            <Segment basic>
              <Switch>
                <Route path="/" component={Class} exact />
                <Route path="/start-class" component={Class} />
                <Route path="/add-course" component={AddCourse} />
                <Route path="/manage-courses" component={ManageCourses} />
                <Route path="/enroll-student" component={EnrollStudent} />
                <Route path="/manage-students" component={ManageStudents} />
                <Route path="/add-lecturer" component={AddLecturer} />
                <Route path="/manage-lecturers" component={ManageLecturers} />
                <Route path="/reports" component={Reports} />
                <Route
                  path="/add-nt-staff"
                  component={EnrollNonTeachingStaff}
                />
                <Route
                  path="/manage-nt-staff"
                  component={ManageNonTeachingStaff}
                />

                <Route
                  path="/start-class-attendance"
                  component={ClassAttendanceControl}
                />
                <Route
                  path="/start-nt-attendance"
                  component={NTAttendanceControl}
                />
                <Route
                  path="/add-student-department"
                  component={AddStudentDepartment}
                />
                <Route
                  path="/manage-student-departments"
                  component={ManageStudentDepartment}
                />
                <Route path="/add-nt-department"
                  component={AddNTDepartment} />
                <Route
                  path="/manage-nt-departments"
                  component={ManageNTDepartment}
                />
              </Switch>
            </Segment>
          </Sidebar.Pusher>
        </>
      )}
    </>
  );
}

export default App;
