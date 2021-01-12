import React from "react";
import Comman from "./Comman";
import web from "./Images/Home.jpg";
// import { NavLink } from "react-router-dom";
const Home = () => {
  return (
    <>
      <Comman
        title={"Grow Your Business With"}
        btn={"Get Start"}
        visit={"./services"}
        imgsrc={web}
      />
    </>
  );
};
export default Home;
