import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

import Dashboard from "./pages/Dashboard";
import Manage from "./pages/Manage";
import Profile from "./pages/Profile";
import Newspaper from "./pages/Newspaper";
import Setting from "./pages/Setting";
import New from "./pages/New";  
import PostImage from "./pages/PostImage";  
import PostVideo from "./pages/PostVideo";  

function App() {
  return (
    <Router>
      <div className="flex h-screen bg-gray-100">
        <Sidebar />
        <div className="flex-1 flex flex-col ">
          <Navbar />
          <div className="flex-1 p-6 overflow-auto">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/manage" element={<Manage />} />
              <Route path="/new" element={<New />} />  
              <Route path="/new/post-image" element={<PostImage />} />  
              <Route path="/new/post-video" element={<PostVideo />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/newspaper" element={<Newspaper />} />
              <Route path="/setting" element={<Setting />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
