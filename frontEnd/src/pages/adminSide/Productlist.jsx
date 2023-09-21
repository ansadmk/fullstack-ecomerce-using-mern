import React, { useContext, useEffect, useState } from "react";
import { Users } from "../../Context/Users";
import { Col, Row, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import AdminMap from "../../Components/AdminMap";
import axios from "axios";

function Productlist() {
  const { product } = useContext(Users);
  const [dum, setDum] = useState(1);
  const all = [...product];
  const [dup1, setDup] = useState([]);
  const nav = useNavigate();
  console.log("addprod");
  // const Catprod = all.filter((a) => a.category == "cat");
  // const Dogprod = all.filter((a) => a.category == "dog");
  useEffect(async ()=>{
  var prods=await axios.get("http://localhost:3000/api/admin/products",{headers:{
    authorization:"Bearer"+" "+cookie.access_token_admin
   }})
   const cat=await axios.get(`http://localhost:3000/api/admin/product?category=cat`,{headers:{
    authorization:"Bearer"+" "+cookie.access_token_admin
   }})

   const dog=await axios.get(`http://localhost:3000/api/admin/product?category=dog`,{headers:{
    authorization:"Bearer"+" "+cookie.access_token_admin
   }})
   var Catprod=cat.data.data
   var Dogprod=dog.data.data
   setDup(prods.data.data)
  },[])

  return (
    <div className="bg-dark-subtle h-100 overflow-auto ">
      <h1 className="text-center mt-5 ">Product List</h1>
      <div className="justify-content-center mt-3 d-flex gap-1">
        <Button onClick={() => setDup(Catprod)}>Cat</Button>&nbsp;&nbsp;
        <Button onClick={() => setDup(Dogprod)}>Dog</Button>&nbsp;&nbsp;
        <Button onClick={() => setDup((d) => (d = all))}>All</Button>
        
        <Button onClick={() => nav("/adminhome/addproduct")}>
          + Add Product
        </Button>
      </div>
      <Card
        className="container w-75 overflow-auto m-auto p-5 rounded-5 mt-2  "
        style={{ maxHeight: "500px" }}
      >
        <AdminMap
          dup1={dup1}
          product={product}
          nav={nav}
          setDup={setDup}
          all={all}
        />
      </Card>
    </div>
  );
}

export default Productlist;
