import React, { useState } from "react";
import {
  Form,
  Grid,
  Icon,
  Dropdown,
  Button,
  Header,
  Table,
  Modal,
  Message,
} from "semantic-ui-react";
import CustomMenu from "../../CustomMenu";

function Reports() {
  const [course, setCourse] = useState("");
  const NTStaffAttendance = [
    {
      id: 1,
      serialNo: 1,
      staffName: "Iyiola",
      gender: "Male",
      department: "Cleaning",
      daysPresent: 10,
      workingDays: 20,
    },
  ];

  
  const ntstaffAPI = [
    { key: 1, text: "Iyiola", value: 1 },
    { key: 2, text: "Ajose", value: 2 },
  ];

  const departments = [
    { key: 1, text: "Mass Communication", value: "masscom" },
    { key: 2, text: "Computer Science", value: "csc" },
  ];

  const courseCodes = [
    { key: 1, text: "CSC 414", value: "csc414" },
    { key: 2, text: "MAT 101", value: "mat101" },
  ];

  const studentAttendance = [{
    serialNo: 1,
    studentName: "Iyiola",
    department: "Computer Science",
    level :  "400 Level",
    percentage: "50%",
    appearances: "4 out of 5 classes",
    result: "passed"

  }]


  const options = [
    { key: 1, text: "100 Level", value: "100" },
    { key: 2, text: "200 Level", value: "200" },
    { key: 3, text: "300 Level", value: "300" },
    { key: 4, text: "400 Level", value: "400" },

    { key: 5, text: "MSc 1", value: "MSc1" },
    { key: 6, text: "MSc 2", value: "MSc2" },
    { key: 7, text: "PostGraduate", value: "PG" },
  ];

  const EditFieldsModal = (props) => {
    return (
      <Modal trigger={<a href="#">Edit Course</a>} size="tiny">
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
          <a href="#" style={{ color: "red", marginLeft: 15 }}>
            Delete
          </a>
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



    const attendanceList= studentAttendance.map((item) => {
    return (
      <Table.Row>
        <Table.Cell>{item.serialNo}</Table.Cell>
        <Table.Cell>{item.studentName}</Table.Cell>
        <Table.Cell>{item.department}</Table.Cell>
        <Table.Cell>{item.level}</Table.Cell>
        <Table.Cell>{item.percentage}</Table.Cell>
        <Table.Cell>{item.appearances}</Table.Cell>
        <Table.Cell>
          <Modal
            trigger={
              <span
                style={{ cursor: "pointer", color: "blue", marginRight: 10 }}
              >
                Download {item.studentName}'s records
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
              Download {item.studentName}'s records
            </Modal.Header>
            <Modal.Content>
              <Modal.Description>
                <Form>
                  <Form.Field>
                    <label style={{ color: "#0e2a45" }}>Date Range</label>
                    <Form.Input
                      style={{ height: 50 }}
                      placeholder="Slect a Date Range"
                    />
                  </Form.Field>

                  <Button className="login-button" style={{ marginTop: 20 }}>
                    <p style={{ fontSize: 15, color: "white" }}>
                      Download this report
                    </p>
                  </Button>
                </Form>
              </Modal.Description>
            </Modal.Content>
          </Modal>
        </Table.Cell>
      </Table.Row>
    );
  });

  return (
    <>
      <CustomMenu title="Attendance Report" />

      <Message style={{ margin: 20 }} info>
        <Message.Header>Attendance Report for CSC 401</Message.Header>
        <p>
          <ul>
            <li>
              <b>50 Students </b>are taking this course
            </li>
            <li>
             Class Attendance has an
              <b> average appearance of 5 out of 7 lectures</b>
            </li>
            <li>
             And an
              <b> average of 74% attendance</b>
            </li>
          </ul>
          <b>Result is based on your set grading system (Percentage) </b>

        </p>
      </Message>

      <Table unstackable style={{}} celled>
        <Table.Header fullWidth>
          <Table.Row>
            <Table.HeaderCell colSpan="4">
              <Form.Select
                className="form-field"
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  display: "flex",
                }}
                options={courseCodes}
                value={course}
                placeholder="Course"
              />
            </Table.HeaderCell>
            <Table.HeaderCell colSpan="8">
              <Button floated="right" className="form-button-green">
                <p style={{ fontSize: 15, color: "white" }}>
                  Print Eligible Students
                </p>
              </Button>

              <Button floated="right" className="form-button-purple">
                <p style={{ fontSize: 15, color: "white" }}>Print All</p>
              </Button>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell> S/N</Table.HeaderCell>
            <Table.HeaderCell> Student's Name</Table.HeaderCell>
            <Table.HeaderCell>Department</Table.HeaderCell>
            <Table.HeaderCell>Level</Table.HeaderCell>
            <Table.HeaderCell>Percentage (%)</Table.HeaderCell>
            <Table.HeaderCell>Number of Appearances (Out of 7)</Table.HeaderCell>
            <Table.HeaderCell>Result </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
 

        <Table.Body>{attendanceList}</Table.Body>
      </Table>
    </>
  );



    // const reportList= reports.map((item) => {
  //   return (
  //     <Table.Row>
  //       <Table.Cell>{item.serialNo}</Table.Cell>
  //       <Table.Cell>{item.staffName}</Table.Cell>
  //       <Table.Cell>{item.gender}</Table.Cell>
  //       <Table.Cell>{item.department}</Table.Cell>
  //       <Table.Cell>{item.daysPresent}</Table.Cell>
  //       <Table.Cell>{item.workingDays}</Table.Cell>
  //       <Table.Cell>
  //         <Modal
  //           trigger={
  //             <span
  //               style={{ cursor: "pointer", color: "blue", marginRight: 10 }}
  //             >
  //               Download {item.staffName}'s records
  //             </span>
  //           }
  //           size="tiny"
  //         >
  //           <Modal.Header
  //             style={{
  //               fontFamily: "Raleway",
  //               fontWeight: 100,
  //               fontSize: 18,
  //               textAlign: "center",
  //             }}
  //           >
  //             Download {item.staffName}'s records
  //           </Modal.Header>
  //           <Modal.Content>
  //             <Modal.Description>
  //               <Form>
  //                 <Form.Field>
  //                   <label style={{ color: "#0e2a45" }}>Date Range</label>
  //                   <Form.Input
  //                     style={{ height: 50 }}
  //                     placeholder="Slect a Date Range"
  //                   />
  //                 </Form.Field>

  //                 <Button className="login-button" style={{ marginTop: 20 }}>
  //                   <p style={{ fontSize: 15, color: "white" }}>
  //                     Download this report
  //                   </p>
  //                 </Button>
  //               </Form>
  //             </Modal.Description>
  //           </Modal.Content>
  //         </Modal>
  //       </Table.Cell>
  //     </Table.Row>
  //   );
  // });




  // return (
  //   <>
  //     <CustomMenu title="Non-Teaching Staff Attendance Report" />

  //     <Message style={{ margin: 20 }} info>
  //       <Message.Header>
  //         Attendance Report for Non Teaching Staff
  //       </Message.Header>
  //       <p>
  //         <ul>
  //           <li>
  //             <b>50 Staff </b>are currently registered with CAS
  //           </li>
  //           <li>
  //             Attendance has an
  //             <b> average appearance of 5 out of 7 working days</b>
  //           </li>
  //         </ul>
  //       </p>
  //     </Message>

  //     <Table unstackable style={{ marginLeft: 10 }} celled>
  //       <Table.Header fullWidth>
  //         <Table.Row>
  //           <Table.HeaderCell colSpan="8">
  //             <Button floated="right" className="form-button-purple">
  //               <p style={{ fontSize: 15, color: "white" }}>
  //                 Download this report
  //               </p>
  //             </Button>
  //           </Table.HeaderCell>
  //         </Table.Row>
  //       </Table.Header>
  //       <Table.Header>
  //         <Table.Row>
  //           <Table.HeaderCell>S/N</Table.HeaderCell>
  //           <Table.HeaderCell>Staff's Name</Table.HeaderCell>
  //           <Table.HeaderCell>Gender</Table.HeaderCell>

  //           <Table.HeaderCell>Department</Table.HeaderCell>
  //           <Table.HeaderCell>Days Present</Table.HeaderCell>
  //           <Table.HeaderCell>Total Working Days</Table.HeaderCell>
  //           <Table.HeaderCell>
  //             Individual Records <br />
  //             <strong>
  //               <em>(Includes Clock-In and Clock-Out)</em>
  //             </strong>
  //           </Table.HeaderCell>
  //         </Table.Row>
  //       </Table.Header>

  //       <Table.Body>{reportList}</Table.Body>
  //     </Table>
  //   </>
  // );
}

export default Reports;
