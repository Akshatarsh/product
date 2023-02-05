import React, { useState } from "react";
import "../../App.css";

export const SignUp = () => {
  const [FName, setFname] = useState("");
  const [LName, setLname] = useState("");
  const [dob, setDOB] = useState("");
  const [gender, setGender] = useState("");
  const [phno, setPhno] = useState("");
  const [email, setEmail] = useState("");


  return (
    <>
      <p id="W">Welcome</p>
      <div className="box">
        <form action=""><div className="title">SignUp</div>
          <div className="name">
            <label htmlFor="fname">FName:</label>
            <input
              type="text"
              name="fname"
              id="fname"
              autoComplete="off"
              value={FName}
              onChange={(e) => setFname(e.target.value)}
              placeholder="first name"
              />
              <label htmlFor="lname">LName:</label>
              <input
                type="text"
                name="lname"
                id="lname"
                autoComplete="off"
                value={LName}
                onChange={(e) => setLname(e.target.value)}
                placeholder="last name"
            />
          </div>
          <div className="Dob">
            <label htmlFor="dob">DOB:</label>
            <input
              type="date"
              name="dob"
              id="dob"
              autoComplete="off"
              value={dob}
              onChange={(e) => setDOB(e.target.value)}
              placeholder=""
            />
            </div >
            <div className="gender">
            <label htmlFor="gender">Gender:</label>
            <input type="radio" value="Male" name="gender" /> Male
            <input type="radio" value="Female" name="gender" /> Female
            <input type="radio" value="Other" name="gender" /> Other
            </div>
            <div>
                <div className="PhNo">
                <label htmlFor="phno">PhNo:</label>
                <input
                    type="text"
                    name="phno"
                    id="phno"
                    autoComplete="off"
                    value={phno}
                    onChange={(e) => setPhno(e.target.value)}
                    placeholder="phone number"></input>
                </div>
              </div>
              <div>
                <div className="email">
                <label htmlFor="email">Email:</label>
                <input
                    type="text"
                    name="email"
                    id="email"
                    autoComplete="off"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email"></input>
                </div>
            </div>
            <div>
              <button id="ok">SignUp</button>
              <button id="cancel">Cancel</button>
            </div>
            </form>
            </div>
          
    </>
    
      
  );
};
