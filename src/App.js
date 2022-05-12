// import logo from './logo.svg';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import User from "./component/user";
import AddQuery from "./component/user/addQuery";
import UserDashboard from "./component/user/dashboard";
import AddSolution from "./component/user/AddSolution";
import Admin from "./component/admin/index";
import AdminDashboard from "./component/admin/dashboard";
import LoginPage from "./component/main/login";
import Signup from "./component/main/signup";
import Main from "./component/main";
import Home from "./component/main/home";

import ListVideo from "./component/main/ListVideo";
import QueryListing from "./component/main/QueryListing";
import About from "./component/main/About";
import { Toaster } from "react-hot-toast";
import ManageUser from "./component/admin/manageUsers";
import ViewSolution from "./component/main/ViewSolution";
import ViewQuery from "./component/main/viewQuery";
import ManageQuery from "./component/admin/manageQuery";
import en from "javascript-time-ago/locale/en.json";
import TimeAgo from "javascript-time-ago";
import NotFound from "./404";
import Profile from './component/profile';

function App() {
  TimeAgo.addDefaultLocale(en);
  return (
    <div>
      <div className="">
        <BrowserRouter>
          <Toaster position="top-right" />
          <Routes>
            <Route element={<User />} path="user">
              <Route element={<UserDashboard />} path="dashboard" />
              <Route element={<AddQuery />} path="addquery" />
              <Route element={<AddSolution />} path="AddSolution/:id" />
              <Route element={<Profile />} path="profile" />
            </Route>
            {/* admin */}
            <Route element={<Admin />} path="admin">
              <Route element={<AdminDashboard />} path="dashboard" />
              <Route element={<ManageUser />} path="manageuser" />
              <Route element={<ManageQuery />} path="managequery" />
              <Route element={<Profile />} path="profile" />
            
              {/* main */}
            </Route>
            <Route element={<Main />} path="main">
              <Route element={<About />} path="about" />
              <Route element={<QueryListing />} path="querylisting" />
              <Route element={<ListVideo />} path="listvideo" />
              <Route element={<Home />} path="home" />
              <Route element={<LoginPage></LoginPage>} path="login" />
              <Route element={<Signup></Signup>} path="signup" />
              <Route element={<ViewSolution />} path="viewsolution/:id"/>
              <Route element={<ViewQuery />} path="viewquery/:id"/>
            </Route>
              <Route element={<NotFound />} path="404"/>

            <Route element={<Navigate to="/main/login" />} path="/" />
            <Route element={<Navigate to="/404"></Navigate>} path="*" />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
