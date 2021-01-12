import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";
const Services = () => {
  return (
    <>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row">
              <center>
                <h1 className="H">Our Services</h1>
              </center>
              <br />
              {Sdata.map((val, index) => {
                return (
                  <Card
                    key={index}
                    imgsrc={val.imgsrc}
                    btnname={val.btnname}
                    title={val.title}
                    link={val.link}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Services;
