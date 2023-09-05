import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { Users } from "../../Context/Users";
import { Card, Col, Row, Form, Button } from "react-bootstrap";

function ProductDetails() {
  const { id } = useParams();
  const { product } = useContext(Users);
  const [dup1] = useState([...product.filter((a) => a.id == id)]);
  const [s, setS] = useState(true);
  const objdup = { ...dup1[0] };
  console.log("addprod");
  for (const x in product) {
    if (product[x].id == id) {
      var indexOfProduct = x;
    }
  }
  const handleEdit = (e) => {
    e.preventDefault();
    if (e.target.name.value != "") {
      product[indexOfProduct].name = e.target.name.value;
    }
    if (e.target.price.value != "") {
      product[indexOfProduct].price = e.target.price.value;
    }
    if (e.target.img.value != "") {
      product[indexOfProduct].img = e.target.img.value;
    }

    setS((b) => (b = !b));
    console.log(product);
  };

  return (
    <div className="bg-dark-subtle h-100   ">
      <div className="m-auto d-flex justify-content-center align-items-center h-100">
        <Card style={{ maxHeight: "650px", maxWidth: "300px" }}>
          <Card.Img
            src={objdup.img}
            style={{ maxHeight: "150px", maxWidth: "100px" }}
            className="m-auto"
          />
          <Card.Body >
            <Card.Title>
              <h6>{objdup.name}</h6>
            </Card.Title>
            <Card.Title>
              <h5>${objdup.price}</h5>
            </Card.Title>
            <Card.Footer>
              {" "}
              {s == false ? (
                <form
                  onSubmit={handleEdit}
                  className="d-flex flex-column gap-2"
                >
                  <Form.Control id="name" placeholder="Edit Name" type="text" />{" "}
                  <Form.Control
                    placeholder="change image"
                    id="img"
                    type="text"
                  />
                  <Form.Control
                    placeholder="Edit Price"
                    id="price"
                    type="number"
                  />{" "}
                  <Button type="submit">edit</Button>{" "}
                  <Button onClick={() => setS((b) => (b = !b))}>
                    Dont edit
                  </Button>
                </form>
              ) : (
                <Button onClick={() => setS((b) => (b = false))}>Edit</Button>
              )}{" "}
            </Card.Footer>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default ProductDetails;
