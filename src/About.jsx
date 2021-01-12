import React from "react";
import Comman from "./Comman";
import web from "./Images/about.jpg"
const Home = () => {
  return (
    <>
      <Comman
        title={"Welcome this websites"}
        btn={"Contact"}
        visit={"./contact"}
        imgsrc={web}
      />
    </>
  );
};
export default Home;
