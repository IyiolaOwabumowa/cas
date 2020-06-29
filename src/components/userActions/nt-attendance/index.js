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
import CustomMenu from "../../CustomMenu";

function NTAttendanceControl() {
  return (
    <>
      <CustomMenu title="Start/Stop Attendance" />

      <Grid style={{ margin: 30 }} stackable columns={2}>
        <Grid.Column>
          <Segment>
            <div
              style={{
                flexDirection: "column",
              }}
            >
              <Header
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "aliceblue",
                  padding: 20,
                }}
              >
                {" "}
                <Icon name="time" size="big" /> Security Department{" "}
              </Header>
            
              <Button
                style={{
                  marginTop: 10,
                  height:50,
                
                  backgroundColor: "rgb(85, 255, 208)",
                  color: "black",
                }}
                content="View Reports"
                icon="folder"
                labelPosition="right"
              />
            </div>
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>
            <Header
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "aliceblue",
                padding: 20,
              }}
            >
              <Icon name="bell" size="big" /> Live Updates
            </Header>

            <p
              style={{
                backgroundColor: "#fff0c3",
                padding: 10,
              }}
            >
              <Icon name="square full" size="small" /> Iyiola Owabumowa just
              clocked in
            </p>
            <p
              style={{
                backgroundColor: "#fff0c3",
                padding: 10,
              }}
            >
              <Icon name="square full" size="small" /> Iyiola Owabumowa just
              clocked in
            </p>
          </Segment>
        </Grid.Column>
      </Grid>
    </>
  );
}
function ChooseDepartment() {
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

          <Button className="login-button">
            <p style={{ fontSize: 15, color: "white" }}>Next</p>
          </Button>
        </Form>
      </div>
    </>
  );
}

export default NTAttendanceControl;
