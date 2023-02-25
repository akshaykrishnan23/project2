import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function Aboutus() {
    const navigate = useNavigate();
    function goToHomePage(){
        navigate('/')
    }
    return <div>
        <Navbar></Navbar>
        <div className="container">
            <div className="Row">
                <div className="col-md-6 offset-md-3">
                    <h1>About Us</h1>
                    <p>
                        A simple webpage to show basic CRUD  of ReactJs.              </p>
                    <p>
                        This CRUD contains a Home page,Login page, Register, About us .
                        The main use of this CRUD is to Create Read Update and delete items as states.
                        After the login we can access to the blog page and there you can view , create and delete 
                        info as your choice.
                    </p>
                     <Link to="/" className="btn btn-info"> Go Home </Link> &nbsp;
                     <button className = "btn btn-primary" onClick={goToHomePage}>Go Home(programaticaly)</button>
                </div>
            </div>
        </div>
    </div>;
}

export default Aboutus;