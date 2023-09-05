import { useNavigate, useParams } from "react-router-dom";
import { Users } from "../../Context/Users";
import { useContext } from "react";
 
import { Button } from "react-bootstrap";

function ProductDetails() {
  const nav = useNavigate();
  const { product, cur } = useContext(Users);
  const { pid } = useParams();
  const dup = [...product];
  const fil = dup.filter((a) => a.id == pid);
  const dataprod = { ...fil[0] };

  return (
    <div
      
      className=" m-0 d-flex m-auto h- gap-1 justify-content-center flex-column flex-lg-row align-items-center"
    >
      <img
        src={dataprod.img}
        style={{ maxHeight: "500px", maxWidth: "300px" }}
        className="rounded-4 img-fluid ms-3"
      />
      <div className="d-flex flex-column gap-5 bg-white p-5  rounded-4">
        <div className="w-100">
          <p className="w-100" >{dataprod.name}</p>
          <h3 className="text-success">${dataprod.price}</h3>
        </div>
        <Button
          className="mt-3 bg-dark border-0 "
          onClick={() => {
            cur == "" ? alert("Must login") : nav(`/main/cart/${dataprod.id}`);
          }}
        >
          Add to cart
        </Button>
      </div>
    </div>
  );
}

export default ProductDetails;
