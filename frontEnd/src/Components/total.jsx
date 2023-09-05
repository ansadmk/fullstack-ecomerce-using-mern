import React, { useContext } from "react";
import { Users } from "../Context/Users";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Comptotal() {
  var { state, cur, Total } = useContext(Users);
  const dup = [...state];
  const currentUser = dup.filter((a) => a.id == cur);
  const obj = currentUser[0];
  const obj2 = { ...obj };
  const nav = useNavigate();
  window.onpopstate = () => {
    cur != "Admin" ? nav(`/main/${cur}`) : nav(`/adminhome`);
  };
  for (const x in obj2.userProduct) {
    Total = Total + obj2.userProduct[x].qty * obj2.userProduct[x].price;
    var id = Total;
  }

  return (
    <>
      Total Amount to be paid :<h1 className="text-success">${Total}</h1>{" "}
      <Button
        className="rounded"
        onClick={() => {
          nav(`/main/pay/${id}`);
        }}
      >
        Proceed to Payment
      </Button>
    </>
  );
}

export default Comptotal;
