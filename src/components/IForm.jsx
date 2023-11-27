import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import sbag from "../images/sbag.png";

const IForm = (props) => {
  const initialForm = {
    iname: "",
    quantity: "",
    price: "",
    total: "",
  };

  const [item, setItem] = useState("");

  const onChangeHandler = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Form.Label htmlFor="item" class=" fs-2">
        Angelo's Shopping Cart Application
      </Form.Label>
      <br />
      <br />
      <div class="d-flex justify-content-center">
        <Image src={sbag} height={250} width={210} />
      </div>
      <br />

      <Container>
        <Row className="justify-content-md-center">
          <Col xs lg="4">
            <p class="fs-3">Item Name</p>
          </Col>
          <Col xs lg="4">
            <p class="fs-3">Quantity</p>
          </Col>
          <Col xs lg="4">
            <p class="fs-3">Price</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <input
              name="itemName"
              type="text"
              class="form-control"
              id="exampleInputPassword1"
              value={item.iname}
              width="75%"
              onChange={onChangeHandler}
            />
          </Col>
          <Col md="4">Variable width content</Col>
          <Col xs lg="4">
            3 of 3
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default IForm;
