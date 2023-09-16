import React, { useContext } from "react";
import { Row, Card, Col, Form, Button } from "react-bootstrap";
import { Users } from "../../Context/Users";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";

function Addproduct() {
  const { product, setProduct } = useContext(Users);
  const [cookie]=useCookies()
  const nav = useNavigate();
  console.log("addprod");
  const handleSubmit = async (e) => {
    e.preventDefault();
     const data=new FormData()
     console.log( e.target.img);
    const catagory = e.target.catagory.value;
    const title = e.target.title.value;
    const price = e.target.price.value;
    const description = e.target.description.value;
    const img = e.target.img.value;
    data.append("title",title)
    data.append("price",price)
    data.append("description",description)
    data.append("image",img)
    data.append("category",catagory)
    await axios.post("http://localhost:3000/api/admin/products",data,{headers:{Authorization:`Bearer ${cookie.access_token_admin}`}})
    if (catagory != "") {
      setProduct([
        ...product,
        {
          id: Math.random(),
          qty: 1,
          category: catagory,
          name: title,
          price: price,
          img: img,
          
        },
      ]);
      nav("/adminhome/Productlist");  
    } else {
      alert("catagory required");
    }
    e.target.reset();
  };
  return (
    <Row className="bg-dark-subtle h-100  ">
      <Col className="m-auto" lg={3}>
        <Card style={{ maxHeight: "650px", maxWidth: "300px" }}>
          <Card.Body>
            <Card.Title>
              <form
                action=""
                onSubmit={handleSubmit}
                className="d-flex flex-column gap-4"
              >
                <Form.Select id="catagory" required>
                  <option value="">Select catagory</option>
                  <option value="cat">Cat</option>
                  <option value="dog">Dog</option>
                </Form.Select>
                <Form.Control
                  type="text"
                  placeholder="Name of the product"
                  id="title"
                  required
                />
                 <Form.Control
                  type="text"
                  placeholder="Name of the product"
                  id="description"
                  required
                />
                <Form.Control
                  type="number"
                  placeholder="Price"
                  id="price"
                  required
                />
                <Form.Control
                  type="file"
                  name="image"
                  placeholder="image"
                  id="img"
                  required
                />
                <Button type="submit">Add</Button>
              </form>
            </Card.Title>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default Addproduct;
