import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";

import Dashboard from "../pages/dashboard";
import EditUser from "../pages/editUser";
import Economy from "../pages/economy";
import School from '../pages/school';
import Error from "../pages/error";
import Login from "../pages/login";
import Users from "../pages/users";


  export const Router = () => {
    return(
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Navigate to="/404" replace/>}/>
          <Route path="/404" element={<Error />}/>
          <Route path="/" element={<Login />}/>
          <Route path="/school" element={<School />}/>
          <Route path="/users" element={<Users />}/>
          <Route path="/users/edit/:id" element={<EditUser />}/>
          <Route path="/economy" element={<Economy />}/>
          <Route path="/dashboard" element={<Dashboard />}/>
        </Routes>
      </BrowserRouter>
    )
  }


  export default Router