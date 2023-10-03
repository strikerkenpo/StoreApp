import axios from "axios";
import { useEffect, useState } from "react";
import { StoreModal } from "../Modals/ThunderModal";

export const ThunderCats =() =>{
    const logo = "./Pics/Thundercats_logo.png"
    const[figures, setFigures] = useState([])
    const[display, setDisplay] = useState(false);
    const[itemName, setItemName] = useState("");
    const[itemCost, setItemCost] = useState(0);
    const[itemPic, setItemPic] = useState(null);

    const getFigures = async ()=> {
        try{
            const response = axios.get("http://localhost:5047/api/ThunderCats/GetThunderCats")

            setFigures((await response).data);
               
            console.log(response)
            
        }catch (error){
            console.log(error)

        }
       
    }

    useEffect(()=>{
        getFigures();
        
       },[]);

    return(
        <div>
           <header>
                <h1>Shop ThunderCats</h1>
            </header>

            <div style={{textAlign:"center"}}>
                <img src={logo} height={300} width={300} alt=""/>
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
                        {figures.map((fig)=>
                            <tr key={fig.ProductID}>             
                                <td >{fig.ProductName}</td>
                                <td>{fig.Price}</td>
                                <td>
                                    <button onClick={()=>{setDisplay(true); setItemName(fig.ProductName);setItemCost(fig.Price);
                                    setItemPic(fig.Pictures)}}>Order</button>
                                    <StoreModal open={display} onClose={()=>{setDisplay(false);setItemName("");setItemCost(0);
                                    setItemPic(null)}}
                                    itemName={itemName}
                                    itemPrice={itemCost}
                                    itemPic={itemPic} 
                                    />
                                </td>
                                <td>
                                    <img src={`data:image/jpeg;base64,${fig.Pictures}`} height={90} width={110}alt=""/> 
                                </td>
                            </tr>
                            
                        )}
                    </tbody>

                </table>
            </div>
        </div>
    )
}