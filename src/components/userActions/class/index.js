import React from "react";
import {
  Form,
  Segment,
  Button,
  Grid,
  Divider,
  Header,
  Modal,
  Label,
  Icon,
  Input,
} from "semantic-ui-react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

import CustomMenu from "../../CustomMenu";

function Class() {
  const options = [
    { key: 1, text: "CSC 414", value: "csc414" },
    { key: 2, text: "MAT 101", value: "mat101" },
  ];

  return (
    <>
      <CustomMenu title="Start a Class" />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 40,
        }}
      >
        <Form style={{ width: "50%" }}>
          <Form.Field>
            <label style={{ color: "#0e2a45" }}>
              Which class do you want to start
            </label>
            <Form.Select
              className="form-field"
              style={{
                flexDirection: "row",
                alignItems: "center",
                display: "flex",
              }}
              fluid
              search
              options={options}
              placeholder="Course"
            />
          </Form.Field>

          <Link to="/start-class-attendance">
            <Button className="login-button">
              <p style={{ fontSize: 15, color: "white" }}>Next</p>
            </Button>
          </Link>
        </Form>
      </div>
    </>
  );
}

export default Class;
