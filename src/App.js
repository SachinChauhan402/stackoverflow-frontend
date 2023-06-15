// import { Slider } from "@mui/material";
import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/StackOverflow/Sidebar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Navigate,
  Outlet,
} from "react-router-dom";

import { auth, onAuthStateChanged } from "./firebase";
import StackOverflow from "./components/StackOverflow";
import Question from "./components/Add-Question/Question";
import ViewQuestion from "./components/ViewQuestion/index";
import Auth from "./components/Auth/index";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import { useEffect } from "react";

function App() {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            displayName: authUser.displayName,
            email: authUser.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

  const PrivateRoute = () => {
    let auth = user;
    console.log(auth);
    return auth ? <Outlet /> : <Navigate to="/auth" />;
  };

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route exact path="/" element={<StackOverflow />} />
          <Route exact path="/question" element={<ViewQuestion />} />
          <Route exact path="/add-question" element={<Question />} />
        </Route>
        <Route exact path="/auth" element={<Auth />} />
      </Routes>
    </div>
  );
}

export default App;
