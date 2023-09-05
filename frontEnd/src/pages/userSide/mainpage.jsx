 
import {
  Form,
  Nav,
  Navbar,
  Container,
  Button,
  Dropdown,
} from "react-bootstrap";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { Users } from "../../Context/Users";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useCookies } from "react-cookie";


function mainpage() {
  const { cur, setCur, state, product, arr, setArr } = useContext(Users);
  const arr1 = [...state];
  const [navstate, setNavState] = useState([]);
  const [cookies,setCookies]=useCookies(["access_token"])
  

  
  
  const nav = useNavigate();
  const handleSearch = (e) => {
    const searchValue = e.target.value.toLowerCase();
    if(e.target.value==''){
      setNavState((c) => (c = []));  
    }else{
    const arr1 = product.filter(
      
      (a) => a.name.toLowerCase().slice(0, searchValue.length) == searchValue
      
    );
    console.log(arr1);
  
    setNavState((c) => (c = arr1));
    }
  };

  return (
    <>
      <Navbar className=" container  position-sticky" expand="lg">
        <Container className="mt-5 bg-black p-3 rounded-4">
          <Navbar.Brand className="text-white m-auto">Pet Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="collap" className="bg-white ms-1" />
          <Navbar.Collapse id="collap">
            <Nav className="m-auto me-0">
              <div className="d-flex mt-3">
                <div className="me-2  " onClick={() => nav(`/main/0`)}>
                  <Button className="  me-2 mb-2 bg-black border-0 hover  ">
                    Home
                  </Button>
                </div>
                <div className="me-2  ">
                  <Button
                    onClick={() => {
                      cookies.access_token
                        ? nav(`/main/cart/${userId}`)
                        : alert("Must Login!");
                    }}
                    className="  me-2 mb-2 bg-black border-0 hover "
                  >
                    {cookies.access_token? (
                      <h4 className="d-flex flex-column  p-0 m-0 ">
                        <div>
                          <AiOutlineShoppingCart />
                          
                        </div>
                      </h4>
                    ) : (
                      <h4>
                        <AiOutlineShoppingCart />
                      </h4>
                    )}
                  </Button>
                </div>
                <Link className="me-2    mb-2" to="/main/pro/Cat">
                  {" "}
                  <Button
                    className="bg-black border-0 hover"
                    onClick={() =>
                      setArr(
                        (b) => (b = product.filter((a) => a.category == "cat"))
                      )
                    }
                  >
                    Cat
                  </Button>
                </Link>
                <Link className="me-2 mb-2" to="/main/pro/Dog">
                  <Button
                    className="bg-black border-0 hover"
                    onClick={() =>
                      setArr(
                        (b) => (b = product.filter((a) => a.category == "dog"))
                      )
                    }
                  >
                    Dog
                  </Button>
                </Link>
                <Link className="me-2 mb-2" to="/main/pro/all">
                  <Button
                    className="bg-black border-0 hover"
                    onClick={() => setArr((b) => (b = [...product]))}
                  >
                    Products
                  </Button>
                </Link>
              </div>
              <Dropdown className="me-2 mb-1 z-2 ">
                <Dropdown.Toggle className="border-0 bg-black hide  mt-2">
                  <Form.Control
                    placeholder="search products"
                    onChange={handleSearch}
                  />
                </Dropdown.Toggle>

                
                  <Dropdown.Menu className="  overflow-auto container card " >
                    {navstate.map((a,i) => (
                      
                      <Dropdown.Item
                        onClick={() => nav(`/main/Details/${a.id}`)}
                        className=""
                      >
                        {" "}
                        <img className=" w-25" src={a.img} />{" "}
                        <h6>{a.name}</h6>
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                
              </Dropdown>

              <div className="d-flex gap-2 h-50 mt-3">
                {cookies.access_token? (
                  <Button
                    className="bg-white  border-0 text-black hover"
                    onClick={() => {
                      nav("/");
                      setCur((c) => (c = ""));
                    }}
                  >
                    Logout
                  </Button>
                ) : (
                  <>
                    <Button
                      className="bg-white border-0 text-black hover"
                      onClick={() => {
                        nav("/register");
                      }}
                    >
                      Signup
                    </Button>
                    <Button
                      className="bg-white border-0  text-black  hover"
                      onClick={() => {
                        nav("/login");
                      }}
                    >
                      Login
                    </Button>
                  </>
                )}
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
        <Outlet />
       
      
      
    </>
  );
}

export default mainpage;
