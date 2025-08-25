import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import UserList from "./pages/pagination";

function App() {
  const headStyle = {
    textAlign: "center",
  };
  
  return (
    <div>
      <h1 style={headStyle}>Todo List</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
