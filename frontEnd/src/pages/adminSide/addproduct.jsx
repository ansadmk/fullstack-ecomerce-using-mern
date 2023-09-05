import React, { useContext } from "react";
import { Row, Card, Col, Form, Button } from "react-bootstrap";
import { Users } from "../../Context/Users";
import { useNavigate } from "react-router-dom";

function Addproduct() {
  const { product, setProduct } = useContext(Users);
  const nav = useNavigate();
  console.log("addprod");
  const handleSubmit = (e) => {
    e.preventDefault();

    const catagory = e.target.catagory.value;
    const name = e.target.name.value;
    const price = e.target.price.value;
    const img = e.target.img.value;
    if (catagory != "") {
      setProduct([
        ...product,
        {
          id: Math.random(),
          qty: 1,
          category: catagory,
          name: name,
          price: price,
          img: img,
          
        },
      ]);
      nav("/adminhome/Productlist");  
    } else {
      alert("catagory required");
    }
    e.target.reset();
  };
  return (
    <Row className="bg-dark-subtle h-100  ">
      <Col className="m-auto" lg={3}>
        <Card style={{ maxHeight: "650px", maxWidth: "300px" }}>
          <Card.Body>
            <Card.Title>
              <form
                action=""
                onSubmit={handleSubmit}
                className="d-flex flex-column gap-4"
              >
                <Form.Select id="catagory" required>
                  <option value="">Select catagory</option>
                  <option value="cat">Cat</option>
                  <option value="dog">Dog</option>
                </Form.Select>
                <Form.Control
                  type="text"
                  placeholder="Name of the product"
                  id="name"
                  required
                />
                <Form.Control
                  type="number"
                  placeholder="Price"
                  id="price"
                  required
                />
                <Form.Control
                  type="text"
                  placeholder="image url example: http://www.example.com/img"
                  id="img"
                  required
                />
                <Button type="submit">Add</Button>
              </form>
            </Card.Title>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default Addproduct;
