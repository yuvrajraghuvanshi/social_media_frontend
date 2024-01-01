import { useContext } from "react";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
function App() {
  const {user}=useContext(AuthContext)
  return(
    <Router>
    <Routes>
      <Route exact path="/" element={user? <Home/>:<Register/>}> </Route> 
   <Route exact path="/login" element={user? <Home/>:<Login/>}> </Route>
<Route exact path="/register" element={user? <Home/>:<Register/>}> </Route>
  
    <Route path="/profile/:username" element={<Profile/>}>
    </Route>
    </Routes>
  </Router>
  
  )
}

export default App;
