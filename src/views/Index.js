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
import React, {useState} from "react";

// reactstrap components

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";

import About from "./About/AboutCompose"
import Trajet from "./Trajet/TrajetCompose"
import Sponsors from "./Sponsors/SponsorsCompose"
import ModalPaths from "./Modal"

function Index() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });
  return (
    <div >
      
      <IndexNavbar c={handleClose} s={handleShow} show={show} />
      <IndexHeader />
      <div>
        <About c={handleClose} s={handleShow} show={show} />
        <ModalPaths show={show} handleClose={handleClose} />
        <hr />
        <Trajet />
        <hr />
        <Sponsors />
      </div>

      
    </div>
  );
}

export default Index;
