/*!

=========================================================
* Paper Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function IndexHeader() {
  return (
    <>
      <div
        className="page-header section-dark"
        style={{
          backgroundImage:
            "url(" + require("assets/img/img.jpg") + ")"
        }}
      >
        <div className="filter" />
        <div className="content-center">
          <Container>
            <div className="title-brand">
              <h1 className="presentation-title">Les 6km de Bierges</h1>
            </div>
            <h2 className="presentation-subtitle text-center" id="about">
              Organisée par les horizons de la 40e de Bierges
            </h2>
              <Row className="presentation-subtitle text-center mt-5">
                <Col className="mt-3">
                <img src={require("assets/img/cal.png")} height="45" width="auto"></img><h6 className="mt-2" style={{fontSize:"14px"}}>9 mai de 10h à 12h</h6>
                </Col>
                <Col className="mt-3">
                <img src={require("assets/img/marker.png")} height="45" width="auto"></img><h6 className="mt-2" style={{fontSize:"14px"}}>Salle Jules Colette à Bierges</h6>
                </Col>
                <Col className="mt-3">
                <img src={require("assets/img/dist.png")} height="45" width="auto"></img><h6 className="mt-2" style={{fontSize:"14px"}}>6km de course</h6>
                </Col>
              </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default IndexHeader;
