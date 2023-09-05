import { Button } from "react-bootstrap";
 
import { memo, useContext, useState } from "react";

import { Users } from "../Context/Users";
import Count from "./count";
import { useNavigate } from "react-router-dom";

function CartMap({ value, index }) {
  const [dummy, setDummy] = useState(1);
  const { state, cur } = useContext(Users);
  const nav = useNavigate();

  return (
    <>
      {value.map((a, i) => (
        <div
          
          className="m-auto border-0 mt-5 d-flex p-3 gap-1 row bg-white "
        >
          <img
            src={a.img}
            style={{ maxHeight: "500px", maxWidth: "300px" }}
            className="rounded-4 img-fluid ms-3 col-6 "
          />
          <div className="d-flex flex-column  col-12 container col-lg-6">
            <div className="">
              <h1>{a.name}</h1>
            </div>
            <Count a={a} />
            <Button
              className="mt-3 bg-dark border-0 justify-self-end"
              onClick={() => {
                state[index].userProduct.splice(i, 1);
                setDummy((b) => b + 1);
                nav(`/main/cart/${cur}`);
              }}
            >
              Delete
            </Button>
          </div>
        </div>
      ))}
    </>
  );
}

export default CartMap;
