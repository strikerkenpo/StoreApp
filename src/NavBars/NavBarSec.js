import {Link} from 'react-router-dom';
import { LoginContext } from '../App';
import { useContext } from 'react';

export const NavBarSec =() =>{
    const img1 = ["./Pics/autobot2.png"]
    const[loggedin, setLoggedIn]= useContext(LoginContext);
    return(
        <div>
            <nav className='navbar'>
                <div id='rotateImage'>
                    <img src={img1} height={50} width={50} className="rotate" alt=""/>
                </div>
                <Link to="/" id='home'>HomePage</Link>
                <Link to="/About" id='about'>About</Link>
                <Link to="/Cart" id='cart'>Cart</Link>
                <Link to="/Account" id='account'>Account</Link>      
                <div id='login'>
                <button  onClick={()=>setLoggedIn(false)} id='loginbutton'>Logout</button>
                </div>
            </nav>
        </div>
    )
}