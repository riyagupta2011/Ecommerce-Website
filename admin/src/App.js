import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css"
import Home from "./pages/home/Home";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import UserList from "./pages/userlist/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
import { useSelector } from "react-redux";
function App() {
  const admin = useSelector((state) => state.user.currentUser.isAdmin);
  return (
    <Router>
      <Routes>
      <Route path="/login" Component={Login}/>
      </Routes>
      {admin && (
        <>
        <Topbar />
      <div className="container">
        <Sidebar />
       <Routes>
        <Route path="/" Component={Home}/>
        <Route path="/users" Component={UserList}/>
        <Route path="/users/:userId" Component={User}/>
        <Route path="/newUser" Component={NewUser}/>
        <Route path="/products" Component={ProductList}/>
        <Route path="/product/:productsId" Component={Product}/>
        <Route path="/newproduct" Component={NewProduct}/>
        
        
       </Routes>
     
      </div></>
      )}
      
    </Router>
  );
}

export default App;
