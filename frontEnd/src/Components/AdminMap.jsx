import React from "react";
import { Col, Row, Card, Button } from "react-bootstrap";
function AdminMap({ dup1, product, nav, setDup }) {
  return (
    <>
      {dup1 == "" ? (
        <h1>Nothing to see here....</h1>
      ) : (
        dup1.map((a, index) => (
          
          <Card className="m-2 p-3 rounded-4 hover d-flex p-0 m-0 shadow w-100 " style={{ maxHeight: "200px"}}>
            <div onClick={() => nav(`/adminhome/ProductDetails/${a.id}`)} className="d-flex w-100  overflow-auto " >
              {" "}
              <img
                className="  img-fluid"
                style={{ maxHeight: "125px", maxWidth: "75px" }}
                src={a.img}
              />{" "}
              <div className=" ms-5 d-flex flex-column h-50 w-100 ">
                <p>{a.name}</p> <p>${a.price}</p>
              </div>{" "}
            </div>
            <Button
              onClick={() => {
                product.splice(index, 1);
                setDup([...product]);
              }}
            >
              Delete
            </Button>{" "}
          </Card>
        ))
      )}
    </>
  );
}

export default AdminMap;
