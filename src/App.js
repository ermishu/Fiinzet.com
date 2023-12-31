import React ,{useState,createContext} from "react";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Screen from "./screen/Screen";
import HomeLanding from "./components/container/home/HomeLanding";
import AboutUs from "./components/container/about/About";
import Product from "./components/container/products/Product";
import ContactUs from "./components/container/contact_us/Contact";
import LoanEligibilityCalculator from "./components/container/scenes/calculator";
import CalculatorPage from "./components/container/scenes/CalculatorPage";
import HomeLoan from "./components/container/scenes/Homeloan";
import Login from "./components/container/auth/Login";
import PhoneSignUp from "./components/container/auth/PhoneSignUp";
import ProtectedRoute from "./components/common/ProtectedRoute";
import Home from "./components/container/home/Home";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import './App.css'

export const Context = createContext()

function App() {

  const [phone , setPhone] = useState("");
  const[name,setname]=useState("")
  const [email, setemail] = useState("");
  const [pincode, setpincode] = useState("");
  const [status, setstatus] = useState("");
  const [city, setcity] = useState("");
    const contextValue = {
        phone : phone,
        setPhone : setPhone,
        name:name,
        setname:setname,
        email:email,
        setemail:setemail,
        pincode:pincode,
        setpincode:setpincode,
        status:status,
        setstatus:setstatus,
        city:city,
        setcity:setcity
    }

  return (
    <Context.Provider value = {contextValue}>
      <BrowserRouter>
      <UserAuthContextProvider>
        <Screen>
          <Routes>
            <Route path="/" element={<HomeLanding />} />
            <Route path="/home" element={<HomeLanding />} />ok
            <Route path="/about" element={<AboutUs />} />
            <Route path="/product" element={<Product />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/calculator" element={<LoanEligibilityCalculator />} />
            <Route path="/calculatorpage" element={<CalculatorPage />} />
            <Route path="/homeloan" element={<HomeLoan />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/phonesignup" element={<PhoneSignUp />} />
            <Route path="/homebackend" element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
            />
          </Routes>
        </Screen>
        </UserAuthContextProvider>
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
