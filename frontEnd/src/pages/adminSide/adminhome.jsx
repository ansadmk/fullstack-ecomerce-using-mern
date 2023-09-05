import React, { useContext } from "react";
import { Col, Row, Button, Card } from "react-bootstrap";
import { Users } from "../../Context/Users";
import { Outlet, useNavigate } from "react-router-dom";

function adminhome() {
  const {setCur}=useContext(Users)
  console.log("addprod");
  const nav = useNavigate();
  return (
    <Row className="h-100 w-100 m-0 ">
      <Col className="bg-dark z-1 w-25 h-100 " lg={2} md={4} sm={6} xs={6}>
        <h1 className="text-white text-center mt-5">Admin</h1>
        <div className="d-flex flex-column h-100 gap-3 mt-5">
          <Button
            className="bg-dark border-0 hover"
            onClick={() => nav("/adminhome/userlist")}
          >
            Users
          </Button>
          <Button
            className="bg-dark border-0 hover"
            onClick={() => nav("/adminhome/Productlist")}
          >
            Products
          </Button>
        </div>
      </Col>
      <Col className="h-100 p-0 w-75 " >
        <div className=" m-0 h-25 d-flex align-items-center flex-lg-column justify-content-center   ">
          <h1 className="w-25 m-0 fs-1">Hello Admin </h1>{" "}
          <div className="">
            <Button onClick={() => {setCur(b=>b="");nav("/login");}} className="container w-100 ms-5">
              Logout
            </Button>
          </div>
        </div >
        <div className="h-75 w-100 overflow-auto">
        <Outlet />
        </div>
      </Col>
    </Row>
  );
}

export default adminhome;
