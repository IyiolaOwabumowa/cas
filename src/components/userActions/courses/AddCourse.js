import React from "react";
import {
 
  Form,
  
  Button
} from "semantic-ui-react";
import CustomMenu from "../../CustomMenu";

function AddCourse() {
  const options = [
    { key: 1, text: "100 Level", value: "100" },
    { key: 2, text: "200 Level", value: "200" },
    { key: 3, text: "300 Level", value: "300" },
    { key: 4, text: "400 Level", value: "400" },

    { key: 5, text: "MSc 1", value: "MSc1" },
    { key: 6, text: "MSc 2", value: "MSc2" },
    { key: 7, text: "PostGraduate", value: "PG" },
  ];

  const gradingoption = [
   
    { key: 1, text: "No of Appearances", value: "appearance" },
    { key: 2, text: "Percentage Based (%)", value: "percentage" },
  ];

  const departments = [
    { key: 1, text: "Mass Communication", value: "masscom" },
    { key: 2, text: "Computer Science", value: "csc" },
  ];

  const lecturers = [
    { key: 1, text: "Mr Olaoye", value: "2" },
    { key: 2, text: "Dr Olumoye", value: "1" },
  ];

  return (
    <>
      <CustomMenu title="Add Course" />
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
            <label style={{ color: "#0e2a45" }}>Course Title</label>
            <Form.Input style={{ height: 50 }} placeholder="Course Title" />
          </Form.Field>

          <Form.Field>
            <label style={{ color: "#0e2a45" }}>Course Code</label>
            <Form.Input style={{ height: 50 }} placeholder="Course Code" />
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
              options={options}
              placeholder="Level"
            />
          </Form.Field>

          <Form.Field>
                <label style={{ color: "#0e2a45" }}>**Department</label>
                <Form.Select
                  className="form-field"
                  style={{
                    height: 50,
                    flexDirection: "row",
                    alignItems: "center",
                    display: "flex",
                  }}
                  fluid
                  options={departments}
                  placeholder="Select a Department"
                />
              </Form.Field>

      


       

          <Form.Field>
            <label style={{ color: "#0e2a45" }}>Grading Option</label>
            <Form.Select
              className="form-field"
              style={{
                height: 50,
                flexDirection: "row",
                alignItems: "center",
                display: "flex",
              }}
              fluid
              options={gradingoption}
              placeholder="Select a Grading Option"
            />
          </Form.Field>

          <Button className="login-button">
            <p style={{ fontSize: 15, color: "white" }}>
              Add Course
            </p>
          </Button>
        </Form>
      </div>
    </>
  );
}

export default AddCourse;
