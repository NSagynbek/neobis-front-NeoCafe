import "./ingredients.css";
import { InputAdornment, IconButton } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useState } from "react";

function Ingrediens (){

    const [measurement,setMeasurement]=useState(["ml","мл"]);
    const [isMeasure,setIsMeasure]=useState(false);

    const handleMeasurement = (measure)=>{      
        setMeasurement(measure)
        setIsMeasure(!isMeasure);
    }
    
    return (
        <div className="add-menu-new-ingredients-subContainer">
          <div className="add-menu-new-title-container">
            <label
              htmlFor="menu-ingredient-name"
              className="item-name__label"
            >  
              Наименование
            </label>
            <input id="menu-ingredient-name" type="text"/>
          </div>

         <div className="menu-new-ingredients-container">
           <label htmlFor="menu-ingredient-amount"
             className="item-name__label"
           >   
             Кол-во (в гр, мл, л, кг)
           </label>
           <input id="menu-ingredient-amount" type="text" />
         </div>

         <div className={`menu-new-ingredients-subContainer 
           ${isMeasure ? 
          ("menu-new-ingredients-subContainer-transform") : ("")}`}
         >
           <div>
             <p className="measurement-text">
               {measurement[1]||measurement[1]}
             </p>
           </div>

           <InputAdornment
             position="end"
             className="menu-new-ingredients-dropdown-icons"
             onClick={handleMeasurement} 
           >
             <IconButton>
               {isMeasure ?
                 (<KeyboardArrowUpIcon style={{ color: "#5B7E9A" }} />):                 
                 (<KeyboardArrowDownIcon style={{ color: "#5B7E9A" }} />)
               }
             </IconButton>
           </InputAdornment>
            <ul className={`menu-new-ingredients-list 
                ${isMeasure ? "" : "toggleMeasurement"}`}
            >
              <li  
                className="menu-new-ingredients-item"
                onClick={()=>handleMeasurement(["gr","гр"])}
              >
                гр
              </li>
              <li 
                className="menu-new-ingredients-item" 
                onClick={()=>handleMeasurement(["ml","мл"])}
              >
                мл
              </li>
              <li 
                  className="menu-new-ingredients-item" 
                  onClick={()=>handleMeasurement(["l","л"])}
              >
                л
              </li >
              <li 
                className="menu-new-ingredients-item"
                onClick={()=>handleMeasurement(["kg","кг"])}
              >
                кг
              </li>
            </ul>
          </div>
        </div>
    )
}

export default Ingrediens;