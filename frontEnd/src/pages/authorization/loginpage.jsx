import { Form, Card, Button } from "react-bootstrap";
import { Users } from "../../Context/Users";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";
function loginpage() {
  const { setCur, state } = useContext(Users);
  const nav = useNavigate();
  const [_, setCookies] = useCookies(["access_token"]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const username = e.target.user.value;
    const pass = e.target.pass.value;
    
    try {
      
      var res = await axios.post("http://localhost:3000/api/users/login", {
        username: username,
        password: pass,
      });
      var admin = await axios.post("http://localhost:3000/api/admin/login", {
        username: username,
        password: pass,
      });
      console.log(res,admin);
    } catch (error) {
      console.log(error.message)
      var err=error.message
    }
    if(admin.data.status=="success"){
      setCookies("access_token_admin", admin.data.data.jwt_token);
      nav("/adminhome");
    }
    else if(res.data.status=="success" && res.data.data.userid) {
      setCookies("access_token", res.data.data.jwt_token);
      window.localStorage.setItem("userid",res.data.data.userid)
      nav(`/main/${username}`);
    }else{
      alert(err)
    }


    
  };

  return (
    <div>
      <h1 className="mt-5 text-center bg-white w-50 m-auto">Login</h1>
      <Card className="container p-5 w-75  mt-5" style={{ maxWidth: "400px" }}>
        <form className="d-flex flex-column gap-3" onSubmit={handleSubmit}>
          <Form.Control type="text" id="user" placeholder="@Username" />
          <Form.Control type="password" id="pass" placeholder="@password" />
          <Button type="submit">Login</Button>
        </form>
        <Link to="/register" className="mt-2">
          Don't have an account?
        </Link>
      </Card>
      <div className="text-center mt-3">
        <Button onClick={() => nav("/")}>Back to Home</Button>
      </div>
    </div>
  );
}

export default loginpage;
