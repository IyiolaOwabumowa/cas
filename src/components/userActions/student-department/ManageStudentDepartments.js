import React, { useState } from "react";
import {
  Dropdown,
  Checkbox,
  Progress,
  Form,
  Grid,
  Icon,
  Button,
  Header,
  Message,
  Table,
  Modal,
  Label,
} from "semantic-ui-react";
import CustomMenu from "../../CustomMenu";

function ManageStudentDepartment() {

  const departmentsAPI = [
    { key: 1, studentDepartment: "Mass Communication", value: "masscom" },
    { key: 2, studentDepartment: "Computer Science", value: "csc" },
  ];
  function onSubmitForm(e) {
    e.preventDefault();
    console.log("form was submitted");
  }

  const EditFieldsModal = (props) => {
    const [studentDepartment, setStudentDepartment] = useState("");

    const handleChange = (e, { value }) => {
      console.log(value);
      setStudentDepartment(value);
    };

    return (
      <Modal
        trigger={
          <span style={{ cursor: "pointer", color: "purple", marginRight: 10 }}>
            Edit Department
          </span>
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
          Update {props.studentDepartment}'s details
        </Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <Form onSubmit={onSubmitForm}>
              <Form.Field>
                <label style={{ color: "#0e2a45" }}>
                 Department Name
                </label>
                <Form.Input
                  style={{ height: 50 }}
                  placeholder="Department Name"
                  value={studentDepartment}
                  onChange={handleChange}
                />
              </Form.Field>
          
              <Button className="login-button">
                <p style={{ fontSize: 15, color: "white" }}>
                  Update Department
                </p>
              </Button>{" "}
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
          <span style={{ cursor: "pointer", color: "red" }}>Delete</span>
        }
        size="tiny"
      >
        <Header icon="trash" content="Delete Department" />
        <Modal.Content>
          <p>Are you sure you want to delete {props.studentDepartment}</p>
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

  const departmentList = departmentsAPI.map((item) => {
    return (
      <Table.Row key={item.id}>
        <Table.Cell>
          <React.Fragment>{item.studentDepartment}</React.Fragment>
        </Table.Cell>

        <Table.Cell>
          <EditFieldsModal
            id={item.id}
            studentDepartment={item.studentDepartment}
          />
          <DeleteFieldsModal
            id={item.id}
            studentDepartment={item.studentDepartment}
          />
        </Table.Cell>
      </Table.Row>
    );
  });

  return (
    <>
      <CustomMenu title="Manage Student Departments" />
      <Grid centered>
        <Table unstackable style={{ width: "80%", marginTop: 30 }} celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Student Department</Table.HeaderCell>

              <Table.HeaderCell>Actions</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>{departmentList}</Table.Body>
        </Table>
      </Grid>
    </>
  );
}

export default ManageStudentDepartment;
