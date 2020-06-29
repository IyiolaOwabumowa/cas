import React from "react";
import {
  Form,
  Grid,
  Icon,
  Button,
  Header,
  Table,
  Modal,
} from "semantic-ui-react";
import CustomMenu from "../../CustomMenu";

function ManageCourses() {
  const courseAPI = [
    {
      id: 1,
      courseTitle: "Introduction to Mathematical Methods I",
      courseCode: "MAT 101",
      level: "100 Level",
    },
    {
      id: 2,
      courseTitle: "English Language I",
      courseCode: "ENG 101",
      level: "100 Level",
    },
  ];
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

  const EditFieldsModal = (props) => {
    return (
      <Modal
        trigger={
          <Button style={{ marginTop: 10, marginRight: 10 }}>
            Edit Course
          </Button>
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
          Update {props.courseTitle}
        </Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <Form>
              <Form.Field>
                <label style={{ color: "#0e2a45" }}>{props.field1}</label>
                <Form.Input style={{ height: 50 }} placeholder={props.field1} />
              </Form.Field>

              <Form.Field>
                <label style={{ color: "#0e2a45" }}>{props.field2}</label>
                <Form.Input style={{ height: 50 }} placeholder={props.field2} />
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
                  {props.buttonText}
                </p>
              </Button>
            </Form>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    );
  };

  const DeleteFieldsModal = (props) => {
    return (
      <Modal
        trigger={
          <Button
            style={{ backgroundColor: "red", color: "white", marginTop: 10 }}
          >
            Delete
          </Button>
        }
        size="tiny"
      >
        <Header icon="trash" content="Delete Course" />
        <Modal.Content>
          <p>Are you sure you want to delete {props.courseTitle}</p>
        </Modal.Content>
        <Modal.Actions>
          <Button basic color="red" inverted>
            <Icon name="remove" /> No
          </Button>
          <Button color="green" inverted>
            <Icon name="checkmark" /> Yes
          </Button>
        </Modal.Actions>
      </Modal>
    );
  };

  const courseList = courseAPI.map((item) => {
    return (
      <Table.Row key={item.id}>
        <Table.Cell>{item.courseTitle}</Table.Cell>
        <Table.Cell>{item.courseCode}</Table.Cell>
        <Table.Cell>{item.level}</Table.Cell>
        <Table.Cell>
          <EditFieldsModal
            id={item.id}
            courseTitle={item.courseTitle}
            field1="Course Title"
            field2="Course Code"
            buttonText="Update this Course"
          />
          <DeleteFieldsModal id={item.id} courseTitle={item.courseTitle} />
        </Table.Cell>
      </Table.Row>
    );
  });

  return (
    <>
      <CustomMenu title="Manage Courses" />
      <Grid centered>
        <Table unstackable style={{ width: "80%", marginTop: 30 }} celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Course Title</Table.HeaderCell>
              <Table.HeaderCell>Course Code</Table.HeaderCell>
              <Table.HeaderCell>Level</Table.HeaderCell>
              <Table.HeaderCell>Actions</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>{courseList}</Table.Body>
        </Table>
      </Grid>
    </>
  );
}

export default ManageCourses;
