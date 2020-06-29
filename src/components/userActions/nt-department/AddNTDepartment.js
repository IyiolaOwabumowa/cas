import React, { useState } from "react";
import {
  Form,
  Button,
  Dropdown,
  Checkbox,
  Progress,
  Message,
} from "semantic-ui-react";
import CustomMenu from "../../CustomMenu";

function AddNTDepartment() {
  const [showScan, setShowScan] = useState(false);
  const [lecturerName, setLecturerName] = useState("");
  const gender = [
    { key: 1, text: "Male", value: "male" },
    { key: 2, text: "Female", value: "female" },
  ];
  const courseCodes = [
    { key: 1, text: "CSC 414", value: "csc414" },
    { key: 2, text: "MAT 101", value: "mat101" },
  ];

  const level = [
    { key: 1, text: "100 Level", value: "100" },
    { key: 2, text: "200 Level", value: "200" },
    { key: 3, text: "300 Level", value: "300" },
    { key: 4, text: "400 Level", value: "400" },
    { key: 5, text: "MSc 1", value: "MSc1" },
    { key: 6, text: "MSc 2", value: "MSc2" },
    { key: 7, text: "PostGraduate", value: "PG" },
  ];

  const departments = [
    { key: 1, text: "Mass Communication", value: "masscom" },
    { key: 2, text: "Computer Science", value: "csc" },
  ];

  const colleges = [
    { key: 1, text: "COPAS", value: "copas" },
    { key: 2, text: "COLENSMA", value: "colensma" },
    { key: 3, text: "CASMAS", value: "casmas" },
    { key: 4, text: "COPOS", value: "copos" },
  ];

  const renderLabel = (label) => ({
    color: "blue",
    content: `${label.text}`,
    icon: "check",
  });

  const showBar = () => {
    setShowScan(true);
  };

  const handleChange = (e, { value }) => {
    setLecturerName(value);
  };
  return (
    <>
      <CustomMenu title="Add a Non-Teaching Staff Department" />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 40,
        }}
      >
        <Form style={{ width: "50%" }}>
          <Form.Field>
            <label style={{ color: "#0e2a45" }}>Department Name</label>
            <Form.Input
              style={{ height: 50 }}
              placeholder="Department Name"
              onChange={handleChange}
            />
          </Form.Field>

       

          <Form.Field>
            <label style={{ color: "#0e2a45" }}>Staff Manager's User Name</label>
            <Form.Input style={{ height: 50 }} placeholder="User Name" />
          </Form.Field>

       

         
          <Message
            style={{ marginTop: 20 }}
            info
            header={"Staff Manager's login details" }
            list={["Email Address: ola@gmail.com", "Password: subomi"]}
          ></Message>

          <Button className="login-button">
            <p style={{ fontSize: 15, color: "white" }}>Create Department</p>
          </Button>
        </Form>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 40,
        }}
      ></div>
    </>
  );
}

export default AddNTDepartment;
