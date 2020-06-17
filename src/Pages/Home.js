import React, { Component } from "react";
import { Col, Button, FormGroup, Input, Card, CardBody } from "reactstrap";
import "../stlye.css";
import bday from "../Assets/bday.png";
import db from "../services/firebase";

class Home extends Component {
  getData() {
    const name = document.getElementById("name");
    const wish = document.getElementById("wish");
    const msg = document.getElementById("msg");

    if (name.value === "" || wish.value === "") {
      alert("Say your Name or wish");
      return;
    }

    db.collection("wishes-ilk")
      .add({
        Name: name.value,
        Wish: wish.value,
        Message: msg.value,
      })
      .then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
      });

    name.value = "";
    wish.value = "";
    msg.value = "";

    alert("Thank You!😊");
  }

  render() {
    return (
      <React.Fragment>
        <center>
          <img src={bday} className="pic" alt="Happy Birthday" />
        </center>

        <div className="box">
          <Card>
            <CardBody>
              <h2>Give your wishes</h2>
              <FormGroup row>
                <Col sm={10}>
                  <Input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter your Name"
                  />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Col sm={10}>
                  <Input
                    type="text"
                    name="wish"
                    id="wish"
                    placeholder="Wish (eg : Happy Birthday!) "
                  />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Col sm={10}>
                  <Input
                    type="textarea"
                    name="text"
                    id="msg"
                    placeholder="words to ilakkiya"
                  />
                </Col>
              </FormGroup>

              <FormGroup>
                <Col>
                  <Button color="info" onClick={this.getData}>
                    Submit
                  </Button>
                </Col>
              </FormGroup>
            </CardBody>
          </Card>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
