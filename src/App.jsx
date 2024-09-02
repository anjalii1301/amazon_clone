import { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Checkout from "./components/Checkout/Checkout"
import Login from "./components/Login/Login";
import Payment from "./components/Payment/Payment";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
        console.log("USER = ",authUser)

        if(authUser){
          //user just loggedin or was logged in
          dispatch({
              type : 'set_user',
              user : authUser,
          })

        }else {
          //the user is logged out
          dispatch({
            type : 'set_user',
            user : null,
        })
        }
    })
  }, [])


  return (

    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/login" element={<Login />}>
          </Route>

          <Route path="/checkout" element={<Checkout />}>
          </Route>

          <Route path="/payment" element={<Payment/>}>
          </Route>

          <Route path="/" element={<Home />}>
          </Route>
        </Routes>
      </div>
    </Router>

  );
}
export default App;