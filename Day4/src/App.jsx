import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
// import Home from "./pages/Home"
// import About from "./pages/About"
// import Navbar from "./components/Navbar"
import Login from "./pages/login"
import Reg from "./pages/reg"
import Home from "./pages/home"
import AddBookingForm from "./components/bookmyticket"
import Adminlogin from "./admin/adminlogin"
import Adminhome from "./admin/adminhome"
import ContactUs from "./pages/contactus"
import ProfilePage from "./pages/profilepage"
import Table from "./pages/table"
import BoatDetailsForm from "./pages/addboat"
import Thankyou from "./pages/thankyou"
import Viewboat from "./pages/viewboad"


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        {/* <Route path="/reg" element={<reg/>}/> */}
        <Route path="/login" element={<Login/>}/>
        <Route path="/reg" element={<Reg/>}/>
        <Route path="/book" element={<AddBookingForm/>}/>
        <Route path="/adminlogin" element={<Adminlogin/>}/>
        <Route path="/adminhome" element={<Adminhome/>}/>
        <Route path="/contactus" element={<ContactUs/>}/>
        <Route path="/profilepage" element={<ProfilePage/>}/>
        <Route path="/table" element={<Table/>}/>
        <Route path="/addboat" element={<BoatDetailsForm/>}/>
        <Route path="/thankyou" element={<Thankyou/>}/>
        <Route path="/viewboad" element={<Viewboat/>}/>
      </Routes>
    </Router>
  )
}

export default App