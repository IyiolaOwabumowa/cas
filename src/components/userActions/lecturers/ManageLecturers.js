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

function ManageLecturers() {
  const lecturersAPI = [
    {
      id: 1,
      lecturerName: "Peter Oduroye",
      gender: "Male",

      college: "COPAS",
      coursesLectured: ["CSC 402", "MAT 201"],
    },
    {
      id: 2,
      lecturerName: "Nosa Owens-Ibie",
      gender: "Male",

      college: "CASMAS",
      coursesLectured: ["GST 202", "MAS 301"],
    },
  ];

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
    const [lecturerName, setLecturerName] = useState("");

    const handleChange = (e, { value }) => {
      console.log(value);
      setLecturerName(value);
    };

    return (
      <Modal
        trigger={
          <span style={{ cursor: "pointer", color: "purple", marginRight: 10 }}>
            Edit Lecturer
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
          Update {props.lecturerName}'s details
        </Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <Form onSubmit={onSubmitForm}>
            <Form.Field>
            <label style={{ color: "#0e2a45" }}>Lecturer Name</label>
            <Form.Input
              style={{ height: 50 }}
              placeholder="Lecturer Name"
              value={lecturerName}
              onChange={handleChange}
            />
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
            <label style={{ color: "#0e2a45" }}>Email</label>
            <Form.Input style={{ height: 50 }} placeholder="Email Address" />
          </Form.Field>

          <Form.Field>
            <label style={{ color: "#0e2a45" }}>Department</label>

            <Dropdown
              selection
              search
              fluid
              options={departments}
              placeholder="Choose an option"
            />
          </Form.Field>

          <Form.Field>
            <label style={{ color: "#0e2a45" }}>Courses Being Lectured</label>

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

          <Message
            style={{ marginTop: 20 }}
            info
            header={'CAS Login Details for ' + lecturerName}
            list={[
              "Email Address: ola@gmail.com",
              "Password: subomi",
            ]}
          >
           
          </Message>

          <Button className="login-button">
            <p style={{ fontSize: 15, color: "white" }}>Add Lecturer</p>
          </Button> </Form>
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
        <Header icon="trash" content="Delete Course" />
        <Modal.Content>
          <p>Are you sure you want to delete {props.lecturerName}</p>
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

  const lecturersList = lecturersAPI.map((item) => {
    return (
      <Table.Row key={item.id}>
        <Table.Cell>
          <React.Fragment>{item.lecturerName}</React.Fragment>
        </Table.Cell>
        <Table.Cell>{item.gender}</Table.Cell>
        <Table.Cell>{item.college}</Table.Cell>
        <Table.Cell>
          {item.coursesLectured.map((label) => {
            return (
              <Label color="purple" horizontal>
                {label}
              </Label>
            );
          })}
        </Table.Cell>
        <Table.Cell>
          <EditFieldsModal id={item.id} lecturerName={item.lecturerName} />
          <DeleteFieldsModal id={item.id} lecturerName={item.lecturerName} />
        </Table.Cell>
      </Table.Row>
    );
  });

  return (
    <>
      <CustomMenu title="Manage Lecturers" />
      <Grid centered>
        <Table unstackable style={{ width: "80%", marginTop: 30 }} celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Lecturer's Name</Table.HeaderCell>
              <Table.HeaderCell>Gender</Table.HeaderCell>
              <Table.HeaderCell>College</Table.HeaderCell>
              <Table.HeaderCell>Courses Lectured</Table.HeaderCell>
              <Table.HeaderCell>Actions</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>{lecturersList}</Table.Body>
        </Table>
      </Grid>
    </>
  );
}

export default ManageLecturers;
