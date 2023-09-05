import React, { useContext } from "react";
import { Users } from "../../Context/Users";
import { Col, Row, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Userlist() {
  const { state } = useContext(Users);
  const dup = [...state];
  const nav = useNavigate();
  console.log("addprod");
  return (
    <Row className="bg-dark-subtle h-100 overflow-auto ">
      <h1 className="text-center mt-5">Users List</h1>
      <Card className="container w-75   overflow-auto m-auto p-4 mt-0 rounded-5">
        {dup.map((a) => (
          <Card
            className="m-2 p-3 rounded-4 hover"
            onClick={() => nav(`/adminhome/UsersDetails/${a.id}`)}
          >
            {a.firstname + " " + a.lastname} <br /> @{a.username}{" "}
          </Card>
        ))}
      </Card>
    </Row>
  );
}

export default Userlist;
