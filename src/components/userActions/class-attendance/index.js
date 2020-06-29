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

function ClassAttendanceControl() {
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
                <Icon name="time" size="big" /> CSC 407 Attendance{" "}
              </Header>
              <Modal
                trigger={
                  <Button
                    style={{
                      marginTop: 10,
                      height:50,
                      marginBottom: 10,
                      backgroundColor: "aliceblue",
                      color: "black",
                    }}
                    icon="clock"
                    labelPosition="right"
                    content="Click to set a timer"
                  />
                }
                size="tiny"
              >
                <Modal.Header
                  style={{
                    fontFamily: "Raleway",
                    fontWeight: 100,
                    fontSize: 18,
                    textAlign: "center",
                  }}
                >
                  Set a Timer
                </Modal.Header>
                <Modal.Content>
                  <Modal.Description>
                    <Form>
                      <Form.Field>
                        <label style={{ color: "#0e2a45" }}>Time</label>
                        <Input
                          labelPosition="right"
                          type="text"
                          placeholder="Time"
                        >
                       
                          <input />
                          <Label>minutes</Label>
                        </Input>
                      </Form.Field>
                      <Button className="login-button">
                        <p style={{ fontSize: 15, color: "white" }}>
                          Set Timer
                        </p>
                      </Button>{" "}
                    </Form>
                  </Modal.Description>
                </Modal.Content>
              </Modal>

              <br />
              <Button
                style={{
                 
                  height:50,
                  marginRight:20,
                  backgroundColor: "#aeffc1",
                  color: "black",
                }}
                content="Start Attendance"
                icon="right arrow"
                labelPosition="right"
              />
              <Button
                style={{
                  marginTop: 10,
                  height:50,
                
                  backgroundColor: "#efacad",
                  color: "black",
                }}
                content="Stop Attendance"
                icon="cancel"
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

export default ClassAttendanceControl;
