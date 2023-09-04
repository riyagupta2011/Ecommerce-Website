import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css"
import Home from "./pages/home/Home";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import UserList from "./pages/userlist/UserList";
function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
       <Routes>
        <Route path="/" Component={Home}/>
        <Route path="/users" Component={UserList}/>
       </Routes>
     
      </div>
    </Router>
  );
}

export default App;
