import React, { useState } from "react";
import { Col, Container, Modal, Row } from "react-bootstrap";
import registerd from "../assets/images/registerd_img.png";
import close from "../assets/images/close-circle.png";
import "./RegisterModal.css";

const RegisterModal = ({ show, onHide }) => {
  return (
    <>
      <Modal
        show={show}
        onHide={onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="RegisteredModal"
      >
        <button type="button" className="btn-close" onClick={onHide}>
          <img src={close} alt="close-icon" className="img-fluid" />
        </button>
        <Modal.Body>
          <Container>
            <Row>
              <Col md={7}>
                <div class="text py-5">
                  <h2>
                    Thank You for <br />
                    Registering With Emembrs
                  </h2>
                  <p>
                    Please activate your account by confirming your email
                    address first! We have sent you an confirmation email
                  </p>
                  <a href="#" class="btn btn-primary">
                    Go To Your Mail Box
                  </a>
                </div>
              </Col>
              <Col md={5}>
                <img
                  src={registerd}
                  alt="register"
                  className="img-fluid py-5"
                />
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default RegisterModal;
