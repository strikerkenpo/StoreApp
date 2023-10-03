import { useContext, useState, useEffect } from "react";
import { LoginContext } from "../App";
import axios from "axios";
import { Link } from "react-router-dom";



export const Login =({open,onClose}) =>{
    const[loggedin, setLoggedIn] = useContext(LoginContext)
    const[username, setUserName] = useState("")
    const[password, setPassWord] = useState("")
    const[users, setUsers] = useState([])
    const[user,setUser] = useContext(LoginContext)

    const SignIn = async(event) =>{
        event.preventDefault();
       try
       {
        const response = axios.get(`http://localhost:5047/api/Reg/Login?username=${username}&Password=${password}`)
        setUsers((await response).data)
       

       }catch (Exception)
       {
            alert(Exception,"Invalid Username and or Password")
       }
             
       
    }
    

    useEffect(() =>{
        setTimeout(() =>{      
            if(users.length > 0){
                setLoggedIn(true)
                setUser(username)
                
            }
          },500)  
    })
   
    if(!open) return null
    return(
        <div className="logContainer">
            <form >
                <div className="modalHeader">
                <header>
                    <h2>Login Page</h2>
                </header>
                </div>
             <div className="loginInput">   
                <label>UserName</label><br/>
                <input type="Text" name="username" onChange={event =>setUserName(event.target.value)} id="Username"/><br></br>
                <label>Password</label><br/>
                <input type="Text" name="password" onChange={event=> setPassWord(event.target.value)} id="Password"/>
            </div><br/>

            <div className="modalButtons">
                <button onClick={SignIn}>Login</button>
                <button onClick={onClose} style={{marginLeft:10}} >Close</button>
            </div>

            <h4>Don't have an account?</h4>
            <Link to="/Create" onClick={onClose}>
                <h5>Create Login</h5>
            </Link>
           </form>
        </div>
    )

}