import Navbar from "./components/Navbar"

import Home from "./pages/Home.jsx";
import Jobs from "./pages/Jobs.jsx";
import Companies from "./pages/Companies.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer.jsx";
import Resources from "./pages/Resources.jsx";
import JobDetails from "./pages/JobDetails.jsx";
import JobsOpen from "./pages/JobsOpen.jsx";

const App = () => {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/jobs/:id" element={<JobDetails />} />
        <Route path="/companies/:companyName/jobs" element={<JobsOpen />} />
      </Routes>

    <Footer/>

      
    </>
  )
}

export default App