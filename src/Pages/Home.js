import { useState } from "react";
import { Transformers } from "../Product_Pages/TransFormers";
import { Link } from "react-router-dom";

export const HomePage =() =>{

   const thunderImage = ["./Pics/Thundercats_logo.png"];
   const transImage =["./Pics/Transformers_logo.png"];
   const masterImage =["./Pics/Masters_logo.png"];
   const shera=["./Pics/She-Ra_logo.png"]
   const zilla=["./Pics/Godzilla_logo.png"]
   const gijo=["./Pics/gijoe-logo.png"]
   const wwe=["./Pics/WWE_logo.png"]

    return(
        <div>
            <header>
                <h1>Welcome to my Online Store</h1>
                <h3>We have the largest online collection of collectable toys.</h3>
            </header>
            <div className="HomeCenter">
                <h4>We have traveled far across the Galaxy for your collection needs.</h4>
            </div>

            
            <div className="menu">
                <h3>Feel free to browse our selection Below</h3>
            </div>
             

           <div className="homegrid">
                <div id="image1">     
                    <img src={thunderImage} height={200} width={200}  alt=""/>
                   
                </div>
                <div id="menuStore">
                       
                       <li> <p>Thunder Cats</p> 
                            <Link to="/ThunderCats">             
                            <img src={thunderImage} height={60} width={60} alt=""/>
                            </Link> 
                        </li>
                       
                        <li><p>Transformers</p>
                            <Link to="/Transformers">
                            <img src={transImage} height={60} width={60} alt=""/>
                            </Link>
                        </li>
                      
                       
                        <li><p>Masters of Univers</p>
                            <Link to="/Masters">
                                <img src={masterImage} height={60} width={80}/>
                            </Link>
                        </li>
                        <li><p>She-Ra</p>
                            <Link to="/SheRa">
                                <img src={shera} height={60} width={80} />
                            </Link>
                        </li>
                        <li><p>Gi-Joe</p>
                            <Link to="/GiJoe">
                                <img src={gijo} height={60} width={80} />
                            </Link>
                        </li>
                        <li><p>GodZilla</p>
                            <Link to="/Godzilla">
                                <img src={zilla} height={60} width={80} />
                            </Link>
                        </li>
                        <li><p>WWE Wrestlers</p>
                            <Link to="/WWE">
                            <img src={wwe} height={60} width={80} />
                            </Link>
                        </li>
                        
                              
                </div>
            
               
                <div id="image2">
                    <img src={thunderImage} height={200} width={200}  alt=""/>
                    
                </div>
            
           </div>
        </div>
    )
}