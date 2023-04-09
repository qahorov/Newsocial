import "./register.scss"
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className='register'>
      <div className="card">
        <div className="cd-form">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Register</button>
            <span>Don't you have an account?
              <Link to="/Login">  Login</Link></span>
          </form>
        </div>
      </div>
    </div >
  )
}

export default Register