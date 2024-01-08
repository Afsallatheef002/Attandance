import React from "react";
import { Row, Col, InputGroup, Form } from "react-bootstrap";


const TopBar = () => {
    return (
        <Row>
            <Col xs={12} className="top-bar my-3 text-white py-3">
                <Row>
                    <Col xs={4} className="d-flex justify-content-center">
                        <h5>Student Attendance</h5>
                    </Col>
                    <Col className="d-flex justify-content-end">
                        <InputGroup className=" w-50">
                            <InputGroup.Text className="bg-dark border-0 "><i class="bi bi-search text-white"></i></InputGroup.Text>
                            <Form.Control
                                placeholder="Username"
                                className="bg-dark border-0"
                            />
                        </InputGroup>
                        <i className="bi bi-bell fs-5 mx-3"></i>
                        <i className="bi bi-gear-fill fs-5 me-5"></i>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
};

export default TopBar;
