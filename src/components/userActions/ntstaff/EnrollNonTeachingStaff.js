import React, { useState } from "react";
import { Form, Button, Dropdown, Checkbox, Progress } from "semantic-ui-react";
import CustomMenu from "../../CustomMenu";

function EnrollNonTeachingStaff() {
  const [showScan, setShowScan] = useState(false);
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
    { key: 1, text: "Cleaning", value: "cleaning" },
    { key: 2, text: "Security", value: "security" },
  ];

  const renderLabel = (label) => ({
    color: "purple",
    content: `${label.text}`,
    icon: "check",
  });

  const showBar = () => {
    setShowScan(true);
  };

  return (
    <>
      <CustomMenu title="Enroll Non Teaching Staff" />
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
            <label style={{ color: "#0e2a45" }}>Staff Name</label>
            <Form.Input style={{ height: 50 }} placeholder="Staff Name" />
          </Form.Field>

          <Form.Field>
            <label style={{ color: "#0e2a45" }}>Gender</label>
            <Form.Select
              className="form-field"
              style={{
                height: 50,
                flexDirection: "row",
                alignItems: "center",
                display: "flex",
              }}
              fluid
              options={gender}
              placeholder="Gender"
            />
          </Form.Field>

       

          <Form.Field>
            <label style={{ color: "#0e2a45" }}>Department</label>

            <Dropdown
              selection
              search
              fluid
              options={departments}
              placeholder="Choose an option"
            />
          </Form.Field>

       
          <Form.Field>
            <label style={{ color: "#0e2a45" }}>Total Number of Working Days</label>
            <Form.Input style={{ height: 50 }} placeholder="Working Days" />
          </Form.Field>

          {showScan ? (
            <>
              <Form.Field style={{marginTop:30}}>
              <label style={{ color: "#0e2a45" }}>Keep impressing the finger until the bar turns green</label>

                <Progress percent={10} indicating />
              </Form.Field>
            </>
          ) : null}

          <Form.Field>
            <Button className="scan-button" style={{marginBottom:10, marginTop:10}} onClick={showBar}>
              <p style={{ fontSize: 15, color: "white" }}>
                Start thumbprint scan
              </p>
            </Button>
          </Form.Field>

          <Button className="login-button">
            <p style={{ fontSize: 15, color: "white" }}>Enroll Staff</p>
          </Button>
        </Form>
      </div>
    </>
  );
}

export default EnrollNonTeachingStaff;
