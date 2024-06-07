import { useState } from 'react'
import '../Styles/Landing.css'
import { Link } from 'react-router-dom';

function Landing() {
  const [count, setCount] = useState(0)
  
  

  return (
    <>
      <div className="banner">
            <div className="navbar">
                
            </div>

            <div className="content">
                <h1>MAKE YOUR BRIGHT FUTURE HERE!</h1>
                <p>The expert in anything was once a beginner.<br />Are you looking for</p>
                <div>
                <Link to="/login"><button type="submit" className='but'><span></span> Job seeker</button></Link>
                <Link to="/login"><button type="submit" className='but'><span></span> Employer</button></Link>
                
                </div>
            </div>
        </div>
    </>
  )
}

export default Landing
