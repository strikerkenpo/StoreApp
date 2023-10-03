import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { TransModal } from "../Modals/TransModal";


export const Transformers = () =>{
    const[transfomers, setTransformers] = useState([])
    const[display, setDisplay] = useState(false);
    const[itemName, setItemName] = useState("");
    const[itemCost, setItemCost] = useState(0);
    const[itemPic, setItemPic] = useState(null);
   

    const logo = ["./Pics/Transformers_Logo2.png"]
    
    const getTrans = async ()=> {
        try{
            const response = axios.get("http://localhost:5047/api/Transformer/GetTransformers")

            setTransformers((await response).data);
               
            console.log(response)
            
        }catch (error){
            console.log(error)

        }
       
    }

    useEffect(()=>{
        getTrans();
        
       },[]);

   
    return(
        <div>
            <header>
                <h1>Shop Transformers</h1>
                
            </header>
            <div style={{textAlign:"center"}}>
                <img src={logo} height={200} width={600} alt=""/>
            </div><br/>

        <div className="tableContainer">
        <table>
            <thead >
                <tr >
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Order Item</th>
                    <th>Pics</th>
                </tr>
            </thead>
            <tbody>
                {transfomers.map((tr)=>
                    <tr key={tr.ProductID}>             
                        <td >{tr.ProductName}</td>
                        <td>{tr.Price}</td>
                        <td>
                            <button onClick={()=>{setDisplay(true); setItemName(tr.ProductName);setItemCost(tr.Price);
                            setItemPic(tr.Pictures)}}>Order</button>
                            <TransModal open={display} onClose={()=>{setDisplay(false);setItemName("");setItemCost(0);
                            setItemPic(null)}}
                            itemName={itemName}
                            itemPrice={itemCost}
                            itemPic={itemPic} 
                            />
                        </td>
                        <td>
                            <img src={`data:image/jpeg;base64,${tr.Pictures}`} height={90} width={110}alt=""/> 
                        </td>
                    </tr>
                    
                )}
            </tbody>

        </table>
        </div>
        </div>
       
    )
}