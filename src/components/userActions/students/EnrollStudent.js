import React, { useState } from "react";
import { Form, Button, Dropdown, Checkbox, Progress } from "semantic-ui-react";
import CustomMenu from "../../CustomMenu";

function EnrollStudent() {
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
    { key: 1, text: "Mass Communication", value: "masscom" },
    { key: 2, text: "Computer Science", value: "csc" },
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
      <CustomMenu title="Enroll Student" />
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
            <label style={{ color: "#0e2a45" }}>Student Name</label>
            <Form.Input style={{ height: 50 }} placeholder="Student Name" />
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
            <label style={{ color: "#0e2a45" }}>Level</label>
            <Form.Select
              className="form-field"
              style={{
                height: 50,
                flexDirection: "row",
                alignItems: "center",
                display: "flex",
              }}
              fluid
              options={level}
              placeholder="Level"
            />
          </Form.Field>

          <Form.Field>
            <label style={{ color: "#0e2a45" }}>*Department</label>

            <Dropdown
              selection
              search
              fluid
              options={departments}
              placeholder="Choose an option"
            />
          </Form.Field>

          <Form.Field>
            <label style={{ color: "#0e2a45" }}>Make Course Rep</label>
            <Checkbox toggle />
          </Form.Field>

          <Form.Field>
            <label style={{ color: "#0e2a45" }}>Courses Offered</label>

            <Dropdown
              multiple
              selection
              search
              fluid
              options={courseCodes}
              placeholder="Choose an option"
              renderLabel={renderLabel}
            />
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
            <p style={{ fontSize: 15, color: "white" }}>Enroll Student</p>
          </Button>
        </Form>
      </div>
    </>
  );
}

export default EnrollStudent;
