 
import { Button } from "react-bootstrap";
import Home from './Home.png'
import { useParams, useNavigate } from "react-router-dom";
import { Users } from "../../Context/Users";
import { useContext } from "react";

function Homepage() {
  const nav = useNavigate();
  const { id } = useParams();
  const { cur } = useContext(Users);

  return (
    <div className=" d-flex flex-column       text-center h-100 m-auto w-100   homepage">
     <section className="shadow container" >
      <img src={Home} className="w-100 h- container shadow" alt="" />
     </section>
     <section className=" w-75 m-auto">
     <h1 className="fw-bold fs-1  p-4 ">
        Welcome {id == 0 || cur == "" ? " " : id}{" "}
      </h1>
      <div className="d-flex justify-content-center align-items-center gap-1 flex-lg-row flex-column mb-5 ">
        <div className="d-flex justify-content-center   ">
          <h1 className="z-1 position-absolute mt-5 m-auto fw-bold fs-6">
            Browse Dog Products 🐶
          </h1>
          <img
            onClick={() => nav("/main/pro/Dog")}
            src="https://images.pexels.com/photos/4588001/pexels-photo-4588001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="rounded-5 hover  z-0 w-75"
            alt=""
          />
        </div>

        <div className="d-flex justify-content-center">
          <h1 className="z-1 position-absolute fw-bold mt-5 m-auto  fs-6">
            Browse Cat Products 🐱
          </h1>
          <img
            onClick={() => nav("/main/pro/Cat")}
            src="https://images.pexels.com/photos/10019263/pexels-photo-10019263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="rounded-5 hover w-75 "
            alt=""
          />
        </div>
      </div>
     </section>
     
     
     <section className=" container w-50 bg-white p-1 m-auto mt-4 rounded-4">
      <h1 className="text-center">Our Brand Partners</h1>
      <div className="row container w-50 bg-white p-1 m-auto rounded-4">
        <img src="https://brandongaille.com/wp-content/uploads/2013/08/California-Natural-Company-Logo.jpg" className=" col-12 col-lg-4" />
        <img src="https://brandongaille.com/wp-content/uploads/2013/08/Bil-Jac-Company-Logo.jpg" className=" col-12 col-lg-4" />
        <img src="https://brandongaille.com/wp-content/uploads/2013/08/Castro-Pollux-Company-Logo.jpg"  className=" col-12 col-lg-4"/>
        <img src="https://brandongaille.com/wp-content/uploads/2013/08/Blue-Buffalo-Company-Logo.jpg" className=" col-12 col-lg-4" />
        <img src="https://brandongaille.com/wp-content/uploads/2013/08/Natures-Recipe-Company-Logo.png" className=" col-12 col-lg-4" />
        <img src="https://brandongaille.com/wp-content/uploads/2013/08/Newmans-Own-Organics.jpg" className=" col-12 col-lg-4" />
      </div>
     </section>
     <section className="container bg-white w-50">
        <div className="row container d-flex flex-column flex-lg-row">
          <div className="col-6"><h1>Help</h1> <p>Pet care</p> <p>Protien calculator</p> </div>
          <div className="col-6"><h1>About us</h1><p>contact us</p> <p>parambilpeedika</p></div>
          
        </div>
      </section>
    </div>
  );
}

export default Homepage;
