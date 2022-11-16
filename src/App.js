/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Container } from "@mui/system";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getRovers } from "./store/slices/roverSlice";

import Rovers from "./components/Rovers/Rovers";
import RoverDetail from "./components/RoverDetail/RoverDetail";
import Header from "./components/Header/Header";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRovers());
  },[]);

  return (
    <BrowserRouter>
      <Container maxWidth='xl'>
        <Header />
        <Routes>
          <Route path='/' exact element={<Rovers/>}/>
          <Route path='/rover/:id' element={<RoverDetail/>}/>
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
