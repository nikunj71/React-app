import React, { useState } from "react";
const Contact = () => {
  const [items, setitems] = useState({
    
    fullname: "",
    phone: "",
    email: "",
    msg: "",
  });
//   const[data,setdata]=useState([])
  const InputEvent = (e) => {
    const { name, value } = e.target;
    setitems((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
  };
  const Fromsubmit = (e) => {
      e.preventDefault()
      alert(`My name is ${items.fullname} and my mobile number is ${items.phone} and email ${items.email} and i say ${items.msg}`)
  };

  return (
    <>
      <div className="my-5">
        <h1 className="H"><center>Contact US</center></h1>
        <div className="container contact_div">
          <div className="row">
            <div className="col-md-6 col-10 mx-auto">
              <form onSubmit={Fromsubmit}>
                <div className="mb-3">
                  <label for="exampleFormControlInput1" className="form-label">
                    Fullname
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="fullname"
                    // value={items.fullname}
                    id="exampleFormControlInput1"
                    onChange={InputEvent}
                    placeholder="Fullname"
                  />
                </div>
                <div className="mb-3">
                  <label for="exampleFormControlInput1" className="form-label">
                    Phone
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="phone"
                    // value={items.fullname}
                    id="exampleFormControlInput1"
                    onChange={InputEvent}
                    placeholder="Phone"
                  />
                </div>
                <div className="mb-3">
                  <label for="exampleFormControlInput1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="fre"
                    className="form-control"
                    name="Email"
                    // value={items.email}
                    id="exampleFormControlInput1"
                    onChange={InputEvent}
                    placeholder="@gmail.com"
                  />
                </div>

                <div className="mb-3">
                  <label
                    for="exampleFormControlTextarea1"
                    className="form-label"
                  >
                    Messagesp
                  </label>
                  <textarea
                    className="form-control"
                    name="msg"
                    // value={items.msg}
                    id="exampleFormControlTextarea1"
                    onChange={InputEvent}
                    rows="3"
                  ></textarea>
                </div>
                <div className="col-12">
                  <button className="btn btn-outline-success" type="submit">
                    Submit form
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
