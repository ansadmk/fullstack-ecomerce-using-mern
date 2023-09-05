import { Card, Col } from "react-bootstrap";
 
import { useNavigate } from "react-router-dom";

function Map({ value }) {
  const nav = useNavigate();
  return (
    <>
      {value.map((a) => (
        <Col lg={3} className="mb-3" >
          <Card
            style={{ maxHeight: "500px", maxWidth: "300px",minHeight: "500px", minWidth: "300px" }}
            onClick={() => nav(`/main/Details/${a.id}`)}
            className="container hover p-1 shadow"
          >
            <Card.Img
              className="m-auto"
              src={a.img}
              style={{ maxHeight: "300px", maxWidth: "250px",minHeight: "300px", minWidth: "250px" }}
            />
            <Card.Body>
              <Card.Title className="overflow-auto" style={{ maxHeight: "70px",minHeight: "70px" }}>{a.name}</Card.Title>
              <Card.Footer>
              <Card.Title> <h1 className="text-success">${a.price}</h1></Card.Title>
              </Card.Footer>
              
            </Card.Body>
          </Card>
        </Col>
      ))}
    </>
  );
}

export default Map;
