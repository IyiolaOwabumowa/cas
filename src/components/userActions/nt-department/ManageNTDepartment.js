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

function ManageNTDepartment() {
  const NTDepartmentsAPI = [
    {
      id: 1,
      NTDepartmentName: "Cleaning Services"
    }  ];

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

  const colleges = [
    { key: 1, text: "COPAS", value: "copas" },
    { key: 2, text: "COLENSMA", value: "colensma" },
    { key: 3, text: "CASMAS", value: "casmas" },
    { key: 4, text: "COPOS", value: "copos" },
  ];

  const renderLabel = (label) => ({
    color: "purple",
    content: `${label.text}`,
    icon: "check",
  });

  // const handleClose = () => {
  //   setShowModal(false);
  // };

  function onSubmitForm(e) {
    e.preventDefault();
    console.log("form was submitted");
  }

  const EditFieldsModal = (props) => {
    const [NTDepartmentName, setNTDepartmentName] = useState("");

    const handleChange = (e, { value }) => {
      console.log(value);
      setNTDepartmentName(value);
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
          Update {props.NTDepartmentName}'s details
        </Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <Form onSubmit={onSubmitForm}>
              <Form.Field>
                <label style={{ color: "#0e2a45" }}>
                  Non-Teaching Staff Department Name
                </label>
                <Form.Input
                  style={{ height: 50 }}
                  placeholder="Non-Teaching Staff Department Name"
                  value={NTDepartmentName}
                  onChange={handleChange}
                />
              </Form.Field>
              <Form.Field>
                <label style={{ color: "#0e2a45" }}>
                  Staff Manager's User Name
                </label>
                <Form.Input style={{ height: 50 }} placeholder="User Name" />
              </Form.Field>
              <Message
                style={{ marginTop: 20 }}
                info
                header={"Staff Managers login details"}
                list={["Email Address: ola@gmail.com", "Password: subomi"]}
              ></Message>
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
          <p>Are you sure you want to delete {props.NTDepartmentName}</p>
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

  const NTDepartmentList = NTDepartmentsAPI.map((item) => {
    return (
      <Table.Row key={item.id}>
        <Table.Cell>
          <React.Fragment>{item.NTDepartmentName}</React.Fragment>
        </Table.Cell>

        <Table.Cell>
          <EditFieldsModal
            id={item.id}
            NTDepartmentName={item.NTDepartmentName}
          />
          <DeleteFieldsModal
            id={item.id}
            NTDepartmentName={item.NTDepartmentName}
          />
        </Table.Cell>
      </Table.Row>
    );
  });

  return (
    <>
      <CustomMenu title="Manage NT Staff Departments" />
      <Grid centered>
        <Table unstackable style={{ width: "80%", marginTop: 30 }} celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>NT Staff Department</Table.HeaderCell>

              <Table.HeaderCell>Actions</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>{NTDepartmentList}</Table.Body>
        </Table>
      </Grid>
    </>
  );
}

export default ManageNTDepartment;
