import { Navigate } from "react-router-dom";

export const Protected =({loggedin, children})=>{
    if(!loggedin){
        return <Navigate to="/" replace/>
    }
    return children
}