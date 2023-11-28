import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import sbag from "../images/sbag.png";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

const IForm = (props) => {
  const initialForm = {
    iname: "",
    quantity: 1,
    price: 0,
    subtotal: 0.0,
  };

  const [item, setItem] = useState(initialForm);

  const onChangeHandler = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  const onBlurHandler = (e) => {
    if (!isNaN(item.quantity) && !isNaN(item.price)) {
      item.subtotal = item.quantity * item.price;
    }
    console.log(item.quantity);
    console.log(item.price);
    console.log(item.subtotal);
  };

  return (
    <>
      <Form.Label htmlFor="item" className=" fs-2">
        Angelo's Shopping Cart Application
      </Form.Label>
      <br />
      <br />
      <div className="d-flex justify-content-center">
        <Image src={sbag} height={250} width={210} />
      </div>
      <br />

      <Container>
        <Row xs={2} md={4} lg={6}>
          <Col xs lg="3">
            <p className="fs-3">Item Name</p>
          </Col>
          <Col md={{ span: 6, offset: 0 }}>
            <p className="fs-3">Quantity</p>
          </Col>
          <Col>
            <p className="fs-3">Price</p>
          </Col>
          <Col xs lg="3">
            <p className="fs-3">Sub Total</p>
          </Col>
        </Row>
        <Row xs={2} md={4} lg={6}>
          <Col xs lg="3">
            <input
              name="itemName"
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              value={item.iname}
              onChange={onChangeHandler}
            />
          </Col>
          <Col md={{ span: 6, offset: 0 }}>
            <Form.Control
              type="number"
              className="form-control"
              value={item.quantity}
              onChange={onChangeHandler}
              onBlur={onBlurHandler}
            />
          </Col>
          <Col>
            <InputGroup className="mb-3">
              <InputGroup.Text>$</InputGroup.Text>
              <Form.Control
                aria-label="Dollar amount (with dot and two decimal places)"
                value={item.price}
                type="number"
                className="form-control"
                onChange={onChangeHandler}
                onBlur={onBlurHandler}
              />
            </InputGroup>
          </Col>
          <Col>
            <Form.Control
              type="number"
              placeholder="0.00"
              aria-label="Disabled input example"
              value={item.subtotal}
              disabled
              readOnly
            />
          </Col>
          <Col>
            <Button variant="outline-success">Add to Shopping List</Button>{" "}
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default IForm;
