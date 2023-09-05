import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { Users } from "../../Context/Users";
import { Card, Col, Row } from "react-bootstrap";

function UsersDetails() {
  const { id } = useParams();
  const { state } = useContext(Users);
  const [dup1] = useState([...state.filter((a) => a.id == id)]);
  const objdup = { ...dup1[0] };
  console.log("addprod");
  return (
    <Row className="bg-dark-subtle h-100  ">
      <Col className="m-auto" lg={3}>
        <Card style={{ maxHeight: "500px", maxWidth: "300px" }}>
          <Card.Body>
            <Card.Title>{objdup.firstname + objdup.lastname}</Card.Title>
            <Card.Text>Firstname:&nbsp;{objdup.firstname}</Card.Text>
            <Card.Text>Lastname:&nbsp;{objdup.lastname}</Card.Text>
            <Card.Text>Email:&nbsp;{objdup.email}</Card.Text>
            <Card.Subtitle>Card items:</Card.Subtitle>

            <Card>
              <ol>
                {objdup.userProduct == "" ? (
                  <h1>no Cartitems</h1>
                ) : (
                  objdup.userProduct.map((a) => <li>{a.name}</li>)
                )}
              </ol>
            </Card>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default UsersDetails;
