import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../Forget/Forget.css"
import { useNavigate } from 'react-router-dom';
function Forgot() {
  const nevigate=useNavigate();
  const homescreen=()=>{
    let path="/";
    nevigate(path);
  }
  return (
    <>
    <div className="container-fluid">
      <div className="sigin-wrap">
        <div className="pad-content">
          <h2 className="text-center mb-3">Forgot Password</h2>
          <form>
          <span className='mb-3'>
            <p>Forgot your password? If the account exists, we'll email you a reset link.</p>
          </span>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Email Address"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <button type="submit" className="btn mb-3" id="signin-btn">
              Send
            </button>
          </form>
        </div>
        <div className="text-center">
    <span><a onClick={()=>homescreen()} href="">Back To Login</a></span>
  </div>
      </div>
    </div>
    
  </>
  )
}

export default Forgot
