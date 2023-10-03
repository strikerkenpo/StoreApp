import axios from "axios";
import { useEffect, useState } from "react";


export const CreateAccount =() =>{
    const[fname, setFname] = useState("");
    const[lname, setLname] = useState("");
    const[username, setUsername] = useState("")
    const[password, setPassword] = useState("")

    const register = async() =>{
        try{
            const response = await axios.post("http://localhost:5047/api/Reg/RegisterUser",{
                FirstName:fname,
                LastName:lname,
                UserName:username,
                Password:password
            
            });
            console.log(response)
            alert("You have been registered") 
            window.location.reload(false)
            

        }catch(error){
            alert(error, "Could not register")

        }

    }

    return(
        <div>
            <div>
                <header>
                    <h1>Welcome to online registration</h1>
                </header>
            </div>
            <div className="regContainer">
                <div className="regGrid1">
                    <label>Please Enter your First Name</label><br/>
                    <input onChange={event =>setFname(event.target.value)}/><br/>
                    <div style={{marginTop:60}}>
                        <label >Please Enter your Last Name</label><br/>
                        <input onChange={event =>setLname(event.target.value)} />
                    </div>
                   
                </div>
                <div className="regGrid2">
                    <label>Please Enter a UserName</label><br/>
                    <input onChange={event => setUsername(event.target.value)} />
                    <div style={{marginTop:60}}>
                    <label>Please Enter a Password</label><br/>
                    <input onChange={event=>setPassword(event.target.value)} />
                </div> 
                </div>
               
                             
            </div>
            <div className="regButtons">
                    <button onClick={register}>Submit</button>
                    <button style={{marginLeft:60}}>Close</button>
            </div>
        </div>
    )
}