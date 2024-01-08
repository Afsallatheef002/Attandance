import React, { useState, useEffect } from "react";
import { Container, Row, Col, Offcanvas,Table, Button } from "react-bootstrap";
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';

const LeftBar = () => {
  const [studentdata, setData] = useState({});
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);



  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleopen1 = () => setShow1(true);
  const handleoff = () => setShow1(false);


  const [student, setStudent] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/list');
        console.log(response);
        setStudent(response.data.userData)
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };
    
   


  
  
    fetchData();
  },
  
  []);


  const handleInputChange = (e) => {
    const { name, value, } = e.target;
    setData({
        ...studentdata,
        [name]: value,
    });
}
const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post('/add', studentdata);
        console.log(response.data);
        setShow1(response)
        handleoff();
    } catch (error) {
        console.error('An error occurred:', error);
    }
};

  return (
    <Container fluid className="text-white" >
      <div className=" d-flex justify-content-center py-5">
        <h2>LoriumIpsum</h2>
      </div>
      <Row>
        <Col lg={12} className="py-3"><i class="bi bi-person-fill"></i><label className="ms-2 fw-semibold ">Attendance</label></Col>
        <Col lg={12} className="py-3" onClick={handleopen1}><i class="bi bi-person-fill"></i><label className="ms-2 fw-semibold ">Add Student</label></Col>
        <Modal show={show1} onHide={handleoff}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Student</Modal.Title>
        </Modal.Header>
        <Modal.Body> 
          <div className="row">
            <div className="col">
          <div >Name </div></div>
          <div className="col">
           <input
                autoFocus
                margin="dense"
                id="name"
                className="labelhead"
                name="name"
                label="Student Name"
                type="text"
                fullWidth
                variant="standard"
                onChange={handleInputChange}
              />
              </div>
              </div>
              <br />
              <div className="row"><div className="col">
              <div>Roll Number</div></div>
              <div className="col">
              <input
                autoFocus
                margin="dense"
                id="roll_number"
                label="Roll Number"
                name="rollno"
                type="text"
                fullWidth
                variant="standard"
                onChange={handleInputChange}
              />
              </div>
              </div>
              </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleoff}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>



        <Col lg={12} className="py-3" onClick={handleShow}><i className="bi bi-menu-button-wide"></i><label className="ms-2 fw-semibold ">Report</label></Col>
      </Row>
      <Modal show={show} onHide={handleClose} start>
        <Modal.Header closeButton>
          <Modal.Title>Report</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>Name</th>
          <th>Leave</th>
          <th>Half Day</th>
          <th>Full Day</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {student.map((user, index) => (
          <tr key={index}>
            <td>{user.name}</td>
            <td>{user.leave}</td>
            <td>{user.half}</td>
            <td>{user.full}</td>
            <td>{user.full + (user.half / 2)}</td>
          </tr>
        ))}
      </tbody>
    </Table>


        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default LeftBar;
