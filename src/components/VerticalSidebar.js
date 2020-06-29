import React, { useEffect, useState } from "react";
import { Menu, Icon, Sidebar, Button } from "semantic-ui-react";
import {
  BrowserRouter,
  Route,
  Switch,
  Link,
  useHistory,
  useLocation
} from "react-router-dom";

function VerticalSidebar({ animation, direction, visible }) {


  const location = useLocation();

const history = useHistory();
  // history.listen((location, action) => {
  //   if(location.pathname != "/"){
  //     console.log(location.pathname)
  //     history.push(location.pathname)
  //   }
 
  // });

  // const [currentUrl,setCurrentUrl] = useState("");

  // useEffect(() => {
 
  //   history.push(`${currentUrl}`)
    
  // }, [currentUrl]);

  return (
    <Sidebar
      as={Menu}
      animation={"push"}
      direction={"left"}
      icon="labeled"
      inverted
      vertical
      width="thin"
      visible={true}
      borderless
      className="sidebar-cas"
    >
      <Menu.Item as="a" style={{ marginTop: 10 }}>
        <div className="align-row" style={{ textAlign: "left", fontSize: 18 }}>
          <span style={{ backgroundColor: "#6435c9", fontWeight: 700 }}>
            {" "}
            &nbsp; [CAS] &nbsp;
          </span>
        </div>
      </Menu.Item>
      <div
        style={{
          flexDirection: "row",
          justifyContent: "center",
          width: "90%",
          textAlign: "left",
          color: "white",
          backgroundColor: "rgba(25, 78, 129, 0.42)",

          fontFamily: "Raleway",
          fontSize: 13,
          margin: 10,
          padding: 10,
          borderRadius: 3,
        }}
      >
        Signed In as:
        <br />
        <strong>Moshud Olumoye</strong>
      </div>
      <Menu.Item className="sidebar-heading">
        <div style={{ textAlign: "left", marginTop: 10 }}>
          <p style={{ fontWeight: 700, color: "#ffffff9e", fontSize: 12 }}>
            ONGOING CLASS
          </p>
        </div>
      </Menu.Item>
      <Menu.Item className="sidebar-item">
        <div
          className="align-row"
          style={{ textAlign: "left", fontSize: 13, fontFamily: "Raleway" }}
        >
          <Link to="/start-class">
            <Button style={{ backgroundColor: "#7fcf95" }}>
              Start a Class
            </Button>
          </Link>
        </div>
      </Menu.Item>

      <Menu.Item className="sidebar-heading">
        <div style={{ textAlign: "left", marginTop: 10 }}>
          <p style={{ fontWeight: 700, color: "#ffffff9e", fontSize: 12 }}>
            ONGOING ATTENDANCE
          </p>
        </div>
      </Menu.Item>
      <Menu.Item className="sidebar-item">
        <div
          className="align-row"
          style={{ textAlign: "left", fontSize: 13, fontFamily: "Raleway" }}
        >
          <Link to="/start-nt-attendance">
            <Button style={{ backgroundColor: "#7fcf95" }}>
              Start Attendance
            </Button>
          </Link>
        </div>
      </Menu.Item>

      <Menu.Item className="sidebar-heading">
        <div style={{ textAlign: "left", marginTop: 5 }}>
          <p style={{ fontWeight: 700, color: "#ffffff9e", fontSize: 12 }}>
            COURSES
          </p>
        </div>
      </Menu.Item>

      <Menu.Item className="sidebar-item" as="a" onClick={()=>{ history.push(`add-course`)}}>
        <div
          className="align-row"
          style={{ textAlign: "left", fontSize: 13, fontFamily: "Raleway" }}
        >
          <Icon name="users" style={{ marginRight: 8 }} />
          Add Course
        </div>
      </Menu.Item>
      <Menu.Item className="sidebar-item" as="a" onClick={()=>{ history.push(`manage-courses`)}}>
        <div
          className="align-row"
          style={{ textAlign: "left", fontSize: 13, fontFamily: "Raleway" }}
        >
          <Icon name="pencil" style={{ marginRight: 8 }} />
          Manage All
        </div>
      </Menu.Item>
      <Menu.Item className="sidebar-heading">
        <div style={{ textAlign: "left", marginTop: 5 }}>
          <p
            style={{
              fontWeight: 700,
              color: "#ffffff9e",
              fontSize: 12,
              fontFamily: "Raleway",
            }}
          >
            STUDENTS
          </p>
        </div>
      </Menu.Item>
      <Menu.Item className="sidebar-item" as="a" onClick={()=>{ history.push(`enroll-student`)}} >
        <div
          className="align-row"
          style={{ textAlign: "left", fontSize: 13, fontFamily: "Raleway" }}
        >
          <Icon name="id card outline" style={{ marginRight: 8 }} />
          Enroll Student
        </div>
      </Menu.Item>
      <Menu.Item className="sidebar-item" as="a" onClick={()=>{ history.push(`manage-students`)}}>
        <div
          className="align-row"
          style={{ textAlign: "left", fontSize: 13, fontFamily: "Raleway" }}
        >
          <Icon name="pencil" style={{ marginRight: 8 }} />
          Manage All
        </div>
      </Menu.Item>
      <Menu.Item className="sidebar-heading">
        <div style={{ textAlign: "left", marginTop: 5 }}>
          <p style={{ fontWeight: 700, color: "#ffffff9e", fontSize: 12 }}>
            LECTURERS
          </p>
        </div>
      </Menu.Item>
      <Menu.Item className="sidebar-item" as="a" onClick={()=>{ history.push(`add-lecturer`)}}>
        <div
          className="align-row"
          style={{ textAlign: "left", fontSize: 13, fontFamily: "Raleway" }}
        >
          <Icon name="graduation" style={{ marginRight: 8 }} />
          Add Lecturer
        </div>
      </Menu.Item>
      <Menu.Item className="sidebar-item" as="a" onClick={()=>{history.push("manage-lecturers")}}>
        <div
          className="align-row"
          style={{ textAlign: "left", fontSize: 13, fontFamily: "Raleway" }}
        >
          <Icon name="pencil" style={{ marginRight: 8 }} />
          Manage All
        </div>
      </Menu.Item>

      <Menu.Item className="sidebar-heading">
        <div style={{ textAlign: "left", marginTop: 5 }}>
          <p style={{ fontWeight: 700, color: "#ffffff9e", fontSize: 12 }}>
            NON-TEACHING STAFF
          </p>
        </div>
      </Menu.Item>
      <Menu.Item className="sidebar-item" as="a" onClick={()=>{history.push("add-nt-staff")}}>
        <div
          className="align-row"
          style={{ textAlign: "left", fontSize: 13, fontFamily: "Raleway" }}
        >
          <Icon name="id badge" style={{ marginRight: 8 }} />
          Add Staff
        </div>
      </Menu.Item>
      <Menu.Item className="sidebar-item" as="a" onClick={()=>{history.push("manage-nt-staff")}}>
        <div
          className="align-row"
          style={{ textAlign: "left", fontSize: 13, fontFamily: "Raleway" }}
        >
          <Icon name="pencil" style={{ marginRight: 8 }} />
          Manage All
        </div>
      </Menu.Item>

      <Menu.Item className="sidebar-heading">
        <div style={{ textAlign: "left", marginTop: 5 }}>
          <p style={{ fontWeight: 700, color: "#ffffff9e", fontSize: 12 }}>
            NT STAFF DEPT.
          </p>
        </div>
      </Menu.Item>
      <Menu.Item className="sidebar-item" as="a" onClick={()=>{history.push("add-nt-department")}}>
        <div
          className="align-row"
          style={{ textAlign: "left", fontSize: 13, fontFamily: "Raleway" }}
        >
          <Icon name="tags" style={{ marginRight: 8 }} />
          Add Department
        </div>
      </Menu.Item>
      <Menu.Item className="sidebar-item" as="a" onClick={()=>{history.push("manage-nt-departments")}}>
        <div
          className="align-row"
          style={{ textAlign: "left", fontSize: 13, fontFamily: "Raleway" }}
        >
          <Icon name="pencil" style={{ marginRight: 8 }} />
          Manage All
        </div>
      </Menu.Item>

      <Menu.Item className="sidebar-heading">
        <div style={{ textAlign: "left", marginTop: 5 }}>
          <p style={{ fontWeight: 700, color: "#ffffff9e", fontSize: 12 }}>
            STUDENT DEPT.
          </p>
        </div>
      </Menu.Item>
      <Menu.Item className="sidebar-item" as="a" onClick={()=>{history.push("add-student-department")}}>
        <div
          className="align-row"
          style={{ textAlign: "left", fontSize: 13, fontFamily: "Raleway" }}
        >
          <Icon name="tag" style={{ marginRight: 8 }} />
          Add Department
        </div>
      </Menu.Item>
      <Menu.Item className="sidebar-item" as="a" onClick={()=>{history.push("manage-student-departments")}}>
        <div
          className="align-row"
          style={{ textAlign: "left", fontSize: 13, fontFamily: "Raleway" }}
        >
          <Icon name="pencil" style={{ marginRight: 8 }} />
          Manage All
        </div>
      </Menu.Item>

      <Menu.Item className="sidebar-heading">
        <div style={{ textAlign: "left", marginTop: 5 }}>
          <p style={{ fontWeight: 700, color: "#ffffff9e", fontSize: 12 }}>
            ATTENDANCE
          </p>
        </div>
      </Menu.Item>

      <Menu.Item className="sidebar-item" as="a" onClick={()=>{history.push("reports")}}>
        <div
          className="align-row"
          style={{ textAlign: "left", fontSize: 13, fontFamily: "Raleway" }}
        >
          <Icon name="file alternate outline" style={{ marginRight: 8 }} />
          Attendance Reports
        </div>
      </Menu.Item>
    </Sidebar>
  );
}

export default VerticalSidebar;
