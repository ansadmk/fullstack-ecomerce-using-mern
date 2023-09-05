import { useContext } from "react";
import { Form, Card, Button, Alert } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import { Users } from "../../Context/Users";
import axios from "axios";

function registrationpage() {
  const nav = useNavigate();
  const { state, setState } = useContext(Users);

 async function handleSubmit(e) {
    e.preventDefault();
    const first = e.target.first.value;
    const last = e.target.last.value;
    const email = e.target.email.value;
    const username = e.target.user.value;
    const pass = e.target.pass.value;
    // const dup = [...state];
    // const result = dup.filter((a) => a.username == e.target.user.value);
    // if (result != "" || username == "Admin") {
    //   alert("username already taken");
    // } else if (pass < 9) {
    //   alert("password must be minimum of 8 characters");
    // } else {
    //   setState([
    //     ...state,
    //     {
    //       id: Math.random(),
    //       firstname: first,
    //       lastname: last,
    //       email: email,
    //       username: username,
    //       password: pass,
    //       userProduct: [],
    //       orderlist: [],
    //     },
    //   ]);
    //   e.target.reset();
    //   nav("/login");
    // }
    const res=await axios.post("http://localhost:3000/api/users/register", 
      {
        "username":username, 
        "password":pass, 
        "email":email
   
   })
   console.log(res.data);
   if (res.data.status=="success") {
      e.target.reset();
      alert(res.data.message)
      nav("/login");
   }else if(res.data.status=="failed"){
    alert(res.data.message)
   }
  }
  return (
    <div>
      <h1 className="text-center mt-5 bg-white w-50 m-auto">SignUp Now !</h1>
      <Card className="container   p-3 mt-5 p-5 w-75">
        <form className="d-flex  flex-column  gap-3 " onSubmit={handleSubmit}>
          <Form.Control
            type="text"
            placeholder="First Name"
            id="first"
            required
          />
          <Form.Control type="text" placeholder="Last Name" id="last" />
          <Form.Control type="email" placeholder="Email" id="email" />
          <Form.Control type="text" placeholder="Username" id="user" />
          <Form.Control type="password" placeholder="Password" id="pass" />
          <Button type="submit">Submit</Button>
        </form>
        <Link to="/login">Already have an account ?</Link>
      </Card>

      <div className="text-center mt-3">
        <Button onClick={() => nav("/")}>Back to Home</Button>
      </div>
    </div>
  );
}

export default registrationpage;
