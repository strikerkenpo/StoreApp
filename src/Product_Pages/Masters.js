import { useState, useEffect } from "react";
import axios from "axios";
import { MasterModal } from "../Modals/MastersModal";

export const Masters =() =>{
    const masterpic = ["./Pics/Master_Art.png"]

    const[masters, setMasters] = useState([])
    const[display, setDisplay] = useState(false);
    const[itemName, setItemName] = useState("");
    const[itemCost, setItemCost] = useState(0);
    const[itemPic, setItemPic] = useState(null);
    
    const getMasters = async ()=> {
        try{
            const response = axios.get("http://localhost:5047/api/Masters/GetMasters")

            setMasters((await response).data);
           
            
            console.log(response)
            

        }catch (error){
            console.log(error)

        }
       
    }

    useEffect(()=>{
        getMasters();
        
       },[]);
    return(
        <div>
            <header>
                <h1>Shop Masters of the Universe</h1>               
            </header>
            <div style={{textAlign:"center"}}>
                <img src={masterpic} height={400} width={600} alt=""/>
            </div>

            <div className="itemSection">
                {masters.map((m)=>
                    <div key={m.ProductID} className="items">
                        <div className="masterpics">
                            <img src={`data:image/jpeg;base64,${m.Pictures}`} height={200} width={200} alt=""/>
                        </div>
                        <div className="item">{m.ProductName}</div>
                        <div className="item">{m.Price}</div>
                        <div className="orderbutton">
                            <button  onClick={()=>{setDisplay(true);setItemName(m.ProductName); setItemCost(m.Price);
                            setItemPic(m.Pictures)}}>Order</button>
                            <MasterModal open={display} onClose={()=>{setDisplay(false);setItemName("");setItemCost(0);
                            setItemPic(null)}}
                            itemname={itemName}
                            itemPrice={itemCost}
                            itemPic={itemPic}
                            />
                        </div>             
                    </div>
                    )}
                
            </div>
            
        </div>
    )
}