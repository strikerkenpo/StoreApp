import { useContext } from "react"
import { LoginContext } from "../App"

export const Account =() =>{

    const user = useContext(LoginContext)
    return(
        <div style={{textAlign:"center"}}>
            <h1>Account Page</h1>
            <h3>Welcome {user}</h3>
        </div>
    )
}