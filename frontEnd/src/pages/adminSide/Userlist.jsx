import React, { useContext, useEffect, useState } from "react";
import { Users } from "../../Context/Users";
import { Col, Row, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
function Userlist() {
  // const { state ,setState} = useContext(Users);
  
  const nav = useNavigate();
  const [cookie]=useCookies()
  var [state,setState]=useState()
  async function r() {
    
    try {
  
    const  res =await axios.get("http://localhost:3000/api/admin/users",{
      headers:{
        authorization:"Bearer"+" "+cookie.access_token_admin
      }
    })
   
      if (res) {
        
        setState(res.data.data)
      }
  } catch (error) {
    console.log(error.message);
  }
  }
  useEffect(()=>{
    r()
  },[])
  
  return (
    <Row className="bg-dark-subtle h-100 overflow-auto " >
      <h1 className="text-center mt-5">Users List</h1>
      <Card className="container w-75   overflow-auto m-auto p-4 mt-0 rounded-5">
        {state?.map((a) => (
          <Card
            className="m-2 p-3 rounded-4 hover"
            onClick={() => nav(`/adminhome/UsersDetails/${a.id}`)}
          >
            {a.email} <br /> @{a.username}{" "}
          </Card>
        ))}
      </Card>
    </Row>
  );
}

export default Userlist;
