import React from "react";
import "../../App.css";
import {
  Form,
  Grid,
  Button,
  Header,
} from "semantic-ui-react";

function Login() {
  return (
    <div className="login-body">
      <Grid textAlign="center" className="login-height" verticalAlign="middle">
        <Grid.Column
          style={{
            maxWidth: 450,
            margin: 30,
          }}
        >
          <Header as="h1" textAlign="center">
            <p style={{ color: "white", marginBottom: 40 }}>
              Caleb University <br /> Attendance System{" "}
              <span style={{ backgroundColor: "#6435c9" }}>[CAS]</span>
            </p>
          </Header>

          <Form
            className="login-form"
            style={{ borderRadius: 2, padding: 40, backgroundColor: "white" }}
            size="large"
          >
            <p style={{ color: "#0e2a4592", marginBottom: 40 }}>
              Enter your login details
            </p>
            <Form.Field>
              <Form.Input style={{ height: 50 }} placeholder="Email Address" />
            </Form.Field>
            <Form.Field>
              <Form.Input style={{ height: 50 }} placeholder="Password" />
            </Form.Field>
            <Button className="login-button" onClick={()=>{console.log("click")}}>
              <p style={{ fontSize: 15, color: "white" }}>
                Login to your account
              </p>
            </Button>
          </Form>
        </Grid.Column>
      </Grid>
    </div>
  );
}

export default Login;
