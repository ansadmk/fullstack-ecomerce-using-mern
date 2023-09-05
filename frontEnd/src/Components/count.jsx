import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Users } from "../Context/Users";

function count({ a }) {
  const nav = useNavigate();
  const { cur } = useContext(Users);
  console.log(a);
  const [temp, setTemp] = useState(a.qty);
  return (
    <>
      <h3 className="text-success">$ {a.price * a.qty}</h3>
      <div>
        {a.qty > 1 ? (
          <Button
            className="me-2 bg-dark border-0"
            onClick={function () {
              setTemp((b) => b - 1);
              a.qty = temp - 1;
              nav(`/main/cart/${cur}`);
            }}
          >
            -
          </Button>
        ) : (
          () => nav(`/main/cart/${cur}`)
        )}
        {a.qty}
        <Button
          className="me-2 bg-dark border-0"
          onClick={() => {
            setTemp((b) => b + 1);
            a.qty = temp;
            nav(`/main/cart/${cur}`);
          }}
        >
          +
        </Button>
      </div>
    </>
  );
}

export default count;
