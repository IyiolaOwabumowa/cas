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
  Table,
  Modal,
  Label,
} from "semantic-ui-react";
import CustomMenu from "../../CustomMenu";

function ManageNonTeachingStaff() {
  const ntstaffAPI = [
    {
      id: 1,
      staffName: "Iyiola",
      gender: "Male",
      workingDays: 5,
      department: "Cleaning"
    },
    {
      id: 2,
      staffName: "Ajose",
      gender: "Female",
      workingDays: 10,
      department: "Security"
    }
   
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
    const [showScan, setShowScan] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [staffNameVal, setStaffNameVal] = useState("");

    const handleChange = (e, { value }) => {
      console.log(value);
      staffNameVal(value);
    };

    return (
      <Modal
        trigger={
          <span style={{ cursor: "pointer", color: "purple", marginRight: 10 }}>
            Edit Staff
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
          Update {props.staffName}'s details
        </Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <Form onSubmit={onSubmitForm}>
            <Form.Field>
            <label style={{ color: "#0e2a45" }}>Staff Name</label>
            <Form.Input style={{ height: 50 }} placeholder="Staff Name" />
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
            <label style={{ color: "#0e2a45" }}>Total Number of Working Days</label>
            <Form.Input style={{ height: 50 }} placeholder="Working Days" />
          </Form.Field>
              <Form.Field style={{ marginTop: 30 }}>
                {showScan && (
                  <>
                    <label style={{ color: "#0e2a45" }}>
                      Keep impressing the finger until the bar turns green
                    </label>

                    <Progress percent={60} indicating />
                  </>
                )}
              </Form.Field>

              <Form.Field>
                <Button
                  className="scan-button"
                  style={{ marginBottom: 10, marginTop: 10, width:"100%" }}
                  onClick={(e) => {
                    e.preventDefault();

                    setShowScan(true);
                  }}
                >
                  <p style={{ fontSize: 15, color: "white" }}>
                    Start another fingerprint scan
                  </p>
                </Button>
                <Button
                  className="scan-button"
                  style={{ marginBottom: 10, marginTop: 5, width:"100%" }}
                  onClick={(e) => {
                    e.preventDefault();

                    setShowScan(true);
                  }}
                >
                  <p style={{ fontSize: 15, color: "white" }}>
                    Revert to old fingerprint
                  </p>
                </Button>
              </Form.Field>

              <Button className="login-button" style={{marginTop: 20}}>
                <p style={{ fontSize: 15, color: "white" }}>Update Staff Enrollment</p>
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
          <span style={{ cursor: "pointer", color: "red" }}>Delete</span>
        }
        size="tiny"
      >
        <Header icon="trash" content="Delete Staff" />
        <Modal.Content>
          <p>Are you sure you want to delete {props.staffName}</p>
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

  const ntstaffList = ntstaffAPI.map((item) => {
    return (
      <Table.Row key={item.id}>
        <Table.Cell>
          <React.Fragment>{item.staffName}</React.Fragment>

        
        </Table.Cell>
        <Table.Cell>{item.gender}</Table.Cell>
        <Table.Cell>{item.workingDays}</Table.Cell>
        <Table.Cell>{item.department}</Table.Cell>
        <Table.Cell>
          <EditFieldsModal id={item.id} staffName={item.staffName} />
          <DeleteFieldsModal id={item.id} staffName={item.staffName} />
        </Table.Cell>
      </Table.Row>
    );
  });

  return (
    <>
      <CustomMenu title="Manage Non-Teaching Staff" />
      <Grid centered>
        <Table unstackable style={{ width: "80%", marginTop: 30 }} celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Staff Name</Table.HeaderCell>
              <Table.HeaderCell>Gender</Table.HeaderCell>
              <Table.HeaderCell>Total No of Working Days</Table.HeaderCell>
              <Table.HeaderCell>Department</Table.HeaderCell>
              <Table.HeaderCell>Actions</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>{ntstaffList}</Table.Body>
        </Table>
      </Grid>
    </>
  );
}

export default ManageNonTeachingStaff;
