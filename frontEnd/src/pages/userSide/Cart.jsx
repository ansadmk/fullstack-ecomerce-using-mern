import { useParams } from "react-router-dom";
import { Users } from "../../Context/Users";
import { useContext, useState } from "react";
 
import CartMap from "../../Components/cartMap";
import { Row } from "react-bootstrap";
import Comptotal from "../../Components/total";

// import useTotal from "../Components/Total";

function Cart() {
  const { state, cur, product } = useContext(Users);

  const { id } = useParams();
  console.log("Id:" + id);
  console.log("cur:" + cur);
  console.log(state);
  if (id != cur) {
    for (const x in state) {
      if (state[x].id == cur) {
        const filtprod = product.filter((a) => a.id == id);
        const result = [...filtprod];
        const prodobj = result[0];
        const arr = state[x].userProduct.filter((a) => a.id == prodobj.id);
        arr.length == 0 ? state[x].userProduct.push({ ...prodobj }) : null;
      }
    }
  }

  return (
    <div>
      <h1 className="text-center">Cart</h1>
      <Row
        className="container m-auto w-75 overflow-auto"
        style={{ maxHeight: "500px" }}
      >
        {state.map((a, i) =>
          a.id == cur ? <CartMap value={a.userProduct} index={i} /> : null
        )}{" "}
        <div></div>{" "}
      </Row>
      <h1 className="text-center bg-dark-subtle container mt-5 rounded-4 p-2">
        <Comptotal />
      </h1>
    </div>
  );
}

export default Cart;
