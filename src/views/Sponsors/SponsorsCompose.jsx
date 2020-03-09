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
import { Container, Row, Col, Media } from "reactstrap";

// core components

function SponsorsCompose() {
    return (
        <>
            <center><h1>Merci à tous nos sponsors</h1></center><br/><br/>
            <Container>
                <Row>
                    <Col>
                        <Media src={require("assets/img/logo wavre .png")}/>
                    </Col>
                    <Col>

                    </Col>
                    <Col>

                    </Col>
                    <Col>

                    </Col>
                </Row><br/><br/>
            </Container>
        </>
    );
}

export default SponsorsCompose;
