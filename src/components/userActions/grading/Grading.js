import React, { useState, useEffect } from "react";
import {
  Form,
  Button,
  Dropdown,
  Checkbox,
  Progress,
  Message,
} from "semantic-ui-react";
import CustomMenu from "../../CustomMenu";

function Grading() {
  const [showScan, setShowScan] = useState(false);
  const [lecturerName, setLecturerName] = useState("");
  const [gradingStyle, setGradingStyle] = useState("");

  const gradingStyles = [
    { key: 1, text: "Percentage (%)", value: "percentage" },
    { key: 2, text: "No of Appearances", value: "appearances" },
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

  const onChange = (e, { value }) => {
    setGradingStyle(value);
  };



  const gradingConditions = () => {
    if (gradingStyle === "percentage") {
      return (
        <>
          <label style={{ color: "#0e2a45" }}>
            Attendance Percentage Pass Mark (%)
          </label>
          <Form.Input
            style={{ height: 50 }}
            placeholder="Attendance Percentage Pass Mark"
          />
        </>
      );
    } else if (gradingStyle === "appearances") {
      return (
        <>
          <label style={{ color: "#0e2a45" }}>
            Number of Appearances Pass Mark (measured in no of appearances)
          </label>
          <Form.Input
            style={{ height: 50 }}
            placeholder="Number of Appearances Pass Mark"
          />
        </>
      );
    } else {
      return null;
    }
  };

  return (
    <>
      <CustomMenu title="Grading System" />
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
            <label style={{ color: "#0e2a45" }}>Grading Style</label>
            <Form.Select
              className="form-field"
              style={{
                height: 50,
                flexDirection: "row",
                alignItems: "center",
                display: "flex",
              }}
              fluid
              options={gradingStyles}
              value={gradingStyle}
              onChange={onChange}
              placeholder="Grading Style"
            />
          </Form.Field>
          <Form.Field>{gradingConditions()}</Form.Field>

          <Button className="login-button">
            <p style={{ fontSize: 15, color: "white" }}>
              Enable Grading System
            </p>
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

export default Grading;
