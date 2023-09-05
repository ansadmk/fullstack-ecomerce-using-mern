import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
 
import { Card, Button } from "react-bootstrap";
import { Users } from "../../Context/Users";

function PaymentSection() {
  const { id } = useParams();
  const ship = parseInt(id);
  const { cur, state } = useContext(Users);
  const dupstate = [...state];
  const nav = useNavigate();
  for (const x in dupstate) {
    if (dupstate[x].id == cur) {
      var indexOfUser = x;
    }
  }
  return (
    <Card className="container h-75 p-4  ">
      <div className="d-flex align-items-center justify-content-center flex-column flex-lg-row   h-100 container w-100 ">
        <div className="w-50 me-5">
          <h1
            className="text-center mt-1 border-bottom container w-50"
            style={{ fontSize: "2vw" }}
          >
            Purchasing Products
          </h1>
          <div className="h-75 overflow-auto">
            {dupstate.map((a) =>
              a.id == cur ? (
                <div className="mt-5 p-5  " style={{ maxHeight: "300px" }}>
                  {a.userProduct.map((c) => (
                    <Card className="container w-100 p-3 h-50 overflow-auto">
                      <div className="h4" style={{ fontSize: "2vw" }}>
                        {c.name}
                      </div>{" "}
                      <div className="ms-auto h3" style={{ fontSize: "2vw" }}>
                        ${c.price}x{c.qty}=${c.price * c.qty}
                      </div>{" "}
                    </Card>
                  ))}
                </div>
              ) : null
            )}
          </div>
        </div>
        <Card className="p-4">
          <h1 className="border-bottom " style={{ fontSize: "3vw" }}>
            Confirm purchase
          </h1>
          <div>
            <Card className="p-2 rounded-0">
              <h4 style={{ fontSize: "2vw" }}>
                Product net price&nbsp;&nbsp;&nbsp;:&nbsp;${id}
              </h4>
            </Card>
            <Card className="p-2 rounded-0">
              <h4 style={{ fontSize: "2vw" }}>
                Shipping charge&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;$50
              </h4>
            </Card>
            <Card className="p-2 rounded-0">
              <h1 style={{ fontSize: "2vw" }}>
                Total&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;$
                {50 + ship}
              </h1>
            </Card>
            <Button
              onClick={() => {
                state[indexOfUser].userProduct.splice(
                  0,
                  state[indexOfUser].userProduct.length
                );
                alert("Purchased successfully");
                nav(`/main/cart/${cur}`);
              }}
            >
              Confirm
            </Button>
          </div>
        </Card>
      </div>
    </Card>
  );
}

export default PaymentSection;
