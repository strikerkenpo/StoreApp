import { useState,useRef } from "react"

export const GodzillaModal =({open,onClose,itemname, itemPrice,itemPic }) =>{
    const[amount, setAmount] = useState(null);
    const price = useRef();
    const item = useRef();
    if(!open) return null;
    return(
       <div className="modalContainer">
        <form className="formItems">
            <div>
                <img src={`data:image/jpeg;base64,${itemPic}`} height={300} width={300} style={{marginTop:40}}/>
            </div>
           
            <h3>{itemname}</h3>
            <label>Item Price</label>
            <input type="text" size="3" value={itemPrice}/><br/><br/>
            <label>Order Quantity</label>
            <input type="text" size="3" onChange={(event)=>setAmount(event.target.value)}/><br/><br/>
            <div className="modalButtons">
                <button>Order</button>
                <button onClick={onClose}style={{marginLeft:40}} >Close</button>
            </div>
        </form>
       </div>
       
    )
}