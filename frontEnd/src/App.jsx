import { Route, Routes, Navigate } from "react-router-dom";
import Login from "./pages/authorization/loginpage";
import Register from "./pages/authorization/registrationpage";
import { Users } from "./Context/Users";
import {  useState } from "react";
import Homepage from "./pages/userSide/Homepage";
import Main from "./pages/userSide/mainpage";
import BrowseProduct from "./pages/userSide/BrowseProduct";
import ProductDetails from "./pages/userSide/ProductDetails";
import Cart from "./pages/userSide/Cart";
import PaymentSection from "./pages/userSide/PaymentSection";
import Adminhome from "./pages/adminSide/adminhome";
import Userlist from "./pages/adminSide/Userlist";
import Productlist from "./pages/adminSide/Productlist";
import ProductDetailsAdmin from "./pages/adminSide/ProductDetailsAdmin";
import UserDetailsAdmin from "./pages/adminSide/UserDetailsAdmin";
import Addproduct from "./pages/adminSide/addproduct";
import { AllUsers } from "./data/AllUsers";
import { Allproducts } from "./data/Allproducts";
import "bootstrap/dist/css/bootstrap.min.css";



function App() {
  var [Total, setTotal] = useState(0);
  const [cur, setCur] = useState("");
  const [state, setState] = useState(AllUsers);
  const [product, setProduct] = useState(Allproducts);
  const [arr, setArr] = useState("");
  

  return (
    <Users.Provider
      value={{
        state,
        setState,
        product,
        setProduct,
        cur,
        setCur,
        Total,
        setTotal,
        arr, setArr
      }}
    >
      <Routes>
        <Route path="/" element={<Navigate to="/main/0" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home/:id" element={<Homepage />} />
        <Route path="/adminhome" element={cur=="Admin"?<Adminhome/>:<Login/>}>
          <Route index element={<Userlist/>} />
          <Route path="userlist" element={<Userlist/>} />
          <Route path="Productlist" element={<Productlist/>} />
          <Route path="ProductDetails/:id" element={<ProductDetailsAdmin/>} />
          <Route path="UsersDetails/:id" element={<UserDetailsAdmin/>} />
          <Route path="addproduct" element={<Addproduct/>}/>

        </Route>
        <Route path="/main" element={<Main />}>
          <Route index element={<Homepage />} />
          <Route path=":id" element={<Homepage />} />
          <Route path="pro/:p" element={<BrowseProduct />} />
          <Route path="details/:pid" element={<ProductDetails />} />
          <Route path="cart/:id" element={<Cart />} />
          <Route path="pay/:id" element={<PaymentSection/>}/>
          <Route />
        </Route>
        <Route path="*" element={<Login />} />
      </Routes>
    </Users.Provider>
  );
}

export default App;
