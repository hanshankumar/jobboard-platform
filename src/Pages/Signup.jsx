import React, { useState } from 'react';

import '../Styles/Signup.css';
import { Link, useNavigate } from 'react-router-dom';

function Signup() {

    const [firstname , setfirstname] = useState('')
    const [lastname , setlastname] = useState('')
    const [email , setemail] = useState('')
    const [password,setPassword] = useState('')
    const navigate = useNavigate()

    const handlesignup = async (e) => {
        e.preventDefault();
        try {
          const response = await fetch("http://127.0.0.1:3000/signup", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({firstname,lastname,email,password}),
          });
    
          const data = await response.text();
    
          if (data == "true") {
            console.log("Login Success");
            navigate("/login");
          } else {
            console.log("Login Failed");
          }
        } catch (error) {
          console.log(error);
        }
      };


    return (
        <div className='prevent-select1'>
            <div className="header">

                
            <Link to="/login"> <button className="sign-in-button">Sign in</button></Link>
            </div>

            <div className="spcc box">
                <h1 className='hello1'>Create your Account</h1>
                <form onSubmit={handlesignup}>
                    <input
                        type="text"
                        name="name"
                        placeholder="First name"
                        value={firstname}
                        onChange={(e) => setfirstname(e.target.value)}
                        required
                    ></input>

                     <input
                        type="text"
                        name="name"
                        placeholder="Last name"
                        value={lastname}
                        onChange={(e) => setlastname(e.target.value)}
                        required
                    ></input>

                    <input
                        type="email"
                        name="email"
                        placeholder="Email address"
                        value={email}
                        onChange={(e) => setemail(e.target.value)}
                        required
                    ></input>
        
                    <input
                        type="password"
                        name="password"
                        placeholder="Create a Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    ></input>
                  

                    <button className="two a" type="submit">Sign up</button>
                </form>
                <p className="two">
                    By clicking 'Create account', you agree to our terms of service, privacy
                    policy, and cookie policy.
                </p>

            </div>
        </div>
    )
}

export default Signup;