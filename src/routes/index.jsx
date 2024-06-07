import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";

import Dashboard from "../pages/dashboard";
import SchoolSelect from "../pages/schoolSelect";
import EditUser from "../pages/editUser";
import Economy from "../pages/economy";
import School from '../pages/school';
import Error from "../pages/error";
import Login from "../pages/login";
import Users from "../pages/users";
import CreateUser from "../pages/createUser";


  export const Router = () => {
    return(
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Navigate to="/404" replace/>}/>
          <Route path="/404" element={<Error />}/>
          <Route path="/" element={<Login />}/>
          <Route path="/school/:id?" element={<School />}/>
          <Route path="/users/:id?" element={<Users />}/>
          <Route path="/createUser?" element={<CreateUser />}/>
          <Route path="/users/edit/:id?" element={<EditUser />}/>
          <Route path="/economy/:id?" element={<Economy />}/>
          <Route path="/dashboard/:id?" element={<Dashboard />}/>
          <Route path="/schoolSelect/:id?" element={<SchoolSelect />}/>
        </Routes>
      </BrowserRouter>
    )
  }


  export default Router