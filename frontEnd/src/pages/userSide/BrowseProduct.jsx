import { useParams } from "react-router-dom";
 
import { Users } from "../../Context/Users";
import { useContext, useState } from "react";
import { Form, Button, Row } from "react-bootstrap";
import Map from "../../Components/Map";
import axios from "axios";


function BrowseProduct() {
  
  const { product,arr,setArr } = useContext(Users);

  const { p } = useParams();

  if (p == "Cat") {
    
    var catprod = product.filter((a) => a.category == "cat");
  } else if (p == "Dog") {
    var dogprod = product.filter((a) => a.category == "dog");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.get.value.toLowerCase();
    if (p == "Cat") {
      var arr1 = catprod.filter(
        (a) => a.name.toLowerCase().slice(0, searchValue.length) == searchValue
      );
    } else if (p == "Dog") {
      var arr1 = dogprod.filter(
        (a) => a.name.toLowerCase().slice(0, searchValue.length) == searchValue
      );
    } else {
      var arr1 = product.filter(
        (a) => a.name.toLowerCase().slice(0, searchValue.length) == searchValue
      );
    }
    setArr((a) => (a = arr1));
    
  };

  const handleChange = (e) => {
    const searchValue = e.target.value.toLowerCase();
    if (p == "Cat") {
      var arr1 = catprod.filter(
        (a) => a.name.toLowerCase().slice(0, searchValue.length) == searchValue
      );
    } else if (p == "Dog") {
      var arr1 = dogprod.filter(
        (a) => a.name.toLowerCase().slice(0, searchValue.length) == searchValue
      );
    } else {
      var arr1 = product.filter(
        (a) => a.name.toLowerCase().slice(0, searchValue.length) == searchValue
      );
    }
    setArr((a) => (a = arr1));
  };
  return (
    <div>
      <h1 className="text-center mt-3 bg-white w-50 rounded-5 m-auto">
        Browse Products of {p}
      </h1>
      <form className="d-flex container mt-5" onSubmit={handleSubmit}>
        <Form.Control
          id="get"
          className=" ms-0 me-1 m-auto border-5 shadow border-dark-subtle w-50"
          onChange={handleChange}
        />{" "}
        <Button variant="dark" type="submit">
          search
        </Button>
        <Button variant="dark" onClick={() => setArr("")} className="ms-2">
          all
        </Button>
      </form>
      <Row className=" container m-auto p-0 mt-5 ">
        {p == "Cat" ? (
          arr == "" ? (
            <Map value={catprod} />
          ) : (
            <Map value={arr} />
          )
        ) : p == "all" ? (
          arr == "" ? (
            <Map value={product} />
          ) : (
            <Map value={arr} />
          )
        ) : p == "Dog" ? (
          arr == "" ? (
            <Map value={dogprod} />
          ) : (
            <Map value={arr} />
          )
        ) : null}
      </Row>
    </div>
  );
}

export default BrowseProduct;
