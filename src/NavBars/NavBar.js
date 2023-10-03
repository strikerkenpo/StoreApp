
import { Link} from 'react-router-dom';
import { LoginContext } from '../App';
import { useContext, useState } from 'react';
import { Login } from '../Modals/Login';
export const NavBar =() =>{
    const img1 = ["./Pics/autobot2.png"]
    const[loggedin, setLoggedIn]= useContext(LoginContext);
    const[showlogin, setShowLogin]= useState(false);
    return(
        <div>
            <nav className='navbar'>
                <div id='rotateImage'>
                    <img src={img1} height={50} width={50} className="rotate" alt=""/>
                </div>

                <Link to="/"  id='home'>HomePage</Link>
                <Link to="/About"  id='about'>About</Link>
                <Link to="/Cart"  id='cart'>Cart</Link>
                <div  id='login'>
                <button onClick={()=>setShowLogin(true)} id='loginbutton'>Login</button>
                <Login open={showlogin} onClose={()=>setShowLogin(false)}/>
                </div>
                
            </nav>
        </div>
    )
}